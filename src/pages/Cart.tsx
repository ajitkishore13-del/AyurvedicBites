import { Link, useNavigate } from 'react-router-dom';
import { Trash2, Plus, Minus, ShoppingBag, ArrowLeft } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { ingredients } from '../data/recipes';
import './Cart.css';

export default function Cart() {
  const { items, removeItem, updateQuantity } = useCart();
  const navigate = useNavigate();
  
  const getIngredient = (ingredientId: string) => {
    return ingredients.find((i) => i.id === ingredientId);
  };
  
  const calculateSubtotal = () => {
    return items.reduce((total, item) => {
      const ing = getIngredient(item.ingredientId);
      return total + (ing ? ing.price * (item.quantity / 100) : 0);
    }, 0);
  };
  
  const subtotal = calculateSubtotal();
  
  if (items.length === 0) {
    return (
      <div className="cart">
        <nav aria-label="Breadcrumb">
          <button onClick={() => navigate('/')} className="back-button" aria-label="Back to recipes">
            <ArrowLeft size={18} aria-hidden="true" />
            Back to Recipes
          </button>
        </nav>
        <section className="empty-cart" role="status">
          <div className="empty-cart-icon">
            <ShoppingBag size={48} aria-hidden="true" />
          </div>
          <h1>Your cart is empty</h1>
          <p>Add some Ayurvedic ingredients from our recipes</p>
          <Link to="/" className="shop-button">
            Browse Recipes
          </Link>
        </section>
      </div>
    );
  }
  
  return (
    <div className="cart">
      <nav aria-label="Breadcrumb">
        <button onClick={() => navigate('/')} className="back-button" aria-label="Back to recipes">
          <ArrowLeft size={18} aria-hidden="true" />
          Back to Recipes
        </button>
      </nav>
      
      <header className="cart-header">
        <h1 className="cart-title">Shopping Cart</h1>
        <p className="cart-subtitle">{items.length} {items.length === 1 ? 'item' : 'items'}</p>
      </header>
      
      <div className="cart-layout">
        <section className="cart-items-section" aria-label="Cart items">
          <div className="cart-items">
            {items.map((item) => {
              const ing = getIngredient(item.ingredientId);
              if (!ing) return null;
              const itemTotal = ing.price * (item.quantity / 100);
              return (
                <article key={item.ingredientId} className="cart-item">
                  <div className="cart-item-main">
                    <div className="cart-item-info">
                      <h2 className="cart-item-name">{ing.name}</h2>
                      <p className="cart-item-price">${ing.price.toFixed(2)} per 100{ing.unit}</p>
                    </div>
                    <button
                      onClick={() => removeItem(item.ingredientId)}
                      className="remove-btn"
                      aria-label={`Remove ${ing.name} from cart`}
                    >
                      <Trash2 size={18} aria-hidden="true" />
                    </button>
                  </div>
                  <div className="cart-item-controls">
                    <div className="quantity-controls" role="group" aria-label={`Quantity for ${ing.name}`}>
                      <button
                        onClick={() => updateQuantity(item.ingredientId, item.quantity - 50)}
                        className="quantity-btn"
                        disabled={item.quantity <= 50}
                        aria-label="Decrease quantity"
                      >
                        <Minus size={16} aria-hidden="true" />
                      </button>
                      <span className="quantity-display" aria-label={`${item.quantity}${ing.unit}`}>
                        {item.quantity}{ing.unit}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.ingredientId, item.quantity + 50)}
                        className="quantity-btn"
                        aria-label="Increase quantity"
                      >
                        <Plus size={16} aria-hidden="true" />
                      </button>
                    </div>
                    <div className="cart-item-total">
                      ${itemTotal.toFixed(2)}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
        
        <aside className="cart-summary-section">
          <section className="cart-summary" aria-labelledby="summary-heading">
            <h2 id="summary-heading" className="summary-heading">Order Summary</h2>
            <div className="summary-row">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="summary-row summary-total">
              <span>Total</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <button onClick={() => navigate('/checkout')} className="checkout-button">
              Proceed to Checkout
            </button>
            <p className="summary-note">No payment required for this demo</p>
          </section>
        </aside>
      </div>
    </div>
  );
}
