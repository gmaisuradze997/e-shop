import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'admin-categories-form',
  templateUrl: './categories-form.component.html',
  styleUrls: ['./categories-form.component.scss']
})
export class CategoriesFormComponent implements OnInit {

  categoryForm!: FormGroup;
  @Output() emitForm: EventEmitter<FormGroup> =   new EventEmitter();
  @Output() cancelForm: EventEmitter<boolean> =   new EventEmitter();
  constructor(private fb: FormBuilder) { }


  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.categoryForm = this.fb.group({
      name: [null, Validators.required],
      icon: [null, Validators.required],
    });
  }

  onSubmit() {
    this.emitForm.emit(this.categoryForm);
  }

  onCancel() {
    const display = false;
    this.cancelForm.emit(display);
  }
}
