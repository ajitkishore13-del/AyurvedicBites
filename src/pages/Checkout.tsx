import { useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useState } from 'react';
import './Checkout.css';

export default function Checkout() {
  const { items, clearCart } = useCart();
  const navigate = useNavigate();
  const [ordered, setOrdered] = useState(false);
  
  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setOrdered(true);
    setTimeout(() => {
      clearCart();
    }, 100);
  };
  
  if (items.length === 0 && !ordered) {
    navigate('/cart');
    return null;
  }
  
  if (ordered) {
    return (
      <div className="checkout">
        <section className="order-success" role="status" aria-live="polite">
          <div className="success-icon">
            <CheckCircle size={64} aria-hidden="true" />
          </div>
          <h1>Order Placed Successfully!</h1>
          <p>Thank you for your Ayurvedic order. We'll send you a confirmation soon.</p>
          <button onClick={() => navigate('/')} className="back-home-button">
            Back to Home
          </button>
        </section>
      </div>
    );
  }
  
  return (
    <div className="checkout">
      <nav aria-label="Breadcrumb">
        <button onClick={() => navigate('/cart')} className="back-button" aria-label="Back to cart">
          <ArrowLeft size={18} aria-hidden="true" />
          Back to Cart
        </button>
      </nav>
      
      <header className="checkout-header">
        <h1 className="checkout-title">Checkout</h1>
        <p className="checkout-subtitle">Complete your order</p>
      </header>
      
      <form onSubmit={handlePlaceOrder} className="checkout-form" noValidate>
        <section className="checkout-section" aria-labelledby="contact-heading">
          <h2 id="contact-heading">Contact Information</h2>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input type="email" id="email" name="email" required placeholder="you@example.com" autoComplete="email" />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone number</label>
            <input type="tel" id="phone" name="phone" required placeholder="(555) 123-4567" autoComplete="tel" />
          </div>
        </section>
        
        <section className="checkout-section" aria-labelledby="shipping-heading">
          <h2 id="shipping-heading">Shipping Address</h2>
          <div className="form-group">
            <label htmlFor="name">Full name</label>
            <input type="text" id="name" name="name" required placeholder="John Doe" autoComplete="name" />
          </div>
          <div className="form-group">
            <label htmlFor="address">Street address</label>
            <input type="text" id="address" name="address" required placeholder="123 Main St" autoComplete="street-address" />
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="city">City</label>
              <input type="text" id="city" name="city" required placeholder="City" autoComplete="address-level2" />
            </div>
            <div className="form-group">
              <label htmlFor="zip">ZIP code</label>
              <input type="text" id="zip" name="zip" required placeholder="12345" autoComplete="postal-code" />
            </div>
          </div>
        </section>
        
        <div className="form-actions">
          <button type="submit" className="place-order-button">
            Place Order
          </button>
          <p className="form-note">No payment required - this is a demo</p>
        </div>
      </form>
    </div>
  );
}
