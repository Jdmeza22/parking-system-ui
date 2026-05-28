import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RegisterExitRequest } from '../models/register-exit.model';
import { RegisterEntryRequest } from '../models/register-entry.model';
import { ApiResponse } from '../../../core/models/api-response.model';
import { ActiveVehicle } from '../models/active-vehicle.model';
import { ExitResponse } from '../models/exit-response.model';

@Injectable({
  providedIn: 'root',
})
export class ParkingService {

  private readonly http = inject(HttpClient);
  private readonly apiUrl = `${environment.apiUrl}/parking`;

  registerEntry(request: RegisterEntryRequest): Observable<ApiResponse<boolean>> {
    return this.http.post<ApiResponse<boolean>>(`${this.apiUrl}/entry`, request);
  }

  registerExit(request: RegisterExitRequest): Observable<ApiResponse<ExitResponse>> {
    return this.http.post<ApiResponse<ExitResponse>>(`${this.apiUrl}/exit`, request);
  }

  getActiveVehicles(): Observable<ApiResponse<ActiveVehicle[]>> {
    return this.http.get<ApiResponse<ActiveVehicle[]>>(`${this.apiUrl}/active`);
  }


}
