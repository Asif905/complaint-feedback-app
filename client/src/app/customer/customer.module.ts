import { NgModule } from "@angular/core";
import { CustomerComponent } from "./customer.component";
import { NewComplaintComponent } from "./new-complaint/new-complaint.component";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { CustomerRoutingModule } from "./customer-routing.module";

@NgModule({
    declarations: [
        CustomerComponent,
        NewComplaintComponent
    ],
    imports: [
        FormsModule,
        CommonModule,
        CustomerRoutingModule
    ]
})
export class CustomerModule {

}