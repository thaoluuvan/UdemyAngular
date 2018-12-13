import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Post } from '../post.model';
import { NgForm } from '@angular/forms';

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

  onAddPost(form: NgForm) {
    if (form.invalid) {
      return;
    }
    const post: Post = {title: form.value.title, content: form.value.content};
    this.postCreate.emit(post);
  }

}
