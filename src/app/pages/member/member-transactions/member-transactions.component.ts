import {Component, OnInit} from '@angular/core';
import {DatePipe} from "@angular/common";
import {authService} from "@pages/service/authService";
import {LocalDataSource} from "ng2-smart-table";

@Component({
    selector: 'ngx-member-transactions',
    templateUrl: './member-transactions.component.html',
    styleUrls: ['./member-transactions.component.scss']
})
export class MemberTransactionsComponent implements OnInit {

    memberTransaction;
    datePipeEn: DatePipe = new DatePipe('en-US');
    source: LocalDataSource = new LocalDataSource();

    settings = {
        actions: { add: false, edit: false, delete: false, },
        columns: {
            member: {
                title: 'Member',
                type: 'string',
            },
            partner: {
                title: 'Partner',
                type: 'string',
            },
            points: {
                title: 'Points',
                type: 'string',
            },
            timestamp: {
                title: 'Date',
                type: 'date',
                valuePrepareFunction: (date) => {
                    return date ? this.datePipeEn.transform(date, 'dd-MM-yyyy hh:mm') : null;
                },
            }
        },
    };

    constructor(private crudService: authService) {
        this.memberTransaction = JSON.parse(localStorage.getItem('member'));
        this.crudService.postRequest("memberData", this.memberTransaction).subscribe((result: any) => {
            if (result.earnPointsResult) {
                this.source.load(result.earnPointsResult);
            }
        });
    }

    ngOnInit() {
    }

}
