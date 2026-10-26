import { useParams, useNavigate } from 'react-router-dom';
import { Clock, Users, ArrowLeft, ShoppingCart } from 'lucide-react';
import { recipes, ingredients } from '../data/recipes';
import { useCart } from '../context/CartContext';
import './RecipeDetail.css';

export default function RecipeDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addRecipeIngredients } = useCart();
  
  const recipe = recipes.find((r) => r.id === id);
  
  if (!recipe) {
    return (
      <div className="recipe-detail">
        <nav aria-label="Breadcrumb">
          <button onClick={() => navigate('/')} className="back-button" aria-label="Back to recipes">
            <ArrowLeft size={18} aria-hidden="true" />
            Back to Recipes
          </button>
        </nav>
        <section className="not-found" role="status">
          <h1>Recipe not found</h1>
          <p>This recipe doesn't exist or has been removed.</p>
        </section>
      </div>
    );
  }
  
  const getIngredient = (ingredientId: string) => {
    return ingredients.find((i) => i.id === ingredientId);
  };
  
  const calculateTotal = () => {
    return recipe.ingredients.reduce((total, ri) => {
      const ing = getIngredient(ri.ingredientId);
      return total + (ing ? ing.price * (ri.quantity / 100) : 0);
    }, 0);
  };
  
  const handleAddAll = () => {
    addRecipeIngredients(recipe.ingredients);
    navigate('/cart');
  };
  
  return (
    <div className="recipe-detail">
      <nav aria-label="Breadcrumb">
        <button onClick={() => navigate('/')} className="back-button" aria-label="Back to recipes">
          <ArrowLeft size={18} aria-hidden="true" />
          Back to Recipes
        </button>
      </nav>
      
      <article className="recipe-header">
        <div className="recipe-hero-container">
          <img src={recipe.image} alt={`${recipe.title}`} className="recipe-hero" />
        </div>
        <div className="recipe-header-content">
          <h1 className="recipe-detail-title">{recipe.title}</h1>
          <p className="recipe-detail-desc">{recipe.description}</p>
          
          <div className="recipe-detail-meta" role="list" aria-label="Recipe information">
            <div className="meta-box" role="listitem">
              <Clock size={20} aria-hidden="true" />
              <div>
                <div className="meta-label">Prep</div>
                <div className="meta-value">{recipe.prepTime}</div>
              </div>
            </div>
            <div className="meta-box" role="listitem">
              <Clock size={20} aria-hidden="true" />
              <div>
                <div className="meta-label">Cook</div>
                <div className="meta-value">{recipe.cookTime}</div>
              </div>
            </div>
            <div className="meta-box" role="listitem">
              <Users size={20} aria-hidden="true" />
              <div>
                <div className="meta-label">Serves</div>
                <div className="meta-value">{recipe.servings}</div>
              </div>
            </div>
          </div>
          
          <div className="dosha-section">
            <span className="dosha-label">Dosha Balance:</span>
            <div className="dosha-tags" role="list" aria-label="Dosha balance">
              {recipe.dosha.map((d) => (
                <span key={d} className="dosha-tag-detail" role="listitem">
                  {d}
                </span>
              ))}
            </div>
          </div>
        </div>
      </article>
      
      <div className="recipe-content-grid">
        <section className="ingredients-section" aria-labelledby="ingredients-heading">
          <header className="section-header">
            <h2 id="ingredients-heading">Ingredients</h2>
            <div className="total-price" aria-label={`Estimated total ${calculateTotal().toFixed(2)} dollars`}>
              Est. ${calculateTotal().toFixed(2)}
            </div>
          </header>
          <ul className="ingredients-list">
            {recipe.ingredients.map((ri) => {
              const ing = getIngredient(ri.ingredientId);
              if (!ing) return null;
              const itemTotal = ing.price * (ri.quantity / 100);
              return (
                <li key={ri.ingredientId} className="ingredient-item">
                  <div className="ingredient-info">
                    <div className="ingredient-name">{ing.name}</div>
                    <div className="ingredient-amount">
                      {ri.quantity}{ing.unit}
                    </div>
                  </div>
                  <div className="ingredient-price">
                    ${itemTotal.toFixed(2)}
                  </div>
                </li>
              );
            })}
          </ul>
          <button onClick={handleAddAll} className="add-all-button">
            <ShoppingCart size={20} aria-hidden="true" />
            Add All Ingredients to Cart
          </button>
        </section>
        
        <section className="instructions-section" aria-labelledby="instructions-heading">
          <h2 id="instructions-heading">Instructions</h2>
          <ol className="instructions-list">
            {recipe.instructions.map((instruction, index) => (
              <li key={index} className="instruction-item">
                <span className="instruction-number" aria-label={`Step ${index + 1}`}>{index + 1}</span>
                <p className="instruction-text">{instruction}</p>
              </li>
            ))}
          </ol>
        </section>
      </div>
    </div>
  );
}
