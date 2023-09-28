const Card = ({ cardHolder, cardNumber, valid, vendor }) => {
  return (
    <div id="card-body" className={`card-body-${vendor}`}>
      <div className="card-information">
        <div className="card-number-div">
          <h2 className="card-number">{cardNumber}</h2>
        </div>
        <div className="card-info">
          <div className="card-holder-div">
            <p className="card-cardholder">CARDHOLDER NAME</p>
            <h3 className="card-name">{cardHolder}</h3>
          </div>
          <div className="card-valid-div">
            <p className="card-validthru">VALID THRU</p>
            <h3 className="card-validdate">{valid}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
