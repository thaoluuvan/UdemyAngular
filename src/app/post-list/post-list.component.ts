import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  // posts = [
  // {title: 'First post', content: 'this is content\'s post'},
  // {title: 'Second post', content: 'this is content\'s post'},
  // {title: 'Third post', content: 'this is content\'s post'},
  // {title: 'Forth post', content: 'this is content\'s post'}
  // ];
  @Input() posts = [];

  constructor() { }

  ngOnInit() {
  }

}
