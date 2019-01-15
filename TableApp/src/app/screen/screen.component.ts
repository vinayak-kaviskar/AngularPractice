import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { MediaMatcher } from '@angular/cdk/layout';
import { Router } from '@angular/router';

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.scss']
})
export class ScreenComponent implements OnInit {
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

  title = 'app';
  public href: string = "";

  mobileQuery: MediaQueryList;

  ///fillerNav = Array(5).fill(0).map((_, i) => `Menu to be opnened ${i + 1}`);
   fillerNav= ['Screen 1','Screen 2','Screen 3'];


  fillerContent = Array(5).fill(0).map(() =>
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`);

  private _mobileQueryListener: () => void;


/**
 * @title Data table with sorting, pagination, and filtering.
 */


  displayedColumns = ['id', 'name', 'progress', 'color','actions'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,private router: Router) {
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

   ngOninit(){
    
   }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    console.log("after view init");
    this.href = this.router.url;
    console.log(this.href);
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
  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
}
