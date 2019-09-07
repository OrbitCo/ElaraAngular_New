import {Component, Input} from '@angular/core';
import {NbSortDirection, NbSortRequest, NbTreeGridDataSource, NbTreeGridDataSourceBuilder} from '@nebular/theme';

interface TreeNode<T> {
    data: T;
    children?: TreeNode<T>[];
    expanded?: boolean;
}

interface FSEntry {
    Partner: string;
    'Node Name': string;
    Token: string;
    kind: string;
}

@Component({
    selector: 'ngx-partner-network',
    templateUrl: './partner-network.component.html',
    styleUrls: ['./partner-network.component.scss']
})

export class PartnerNetworkComponent {

    customColumn = 'Partner';
    defaultColumns = ['Node Name', 'Token'];
    allColumns = [this.customColumn, ...this.defaultColumns];

    dataSource: NbTreeGridDataSource<FSEntry>;

    sortColumn: string;
    sortDirection: NbSortDirection = NbSortDirection.NONE;

    private data: TreeNode<FSEntry>[] = [
        {
            data: {
                Partner: 'Hilton Honors',
                'Node Name': '<div class="text-anchor-color">Anchor</div>',
                Token: 'HLTN',
                kind: 'dir'
            },
            children: [
                {
                    data: {
                        Partner: 'Hertz Rental',
                        'Node Name': '<div class="text-peer-color">Peer</div>',
                        Token: 'HRTZ',
                        kind: 'doc'
                    }
                },
                {
                    data: {
                        Partner: 'Delta Air',
                        'Node Name': '<div class="text-anchor-color">Anchor</div>',
                        Token: 'DLTA',
                        kind: 'dir',
                    }
                },
                {
                    data: {
                        Partner: 'Hilton Honors',
                        'Node Name': '<div class="text-anchor-color">Anchor</div>',
                        Token: 'HLTN',
                        kind: 'dir'
                    },
                    children: [
                        {
                            data: {
                                Partner: 'Hertz Rental',
                                'Node Name': '<div class="text-peer-color">Peer</div>',
                                Token: 'HRTZ',
                                kind: 'doc'
                            }
                        },
                        {
                            data: {
                                Partner: 'Delta Air',
                                'Node Name': '<div class="text-anchor-color">Anchor</div>',
                                Token: 'DLTA',
                                kind: 'dir',
                            }
                        },
                    ],
                }
            ],
        }
    ];

    constructor(private dataSourceBuilder: NbTreeGridDataSourceBuilder<FSEntry>) {
        this.dataSource = this.dataSourceBuilder.create(this.data);
    }

    updateSort(sortRequest: NbSortRequest): void {
        this.sortColumn = sortRequest.column;
        this.sortDirection = sortRequest.direction;
    }

    getSortDirection(column: string): NbSortDirection {
        if (this.sortColumn === column) {
            return this.sortDirection;
        }
        return NbSortDirection.NONE;
    }

    getShowOn(index: number) {
        const minWithForMultipleColumns = 400;
        const nextColumnStep = 100;
        return minWithForMultipleColumns + (nextColumnStep * index);
    }
}

@Component({
    selector: 'ngx-fs-icon',
    template: `
        <nb-tree-grid-row-toggle [expanded]="expanded" *ngIf="isDir(); else fileIcon">
        </nb-tree-grid-row-toggle>
        <ng-template #fileIcon>
            <nb-icon icon="file-text-outline"></nb-icon>
        </ng-template>
    `,
})
export class FsIconComponent {
    @Input() kind: string;
    @Input() expanded: boolean;

    isDir(): boolean {
        return this.kind === 'dir';
    }
}
