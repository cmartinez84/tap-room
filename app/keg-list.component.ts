import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';


@Component({
  selector: 'keg-list',
  template: `
  <div *ngFor="let currentKeg of masterKegList">
    <h1>{{currentKeg.name}}</h1>
    <p>by {{currentKeg.brand}}</p>
    <p>{{currentKeg.alcoholContent}} % </p>
    <p>$ {{currentKeg.price}}</p>
    <p>{{currentKeg.servings}}</p>
  </div>
  `
})

export class KegListComponent {
  @Input() masterKegList: Keg[];
}