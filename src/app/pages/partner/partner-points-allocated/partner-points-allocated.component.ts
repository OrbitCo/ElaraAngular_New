import {Component, OnInit} from '@angular/core';
import {authService} from "@pages/service/authService";
import {LocalDataSource} from "ng2-smart-table";
import {DatePipe} from "@angular/common";

@Component({
    selector: 'ngx-partner-points-allocated',
    templateUrl: './partner-points-allocated.component.html',
    styleUrls: ['./partner-points-allocated.component.scss']
})
export class PartnerPointsAllocatedComponent implements OnInit {

    partnerAllocated;
    datePipeEn: DatePipe = new DatePipe('en-US');
    source: LocalDataSource = new LocalDataSource();

    settings = {
        actions: {add: true, edit: true, delete: true},
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
            transactionId: {
                title: 'Transaction ID',
                type: 'string',
                width: '20%'
            },
            timestamp: {
                title: 'Time Stamp',
                type: 'string',
                width: '20%',
                valuePrepareFunction: (date) => {
                    return date ? this.datePipeEn.transform(date, 'dd-MM-yyyy hh:mm') : null;
                }
            },
            member: {
                title: 'Member ID',
                type: 'string',
                width: '20%'
            },
            partner: {
                title: 'Partner ID',
                type: 'string',
                width: '20%'
            },
            points: {
                title: 'Points',
                type: 'string',
                width: '20%'
            }
        },
        noDataMessage: "No data found"
    };

    constructor(private crudService: authService) {
    }

    ngOnInit() {
        this.settings.noDataMessage = "Loading data, please wait...";
        this.partnerAllocated = JSON.parse(localStorage.getItem('partner'));
        this.crudService.postRequest("partnerData", this.partnerAllocated).subscribe((response: any) => {
            if(response.earnPointsResults) {
                this.source.load(response.earnPointsResults);
            } else {
                this.settings.noDataMessage = "No data found";
            }
        });
    }

    onEditConfirm(event) {
        if (window.confirm('Are you sure you want to save?')) {
            event.confirm.resolve(event.newData);
        } else {
            event.confirm.reject();
        }
    }

    onCreateConfirm(event):void {
        const inputs = event.newData;
        const data = {
            cardId: inputs.partner,
            partnerId: inputs.partner,
            itemName: inputs.item,
            points: inputs.points
        };
        this.crudService.postRequest("addReward", data).subscribe((result: any) => {
            if (result.success) {
                event.confirm.resolve(event.newData);
            }
        });
    }

}
