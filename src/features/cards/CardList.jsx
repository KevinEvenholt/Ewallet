import { useDispatch, useSelector } from "react-redux";
import Card from "./Card";
import { setActive, deleteCard } from "./cardsSlice";

export const CardList = () => {
  const { cards } = useSelector((state) => state.cards);

  console.log(cards);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Active Cards</h2>
      <ul>
        {cards.map((card, i) => {
          if (card.active) {
            return (
              <div className="card-card" key={i}>
                <Card key={i} {...card} />
              </div>
            );
          }
          return null;
        })}
      </ul>

      <h2>Inactive Cards</h2>
      <ul className="card-ul">
        {cards.map((card, i) => {
          if (!card.active) {
            return (
              <>
                <div
                  className="card-card"
                  key={i}
                  onClick={() => dispatch(setActive(i))}
                >
                  <Card key={i} {...card} />
                <button
                  id="deleteBtn"
                  onClick={() => {
                    dispatch(deleteCard(i));
                  }}
                >
                 <i className="fa-solid fa-x"></i>
                </button>
                </div>
              </>
            );
          }
          return null;
        })}
      </ul>
    </div>
  );
};
