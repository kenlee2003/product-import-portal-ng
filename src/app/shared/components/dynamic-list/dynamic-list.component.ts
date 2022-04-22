import { Component, OnChanges, Input, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { RoutingService } from 'src/app/shared/routing/routing.service';

@Component({
  selector: 'app-dynamic-list',
  templateUrl: './dynamic-list.component.html',
  styleUrls: ['./dynamic-list.component.scss']
})
export class DynamicListComponent implements OnChanges {
  @Input() dataHeaders?: any;
  @Input() data?: any;
  @Input() addNewLabel?: any;
  @Input() tableName?: any;
  @Input() createRoute?: any;

  public displayedColumns = [];
  public dataSource: any;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private routingService: RoutingService
  ) {
    this.dataSource = new MatTableDataSource();
  }

  ngOnChanges(): void {
    this.initDisplayedColumns();
    this.dataSource.data = this.data;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  goDetails(data: any): void {

  }

  initDisplayedColumns(): void {
    if(this.dataHeaders !== undefined) {
      Object.keys(this.dataHeaders).forEach(key => {
        this.displayedColumns.push(this.dataHeaders[key].key);
      });
    }
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  changeRoute(name: string): void {
    this.routingService.changeRoute(name);
  }

  dataIsArray(data): boolean {
    return Array.isArray(data);
  }

}
