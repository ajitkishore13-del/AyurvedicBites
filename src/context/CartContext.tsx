import { createContext, useContext, useState, type ReactNode } from 'react';

export interface CartItem {
  ingredientId: string;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addItem: (ingredientId: string, quantity: number) => void;
  addRecipeIngredients: (ingredients: Array<{ ingredientId: string; quantity: number }>) => void;
  removeItem: (ingredientId: string) => void;
  updateQuantity: (ingredientId: string, quantity: number) => void;
  clearCart: () => void;
  getItemCount: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = (ingredientId: string, quantity: number) => {
    setItems((prev) => {
      const existing = prev.find((item) => item.ingredientId === ingredientId);
      if (existing) {
        return prev.map((item) =>
          item.ingredientId === ingredientId
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { ingredientId, quantity }];
    });
  };

  const addRecipeIngredients = (recipeIngredients: Array<{ ingredientId: string; quantity: number }>) => {
    recipeIngredients.forEach((ing) => {
      addItem(ing.ingredientId, ing.quantity);
    });
  };

  const removeItem = (ingredientId: string) => {
    setItems((prev) => prev.filter((item) => item.ingredientId !== ingredientId));
  };

  const updateQuantity = (ingredientId: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(ingredientId);
      return;
    }
    setItems((prev) =>
      prev.map((item) =>
        item.ingredientId === ingredientId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const getItemCount = () => {
    return items.reduce((sum, item) => sum + item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        addRecipeIngredients,
        removeItem,
        updateQuantity,
        clearCart,
        getItemCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
