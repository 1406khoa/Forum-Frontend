import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() { }

  posts = [
    {
      id: 1,
      avatar: '../../assets/woman.png',
      username: 'Đinh Thiên Nhàn',
      title: 'Asking for laptop in office work?',
      replies: 3,
      views: 20,
      postDate: 'Feb 03, 2024',
      tag1: 'Work',
      tag2: 'Technology'
    },
    {
      id: 2,
      avatar: '../../assets/man.png',
      username: 'Nhan Phan',
      title: 'Realize that I am gay! Need advices!',
      replies: 15,
      views: 60,
      postDate: 'Feb 05, 2024',
      tag1: 'Life',
      tag2: 'Love'
    }
  ]

  getAllPosts() {
    return this.posts;
  }
}
