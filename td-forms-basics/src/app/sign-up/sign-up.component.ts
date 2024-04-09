import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  @ViewChild('signUpForm', {static: false}) signUpForm: NgForm;
  subscriptionTypes: string[];
  signUpData = {
    email: '',
    password: '',
    subscription: ''
  };
  isFormSubmitted: boolean;
  usersList: {}[];

  constructor() { }

  ngOnInit(): void {
    this.subscriptionTypes = ['Basics', 'Advanced', 'Pro'];
    this.isFormSubmitted = false;
    this.usersList = [];
  }

  onSubmit() {
    this.signUpData = {
      email: this.signUpForm.value.email,
      password: this.signUpForm.value.password,
      subscription: this.signUpForm.value.subscription
    };
    this.usersList.push(this.signUpData);
    this.isFormSubmitted = true;
    this.signUpForm.reset();
  }

  onShowForm() {
    this.isFormSubmitted = false;
  }

}
