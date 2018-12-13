import { Component } from '@angular/core';
import { Post } from './post.model';
import { from } from 'rxjs';
import { importType } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'UdemyAngular';
  posts: Post[] = [];
  onAddPost(post) {
    this.posts.push(post);
  }
}
