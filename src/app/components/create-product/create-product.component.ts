import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit{
  form = new FormGroup({
    title: new FormControl<string>('', [Validators.required, Validators.minLength(3)])
  });
  
  constructor() {}

  ngOnInit(): void {}

  submit() {
    console.log(this.form.value);
  }

  getTitle() {
    return this.form.controls.title as FormControl;
  }
}
