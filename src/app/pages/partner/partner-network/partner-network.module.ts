import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PartnerNetworkComponent} from './partner-network.component';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [{
    path: '',
    component: PartnerNetworkComponent
}];

@NgModule({
    declarations: [PartnerNetworkComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class PartnerNetworkModule {
}
