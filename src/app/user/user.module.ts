import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { UserComponent } from './user.component';
import {UserRoutingModule } from './user-routing.module';import { FormsModule } from '@angular/forms';
import {CommonModule} from '@angular/common';

import {DataTableModule} from "angular2-datatable";
import { DataFilterPipeByVehicleNumber , DataFilterPipeById,DataFilterPipeBylastname} from '../datafilterpipeByVehicle';


@NgModule({
  imports: [
   UserRoutingModule,
    ChartsModule,
    CommonModule,
    FormsModule,DataTableModule
  ],
  declarations: [ UserComponent,DataFilterPipeByVehicleNumber,DataFilterPipeById,DataFilterPipeBylastname ]




})
export class UserModule { }
