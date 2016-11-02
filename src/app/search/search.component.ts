import { Component, OnInit } from '@angular/core';
import {   } from './../search.service'

@Component({
  selector: 'app-search',
  templateUrl: 'search.component.html',
  styleUrls: ['search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private searchSrv:SearchService) { }

  ngOnInit() {
  }

  

}
