export function CreditCard(props) {
  return (
    <div>
      <div
        className="card_container"
        style={{
          backgroundColor: `${props.bgColor}`,
          color: `${props.color}`,
        }}
      >
        <p className="card_type">{props.type}</p>
        <h1>**** **** **** {props.number.slice(-4)}</h1>
        <div className="expiration">
          <p>Expires: {props.expirationMonth}</p>
          <p>{props.expirationYear}</p>
          <p className="bank_name">{props.bank}</p>
        </div>
        <p className="owner">{props.owner}</p>
      </div>
    </div>
  );
}
