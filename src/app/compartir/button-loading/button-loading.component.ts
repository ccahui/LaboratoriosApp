import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button-loading',
  templateUrl: './button-loading.component.html',
  styles: []
})
export class ButtonLoadingComponent implements OnInit {

  @Input() loading = false;
  @Input() value = 'guardar';
  constructor() { }

  ngOnInit() {
  }

}
