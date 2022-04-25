import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TempConverterPipe } from './pipe/temp-converter.pipe';



@NgModule({
  declarations: [
    TempConverterPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [TempConverterPipe]
})
export class CoreModule { }
