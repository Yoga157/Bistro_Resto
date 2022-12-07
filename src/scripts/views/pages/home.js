/* eslint-disable import/extensions */
import RestaurantDbSource from '../../data/restaurant-source';
import { restoTemplate } from '../templates/template-restaurant.js';

const Home = {
  async render() {
    return `
        <section id="list-restaurants" class="card-container">
          
        </section>
      `;
  },

  async afterRender() {
    const data = await RestaurantDbSource.getRestaurantList();
    const restaurantsContainer = document.querySelector('#list-restaurants');
    data.restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += restoTemplate(restaurant);
    });
  },
};

export default Home;
