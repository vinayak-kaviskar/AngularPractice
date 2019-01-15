import {  OnInit } from '@angular/core';
import {Component, ViewChild,ChangeDetectorRef} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {MediaMatcher} from '@angular/cdk/layout';
import { Router } from '@angular/router';
import {AuthService} from '../authentication/auth.service';

@Component({
  selector: 'app-screens',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.scss']
})
export class ModulesComponent implements OnInit {

  title = 'app';
  public href: string = "";

  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,private router: Router,private authService: AuthService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);

  }

  ngOnInit() {
    console.log("In modules component")
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  onLogout() {
    this.authService.logout();
  }



}
