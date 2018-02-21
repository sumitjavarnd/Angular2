import {Component} from '@angular/core';

@Component({
  selector: 'app-success-alert',
  template: `
    <p class="success">This is a success message</p>
  `,
  styles: [
    `
      .success {
        color: green;
      }
    `
  ]
})
export class SuccessAlertComponent {

}
