import {ErrorHandler, Injectable} from '@angular/core';
import {MatDialog} from '@angular/material';
import {ErrorDialogComponent, ErrorDialogData} from './error-dialog/error-dialog.component';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor(private matDialog: MatDialog) {
  }

  handleError(error: any): void {
    const message = typeof error.message === 'string' ? error.message : 'Unknown error occurred';
    this.matDialog.open<ErrorDialogComponent, ErrorDialogData>(ErrorDialogComponent, {width: '400px', data: {message}});
  }
}
