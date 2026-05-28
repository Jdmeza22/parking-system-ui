import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParkingStateService {

  refreshVehicles =  signal(false);

  triggerVehiclesRefresh(): void {
    this.refreshVehicles.update(
      value => !value
    );
  }
}
