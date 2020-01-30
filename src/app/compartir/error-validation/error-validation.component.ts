import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-error-validation',
  templateUrl: './error-validation.component.html',
  styles: []
})
export class ErrorValidationComponent implements OnInit {

  @Input() errorValidations = null;
  constructor() { }

  ngOnInit() {
  }

}
