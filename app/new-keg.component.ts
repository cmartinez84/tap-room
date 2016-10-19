import { Component, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'new-keg',
  template: `
  <div class="">
    <form>
      <h2>Enter New Keg</h2>
        <label>Name</label>
        <input #newName>
        <label>Brand</label>
        <input #newBrand>
        <label>alcohol Content</label>
        <input #newAlcoholContent>
        <label>Price</label>
        <input #newPrice>
        <button (click)= "addClicked(newName.value, newBrand.value, newAlcoholContent.value, newPrice.value)">Add Keg</button>
      </form>
  </div>
  `
})

export class NewKegComponent {
  @Output() newKegSender = new EventEmitter();
  addClicked(name: string, brand: string, alcoholContent: number, price: number){
    var newKeg: Keg = new Keg(name, brand, alcoholContent, price);
    this.newKegSender.emit(newKeg);
  }
}
