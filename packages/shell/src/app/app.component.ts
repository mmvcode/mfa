import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'my-org-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'shell';

  constructor(private router: Router) {}

  goTo(url: string) {
    this.router.navigate([url]);
  }
}
