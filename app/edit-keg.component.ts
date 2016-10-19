import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';


@Component({
  selector: 'edit-keg',
  template: `
  <div *ngIf="childSelectedKeg">
      <h2>Edit New Keg</h2>
      <label>Edit Name</label>
      <input [(ngModel)]="childSelectedKeg.name">
      <label>Edit Brand</label>
      <input [(ngModel)]="childSelectedKeg.brand">
      <label>Edit alcohol Content</label>
      <input [(ngModel)]="childSelectedKeg.alcoholContent">
      <label>Edit Price</label>
      <input [(ngModel)]="childSelectedKeg.price">
  </div>
  `
})

export class EditKegComponent {
  @Input() childSelectedKeg: Keg;
  // @Output() pintSold = new EventEmitter();
  // sellPint() {
  //   this.pintSold.emit();
  // }
}
