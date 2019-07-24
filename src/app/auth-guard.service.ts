import { Injectable } from '@angular/core'
import { Router, CanActivate } from '@angular/router'
import { AuthenticationService, UserDetails } from './authentication.service'

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(private auth: AuthenticationService, private router: Router) {}
details: UserDetails
  canActivate() {
    if (!this.auth.isLoggedIn() ) {
      this.router.navigateByUrl('/')
      return false
    }
      this.details = this.auth.getUserDetails()

if (this.auth.isLoggedIn() && this.details['identity']['prioridad'] == "1") {

  return true
}
else{
  this.router.navigateByUrl('/')
  return false
}

  }
}
