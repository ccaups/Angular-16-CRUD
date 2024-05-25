import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreditcardsRoutingModule } from './creditcards-routing.module';
import { CreditcardsComponent } from './creditcards.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';


@NgModule({
  declarations: [
    CreditcardsComponent,
    AddComponent,
    ViewComponent,
    EditComponent,
    DeleteComponent
  ],
  imports: [
    CommonModule,
    CreditcardsRoutingModule
  ]
})
export class CreditcardsModule { }
