import { Component, inject } from '@angular/core';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  private readonly loginService = inject(LoginService)

  onGetProduct() {
    return this.loginService.getUserInfo().subscribe();
  }
}
