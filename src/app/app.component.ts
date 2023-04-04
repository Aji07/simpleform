import { Component, OnInit} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { RxwebValidators } from '@rxweb/reactive-form-validators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'formdesign';
  index = 0
// Form Group
  simpleForm = this.fb.group({
    userName: ['', RxwebValidators.required()],
    userEmail: ['', [RxwebValidators.required(), RxwebValidators.email()]],
    userDob: ['', RxwebValidators.required()],
    userGender: ['', RxwebValidators.required()]
  });

  formSubmit = false;

  formData: any = []

  constructor(private fb: FormBuilder){}

  ngOnInit(): void {

  }
  get sfc() {
    return this.simpleForm.controls;
  }
  get sfv() {
    return this.simpleForm.value;
  }
  get sfvalid() {
    return this.simpleForm.valid;
  }

submitRequest(){
  if(this.simpleForm.valid){
    this.formSubmit = true;
    console.log(this.simpleForm.valid)
    return;
  }
}
onsubmit(){
    this.submitRequest();
    if(this.sfvalid){
      // console.log(this.sfv);
      this.formData.push(this.sfv);
      this.simpleForm.reset();
    }
    else{console.log("Form Is invalid", this.sfc)}
    console.log(this.formData)

  }

}
