import { Component } from '@angular/core';
import { Keg } from './keg.model'

@Component({
  selector: 'my-app',
  template: `
  <h1>My First Angular 2 App</h1>
  <keg-list [childKegList]="masterKegList"
            (clickSender) = "editKeg($event)">
  </keg-list>
  <new-keg (newKegSender)="addKeg($event)"></new-keg>
  <edit-keg [childSelectedKeg]="selectedKeg"
  ></edit-keg>
  `
})

export class AppComponent {
  public masterKegList: Keg[] = [
    new Keg("logger lager", "everybody's brewing", 5.5, 6),
  ];
  selectedKeg: Keg = null;
  editKeg(clickedKeg: Keg){
    this.selectedKeg = clickedKeg;
  }
  addKeg(newKegFromChild: Keg){
    this.masterKegList.push(newKegFromChild);
  }
  // pintSold(newServings) {
  //   this.selectedKeg.servings newServings;
  // }
}
