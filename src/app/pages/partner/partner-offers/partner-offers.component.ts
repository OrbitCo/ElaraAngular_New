import {Component, OnInit, OnDestroy} from '@angular/core';
import {LocalDataSource} from "ng2-smart-table";
import {authService} from "@pages/service/authService";

@Component({
    selector: 'ngx-partner-offers',
    templateUrl: './partner-offers.component.html',
    styleUrls: ['./partner-offers.component.scss']
})
export class PartnerOffersComponent implements OnInit {

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
            partner: {
                title: 'Partner',
                type: 'string',
            },
            price: {
                title: 'Price',
                type: 'string',
            },
            product: {
                title: 'Product',
                type: 'string',
            },
            points: {
                title: 'Points',
                type: 'string',
            }
        },
        noDataMessage: "No data found"
    };

    source: LocalDataSource = new LocalDataSource();

    constructor(private crudService: authService) {
    }

    ngOnInit() {
        this.settings.noDataMessage = "Loading data, please wait...";
        this.partnerOffer = JSON.parse(localStorage.getItem('partner'));
        this.crudService.postRequest("partnerData", this.partnerOffer).subscribe((result: any) => {
            if (result.addOfferResults) {
                this.source.load(result.addOfferResults);
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
            points: inputs.points,
            price: inputs.price,
            productName: inputs.product,
        };
        this.crudService.postRequest("addOffer", data).subscribe((result: any) => {
            if (result.success) {
                event.confirm.resolve(event.newData);
            }else {
                this.settings.noDataMessage = "No data found";
            }
        });
    }
}
