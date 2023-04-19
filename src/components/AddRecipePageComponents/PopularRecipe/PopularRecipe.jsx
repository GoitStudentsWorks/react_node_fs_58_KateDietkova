import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPopularRecipe } from 'redux/recipes/recipesOperations';
import {
  selectIsLoading,
  selectPopularRecipes,
  selectRecipesError,
} from 'redux/recipes/recipesSelectors';
import {
  StyledCard,
  StyledCardList,
  StyledInstructions,
  StyledNav,
  StyledPicture,
  StyledRecipeTitle,
  StyledSectionWrapper,
  StyledTitle,
  StyledWrapper,
} from './PopularRecipe.styled';

export const PopularRecipe = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPopularRecipe());
  }, [dispatch]);

  const popularRecipes = useSelector(selectPopularRecipes);
  const isLoading = useSelector(selectIsLoading);
  const RecipesError = useSelector(selectRecipesError);

  return (
    <StyledSectionWrapper>
      <StyledTitle>Popular recipe</StyledTitle>
      <StyledCardList>
        {popularRecipes &&
          popularRecipes.map(({ _id, preview, title, instructions }) => {
            return (
              <StyledWrapper key={_id}>
                <StyledNav to="recipe / recipe._id">
                  <StyledCard>
                    <StyledPicture src={preview} alt="recipe" />
                    <div>
                      <StyledRecipeTitle>{title}</StyledRecipeTitle>
                      <StyledInstructions>{instructions}</StyledInstructions>
                    </div>
                  </StyledCard>
                </StyledNav>
              </StyledWrapper>
            );
          })}
      </StyledCardList>
      {/* {isLoading && Loader} */}
      {/* {isError && <Error/>} */}
    </StyledSectionWrapper>
  );
};
