import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-performance';
  opened: boolean = true;
  menu = [
    {
      path: 'general-unoptimized',
      label: 'General Unoptimized'
    },
    {
      path: 'onpush-unoptimized',
      label: 'OnPush Unoptimized'
    }
  ]
}
