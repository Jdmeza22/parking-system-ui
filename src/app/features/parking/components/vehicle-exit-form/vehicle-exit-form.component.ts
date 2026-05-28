import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { ParkingService } from '../../services/parking.service';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ExitResultDialogComponent } from '../exit-result-dialog/exit-result-dialog.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ParkingStateService } from '../../services/parking-state.service';
import { MatInputModule } from '@angular/material/input';
import { RegisterExitRequest } from '../../models/register-exit.model';
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'app-vehicle-exit-form',
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatSnackBarModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,

    TranslocoPipe
  ],
  templateUrl: './vehicle-exit-form.html',
  styleUrl: './vehicle-exit-form.scss',
})
export class VehicleExitFormComponent {

  private readonly fb = inject(FormBuilder);
  private readonly parkingService = inject(ParkingService);
  private readonly dialog = inject(MatDialog);
  private readonly parkingStateService = inject(ParkingStateService);

  loading = false;

  form = this.fb.group({plate: ['', Validators.required]});

  registerExit(): void {

    if (this.form.invalid) { this.form.markAllAsTouched(); return; }

    const request: RegisterExitRequest = {
      plate: this.form.controls.plate.value!
    };

    this.loading = true;

    this.parkingService.registerExit(request).subscribe({
      next: (response) => {
        this.dialog.open(ExitResultDialogComponent,
          {
            width: '400px',
            data: response.data
          });
        this.form.reset();
        this.parkingStateService.triggerVehiclesRefresh();
        this.loading = false;
      },
      error: (error) => {
        this.loading = false;
      }
    });
  }
}
