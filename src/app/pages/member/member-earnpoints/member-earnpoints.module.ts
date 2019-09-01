import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes, RouterModule} from "@angular/router";
import {MemberEarnpointsComponent} from "./member-earnpoints.component";
import {NbCardModule} from '@nebular/theme';
import {Ng2SmartTableModule} from "ng2-smart-table";

const routes: Routes = [{
    path: '',
    component: MemberEarnpointsComponent
}];

@NgModule({
    declarations: [MemberEarnpointsComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        NbCardModule,
        Ng2SmartTableModule
    ],
    exports: [RouterModule]
})
export class MemberEarnpointsModule {
}
