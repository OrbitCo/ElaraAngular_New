import {Component, OnInit} from '@angular/core';
import {LocalDataSource} from "ng2-smart-table";
import {authService} from "@pages/service/authService";

@Component({
    selector: 'ngx-partner-members',
    templateUrl: './partner-members.component.html',
    styleUrls: ['./partner-members.component.scss']
})
export class PartnerMembersComponent implements OnInit {

    partnerOffer;
    settings = {
        add: {
            addButtonContent: '<i class="nb-plus"></i>',
            createButtonContent: '<i class="nb-checkmark"></i>',
            cancelButtonContent: '<i class="nb-close"></i>',
            confirmCreate: true,
        },
        edit: {
            editButtonContent: '<i class="nb-edit"></i>',
            saveButtonContent: '<i class="nb-checkmark"></i>',
            cancelButtonContent: '<i class="nb-close"></i>',
            confirmSave: true,
        },
        delete: {
            deleteButtonContent: '<i class="nb-trash"></i>',
            confirmDelete: true,
        },
        columns: {
            id: {
                title: 'ID',
                type: 'number',
            },
            first_name: {
                title: 'First Name',
                type: 'string',
            },
            last_name: {
                title: 'Last Name',
                type: 'string',
            },
            username: {
                title: 'Username',
                type: 'string',
            },
            email: {
                title: 'E-mail',
                type: 'string',
            },
            age: {
                title: 'Age',
                type: 'number',
            }
        },
        noDataMessage: "No data found"
    };

    data = [
        {
            id: '1',
            first_name: 'First Name 1',
            last_name: 'Last Name 1',
            username: 'Universal Name 1',
            email: 'test@test.com',
            age: '35'
        },{
            id: '2',
            first_name: 'First Name 2',
            last_name: 'Last Name 2',
            username: 'Universal Name 2',
            email: 'test@test.com',
            age: '35'
        },
    ];

    source: LocalDataSource = new LocalDataSource();

    constructor(private crudService: authService) {
    }

    ngOnInit() {
        this.settings.noDataMessage = "Loading data, please wait...";
        this.source.load(this.data);
    }

    onEditConfirm(event) {
        if (window.confirm('Are you sure you want to save?')) {
            event.confirm.resolve(event.newData);
        } else {
            event.confirm.reject();
        }
    }

    onCreateConfirm(event):void {
        if (window.confirm('Are you sure you want to create?')) {
            event.confirm.resolve(event.newData);
        } else {
            event.confirm.reject();
        }
    }

}
