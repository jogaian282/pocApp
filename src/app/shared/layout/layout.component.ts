import { Component, OnInit , ViewChild } from '@angular/core';
import { Sidebar } from 'ng-sidebar/lib/sidebar.component';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})

export class LayoutComponent implements OnInit {

  @ViewChild('sidebar') sidebar:Sidebar;
  _opened: boolean = true;

  constructor() { }

  ngOnInit() {
    
  }

}
