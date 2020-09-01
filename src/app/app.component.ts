import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: '.app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'covid19';

  isHandset: boolean;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => {
        if (result.matches) {
          this.isHandset = true;
          return true;
        } else {
          this.isHandset = false;
          return false;
        }
      }),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {
  }
}
