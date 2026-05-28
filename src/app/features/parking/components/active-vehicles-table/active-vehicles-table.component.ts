import { Component, effect, inject, signal } from '@angular/core';
import { ActiveVehicle } from '../../models/active-vehicle.model';
import { CommonModule } from '@angular/common';
import { ParkingService } from '../../services/parking.service';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ParkingStateService } from '../../services/parking-state.service';
import { TranslocoPipe } from '@jsverse/transloco';
@Component({
  selector: 'app-active-vehicles-table',
  imports: [
    CommonModule,
    MatTableModule,
    MatProgressSpinnerModule,

    TranslocoPipe
  ],
  templateUrl: './active-vehicles-table.html',
  styleUrl: './active-vehicles-table.scss',
})
export class ActiveVehiclesTableComponent{

  private readonly parkingService = inject(ParkingService);
  private readonly parkingStateService = inject(ParkingStateService);

  loading = signal(false);
  vehicles = signal<ActiveVehicle[]>([]);
  displayedColumns = ['plate', 'vehicleType', 'entryDate'];

  constructor() {
    effect(() => {
      this.parkingStateService.refreshVehicles();
      this.loadVehicles();
    });
  }

  loadVehicles(): void {
    this.loading.set(true);
    this.parkingService.getActiveVehicles().subscribe({
      next: (response) => {
        this.vehicles.set(response.data);
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
      }
    });
  }
}
