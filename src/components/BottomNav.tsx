import { NavLink } from 'react-router-dom';
import { Home, BookOpen, User, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import './BottomNav.css';

export default function BottomNav() {
  const { getItemCount } = useCart();
  const count = getItemCount();

  return (
    <nav className="bottom-nav" role="navigation" aria-label="Mobile navigation">
      <NavLink to="/" className={({ isActive }) => isActive ? 'bottom-nav-item active' : 'bottom-nav-item'} end>
        <Home size={22} aria-hidden="true" />
        <span className="bottom-nav-label">Home</span>
      </NavLink>
      <NavLink to="/recipes" className={({ isActive }) => isActive ? 'bottom-nav-item active' : 'bottom-nav-item'}>
        <BookOpen size={22} aria-hidden="true" />
        <span className="bottom-nav-label">Recipes</span>
      </NavLink>
      <NavLink to="/cart" className={({ isActive }) => isActive ? 'bottom-nav-item active' : 'bottom-nav-item'}>
        <div className="bottom-nav-icon-wrap">
          <ShoppingCart size={22} aria-hidden="true" />
          {count > 0 && <span className="bottom-nav-badge">{count > 99 ? '99+' : count}</span>}
        </div>
        <span className="bottom-nav-label">Cart</span>
      </NavLink>
      <NavLink to="/me" className={({ isActive }) => isActive ? 'bottom-nav-item active' : 'bottom-nav-item'}>
        <User size={22} aria-hidden="true" />
        <span className="bottom-nav-label">Me</span>
      </NavLink>
    </nav>
  );
}
