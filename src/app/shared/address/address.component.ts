import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AddressEntity } from 'src/app/entities/address.entity';

@Component({
  selector: 'diospa-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  @Input() address: AddressEntity[] = []
  @Output() public addressChange: EventEmitter<AddressEntity[]> = new EventEmitter();

  constructor() { }

  displayedColumns: string[] = ['cep', 'logradouro', 'cidade', 'estado'];

  ngOnInit(): void {
  }

  public AddressChange(resposta) {
    this.address = [...this.address]
    this.addressChange.emit(this.address);
  }

}
