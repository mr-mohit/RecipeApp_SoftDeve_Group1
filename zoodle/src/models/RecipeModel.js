export class RecipeModel{
    constructor(recipe_name,recipe_contents,recipe_comments,recipe_chef,recipe_ingredient,recipe_ratings) 
    {
      this.recipe_name = recipe_name;
      this.recipe_contents = recipe_contents;
      this.recipe_comments = recipe_comments;
      this.recipe_chef = recipe_chef;
      this.recipe_ingredient = recipe_ingredient;
      this.recipe_ratings = recipe_ratings;
    }
  }