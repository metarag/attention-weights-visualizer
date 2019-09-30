import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {AttentionEntry, AttentionFileStore} from './attention-file-store.service';
import {share, tap} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  attentionEntries$: Observable<AttentionEntry[] | null>;
  currentIndex = 0;

  constructor(private attentionFileStore: AttentionFileStore) {
    this.attentionEntries$ = attentionFileStore.observeAttentionEntries().pipe(
      share(),
      tap(() => {
        this.currentIndex = 0;
      }),
    );
  }

  ngOnInit(): void {
    this.clearVisualization();
  }

  clearVisualization() {
    this.attentionFileStore.clear();
    this.currentIndex = 0;
  }

  nextEntry() {
    this.currentIndex++;
  }

  prevEntry() {
    this.currentIndex--;
  }
}
