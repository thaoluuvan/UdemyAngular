import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  enterValue = '' ;
  newPost = 'NO CONTENT' ;

  constructor() { }

  ngOnInit() {
  }

  onAddPost() {
    console.log('onAddPost');
  this.newPost = this.enterValue ;
  }

}
