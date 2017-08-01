import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  userName= 'harihara';
  password= 'harahara';

  getPassword() {
    return this.password;
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
