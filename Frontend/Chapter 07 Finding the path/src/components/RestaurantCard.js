import { RES_LOGO } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
  } = resData;

  return (
    <div style={{ padding: "10px", margin: "10px", width: "220px", backgroundColor: "#f0f0f0", borderRadius: "10px" }}>
      
      <img
        alt="res-logo"
        src={RES_LOGO + cloudinaryImageId}
        style={{ width: "100%", height: "140px", borderRadius: "8px" }}
      />

      <h3>{name}</h3>
      <p>{cuisines.join(", ")}</p>
      <p>⭐ {avgRating}</p>
      <p>₹{costForTwo / 100} for two</p>
      <p>{deliveryTime} mins</p>

    </div>
  );
};

export default RestaurantCard;