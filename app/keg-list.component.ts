import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';


@Component({
  selector: 'keg-list',
  template: `
  <h3 >Filter By Servings:</h3>
  <input type=number (change)="filterServings($event.target.value)">
  <div *ngFor="let currentKeg of childKegList | servings:selectedServings">
    <h1>{{currentKeg.name}}</h1>
    <h1 class="danger" *ngIf="currentKeg.servings < 10">Order More!!</h1>
    <p>by {{currentKeg.brand}}</p>
    <p>Alcohol Content: {{currentKeg.alcoholContent}} % </p>
    <p [ngClass]=getPriceClass(currentKeg.price) > $ {{currentKeg.price}}</p>
    <p [ngClass]=servingWarning(currentKeg.servings)>Pints left: {{currentKeg.servings}}</p>
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
  getPriceClass(price){
    if(price < 10){
      return "cheap";
    } else {
      return "moderate";
    }
  }
  servingWarning(servings) {
    if(servings <10) {
      return "danger";
    }

    // else if (servings < 10) {
    //   return "danger";
    // } else {
    //   return "save";
    // }
  }

}
