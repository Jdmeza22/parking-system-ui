import { Component, inject }from '@angular/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { LoadingService } from '../../services/loading.service';

@Component({
  selector: 'app-loading-overlay',
  standalone: true,
  imports: [
    MatProgressSpinnerModule
  ],
  templateUrl: './loading-overlay.html',
  styleUrl:'./loading-overlay.scss'
})
export class LoadingOverlayComponent {
  loadingService = inject(LoadingService);
}
