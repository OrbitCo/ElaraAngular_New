import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {NbLoginComponent} from '@nebular/auth';
import {authService} from "@pages/service/authService";

@Component({
    selector: 'ngx-member-login',
    templateUrl: './member-login.component.html',
    styleUrls: ['./member-login.component.scss']
})
export class MemberLoginComponent extends NbLoginComponent implements OnInit {

    memberLogin: FormGroup;

    constructor(private formBuilder: FormBuilder,
                public router: Router,
                public authservice: authService) {
        super(null, null, null, router);
    }

    ngOnInit() {
        this.memberLogin = this.formBuilder.group({
            accountNumber: ['', Validators.required],
            accessId: ['', Validators.required],
        });
    }

    login() {
        this.submitted = true;
        if (this.memberLogin.invalid) {
            return;
        } else {
            localStorage.setItem('userType', 'member');
            const MemberValue = {
                'accountnumber': this.memberLogin.value.accountNumber,
                'cardid': this.memberLogin.value.accessId,
            };
            localStorage.setItem('member', JSON.stringify(MemberValue));
            this.submitted = false;
            this.memberLogin.reset();
            this.authservice.memberSignIn(MemberValue).subscribe((response: any) => {
                if(response.error) {
                    alert(response.error);
                } else {
                    this.router.navigate(['/pages/dashboard']);
                }
            });
        }
    }

}
