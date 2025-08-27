const Shimmer = () => {
  return (
    <div className="shimmer-container">
      {Array(6).fill("").map((_, i) => (
        <div key={i} className="shimmer-card"></div>
      ))}
    </div>
  );
};

export default Shimmer;
