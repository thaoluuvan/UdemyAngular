import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'UdemyAngular';
  posts = [];
  onAddPost(post) {
    this.posts.push(post);
  }
}
