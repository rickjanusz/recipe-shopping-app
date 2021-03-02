import { Component, OnInit, Output, EventEmitter } from '@angular/core'
import { Recipe } from './recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>()

  recipes: Recipe[] = [
    new Recipe(
      'Test Recipe 1',
      'A TEST recipe 1',
      'https://images2.minutemediacdn.com/image/upload/c_fill,g_auto,h_1248,w_2220/v1555449015/shape/mentalfloss/istock_000035287506_small.jpg?itok=MczNwF73'
    ),
    new Recipe(
      'Test Recipe 2',
      'A TEST recipe 2',
      'https://images2.minutemediacdn.com/image/upload/c_fill,g_auto,h_1248,w_2220/v1555449015/shape/mentalfloss/istock_000035287506_small.jpg?itok=MczNwF73'
    ),
  ]
  constructor() {}

  ngOnInit(): void {}

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe)
  }
}
