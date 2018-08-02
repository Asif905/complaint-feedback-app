import { NgModule } from "@angular/core";
import { Routes, RouterModule, Router } from "@angular/router";
import { CustomerComponent } from "./customer.component";

const customerRoutes: Routes = [
    { path: 'customer', component: CustomerComponent }
]

@NgModule({
    imports: [RouterModule.forChild(customerRoutes)],
    exports: [RouterModule]
})
export class CustomerRoutingModule {

}