import { Component, OnInit , ElementRef , ViewChild } from '@angular/core';
import { LayoutComponent } from '../layout.component';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit,AfterViewInit {

  @ViewChild(LayoutComponent) layout:LayoutComponent;

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    
  }

}
