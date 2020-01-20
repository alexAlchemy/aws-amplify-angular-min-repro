import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  title = 'app-test';
  usernameAttributes: 'My user name';
  signUpConfig = {
    header: 'My Customized Sign Up',
    hideAllDefaults: true,
    defaultCountryCode: '1',
    signUpFields: [
      {
        label: 'My user name',
        key: 'username',
        required: true,
        displayOrder: 1,
        type: 'string',
      },
      {
        label: 'Password',
        key: 'password',
        required: true,
        displayOrder: 2,
        type: 'password'
      },
      {
        label: 'PhoneNumber',
        key: 'phone_number',
        required: true,
        displayOrder: 3,
        type: 'string'
      },
      {
        label: 'Custom Attribute',
        key: 'custom_attr',
        required: false,
        displayOrder: 4,
        type: 'string',
        custom: true
      }
    ]
  }
}
