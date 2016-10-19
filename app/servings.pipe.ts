import { Pipe, PipeTransform } from '@angular/core';
import { Keg } from './keg.model';

@Pipe({
  name: "servings",
  pure: false
})
  export class ServingsPipe implements PipeTransform {
    transform(input: Keg[], servingNumber) {
      var output: Keg[] = [];
      input.forEach(function(keg) {
        if (keg.servings <= servingNumber) {
          output.push(keg);
        }
      })
      return output;
    }
  }
