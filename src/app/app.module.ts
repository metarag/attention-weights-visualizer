import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgxFileDropModule} from 'ngx-file-drop';
import {MatButtonModule, MatCardModule, MatDialogModule, MatIconModule, MatTooltipModule} from '@angular/material';
import {FilePickerComponent} from './file-picker/file-picker.component';
import {ErrorDialogComponent} from './error-dialog/error-dialog.component';
import {GlobalErrorHandler} from './global-error-handler';
import {VisualizerComponent} from './visualizer/visualizer.component';
import {PaginatorComponent} from './paginator/paginator.component';

@NgModule({
  declarations: [
    AppComponent,
    FilePickerComponent,
    ErrorDialogComponent,
    VisualizerComponent,
    PaginatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxFileDropModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatTooltipModule,
  ],
  providers: [
    {provide: ErrorHandler, useClass: GlobalErrorHandler},
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    ErrorDialogComponent,
  ]
})
export class AppModule { }
