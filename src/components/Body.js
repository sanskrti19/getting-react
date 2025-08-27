import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]); // keep original
  const [loading, setLoading] = useState(true);
  const [searchResult, setSearchResult] = useState("");

  // ✅ Fetch from Swiggy API JSON
 useEffect(() => {
  fetch(
    "https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=18.5462313&lng=73.90395099999999&carousel=true&third_party_vendor=1"
  )
    .then((res) => res.json())
    .then((data) => {
      // Extract restaurants safely
      const restaurants =
        data?.data?.success?.cards
          ?.map((card) => card?.card?.card?.info)
          .filter(Boolean) || [];

      setListOfRestaurants(restaurants);
      setLoading(false);
    })
    .catch((err) => {
      console.log("Error fetching restaurants:", err);
      setLoading(false);
    });
}, []);


  // 🔹 Filter Functions
  const handleTopRated = () => {
    const filtered = allRestaurants.filter(
      (res) => parseFloat(res.info.avgRating) > 4
    );
    setListOfRestaurants(filtered);
  };

  const handleFastDelivery = () => {
    const filtered = allRestaurants.filter(
      (res) => res.info.sla?.deliveryTime < 30
    );
    setListOfRestaurants(filtered);
  };

  const handleReset = () => {
    setListOfRestaurants(allRestaurants);
  };

  // 🔹 Search Function
  const handleSearch = () => {
    const filtered = allRestaurants.filter((res) =>
      res.info.name.toLowerCase().includes(searchResult.toLowerCase())
    );
    setListOfRestaurants(filtered);
  };

  if (loading) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchResult}
            onChange={(e) => setSearchResult(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        <button className="rfilter-btn" onClick={handleTopRated}>
          Top Rated Restaurants
        </button>
        <button className="rfilter-btn" onClick={handleFastDelivery}>
          Fast Delivery (&lt;30 min)
        </button>
        <button className="rfilter-btn" onClick={handleReset}>
          Reset Filters
        </button>
      </div>

      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};



export default Body;
