import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: 'article.component.html',
  styleUrls: ['article.component.css']
})
export class ArticleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() item: any;

  @Output() delete = new EventEmitter();

  del() {
    this.delete.emit(this.item);
  }
}
