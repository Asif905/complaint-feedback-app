import { HttpClient } from "@angular/common/http";
import { Router, ActivatedRoute } from "@angular/router";
import { Injectable } from "../../../node_modules/@angular/core";

@Injectable()
export class AuthService {

    status: boolean;

    constructor(private httpClient: HttpClient,
        private router: Router,
        private route: ActivatedRoute) { }

    signInUser(email: string, password: string) {
        this.httpClient.post('http://localhost:8000/users/login', {
            email: email,
            password: password
        }).subscribe(res => {
            if (res.success == true) {
                if (res.userData.accountType == 'customer') {
                    this.router.navigate(['/customer'], { relativeTo: this.route });
                } else {
                    this.router.navigate(['/agent'], { relativeTo: this.route });
                }
                localStorage.setItem('userID', res.userId);
                localStorage.setItem('loggedInStatus', 'true');
            }
            else {
                alert('Please enter valid username and password');
            }
        });
    }

    signUpUser(email: string, mobileno: number, password: string, accountType: string) {
        this.httpClient.post('http://localhost:8000/users/signup', {
            email: email,
            mobile: mobileno,
            password: password,
            accountType: accountType
        }).subscribe(res => {
            if (res.success == true) {
                alert('User successfully registered');
                this.router.navigate(['/login'], { relativeTo: this.route });
            }
            else {
                alert('User already registered..!!!');
            }
        })
    }

    logOutUser() {
        localStorage.setItem('loggedInStatus', 'false');
        this.router.navigate(['login'], { relativeTo: this.route });
    }

    isAuthenticated() {
        const userId = localStorage.getItem('loggedInStatus');
        return userId != 'false';
    }
}