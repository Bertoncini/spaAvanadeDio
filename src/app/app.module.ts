import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { PeopleComponent } from './page/people/people.component';
import { UploadImageComponent } from './shared/upload-image/upload-image.component';
import { AddComponent } from './page/people/add/add.component';
import { AddressComponent } from './shared/address/address.component';
import { AddressAddComponent } from './shared/address/add/address-add.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgxMaskModule, IConfig } from 'ngx-mask'
import { HttpClientModule } from '@angular/common/http';

const maskConfig: Partial<IConfig> = {
  validation: false,
};

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    PeopleComponent,
    UploadImageComponent,
    AddComponent,
    AddressComponent,
    AddressAddComponent,
  ],
  imports: [
    FormsModule,  
    BrowserModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    NgxMaskModule.forRoot(maskConfig),
    HttpClientModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
