import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ActiveVehiclesTableComponent } from '../../components/active-vehicles-table/active-vehicles-table.component';
import { VehicleEntryFormComponent } from '../../components/vehicle-entry-form/vehicle-entry-form.component';
import { VehicleExitFormComponent } from '../../components/vehicle-exit-form/vehicle-exit-form.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
     CommonModule,
     MatCardModule,
     VehicleEntryFormComponent,
     VehicleExitFormComponent,
     ActiveVehiclesTableComponent
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class DashboardComponent {}
