import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product/product-list.component';
import { ConvertToSpacecPipe } from './shared/convert-to-spaces.pipe';
import { StarComponent } from './shared/star.component';



@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacecPipe,
    StarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  bootstrap: [AppComponent] 
})
export class AppModule { }
