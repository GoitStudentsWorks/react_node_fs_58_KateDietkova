
import {RecipePageHero } from 'components/RecipePageComponents/RecipePageHero/RecipePageHero';
import {RecipeIngredientsList} from 'components/RecipePageComponents/RecipeIngredientsList/RecipeIngredientsList';
import {RecipePreparation} from 'components/RecipePageComponents/RecipePreparation/RecipePreparation';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { fetchRecipe } from 'redux/recipes/recipesOperations';
import { selectRecipes,  selectIsLoading} from '../../redux/recipes/recipesSelectors';
import { getAllIngredients } from 'redux/ingredients/ingredientsOperations';


const RecipePage = () => {
  const dispatch = useDispatch();
  const { recipeId } = useParams();
  const currentRecipe  = useSelector(selectRecipes);
  const isLoading = useSelector(selectIsLoading);
  
  useEffect(() => {
    dispatch(fetchRecipe(recipeId));
    dispatch(getAllIngredients());
    window.scroll(0, 0);
  }, [dispatch, recipeId]);

  if (!currentRecipe) {
    return ;
  }
 
  console.log('string', currentRecipe)

    return (
      <>
        {!isLoading && currentRecipe && (
          
          <>
            <RecipePageHero
              title={currentRecipe.title}
              description={currentRecipe.description}
              time={currentRecipe.time}
              favorites={currentRecipe.favorites} />
          
            <RecipeIngredientsList recipeId={recipeId} ingredients={currentRecipe.ingredients} />
            <RecipePreparation instructions={currentRecipe.instructions} preview={currentRecipe.preview} /></>
          
        )}
      </>
    );
};
export default RecipePage;
