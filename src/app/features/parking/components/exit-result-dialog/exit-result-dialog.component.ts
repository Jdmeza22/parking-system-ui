import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-exit-result-dialog',
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule
  ],
  templateUrl: './exit-result-dialog.html',
  styleUrl: './exit-result-dialog.scss',
})
export class ExitResultDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: any
  ) {

  }
}
