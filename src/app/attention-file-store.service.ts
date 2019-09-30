import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {FileSystemFileEntry, NgxFileDropEntry} from 'ngx-file-drop';
import {JsonConvert, JsonObject, JsonProperty} from 'json2typescript';

@Injectable({
  providedIn: 'root'
})
export class AttentionFileStore {

  private attentionEntries = new BehaviorSubject<AttentionEntry[] | null>(null);

  constructor() {
  }

  private static parseAttentionEntries(objects: object[]): AttentionEntry[] {
    const jsonConvert = new JsonConvert();
    try {
      return jsonConvert.deserializeArray(objects, AttentionEntry);
    } catch (e) {
      throw new Error('Invalid object schemas');
    }
  }

  observeAttentionEntries(): Observable<AttentionEntry[] | null> {
    return this.attentionEntries.asObservable();
  }

  async registerFile(fileEntry: NgxFileDropEntry) {
    if (!fileEntry.fileEntry.isFile) {
      throw new Error('Only JSON files supported');
    }

    const objects = await this.readFile(fileEntry.fileEntry as FileSystemFileEntry);
    const attentionEntries = AttentionFileStore.parseAttentionEntries(objects);
    this.attentionEntries.next(attentionEntries);
  }

  clear(): void {
    this.attentionEntries.next(null);
  }

  private async readFile(fileEntry: FileSystemFileEntry): Promise<object[]> {
    return new Promise((resolve, reject) => {
      fileEntry.file((file) => {
        const reader = new FileReader();
        reader.onload = () => {
          try {
            const objects = JSON.parse(reader.result as string);
            resolve(objects);
          } catch (e) {
            reject(new Error('Invalid JSON file'));
          }
        };
        reader.readAsBinaryString(file);
      });
    });
  }
}

@JsonObject('AttentionWord')
export class AttentionWord {
  @JsonProperty('word', String)
  word = '';

  @JsonProperty('weight', Number)
  weight = 0.0;
}

@JsonObject('AttentionEntry')
export class AttentionEntry {
  @JsonProperty('title', String)
  title = '';

  @JsonProperty('words', [AttentionWord])
  words: AttentionWord[] = [];
}
