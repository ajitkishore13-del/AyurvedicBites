export interface Ingredient {
  id: string;
  name: string;
  unit: string;
  price: number;
  image?: string;
}

export interface Recipe {
  id: string;
  title: string;
  description: string;
  image: string;
  prepTime: string;
  cookTime: string;
  servings: number;
  dosha: string[];
  tags: string[];
  ingredients: Array<{
    ingredientId: string;
    quantity: number;
  }>;
  instructions: string[];
}

export const ingredients: Ingredient[] = [
  { id: 'turmeric', name: 'Organic Turmeric Powder', unit: 'g', price: 4.49 },
  { id: 'ginger', name: 'Fresh Ginger', unit: 'g', price: 0.39 },
  { id: 'cumin', name: 'Cumin Seeds', unit: 'g', price: 3.29 },
  { id: 'coriander', name: 'Coriander Powder', unit: 'g', price: 3.49 },
  { id: 'ghee', name: 'Grass-fed Ghee', unit: 'ml', price: 12.99 },
  { id: 'moongdal', name: 'Split Yellow Moong Dal', unit: 'g', price: 2.49 },
  { id: 'rice', name: 'Sona Masoori Rice', unit: 'g', price: 1.99 },
  { id: 'spinach', name: 'Fresh Spinach', unit: 'g', price: 0.29 },
  { id: 'tomato', name: 'Ripe Tomato', unit: 'g', price: 0.29 },
  { id: 'onion', name: 'Yellow Onion', unit: 'g', price: 0.19 },
  { id: 'garlic', name: 'Garlic', unit: 'g', price: 0.49 },
  { id: 'greenchili', name: 'Green Chili', unit: 'g', price: 0.39 },
  { id: 'blackpepper', name: 'Black Peppercorns', unit: 'g', price: 5.49 },
  { id: 'mustard', name: 'Mustard Seeds', unit: 'g', price: 2.99 },
  { id: 'curry', name: 'Curry Leaves', unit: 'g', price: 0.59 },
  { id: 'ashwagandha', name: 'Ashwagandha Root Powder', unit: 'g', price: 9.99 },
  { id: 'honey', name: 'Raw Wildflower Honey', unit: 'ml', price: 8.49 },
  { id: 'almonds', name: 'Raw Almonds', unit: 'g', price: 7.99 },
  { id: 'dates', name: 'Medjool Dates', unit: 'g', price: 6.49 },
  { id: 'cinnamon', name: 'Ceylon Cinnamon', unit: 'g', price: 4.99 },
  { id: 'cardamom', name: 'Green Cardamom Pods', unit: 'g', price: 12.99 },
  { id: 'milk', name: 'Whole Milk', unit: 'ml', price: 0.19 },
  { id: 'lentils', name: 'Red Lentils (Masoor Dal)', unit: 'g', price: 2.29 },
  { id: 'carrot', name: 'Carrots', unit: 'g', price: 0.25 },
  { id: 'pumpkin', name: 'Butternut Pumpkin', unit: 'g', price: 0.29 },
  { id: 'kale', name: 'Organic Kale', unit: 'g', price: 0.49 },
  { id: 'lemon', name: 'Lemon', unit: 'g', price: 0.39 },
  { id: 'fenugreek', name: 'Fenugreek Seeds', unit: 'g', price: 2.79 },
  { id: 'ajwain', name: 'Ajwain Seeds', unit: 'g', price: 3.49 },
];

export const recipes: Recipe[] = [
  {
    id: 'kitchari',
    title: 'Ayurvedic Kitchari',
    description: 'The classic Ayurvedic detox meal. Easy to digest, nourishing, and tridoshic.',
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=800',
    prepTime: '5 min',
    cookTime: '20 min',
    servings: 2,
    dosha: ['Vata', 'Pitta', 'Kapha'],
    tags: ['Detox', 'Comfort Food', 'One Pot'],
    ingredients: [
      { ingredientId: 'rice', quantity: 100 },
      { ingredientId: 'moongdal', quantity: 50 },
      { ingredientId: 'ghee', quantity: 15 },
      { ingredientId: 'turmeric', quantity: 5 },
      { ingredientId: 'ginger', quantity: 10 },
      { ingredientId: 'cumin', quantity: 5 },
      { ingredientId: 'mustard', quantity: 3 },
      { ingredientId: 'onion', quantity: 50 },
      { ingredientId: 'spinach', quantity: 100 },
    ],
    instructions: [
      'Rinse rice and moong dal until water runs clear.',
      'In a pot, heat ghee. Add mustard seeds, cumin, and ginger.',
      'Add onion and cook until translucent.',
      'Add rice, dal, turmeric, spinach, and 500ml water. Bring to boil.',
      'Reduce heat and simmer for 15 minutes until soft.',
      'Serve hot with a drizzle of ghee.',
    ],
  },
  {
    id: 'rasam',
    title: 'Peppery Tomato Rasam',
    description: 'Warming South Indian soup that aids digestion and clears congestion.',
    image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=800',
    prepTime: '5 min',
    cookTime: '15 min',
    servings: 4,
    dosha: ['Vata', 'Kapha'],
    tags: ['Soup', 'Digestive', 'Immunity'],
    ingredients: [
      { ingredientId: 'tomato', quantity: 200 },
      { ingredientId: 'lentils', quantity: 30 },
      { ingredientId: 'ghee', quantity: 10 },
      { ingredientId: 'blackpepper', quantity: 3 },
      { ingredientId: 'cumin', quantity: 3 },
      { ingredientId: 'mustard', quantity: 3 },
      { ingredientId: 'curry', quantity: 5 },
      { ingredientId: 'garlic', quantity: 10 },
      { ingredientId: 'ginger', quantity: 5 },
    ],
    instructions: [
      'Cook lentils and mash them lightly.',
      'In a pot, boil tomatoes with water. Mash and strain.',
      'Heat ghee, add mustard, cumin, black pepper, curry leaves, garlic, ginger.',
      'Add tomato pulp, cooked lentils, and 400ml water.',
      'Simmer for 5-10 minutes until frothy.',
      'Serve hot as a soup or with rice.',
    ],
  },
  {
    id: 'golden-milk',
    title: 'Golden Milk (Haldi Doodh)',
    description: 'Soothing bedtime drink with anti-inflammatory turmeric and warming spices.',
    image: 'https://images.unsplash.com/photo-1563822249548-9a72b6353cd1?w=800',
    prepTime: '2 min',
    cookTime: '5 min',
    servings: 1,
    dosha: ['Vata', 'Pitta'],
    tags: ['Drink', 'Bedtime', 'Anti-inflammatory'],
    ingredients: [
      { ingredientId: 'milk', quantity: 200 },
      { ingredientId: 'turmeric', quantity: 3 },
      { ingredientId: 'ginger', quantity: 3 },
      { ingredientId: 'cinnamon', quantity: 2 },
      { ingredientId: 'cardamom', quantity: 2 },
      { ingredientId: 'ghee', quantity: 5 },
      { ingredientId: 'honey', quantity: 10 },
    ],
    instructions: [
      'Heat milk in a saucepan over medium-low heat.',
      'Whisk in turmeric, ginger, cinnamon, and cardamom.',
      'Simmer for 3-5 minutes, whisking occasionally.',
      'Remove from heat, add ghee and honey.',
      'Pour into mug and enjoy warm before bed.',
    ],
  },
  {
    id: 'pumpkin-soup',
    title: 'Roasted Pumpkin & Ginger Soup',
    description: 'Sweet, warming, and grounding. Perfect for Vata season.',
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800',
    prepTime: '10 min',
    cookTime: '20 min',
    servings: 4,
    dosha: ['Vata'],
    tags: ['Soup', 'Seasonal', 'Comforting'],
    ingredients: [
      { ingredientId: 'pumpkin', quantity: 500 },
      { ingredientId: 'ginger', quantity: 15 },
      { ingredientId: 'onion', quantity: 70 },
      { ingredientId: 'ghee', quantity: 15 },
      { ingredientId: 'cumin', quantity: 5 },
      { ingredientId: 'turmeric', quantity: 3 },
      { ingredientId: 'carrot', quantity: 100 },
      { ingredientId: 'kale', quantity: 50 },
    ],
    instructions: [
      'Chop pumpkin and carrots into cubes.',
      'Heat ghee, add cumin and ginger. Sauté for 30 seconds.',
      'Add onion, cook until soft.',
      'Add pumpkin, carrots, turmeric, and 600ml water.',
      'Simmer for 15-20 minutes until soft.',
      'Blend until smooth, add kale and cook 2 more minutes.',
    ],
  },
  {
    id: 'spice-mix-energy',
    title: 'Ayurvedic Energy Balls',
    description: 'No-cook, nutrient-dense snack. Balances Vata with sweet, nourishing ingredients.',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=800',
    prepTime: '10 min',
    cookTime: '0 min',
    servings: 12,
    dosha: ['Vata', 'Pitta'],
    tags: ['Snack', 'No-Cook', 'Energy'],
    ingredients: [
      { ingredientId: 'dates', quantity: 150 },
      { ingredientId: 'almonds', quantity: 100 },
      { ingredientId: 'ashwagandha', quantity: 10 },
      { ingredientId: 'cinnamon', quantity: 3 },
      { ingredientId: 'cardamom', quantity: 2 },
      { ingredientId: 'ghee', quantity: 10 },
    ],
    instructions: [
      'Soak dates in warm water for 10 minutes if dry, then drain.',
      'Pulse almonds in food processor until coarse.',
      'Add dates, ashwagandha, cinnamon, cardamom, ghee. Blend until sticky.',
      'Roll into small balls (about 12).',
      'Store in fridge for up to 2 weeks.',
    ],
  },
];
