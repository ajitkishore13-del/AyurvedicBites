import { Link } from 'react-router-dom';
import { Clock, Users, ArrowRight } from 'lucide-react';
import { recipes } from '../data/recipes';
import './Home.css';
import './Recipes.css';

export default function Recipes() {
  return (
    <div className="recipes-page">
      <header className="recipes-page-header">
        <h1 className="recipes-page-title">All Recipes</h1>
        <p className="recipes-page-subtitle">
          Browse our collection of Ayurvedic recipes and add ingredients to your cart
        </p>
      </header>

      <div className="recipes-page-grid">
        {recipes.map((recipe) => (
          <article key={recipe.id} className="recipe-card">
            <Link to={`/recipe/${recipe.id}`} className="recipe-card-link" aria-label={`View ${recipe.title} recipe`}>
              <div className="recipe-image-container">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="recipe-image"
                  loading="lazy"
                />
              </div>
              <div className="recipe-content">
                <div className="recipe-header-row">
                  <h2 className="recipe-title">{recipe.title}</h2>
                  <ArrowRight size={20} className="recipe-arrow" aria-hidden="true" />
                </div>
                <p className="recipe-description">{recipe.description}</p>
                <div className="recipe-meta">
                  <div className="meta-item">
                    <Clock size={16} aria-hidden="true" />
                    <span>{recipe.prepTime} + {recipe.cookTime}</span>
                  </div>
                  <div className="meta-item">
                    <Users size={16} aria-hidden="true" />
                    <span>{recipe.servings} servings</span>
                  </div>
                </div>
                <div className="recipe-doshas">
                  {recipe.dosha.map((d) => (
                    <span key={d} className="dosha-tag">
                      {d}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
