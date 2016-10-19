import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';


@Component({
  selector: 'keg-list',
  template: `
  <div *ngFor="let currentKeg of childKegList">
    <h1>{{currentKeg.name}}</h1>
    <p>by {{currentKeg.brand}}</p>
    <p>Alcohol Content: {{currentKeg.alcoholContent}} % </p>
    <p>$ {{currentKeg.price}}</p>
    <p>Pints left: {{currentKeg.servings}}</p>
    <button (click)="editButtonClicked(currentKeg)">Edit</button>
    <button (click)="sellPint(currentKeg)">Sell Pint</button>
  </div>
  `
})

export class KegListComponent {
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();
  editButtonClicked(kegToEdit: Keg){
    this.clickSender.emit(kegToEdit);
  }
  sellPint(currentKeg){
    currentKeg.servings -= 1;
  }
}
