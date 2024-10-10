import { NgIf } from '@angular/common';
import { booleanAttribute, Component, input, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'login-form',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {
  @Input({transform: booleanAttribute}) isRegister : boolean = false;
  fName = "";
  lName = "";
  email = "";
  password = "";
  confirmPassword = "";
  remember = "";
}
