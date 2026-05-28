import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ParkingService } from '../../services/parking.service';
import { ParkingStateService } from '../../services/parking-state.service';
import { RegisterEntryRequest } from '../../models/register-entry.model';
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'app-vehicle-entry-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatSnackBarModule,
    MatIconModule,
    TranslocoPipe
  ],
  templateUrl: './vehicle-entry-form.html',
  styleUrl: './vehicle-entry-form.scss',
})
export class VehicleEntryFormComponent {

  private readonly fb = inject(FormBuilder);
  private readonly parkingService = inject(ParkingService);
  private readonly parkingStateService = inject(ParkingStateService);

  loading = false;

  form = this.fb.group({
    plate: ['', Validators.required],
    vehicleTypeId: [null, Validators.required]
  });

  vehicleTypes = [{ id: 1, name: 'Carro' }, { id: 2, name: 'Moto' }];

  registerEntry(): void {

    if (this.form.invalid) { this.form.markAllAsTouched(); return; }

    const request: RegisterEntryRequest = {
      plate: this.form.controls.plate.value!,
      vehicleTypeId:this.form.controls.vehicleTypeId.value!
    };

    this.loading = true;
    this.parkingService.registerEntry(request)
      .subscribe({
        next: () => {
          this.form.reset();
          this.parkingStateService.triggerVehiclesRefresh();
          this.loading = false;
        },
        error: () => {
          this.loading = false;
        }
      });
  }
}
