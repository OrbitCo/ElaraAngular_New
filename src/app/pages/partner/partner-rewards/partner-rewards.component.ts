import {Component, OnInit} from '@angular/core';
import {authService} from "@pages/service/authService";
import {LocalDataSource} from "ng2-smart-table";

@Component({
    selector: 'ngx-partner-rewards',
    templateUrl: './partner-rewards.component.html',
    styleUrls: ['./partner-rewards.component.scss']
})
export class PartnerRewardsComponent implements OnInit {

    partnerRewards;
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
            partner: {
                title: 'Partner',
                type: 'string',
                width: '33.3%'
            },
            item: {
                title: 'Item',
                type: 'string',
                width: '33.3%'
            },
            points: {
                title: 'Points',
                type: 'number',
                width: '33.3%'
            }
        },
        noDataMessage: "No data found"
    };

    constructor(private crudService: authService) {
    }

    ngOnInit() {
        this.settings.noDataMessage = "Loading data, please wait...";
        this.partnerRewards = JSON.parse(localStorage.getItem('partner'));
        this.crudService.postRequest("partnerData", this.partnerRewards).subscribe((response: any) => {
            if(response.addRewardResults) {
                this.source.load(response.addRewardResults);
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
