import {Component} from '@angular/core';
import {NgxFileDropEntry} from 'ngx-file-drop';
import {AttentionFileStore} from '../attention-file-store.service';

@Component({
  selector: 'app-file-picker',
  templateUrl: './file-picker.component.html',
  styleUrls: ['./file-picker.component.scss']
})
export class FilePickerComponent {

  constructor(private attentionFileStore: AttentionFileStore) {
  }

  fileDropped(fileEntries: NgxFileDropEntry[]) {
    if (fileEntries.length !== 1) {
      throw new Error('Please upload one JSON file.');
    }
    this.attentionFileStore.registerFile(fileEntries[0]);
  }
}
