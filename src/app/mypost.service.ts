import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post.model';
import { from, Subject } from 'rxjs';
import { modelGroupProvider } from '@angular/forms/src/directives/ng_model_group';

@Injectable({
  providedIn: 'root'
})
export class MypostService {

  posts: Post[] =  [];
  post: Post ;
  postUpdate: Subject<Post[]>;

  constructor(private http: HttpClient) {
  }
  getPosts() {
   this.http.get<{message: string, posts: Post[] }>('http://localhost:3000/api/posts').subscribe((PostData) => {
   this.posts = PostData.posts;
   this.postUpdate.next([...this.posts]);
   console.log('get my post size: ' + this.posts.length);
   });
  }

  addPost(title: string, content: string) {
   this.post = {id: 'fdfsffd', title: title, content: content };
   this.posts.push(this.post);
   this.postUpdate.next([...this.posts]);
  }
  getPostUpdateListener() {
   return this.postUpdate.asObservable();
  }
}
