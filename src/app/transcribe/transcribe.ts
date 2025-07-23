import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { FillForm } from '../services/fill-form';
import { AdvancedDropdown } from "../advanced-dropdown/advanced-dropdown";
import { US_STATES } from '../local-data-pool';

@Component({
  selector: 'app-transcribe',
  imports: [ReactiveFormsModule, AdvancedDropdown],
  templateUrl: './transcribe.html',
  styleUrl: './transcribe.css'
})
export class Transcribe {
  userForm: FormGroup;
  states = US_STATES;
  filteredStates = US_STATES

  @ViewChild('notesBox') notesBox!: ElementRef<HTMLTextAreaElement>;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private fillForm: FillForm,
  ) {
    this.userForm = this.formBuilder.group({
      firstName: [''],
      middleName: [''],
      lastName: [''],
      street: [''],
      city: [''],
      state: [''],
      zip: [''],
      birthday: ['']
    });

    this.fillForm.fieldUpdate$.subscribe(update => {
      if (update) {
        if (update.field === 'notes') {
          if (this.notesBox) {
            this.notesBox.nativeElement.value = update.value;
            console.log(`Set notes to: "${update.value}"`)
          }
        } else {
          const control = this.userForm.get(update.field);
          if (control) {
            control.setValue(update.value);
            console.log(`Set ${update.field} to "${update.value}"`);
          }
        }
      }
    });
  }

  ngOnInit() {
    this.userForm.get('state')?.valueChanges.subscribe((input: string) => {
      const term = input?.trim().toLowerCase();
      if (!term) {
        this.filteredStates = this.states;
        return;
      }

      this.filteredStates = this.states.filter(s => s.name.toLowerCase().includes(term) 
        ||s.abbreviation.toLowerCase().includes(term)
      );

      const exactMatch = this.states.find(
        s =>
          s.name.toLowerCase() === term ||
          s.abbreviation.toLowerCase() === term
      );
      
      if (exactMatch) {
        this.userForm.get('state')?.setValue(exactMatch.abbreviation, {
          emitEvent: false
        });
      }
    });
  }

  selectState(stateAbbr: string) {
    this.userForm.get('state')?.setValue(stateAbbr);
    this.filteredStates = [];
  }

  navigatePages(pageName: string): void {
    if (pageName === 'transcribe') {
      this.router.navigate(['/transcribe'])
    } else if (pageName === 'home') {
      this.router.navigate(['/'])
    }
  }

  setFieldValue(field: keyof typeof this.userForm.controls & string, value: string) {
    this.userForm.get(field)?.setValue(value);
  }
}
