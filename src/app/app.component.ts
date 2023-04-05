import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
  simpleForm!: FormGroup

  formSubmit = false;

  formData: any = []

  constructor(private fb: FormBuilder){}

  ngOnInit(): void {
    this.simpleForm = this.fb.group({
      userName: ['', RxwebValidators.required()],
      userEmail: ['', [RxwebValidators.required(), RxwebValidators.email()]],
      userDob: ['', RxwebValidators.required()],
      userGender: ['', RxwebValidators.required()]
    });

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
  this.formSubmit = true;
  if(this.simpleForm.valid){
    return;
  }
}
onsubmit(){
    this.submitRequest();
    if(this.sfvalid){
      this.formData.push(this.sfv);
      this.simpleForm.reset();
    }
    else{console.log("Form Is invalid", this.sfc)}
    console.log(this.formData)

  }

}
