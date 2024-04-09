import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // @ViewChild('signUpForm') signUpForm: NgForm;
  // defaultQuestion = 'pet';
  // secretAnswer = '';
  // genders = ['Male', 'Female', 'Other'];
  // user = {
  //   username: '',
  //   email: '',
  //   secretQuestion: '',
  //   secretAnswer: '',
  //   gender: ''
  // };
  // isFormSubmitted = false;
  
  // suggestUserName() {
  //   const suggestedName = 'Superuser';

  //   // Using #setValue to set the values of all form controls
  //   // this.signUpForm.setValue({
  //   //   userData: {
  //   //     username: suggestedName,
  //   //     email: ''
  //   //   },
  //   //   secretQuestion: 'pet',
  //   //   secretAnswer: '',
  //   //   gender: ''
  //   // });

  //   // Using #patchValue() to set the value of a specific form control
  //   this.signUpForm.form.patchValue({
  //     userData: {
  //       username: suggestedName
  //     }
  //   });
  // }

  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }

  // onSubmit() {
  //   // console.log(this.signUpForm);
  //   this.isFormSubmitted = true;
  //   this.user = {
  //     username: this.signUpForm.value.userData.username,
  //     email: this.signUpForm.value.userData.email,
  //     secretQuestion: this.signUpForm.value.secretQuestion,
  //     secretAnswer: this.signUpForm.value.secretAnswer,
  //     gender: this.signUpForm.value.gender
  //   };
  //   this.signUpForm.reset();
  // }

}
