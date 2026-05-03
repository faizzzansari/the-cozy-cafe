export type MenuItem = {
  id: number;
  name: string;
  category: "Coffee" | "Pizza" | "Desserts";
  price: number;
  description: string;
  image: string;
};

export const menu: MenuItem[] = [
  {
    id: 1,
    name: "Espresso Classico",
    category: "Coffee",
    price: 3.5,
    description: "A bold double shot of our house blend, rich crema on top.",
    image: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=800&q=80",
  },
  {
    id: 2,
    name: "Caramel Latte",
    category: "Coffee",
    price: 4.75,
    description: "Velvety steamed milk, espresso and golden caramel drizzle.",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800&q=80",
  },
  {
    id: 3,
    name: "Iced Mocha",
    category: "Coffee",
    price: 5.25,
    description: "Cold brew, dark chocolate and a swirl of fresh cream.",
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=800&q=80",
  },
  {
    id: 4,
    name: "Margherita",
    category: "Pizza",
    price: 11.0,
    description: "San Marzano tomato, fior di latte and fresh basil leaves.",
    image: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=800&q=80",
  },
  {
    id: 5,
    name: "Truffle Funghi",
    category: "Pizza",
    price: 14.5,
    description: "Wild mushrooms, mozzarella and a drizzle of truffle oil.",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80",
  },
  {
    id: 6,
    name: "Pepperoni Royale",
    category: "Pizza",
    price: 13.0,
    description: "Spicy pepperoni, smoked mozzarella and oregano.",
    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=800&q=80",
  },
  {
    id: 7,
    name: "Tiramisu",
    category: "Desserts",
    price: 6.5,
    description: "Layers of espresso-soaked ladyfingers and mascarpone cream.",
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800&q=80",
  },
  {
    id: 8,
    name: "Molten Chocolate",
    category: "Desserts",
    price: 7.0,
    description: "Warm dark chocolate cake with a flowing fudge center.",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=800&q=80",
  },
  {
    id: 9,
    name: "Berry Cheesecake",
    category: "Desserts",
    price: 6.75,
    description: "New York style cheesecake with a tangy berry compote.",
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800&q=80",
  },
];

export const categories = ["All", "Coffee", "Pizza", "Desserts"] as const;
