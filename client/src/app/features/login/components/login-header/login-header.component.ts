import { booleanAttribute, Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'login-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './login-header.component.html',
  styleUrl: './login-header.component.css'
})
export class LoginHeaderComponent {
  @Input({transform: booleanAttribute}) isRegister: boolean = false;
}
