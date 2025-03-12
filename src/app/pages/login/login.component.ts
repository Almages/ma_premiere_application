import {Component, inject, signal} from '@angular/core';
import {AuthenticationService} from "../../core/security/authentication.service";
import {FormsModule, NgForm} from "@angular/forms";
import {NgOptimizedImage} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  imports: [
    FormsModule,
    NgOptimizedImage
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  message = signal('');
  authenticationService = inject(AuthenticationService);
  router = inject(Router);

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.authenticationService.login(form.value.email, form.value.password);
      if (!this.authenticationService.isAuthenticated)
        this.message.set("Erreur login/password")
      else
        this.router.navigate(['/articles/create']);//.then();
    }
  }
}
