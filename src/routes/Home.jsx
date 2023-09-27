import { useEffect } from "react";
import { CardList } from "../features/cards/CardList";
import { Link } from "react-router-dom";
import { getRandomUser } from "../features/cards/cardsSlice";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  const { cards } = useSelector((state) => state.cards);

  useEffect(() => {
    if (cards.length === 0) dispatch(getRandomUser());
  }, [cards, dispatch]);

  return (
    <>
      <h1>E-WALLET</h1>
      <CardList />
      <Link className="new-card-button" to="/addcard">
        ADD NEW CARD
      </Link>
    </>
  );
};

export default Home;
