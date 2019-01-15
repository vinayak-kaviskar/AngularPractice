import { Component, OnInit } from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {MediaMatcher} from '@angular/cdk/layout';


declare const google: any;
@Component({
  selector: 'app-map-component',
  templateUrl: './map-component.component.html',
  styleUrls: ['./map-component.component.scss']
})
export class MapComponentComponent implements OnInit {

  constructor() { }
  map: any;
  title: string = 'My first AGM project';
  lat: number = 51.678418;
  lng: number = 7.809007;

  ngOnInit() {
  }


  mapReady(event: any) {
    this.map = event;
    this.map.controls[google.maps.ControlPosition.CENTER].push(document.getElementById('Settings'));

    console.log("Map ready called");
  }

}
