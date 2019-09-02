import {Component, OnInit} from '@angular/core';
import {LocalDataSource} from "ng2-smart-table";

@Component({
    selector: 'ngx-member-dashboard',
    templateUrl: './member-dashboard.component.html',
    styleUrls: ['./member-dashboard.component.scss']
})
export class MemberDashboardComponent implements OnInit {

    source: LocalDataSource = new LocalDataSource();

    settings = {
        actions: {add: false, edit: false, delete: false},
        columns: {
            partner: {
                title: 'Member',
                type: 'string',
                width: '20%'
            },
            partnerid: {
                title: 'PartnerID',
                type: 'string',
                width: '20%'
            },
            token: {
                title: 'Token',
                type: 'number',
                width: '20%'
            },
            category: {
                title: 'Category',
                type: 'number',
                width: '20%'
            },
            points: {
                title: 'Points',
                type: 'number',
                width: '20%',
            }
        },
        noDataMessage: "No data found"
    };

    data = [
        {
            partner: 'Elara',
            partnerid: '010101',
            token: 'ELRA',
            category: 'Universal',
            points: '129987'
        },{
            partner: 'Hilton',
            partnerid: '222222',
            token: 'HLTN',
            category: 'Hotel',
            points: '23700'
        },{
            partner: 'Delta',
            partnerid: '234567',
            token: 'DLTA',
            category: 'Air Line',
            points: '30000'
        },{
            partner: 'Hertz',
            partnerid: '980654',
            token: 'HRTZ',
            category: 'Car Rental',
            points: '9800'
        },{
            partner: 'Greenpeace',
            partnerid: '675432',
            token: 'GRNP',
            category: 'Charity',
            points: '150000'
        }
    ];

    constructor() {
    }

    ngOnInit() {
        this.source.load(this.data);
    }

}
