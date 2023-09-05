// import { Component } from '@angular/core';
// import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

// @Component({
//   selector: 'app-home',
//   templateUrl: 'home.page.html',
//   styleUrls: ['home.page.scss'],
// })
// export class HomePage {
//   form!: FormGroup;
//   result: '' = "";

//   constructor(private fb: FormBuilder) {}
//   ngOnInit() {
//     this.createForm();
//   }
//   createForm() {
// details: this.fb.array([this.detailsForm()])
//   }

//   detailsForm(){
//     return this.fb.group({
//       name:new FormControl(),
//       email:new FormControl(),
//       age:new FormControl()
//     });
//   }
//   get details(){
//     return this.form.get("details") as FormArray;
//   }
//   onSave(){
//     console.log(this.form.getRawValue())
//     this.result = this.form.getRawValue();
//   }
//   addNewContacts(){
//     this.details.push(this.detailsForm());
//   }

//   removeContact(i:Required<number>){
//     this.details.removeAt(i);
//   }
// }

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  form:any= FormGroup;
  result: any = { details: [] };

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      details: this.fb.array([this.detailsForm()]),
    });
  }


  detailsForm() {
    return this.fb.group({
      name: [''],
      email: [''],
      age: [''],
    });
  }

  get details() {
    return this.form.get('details') as FormArray;
  }

  onSave() {
    console.log(this.form.getRawValue());
    this.result = this.form.getRawValue();
  }

  addNewContacts() {
    this.details.push(this.detailsForm());
  }

  removeContact(i: number) {
    this.details.removeAt(i);
  }
}

