import { AuthService } from './auth/auth/auth.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
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
