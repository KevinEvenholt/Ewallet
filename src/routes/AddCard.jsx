import Card from "../features/cards/Card";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  setCardNumber,
  setCardValid,
  setCardVendor,
} from "../features/cards/cardsSlice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const AddCard = () => {
  const { cards } = useSelector((state) => state.cards);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const navigateHome = () => {
    navigate("/");
  };
  const [isValid, setIsValid] = useState(false);
  const handleInputChange = () => {
    const cardNumber = document.querySelector("#number-input").value;
    const date = document.querySelector("#validthru-input").value;
    const ccv = document.querySelector("#ccv").value;

    if (
      cardNumber.length === 19 &&
      ccv.length === 3 &&
      date &&
      cards.length < 4
    ) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  return (
    <div className="new-card-div">
      <Card {...cards[0]} />
      <label htmlFor="name-input">CARDHOLDER NAME</label>
      <input type="text" id="name-input" value={cards[0].cardHolder} disabled />
      <label htmlFor="number-input">CARD NUMBER</label>
      <input
        onChange={(e) => {
          let formattedValue = e.target.value
            .replace(/[^0-9]/g, "")
            .slice(0, 16);
          let spacedValue = formattedValue.replace(/(\d{4})/g, "$1 ").trim();
          setCardNumber(spacedValue);
          document.querySelector(".card-number").innerHTML = spacedValue;
          handleInputChange();
        }}
        onInput={(e) => {
          e.target.value = e.target.value.replace(/[^0-9]/g, "").slice(0, 16);
          let formattedValue = e.target.value
            .replace(/[^0-9]/g, "")
            .slice(0, 16);
          let spacedValue = formattedValue.replace(/(\d{4})/g, "$1 ").trim();
          e.target.value = spacedValue;
        }}
        id="number-input"
        type="tel"
        inputMode="numeric"
        autoComplete="cc-number"
        maxLength="19"
        required
      />
      <div>
        
      </div>
      <label htmlFor="validthru-input">VALID THRU</label>
      <input
        onChange={(e) => {
          const inputDate = e.target.value;
          const formattedDate =
            inputDate.slice(5) + "/" + inputDate.slice(2, 4);
          dispatch(setCardValid(formattedDate));
          document.querySelector(".card-validdate").innerHTML = formattedDate;
          handleInputChange();
        }}
        type="month"
        id="validthru-input"
        required
      />
      <label htmlFor="ccv">CCV</label>
      <input
        type="tel"
        id="ccv"
        maxLength={3}
        onChange={handleInputChange}
        required
      />
      <select
        name="vendor"
        id="vendor"
        onChange={(e) => {
          let selectedVendor = e.target.value;
          dispatch(setCardVendor(selectedVendor));
          let vendorLogo = document.querySelector("#card-body");
          vendorLogo.className = `card-body-${selectedVendor}`;
        }}
        required
      >
        <option selected disabled>Select Vendor</option>
        <option value="nordea">Nordea</option>
        <option value="handelsbanken">Handelsbanken</option>
        <option value="americanexpress">AMERICAN EXPRESS</option>
      </select>
      <button
        onClick={() => {
          let cardNumber = document.querySelector("#number-input").value;
          let cardHolder = document.querySelector("#name-input").value;
          let date = document.querySelector("#validthru-input").value;
          let valid = date.slice(5) + "/" + date.slice(2, 4);
          let ccv = document.querySelector("#ccv").value;
          let vendor = document.querySelector("#vendor").value;
          let data = {
            cardNumber,
            cardHolder,
            valid,
            ccv,
            vendor,
            active: false,
          };
          console.log(data);
          if (isValid) {
            dispatch(increment(data));
            navigateHome();
          }
        }}
        disabled={!isValid} // Disable the button if isValid is false
      >
        ADD NEW CARD
      </button>
      <button onClick={navigateHome}>HOME</button>
    </div>
  );
};

export default AddCard;
