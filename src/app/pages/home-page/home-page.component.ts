import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { PostService } from './../../services/post.service';
import { PostCardComponent } from './components/post-card/post-card.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [PostCardComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  constructor(private postService: PostService, private router: Router) { }

  posts: any = [];

  ngOnInit() {
    this.posts = this.postService.getAllPosts();
  }

  viewPostDetail() {
    this.router.navigate(["post"])
  }
}
