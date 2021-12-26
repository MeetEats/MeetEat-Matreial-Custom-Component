import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-snack-bar',
  template: `
    <p>
      snack-bar works!
    </p>
  `,
  styles: [
  ]
})
export class SnackBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
