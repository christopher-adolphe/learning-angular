import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Post } from './post.interface';
import { PostService } from './post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  blogPostForm: FormGroup;
  title: FormControl;
  post: FormControl;
  posts: Post[];
  isFetching: boolean;
  error: string;
  
  constructor(private postService: PostService) {}

  ngOnInit() {
    this.posts = [];
    this.isFetching = false;
    this.error = null;
    this.onInitCommentForm();
    this.onFetchPosts();
  }

  onInitCommentForm() {
    this.title = new FormControl(null, Validators.required);
    this.post = new FormControl(null, Validators.required);
    this.blogPostForm = new FormGroup({
      title: this.title,
      post: this.post
    });

    // console.log(this.blogPostForm);
  }

  onCreatePost() {
    const post: Post = {
      title: this.title.value,
      post: this.post.value
    };

    this.postService.createPost(post).subscribe(
      (response) => {
        console.log(response);
        this.blogPostForm.reset();
        this.onFetchPosts();
      }
    );
  }

  onFetchPosts() {
    // Send Http request
    this.isFetching = true;
    this.postService.fetchPosts().subscribe(
      (posts: Post[]) => {
        this.posts = posts;
        this.isFetching = false;
      },
      error => {
        this.error = error.message;
        this.isFetching = false;
      }
    );
  }

  onClearPosts() {
    // Send Http request
    this.postService.deletePost().subscribe(() => this.posts = []);
  }

  onHandleError() {
    this.error = null;
  }

}
