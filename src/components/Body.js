import RestaurantCard from "./RestaurantCard";
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard 
        resName="Meghana Foods"
         cuisine="Biryani , indian " />
        <RestaurantCard
         resName="KFC" 
        cuisine="burger"/>
        <RestaurantCard 
        resName="Ankita Kitchen"
         cuisine="south Indian " />

       
      </div>
    </div>
  );
};
export default Body; 