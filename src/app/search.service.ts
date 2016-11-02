import { Injectable } from '@angular/core';

@Injectable()
export class SearchService {

  constructor() { }

// title = 'app works!';
  keyword = "";
  

  doSearch(input) {
      this.keyword = input;
  }
  
}
