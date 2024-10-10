import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/pages/home.component';
import { LoginComponent } from './features/login/pages/login/login.component';
import { RegisterComponent } from './features/login/pages/register/register.component';


export const routes: Routes = [
    { path: '', title:"Home | Lorem", component: HomeComponent },
    { path: 'login', title:"Login | Lorem", component: LoginComponent },
    { path: 'register', title:"Register | Lorem", component: RegisterComponent}
];
