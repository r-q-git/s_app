import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
})
export class ProfileComponent {

  isDropDownHidden = true;
  onProfileClick() {
    this.isDropDownHidden = !this.isDropDownHidden;
  }

  user: any;
  constructor(private loginService: LoginService) {
    this.loginService.user$.subscribe((res) => {
      this.user = res;
    });
  }
}
