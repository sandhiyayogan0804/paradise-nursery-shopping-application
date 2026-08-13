import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./CartSlice";

const plants = [
  // Air Purifying Plants
  {
    id: 1,
    name: "Snake Plant",
    price: 15,
    category: "Air Purifying Plants",
    image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee",
  },
  {
    id: 2,
    name: "Spider Plant",
    price: 12,
    category: "Air Purifying Plants",
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411",
  },
  {
    id: 3,
    name: "Peace Lily",
    price: 18,
    category: "Air Purifying Plants",
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
  },
  {
    id: 4,
    name: "Aloe Vera",
    price: 10,
    category: "Air Purifying Plants",
    image: "https://images.unsplash.com/photo-1596547609652-9cf5d8d76921",
  },
  {
    id: 5,
    name: "Rubber Plant",
    price: 20,
    category: "Air Purifying Plants",
    image: "https://images.unsplash.com/photo-1614594575810-9e11f55b5e0c",
  },
  {
    id: 6,
    name: "Boston Fern",
    price: 14,
    category: "Air Purifying Plants",
    image: "https://images.unsplash.com/photo-1512428813834-c702c7702b78",
  },

  // Aromatic Plants
  {
    id: 7,
    name: "Lavender",
    price: 13,
    category: "Aromatic Plants",
    image: "https://images.unsplash.com/photo-1499002238440-d264edd596ec",
  },
  {
    id: 8,
    name: "Rosemary",
    price: 9,
    category: "Aromatic Plants",
    image: "https://images.unsplash.com/photo-1515586000433-45406d8e6662",
  },
  {
    id: 9,
    name: "Mint",
    price: 8,
    category: "Aromatic Plants",
    image: "https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1",
  },
  {
    id: 10,
    name: "Basil",
    price: 7,
    category: "Aromatic Plants",
    image: "https://images.unsplash.com/photo-1618164435735-413d3b066c9a",
  },
  {
    id: 11,
    name: "Jasmine",
    price: 16,
    category: "Aromatic Plants",
    image: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd",
  },
  {
    id: 12,
    name: "Lemon Balm",
    price: 11,
    category: "Aromatic Plants",
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae",
  },

  // Low Maintenance Plants
  {
    id: 13,
    name: "ZZ Plant",
    price: 22,
    category: "Low Maintenance Plants",
    image: "https://images.unsplash.com/photo-1632328491926-1c77d0e9e302",
  },
  {
    id: 14,
    name: "Jade Plant",
    price: 15,
    category: "Low Maintenance Plants",
    image: "https://images.unsplash.com/photo-1509423350716-97f2360af8e4",
  },
  {
    id: 15,
    name: "Cactus",
    price: 10,
    category: "Low Maintenance Plants",
    image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc",
  },
  {
    id: 16,
    name: "Pothos",
    price: 13,
    category: "Low Maintenance Plants",
    image: "https://images.unsplash.com/photo-1597055181300-e3633a917c9c",
  },
  {
    id: 17,
    name: "Monstera",
    price: 25,
    category: "Low Maintenance Plants",
    image: "https://images.unsplash.com/photo-1614594575810-9e11f55b5e0c",
  },
  {
    id: 18,
    name: "Succulent",
    price: 8,
    category: "Low Maintenance Plants",
    image: "https://images.unsplash.com/photo-1459156212016-c812468e2115",
  },
];

function ProductList() {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  const isInCart = (id) => {
    return cartItems.some((item) => item.id === id);
  };

  const categories = [...new Set(plants.map((plant) => plant.category))];

  return (
    <div>
      <nav>
        <h2>Paradise Nursery</h2>

        <div>
          <a href="/">Home</a>{" "}
          <a href="/plants">Plants</a>{" "}
          <a href="/cart">Cart ({cartCount})</a>
        </div>
      </nav>

      <h1>Our Plants</h1>

      {categories.map((category) => (
        <section key={category}>
          <h2>{category}</h2>

          <div className="plant-grid">
            {plants
              .filter((plant) => plant.category === category)
              .map((plant) => (
                <div className="plant-card" key={plant.id}>
                  <img
                    src={plant.image}
                    alt={plant.name}
                    width="200"
                    height="200"
                  />

                  <h3>{plant.name}</h3>

                  <p>${plant.price}</p>

                  <button
                    onClick={() => handleAddToCart(plant)}
                    disabled={isInCart(plant.id)}
                  >
                    {isInCart(plant.id)
                      ? "Added to Cart"
                      : "Add to Cart"}
                  </button>
                </div>
              ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export default ProductList;
