import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app.routing.module';
import { LoginComponent } from './header/login/login.component';
import { SignupComponent } from './header/signup/signup.component';
import { CustomerComponent } from './customer/customer.component';
import { AgentComponent } from './agent/agent.component';
import { NewComplaintComponent } from './customer/new-complaint/new-complaint.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { EditComplaintComponent } from './agent/edit-complaint/edit-complaint.component';
import { AppService } from './app.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    SignupComponent,
    CustomerComponent,
    AgentComponent,
    NewComplaintComponent,
    EditComplaintComponent
  ],
  imports: [
    NgbModule.forRoot(),
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
