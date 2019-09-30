import {Component, Input, OnInit} from '@angular/core';
import {AttentionEntry} from '../attention-file-store.service';

@Component({
  selector: 'app-visualizer',
  templateUrl: './visualizer.component.html',
  styleUrls: ['./visualizer.component.scss']
})
export class VisualizerComponent implements OnInit {
  @Input()
  entry: AttentionEntry;

  constructor() {
  }

  ngOnInit() {
  }

  getStyle(weight: number) {
    return {
      'background-color': `rgba(63, 81, 181, ${weight})`,
      color: weight < 0.5 ? 'black' : 'white'
    };
  }
}
