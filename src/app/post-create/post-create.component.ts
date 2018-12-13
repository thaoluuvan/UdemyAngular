import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Post } from '../post.model';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  enterTitle = '' ;
  enterContent = '';
  newPost = 'NO CONTENT' ;
  @Output() postCreate = new EventEmitter<Post>();

  constructor() { }

  ngOnInit() {
  }

  onAddPost() {
    const post: Post = {title: this.enterTitle, content: this.enterContent};
    this.postCreate.emit(post);
  }

}
