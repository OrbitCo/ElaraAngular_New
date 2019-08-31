import {ExtraOptions, RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {
    NbAuthComponent,
    NbLoginComponent,
    NbLogoutComponent,
    NbRegisterComponent,
    NbRequestPasswordComponent,
    NbResetPasswordComponent,
} from '@nebular/auth';
import {LoginComponent} from './pages/login/login.component';
import {RegistrationComponent} from './pages/registration/registration.component';
import {HomeComponent} from './pages/home/home.component';
import {MemberLoginComponent} from "@pages/member-login/member-login.component";
import {PartnerLoginComponent} from "@pages/partner-login/partner-login.component";

const routes: Routes = [
    {
        path: 'pages',
        loadChildren: () => import('app/pages/pages.module')
            .then(m => m.PagesModule),
    },
    {
        path: 'home',
        component: HomeComponent,
    },
    {
        path: 'auth',
        component: NbAuthComponent,
        children: [
            {
                path: '',
                component: LoginComponent,
            },
            {
                path: 'login',
                component: LoginComponent,
            },
            {
                path: 'member-login',
                component: MemberLoginComponent,
            },
            {
                path: 'partner-login',
                component: PartnerLoginComponent,
            },
            {
                path: 'register',
                component: RegistrationComponent,
            },
            {
                path: 'logout',
                component: NbLogoutComponent,
            },
            {
                path: 'request-password',
                component: NbRequestPasswordComponent,
            },
            {
                path: 'reset-password',
                component: NbResetPasswordComponent,
            },
        ],
    },
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: '**', redirectTo: ''},
];

const config: ExtraOptions = {
    useHash: false,
};

@NgModule({
    imports: [RouterModule.forRoot(routes, config)],
    exports: [RouterModule],
})
export class AppRoutingModule {
}
