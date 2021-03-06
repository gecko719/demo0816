import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-header',//jQuery
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})
export class HeaderComponent implements OnInit {

  // title = 'The Will Will Web';

  // titleurl = "http://blog.miniasp.com/";

  @Input() title: string;
  @Input() titleurl: string;

  subtitle = "記載著 Will 在網路世界的學習心得與技術分享";

  

  constructor() { }

  ngOnInit() {
  }

  num = 0;

  plusOne(arg: MouseEvent) {
    //console.log(arg);
    console.log(arg.altKey);

    if(arg.altKey) {
      this.num -- ;
      return;
    } 

    this.num ++ ;
    
  }

}
