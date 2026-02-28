import { resList } from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);

  return (
    <div className="body">
      <input
        className="search"
        type="text"
        placeholder="Search for restaurant, cuisine or a dish"
      />
      <button className="search-btn">Search</button>
      <button
        className="filter-btn"
        onClick={() => {
          const filteredList = listOfRestaurants.filter(
            (res) => res.data.avgRating > 4,
          );
          setListOfRestaurants(filteredList);
        }}
      >
        Top Rated Restaurants
      </button>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => {
          return (
            <RestaurantCard
              key={restaurant.data.id}
              resData={restaurant.data}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
