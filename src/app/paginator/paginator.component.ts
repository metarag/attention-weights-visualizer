import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent {
  @Input()
  totalItems: number;
  @Input()
  currentIndex: number;

  @Output()
  next = new EventEmitter<void>();
  @Output()
  previous = new EventEmitter<void>();
}
