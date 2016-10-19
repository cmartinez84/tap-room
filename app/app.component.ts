import { Component } from '@angular/core';
import { Keg } from './keg.model'

@Component({
  selector: 'my-app',
  template: `
  <h1>My First Angular 2 App</h1>
  <keg-list [masterKegList]="masterKegList">
  </keg-list>
  `
})

export class AppComponent {
  public masterKegList: Keg[] = [
    new Keg("logger lager", "everybody's brewing", 5.5, 6),
  ];

}
