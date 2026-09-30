import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";
import { addItem } from "../CartSlice";

const plants = [
  { id: 1, category: "Air Purifying Plants", name: "Snake Plant", price: 15, image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=700&q=80", description: "A hardy favorite that thrives in many indoor spaces." },
  { id: 2, category: "Air Purifying Plants", name: "Spider Plant", price: 12, image: "https://images.unsplash.com/photo-1572688484438-313a6e50c333?auto=format&fit=crop&w=700&q=80", description: "Graceful striped leaves that brighten shelves and desks." },
  { id: 3, category: "Air Purifying Plants", name: "Peace Lily", price: 18, image: "https://images.unsplash.com/photo-1593482892540-5a3e21b5e350?auto=format&fit=crop&w=700&q=80", description: "Elegant green foliage with distinctive white blooms." },
  { id: 4, category: "Air Purifying Plants", name: "Boston Fern", price: 14, image: "https://images.unsplash.com/photo-1614594575810-4e1d2e4d51f6?auto=format&fit=crop&w=700&q=80", description: "Soft, arching fronds for lush indoor texture." },
  { id: 5, category: "Air Purifying Plants", name: "Rubber Plant", price: 20, image: "https://images.unsplash.com/photo-1602923668104-8f9e03f5783a?auto=format&fit=crop&w=700&q=80", description: "Bold glossy leaves and a strong upright shape." },
  { id: 6, category: "Air Purifying Plants", name: "Aloe Vera", price: 11, image: "https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?auto=format&fit=crop&w=700&q=80", description: "A practical succulent that prefers sunny windows." },
  { id: 7, category: "Aromatic Plants", name: "Lavender", price: 16, image: "https://images.unsplash.com/photo-1499002238440-d264edd596ec?auto=format&fit=crop&w=700&q=80", description: "Purple blooms with a naturally calming fragrance." },
  { id: 8, category: "Aromatic Plants", name: "Rosemary", price: 13, image: "https://images.unsplash.com/photo-1515586000433-45406d8e6662?auto=format&fit=crop&w=700&q=80", description: "A fragrant kitchen herb with needle-like leaves." },
  { id: 9, category: "Aromatic Plants", name: "Mint", price: 9, image: "https://images.unsplash.com/photo-1628557044797-f21a177c37ec?auto=format&fit=crop&w=700&q=80", description: "Fresh green leaves for drinks, dishes, and aroma." },
  { id: 10, category: "Aromatic Plants", name: "Basil", price: 10, image: "https://images.unsplash.com/photo-1618164436241-4473940d1f5c?auto=format&fit=crop&w=700&q=80", description: "Tender, flavorful leaves for a sunny kitchen." },
  { id: 11, category: "Aromatic Plants", name: "Jasmine", price: 22, image: "https://images.unsplash.com/photo-1605196560547-1f9cb6e1a8d4?auto=format&fit=crop&w=700&q=80", description: "Delicate flowers with a sweet, memorable scent." },
  { id: 12, category: "Aromatic Plants", name: "Lemon Balm", price: 12, image: "https://images.unsplash.com/photo-1585664811087-47f65abbad64?auto=format&fit=crop&w=700&q=80", description: "Soft citrus-scented leaves that grow quickly." },
  { id: 13, category: "Low Maintenance Plants", name: "ZZ Plant", price: 21, image: "https://images.unsplash.com/photo-1632207691143-643e2a9a9361?auto=format&fit=crop&w=700&q=80", description: "Glossy leaves and excellent tolerance for low light." },
  { id: 14, category: "Low Maintenance Plants", name: "Pothos", price: 13, image: "https://images.unsplash.com/photo-1595524147656-eb5d0a63e9a9?auto=format&fit=crop&w=700&q=80", description: "A fast-growing trailing plant for baskets and shelves." },
  { id: 15, category: "Low Maintenance Plants", name: "Jade Plant", price: 17, image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=700&q=80", description: "A compact succulent with thick oval leaves." },
  { id: 16, category: "Low Maintenance Plants", name: "Monstera", price: 25, image: "https://images.unsplash.com/photo-1614594575810-4e1d2e4d51f6?auto=format&fit=crop&w=700&q=80", description: "Dramatic split leaves for a tropical statement." },
  { id: 17, category: "Low Maintenance Plants", name: "Echeveria", price: 8, image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&w=700&q=80", description: "A neat rosette succulent with colorful leaves." },
  { id: 18, category: "Low Maintenance Plants", name: "Cast Iron Plant", price: 19, image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=700&q=80", description: "Reliable deep-green foliage for shaded corners." },
];

export default function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const categories = [...new Set(plants.map((plant) => plant.category))];
  const isAdded = (id) => cartItems.some((item) => item.id === id);

  return (
    <>
      <Header />
      <main className="catalog-page">
        <div className="page-heading"><p className="eyebrow green">Our Collection</p><h1>Find your perfect plant</h1><p>Browse 18 unique plants across three carefully selected categories.</p></div>
        {categories.map((category) => (
          <section className="product-section" key={category}>
            <h2>{category}</h2>
            <div className="product-grid">
              {plants.filter((plant) => plant.category === category).map((plant) => (
                <article className="product-card" key={plant.id}>
                  <span className="sale-badge">FRESH PICK</span>
                  <img src={plant.image} alt={plant.name} loading="lazy" />
                  <div className="product-info">
                    <h3>{plant.name}</h3>
                    <p className="description">{plant.description}</p>
                    <div className="product-footer">
                      <strong>${plant.price.toFixed(2)}</strong>
                      <button disabled={isAdded(plant.id)} onClick={() => dispatch(addItem(plant))}>
                        {isAdded(plant.id) ? "Added to Cart" : "Add to Cart"}
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </main>
    </>
  );
}
