import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component'
import { ShoppingListComponent } from './shopping-list/shopping-list.component'
import { RecipesComponent } from './recipes/recipes.component'
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component'
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component'
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component'
import { ListEditComponent } from './shopping-list/list-edit/list-edit.component'
import { HeaderComponent } from './header/header.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    ListEditComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
