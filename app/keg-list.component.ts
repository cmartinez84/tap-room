import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';


@Component({
  selector: 'keg-list',
  template: `
  <h3>Filter By Servings:</h3>
  <input type=number (change)="filterServings($event.target.value)">
  <div *ngFor="let currentKeg of childKegList | servings:selectedServings">
    <h1>{{currentKeg.name}}</h1>
    <p>by {{currentKeg.brand}}</p>
    <p>Alcohol Content: {{currentKeg.alcoholContent}} % </p>
    <p>$ {{currentKeg.price}}</p>
    <p>Pints left: {{currentKeg.servings}}</p>
    <label>Sold Pints:</label>
    <input #pintsSold type="number" value=1>
    <button (click)="editButtonClicked(currentKeg)">Edit</button>
    <button (click)="sellPint(currentKeg, pintsSold.value)">Sell Pint</button>
  </div>
  `
})

export class KegListComponent {
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();
  public selectedServings: number = 124;
  editButtonClicked(kegToEdit: Keg){
    this.clickSender.emit(kegToEdit);
  }
  sellPint(currentKeg, pintsSold){
    currentKeg.servings -= pintsSold;
  }
  filterServings(servingInput) {
    this.selectedServings = servingInput;
  }
}
