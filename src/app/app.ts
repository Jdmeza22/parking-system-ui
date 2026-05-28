import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoadingOverlayComponent } from './core/components/loading-overlay/loading-overlay';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet ,LoadingOverlayComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('parking-system');

}
