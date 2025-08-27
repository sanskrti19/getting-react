const RestaurantCard = ({ resData }) => {
  const { name, cuisines, avgRating, sla, cloudinaryImageId } = resData;

  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={
          cloudinaryImageId
            ? `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${cloudinaryImageId}`
            : "https://via.placeholder.com/508x320?text=No+Image"
        }
        alt={name}
      />
      <h3>{name}</h3>
      <h4>{cuisines?.join(", ")}</h4>
      <h4>⭐ {avgRating}</h4>
      <h4>⏱ {sla?.deliveryTime} min</h4>
    </div>
  );
};
