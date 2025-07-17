import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { FillForm } from '../services/fill-form';

@Component({
  selector: 'app-transcribe',
  imports: [ReactiveFormsModule],
  templateUrl: './transcribe.html',
  styleUrl: './transcribe.css'
})
export class PageTwo {
  userForm: FormGroup;

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
