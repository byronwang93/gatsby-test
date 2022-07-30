import React, { PropsWithChildren } from 'react';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const RecipesList = ({ recipes = [] }) => {
  return (
    <div className="recipes-list">
      {recipes.map((recipe) => {
        const { id, title, image, prepTime, cookTime } = recipe;
        const pathToImage = getImage(image);
        return (
          <Link
            key={id}
            className="recipe"
            to={`/${title}`}
          >
            <GatsbyImage
              className="recipe-img"
              alt={title}
              image={pathToImage}
            />
            <h5>{title}</h5>
            <p>
              Prep : {prepTime}min | Cook : {cookTime}min
            </p>
          </Link>
        );
      })}
    </div>
  );
};

export default RecipesList;
