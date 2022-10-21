import { AuthService } from './../../auth/auth/auth.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  title = 'pokemon-teams';
  isAuthenticated = false;
  private userSub: Subscription;

  ngOnInit() {
    this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !user ? false : true;
      
    this.authService.autoLogin();

    });
  }

  constructor(private authService: AuthService) {

  }
 
  ngOnDestroy() {
    this.userSub.unsubscribe();
  }

  onLogout() {
    this.authService.logout()
  }

}
