import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  userName = '';
  password = '';
  user = 'No users found';
  isEnable= false;
  getPassword() {
    return this.password;
  }
  constructor() {
    /*setTimeout(() => {
      this.isEnable = true;
    }, 2000);*/
  }
  checkUser(event: any) {
   /* this.user = event.target.user;*/
     console.log(this.user + '22222222222');
    if (this.userName === 'harihara') {
      this.user = 'User ' + this.userName + ' found and logging in ...!';
      this.userName = '';
      this.checkIsUserNameEmpty(event);
    }else {
      this.user = 'User ' + this.userName + '  not found ...!';
    }
  }
  checkIsUserNameEmpty(event: any) {
    console.log( 'test' );
    if (this.userName !== '') {
      this.isEnable = true;
    }else {
      this.isEnable = false;
    }
  }
}
@Component({
  selector: 'app-warning',
  template: `<h3>Warning !</h3>`,
  styles: [`h3{
}`]
})
export class WarningComponent {
}

@Component( {
  selector: 'app-success',
  template: `<h3>Success !</h3>`,
    styles: [`h3{
          
          
          }`]
})
export class SuccessComponent {
}
