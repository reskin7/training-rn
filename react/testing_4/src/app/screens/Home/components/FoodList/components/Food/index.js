import React from 'react';

import './styles.css';

function Food({ food }) {
  return (
    <div class="food-container">
      <img class="food-image" src={food.imageUrl} alt={food.name} />
      <h1>{food.name}</h1>
      <p>{food.description}</p>
    </div>
  );
}

export default Food;
