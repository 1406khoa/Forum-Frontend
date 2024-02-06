import { ReplyComponent } from './../reply/reply.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-post-detail',
  standalone: true,
  imports: [ReplyComponent],
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.scss'
})
export class PostDetailComponent {

}
