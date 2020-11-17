import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AddressEntity } from 'src/app/entities/address.entity';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Component({
  selector: 'diospa-address-add',
  templateUrl: './address-add.component.html',
  styleUrls: ['./address-add.component.css']
})
export class AddressAddComponent implements OnInit {

  endereco: AddressEntity = new AddressEntity();
  @Input() enderecos: AddressEntity[] = [];
  @Output() public enderecosChange: EventEmitter<AddressEntity[]> = new EventEmitter();

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  addAddress() {
    let endereco = { ...this.endereco }
    this.enderecos.push(endereco);
    this.enderecosChange.emit(this.enderecos);
    this.endereco = new AddressEntity();
  }

  localizarCep() {
    this.http.get(`https://viacep.com.br/ws/${this.endereco.cep}/json/`).toPromise().then((success: any) => {
      this.endereco.bairro = success.bairro;
      this.endereco.logradouro = success.logradouro;
      this.endereco.cidade = success.localidade;
      this.endereco.estado = success.uf;
    })
  }
}
