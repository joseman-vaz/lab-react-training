export function DriverCard(props) {
  return (
    <div>
      <div className="driver-card">
        <div className="image-container">
          <img src={props.img} alt="Driver" className="driver-img" />
        </div>
        <div className="driver-info">
          <h2>{props.name}</h2>
          <div className="rating">
            {Array.from({ length: Math.round(props.rating) }).map(
              (_, index) => (
                <span key={index}>★</span>
              )
            )}
            {Array.from({ length: 5 - Math.round(props.rating) }).map(
              (_, index) => (
                <span key={index}>☆</span>
              )
            )}
          </div>
          <p>
            {props.car.model} - {props.car.licensePlate}
          </p>
        </div>
      </div>
    </div>
  );
}
