import { Component } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isExpand = true;
  routeName: string;
  isLogin: boolean;

  constructor(private router: Router,
    private route: ActivatedRoute) {
      const vm = this;
      vm.router.events.forEach((event) => {
        if (event instanceof NavigationEnd) {
          vm.isLogin = false;
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
