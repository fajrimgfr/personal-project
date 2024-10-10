import { Component } from '@angular/core';
import { LoginHeaderComponent } from '../../components/login-header/login-header.component';
import { LoginFormComponent } from '../../components/login-form/login-form.component';
import { LoginCarouselComponent } from '../../components/login-carousel/login-carousel.component';

@Component({
  selector: 'login',
  standalone: true,
  imports: [LoginHeaderComponent, LoginFormComponent, LoginCarouselComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
