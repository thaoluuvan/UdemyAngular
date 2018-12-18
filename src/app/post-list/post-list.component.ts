import { Component, OnInit, OnDestroy } from '@angular/core';
import { Post } from '../post.model';
import { PostsService } from '../post.service';
import { MypostService } from '../mypost.service';
import { Subscription, from} from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {
  posts: Post[] = [];
  postSub: Subscription;

  constructor(public postsService: PostsService, public myPostService: MypostService) {
  }

  ngOnInit() {
    this.postsService.getPosts();
    this.myPostService.getPosts();
    this.postSub = this.postsService.getPostUpdatedListener().subscribe((posts: Post[]) => {
      this.posts = posts;
    });
  }

  ngOnDestroy() {
    this.postSub.unsubscribe();
  }

  onDelete(id: string) {
   this.postsService.deletePost(id);
  }

}
