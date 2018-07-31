import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private httpClient: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  onSignup(form: NgForm) {
    const email = form.value.email;
    const mobileno = form.value.mobileno;
    const password = form.value.password;
    const accountType = form.value.accountType;

    this.httpClient.post('http://localhost:8000/users/signup',{
      email: email,
      mobile: mobileno,
      password: password,
      accountType: accountType
    }).subscribe(res => {
      if(res.success == true){
        alert('User successfully registered');
        this.router.navigate(['/login'],{relativeTo: this.route});
      }
      else{
        alert('User already registered..!!!');
      }
    })
    form.reset();
  }

}
