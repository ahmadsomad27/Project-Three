import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipeComponent } from './recipe/recipe.component';
import { SoppingListComponent } from './sopping-list/sopping-list.component';

//tambahkan code berikut
import {RecipeListComponent} from "./recipe/recipe-list/recipe-list.component";
import {RecipeDetailComponent} from "./recipe/recipe-detail/recipe-detail.component";

//tambahkan code berikut (2)
import { RecipeItemComponent } from './recipe/recipe-list/recipe-item/recipe-item.component';

//tambahkan code berikut (3)
import { ShoppingEditComponent } from "./sopping-list/shopping-edit/shopping-edit.component";
import { DropdownDirective } from './shared/dropdown.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipeComponent,
    SoppingListComponent,

    //tambahkan code berikut
    RecipeListComponent,
    RecipeDetailComponent,

    //tambahkan code berikut (2)
    RecipeItemComponent,

    //tambahkan code berikut (3)
    ShoppingEditComponent,

    DropdownDirective
    
],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
