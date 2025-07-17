import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FillForm {
  private fieldUpdateSubject = new BehaviorSubject<{ field: string, value: string } | null>(null);
  fieldUpdate$ = this.fieldUpdateSubject.asObservable();

  updateField(field: string, value: string) {
    this.fieldUpdateSubject.next({ field, value });
  }

  clear() {
    this.fieldUpdateSubject.next(null);
  }
}
