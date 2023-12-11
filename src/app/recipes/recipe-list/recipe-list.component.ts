import { Component } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'This is a test recipe', 'https://img.ccnull.de/1015000/preview/1015603_5a87abacdc33d3a120a72cde5d099ed2.jpg'),

  ];

}
