import { Component } from '@angular/core';
import { Keg } from './keg.model'

@Component({
  selector: 'my-app',
  template: `
  <h1>My First Angular 2 App</h1>
  <keg-list [childKegList]="masterKegList">
  </keg-list>
  <new-keg (newKegSender)="addKeg($event)"></new-keg>
  `
})

export class AppComponent {
  public masterKegList: Keg[] = [
    new Keg("logger lager", "everybody's brewing", 5.5, 6),
  ];
  addKeg(newKegFromChild: Keg){
    this.masterKegList.push(newKegFromChild);
  }
}
