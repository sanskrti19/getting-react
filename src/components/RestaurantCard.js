const RestaurantCard = (props) => {
  console.log(props);
  
  return (
    <div className="res-card">
      <h3>Meghana Food</h3>
      <img
        alt="res-logo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2025/4/26/45b2e3da-4f79-42e1-bc8f-791b60113f02_823366db-ad13-42c6-a380-fc3544fafa82.jpg"
      />
       <h4>{props.resName}</h4>

       <h4>{props.cuisine}</h4>
      <h4>⭐ 4.4 stars</h4>
      <h4>⏱️ 38 minutes</h4>
    </div>
  );
};
export default RestaurantCard; 