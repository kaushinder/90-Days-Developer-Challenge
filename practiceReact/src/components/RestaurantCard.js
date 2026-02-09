const RestaurantCard = () => {
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src="https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?cs=srgb&dl=pexels-janetrangdoan-1092730.jpg&fm=jpg"
        alt="res-logo"
      ></img>
      <h3>Restaurant Name</h3>
      <p>Rating- 4.3🌟</p>
      <p>Delivery Time - 30 min</p>
      <p>Cost For Two - 200 rupees</p>
      <p>Cuisine - Italian</p>
    </div>
  );
};

export default RestaurantCard;
