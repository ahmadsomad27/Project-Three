import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-sopping-list',
  templateUrl: './sopping-list.component.html',
  styleUrls: ['./sopping-list.component.css']
})
export class SoppingListComponent implements OnInit {

  ingredients:Ingredient[]=[
    new Ingredient('Apples',23),
    new Ingredient('Tomato',10),
  ];
  
  constructor() { }

  ngOnInit() {
  }

  onIngredientAdded(ingredient:Ingredient){
    this.ingredients.push(ingredient);
  }
}
