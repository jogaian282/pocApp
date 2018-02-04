import { Component, OnInit ,AfterViewInit } from '@angular/core';
import { HttpService } from '../service/http.service';

@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.css']
})

export class ResponseComponent implements OnInit,AfterViewInit {

  dtOptions: DataTables.Settings = {};

  constructor(private http:HttpService) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers'
    };
  }

  ngAfterViewInit(){
  }

  getUsersList() {

  }



}
