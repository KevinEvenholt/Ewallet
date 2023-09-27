const Card = ({ cardHolder, cardNumber, valid, vendor }) => {
  return (
    <div id="card-body" className={`card-body-${vendor}`}>
      {/* <img className="vendor-logo" src={`src/assets/${vendor}.png`} alt="" /> */}
      <div className="card-information">
        {/* <div className="card-blip">
          <img className="blip-logo" src="src\assets\blip.png" alt="" />
        </div>
        <div className="card-chip">
          <img className="chip-logo" src="src\assets\chip.png" alt="" />
        </div> */}
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
      {/* <div className="card-card-card">
        <div className="card-logo">
          <img
            className="vendor-logo"
            src={`src/assets/${vendor}.png`}
            alt=""
          />
        </div>
      </div> */}
    </div>
  );
};

export default Card;
