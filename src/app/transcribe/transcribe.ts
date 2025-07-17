import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transcribe',
  imports: [ReactiveFormsModule],
  templateUrl: './transcribe.html',
  styleUrl: './transcribe.css'
})
export class PageTwo {
  userForm: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder
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
  }

  navigatePages(pageName: string): void {
    if (pageName === 'transcribe') {
      this.router.navigate(['/transcribe'])
    } else if (pageName === 'home') {
      this.router.navigate(['/'])
    }
  }
}
