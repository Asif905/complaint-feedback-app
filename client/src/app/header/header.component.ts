import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, 
    private route: ActivatedRoute,
    private appService: AppService) { }

    loginstatus = this.appService.getLoggedInStatus();

  ngOnInit() {
  }

  onSignup(){
    this.router.navigate(['signup'],{relativeTo: this.route});
  }

  onLogin(){
    this.router.navigate(['login'],{relativeTo: this.route});
  }

  onLogout(){
    this.router.navigate(['login'],{relativeTo: this.route});
  }

}
