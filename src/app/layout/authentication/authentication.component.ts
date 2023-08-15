import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/core/models/User';
import { UserPipe } from 'src/app/core/pipes/user.pipe';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss'],
  providers: [UserPipe]
})
export class AuthenticationComponent {

  protected isLoginClick: boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private userPipe: UserPipe) {

  }

  loginForm = this.formBuilder.group({
    logEmail: this.formBuilder.control(''),
    logPassword: this.formBuilder.control('')
  })

  registerForm = this.formBuilder.group({
    regEmail: this.formBuilder.control(''),
    resPassword: this.formBuilder.control(''),
    regFullName: this.formBuilder.control('')
  })


  async login() {
    this.isLoginClick = true;
    await this.authService.login(this.loginForm.value).then(response => {
      const rawUser: any = response;
      localStorage.setItem("jwtToken", rawUser.jwtToken)

      const user = this.userPipe.apiResToUser(rawUser)
      localStorage.setItem('user', JSON.stringify(user))
      this.router.navigate(['/user/home'])
      this.isLoginClick = false;
    })
      .catch(err => {
        console.log(err.error.message)
      })
  }
}
