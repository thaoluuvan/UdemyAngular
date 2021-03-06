import { Post } from './post.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, Subscription, from } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class PostsService {
  private posts: Post[] = [];
  private postUpdated = new Subject<Post[]>();

  constructor(private http: HttpClient) {
  }

  getPosts() {
    return this.http.get<{ message: string, posts: any}>('http://localhost:3000/api/posts')
    .pipe(map((postData) => {
         return postData.posts.map((post) => {
           return {
               title: post.title,
               content: post.content,
               id: post._id
              };
         });
    }))
    .subscribe((posts) => {
     this.posts = posts;
     this.postUpdated.next([...this.posts]);
    });
  }

  getPostUpdatedListener() {
   return this.postUpdated.asObservable();
  }

  addPost(title: string, content: string) {
    const post: Post = {id: null, title: title, content: content};
    this.http.post<{message: string, postId}>('http://localhost:3000/api/posts', post).subscribe((respondData) => {
    console.log(respondData.message);
    post.id = respondData.postId;
    this.posts.push(post);
    this.postUpdated.next([...this.posts]);
    });
  }
   deletePost(id: string) {
   this.http.delete('http://localhost:3000/api/posts/' + id).subscribe(() => {
      console.log('Post deleted successfully');
      const updatePosts = this.posts.filter(post => post.id !== id);
      this.posts = updatePosts;
      this.postUpdated.next([...this.posts]);
   });
   }
}
