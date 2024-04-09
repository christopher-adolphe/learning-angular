import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders: string[];
  signUpForm: FormGroup;
  username: FormControl;
  email: FormControl;
  gender: FormControl;
  subscriberList: {username: string; email: string; gender: string; hobbies?: string[]}[];
  forbiddenNameList = ['Chris', 'Jane'];

  constructor() {}
  
  ngOnInit() {
    this.genders = ['female', 'male', 'others'];
    this.onInitSignUpForm();
    this.subscriberList = [];
  }

  onInitSignUpForm() {
    this.username = new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]);
    this.email = new FormControl(null, [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")], this.forbiddenEmail);
    this.gender = new FormControl('female', Validators.required);
    this.signUpForm = new FormGroup({
      userData: new FormGroup({
        username: this.username,
        email: this.email,
      }),
      gender: this.gender,
      hobbies: new FormArray([])
    });

    // this.signUpForm.valueChanges.subscribe(value => console.log(value));
    // this.signUpForm.statusChanges.subscribe(status => console.log(status));
  }

  get hobbies() {
    return this.signUpForm.get('hobbies') as FormArray;
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);

    this.hobbies.push(control);
  }

  onRemoveHobby(index: number) {
    this.hobbies.removeAt(index);
  }

  onSubmit() {
    const subscriber = {
      username: this.signUpForm.value.userData.username,
      email: this.signUpForm.value.userData.email,
      gender: this.signUpForm.value.gender,
      hobbies: this.signUpForm.value.hobbies
    }
    this.subscriberList.push(subscriber);
    // subscriber.hobbies.forEach((hobby: string, index: number) => this.onRemoveHobby(index));
    this.signUpForm.reset();
    this.onInitSignUpForm();
    // console.log('subscriber: ', subscriber)
  }

  forbiddenNames(control: FormControl): { [key: string]: boolean } | null {
    if (this.forbiddenNameList.indexOf(control.value) !== -1) {
      return { nameIsForbidden: true };
    }

    return null;
  }

  forbiddenEmail(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          resolve({emailIsForbidden: true})
        } else {
          resolve(null);
        }
      }, 2000);
    });

    return promise;
  }

}
