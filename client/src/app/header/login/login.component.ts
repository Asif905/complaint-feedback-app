import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,
    private route: ActivatedRoute, 
    private httpClient: HttpClient,
    private appService: AppService) { }

  loggedInflag: boolean = false;

  ngOnInit() {
  }

  onSignin(form:NgForm){
    const email = form.value.email;
    const password = form.value.password;

    this.httpClient.post('http://localhost:8000/users/login',{
      email: email,
      password: password
    }).subscribe(res => {
      if(res.userData.accountType == 'customer'){
        this.router.navigate(['/customer'],{relativeTo: this.route});
        localStorage.setItem('userID',res.userId);
      }else{
        this.router.navigate(['/agent'],{relativeTo: this.route});
        localStorage.setItem('userID',res.userId);
      }
      this.appService.setLoggedInStatus(true);
    });
  }
}
