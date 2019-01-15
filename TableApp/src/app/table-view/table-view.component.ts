import { Component, OnInit } from '@angular/core';
import { ViewChild,ChangeDetectorRef} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {MediaMatcher} from '@angular/cdk/layout';
import { MdlDialogService ,MdlMenuComponent} from '@angular-mdl/core';

@Component({
  selector: 'tableview',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.scss']
})
export class TableViewComponent implements OnInit {
  title = 'app';


  mobileQuery: MediaQueryList;

  
  ngOnInit() {
  }
  private _mobileQueryListener: () => void;

  displayedColumns = ['id', 'name', 'progress', 'color','actions'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,private dialogService: MdlDialogService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    // Create 100 users
    //const users: any[] = [];
    
    const users:any[] = [
      {title1:"vinayak",
      title2:"appple",
      title3:"vinayak",
      title4:"njnj"},
      {title1:"vinayak",
      title2:"mango",
      title3:"vinayak",
      title4:"njnjn"},
      {title1:"vinayak",
      title2:"vinayak",
      title3:"vinayak",
      title4:" njnj"},
      {title1:"vinayak",
      title2:"njnvfj",
      title3:"vinayak",
      title4:"jnfjnfrjf"},
      {title1:"vinayak",
      title2:"jnfujnfr",
      title3:"vinayak",
      title4:"njnjn"},
      {title1:"vinayak",
      title2:"jnfujnfr",
      title3:"vinayak",
      title4:"njnjn"},
      {title1:"vinayak",
      title2:"jnfujnfr",
      title3:"vinayak",
      title4:"njnjn"},
      {title1:"vinayak",
      title2:"jnfujnfr",
      title3:"vinayak",
      title4:"njnjn"},
      {title1:"vinayak",
      title2:"jnfujnfr",
      title3:"vinayak",
      title4:"njnjn"},
      {title1:"vinayak",
      title2:"jnfujnfr",
      title3:"vinayak",
      title4:"njnjn"},
      {title1:"vinayak",
      title2:"jnfujnfr",
      title3:"vinayak",
      title4:"njnjn"},
      
      
    ]
    //for (let i = 1; i <= 100; i++) { users.push(createNewUser(i)); }

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }

  /**
   * Set the paginator and sort after the view init since this component will
   * be able to query its view for the initialized paginator and sort.
   */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    console.log("after view init");
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }


  passingRow(obj){
    console.log("passing row"+obj);
    console.log(obj);
  }

  public test(){
    
    this.dialogService.alert("test");
  }
  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
}
