import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PeopleEntity } from 'src/app/entities/people.entity';

@Component({
  selector: 'diospa-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  @Input() pessoa: PeopleEntity = new PeopleEntity();

  constructor() { }
  selected: any;
  ngOnInit(): void {
  }
}
