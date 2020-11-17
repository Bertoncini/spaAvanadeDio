import { Component } from '@angular/core';
import { PeopleEntity } from './entities/people.entity';

@Component({
  selector: 'diospa-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'spaComponentsInteraction';
  people: PeopleEntity = new PeopleEntity();
  constructor() {
  }

}
