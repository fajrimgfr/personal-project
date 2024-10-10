import { Component } from '@angular/core';
import { LoginHeaderComponent } from '../../components/login-header/login-header.component';
import { LoginCarouselComponent } from '../../components/login-carousel/login-carousel.component';
import { LoginFormComponent } from '../../components/login-form/login-form.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [LoginHeaderComponent, LoginCarouselComponent, LoginFormComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

}
