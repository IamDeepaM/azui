import { Component } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isExpand = true;
  routeName: string;
  isLogin: boolean;
  isAdmin: boolean;
  user: any;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private appService: AppService) {
      const vm = this;
      vm.router.events.forEach((event) => {
        if (event instanceof NavigationEnd) {
          vm.isLogin = false;
          vm.user = vm.appService.userObj;
          vm.isAdmin = vm.user && vm.user.isAdmin;
          let currentRoute = this.route.root;
          if (currentRoute.children[0] !== undefined) {
            currentRoute = currentRoute.children[0];
          }
          if (currentRoute.snapshot.data) {
            vm.isLogin = currentRoute.snapshot.data.name === 'login';
            vm.routeName = currentRoute.snapshot.data.name;
          }
        }
      });
    }

  goHome() {
    const vm = this;
    vm.router.navigate(['/']);
  }

  navigateTo(path) {
    const vm = this;
    vm.router.navigate([path]);
  }
}
