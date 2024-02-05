import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-post-card',
  standalone: true,
  imports: [],
  templateUrl: './post-card.component.html',
  styleUrl: './post-card.component.scss'
})
export class PostCardComponent {
  @Input() post: any;

  @Output() onDetail = new EventEmitter();
}
