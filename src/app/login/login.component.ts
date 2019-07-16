import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  formSubmitted: boolean;

  constructor(
    private ds: DataService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {}

  clearFields() {
    const vm = this;
    vm.username = '';
    vm.password = '';
  }

  onLogin(flag) {
    const vm = this;
    vm.formSubmitted = true;
    if (flag) {
      const reqObj = {};
      reqObj['username'] = vm.username;
      reqObj['password'] = vm.password;
      vm.ds.postData('/auth', reqObj).subscribe(response => {
        if (response && response.error) {
          vm.toastr.error(response.message);
        } else {
          vm.router.navigate(['/rule-setup']);
        }
      }, error => {
        vm.toastr.error('Please contact admin, Serve issue');
      });
    } else {
      vm.toastr.error('Provide both username and password');
    }
  }

}
