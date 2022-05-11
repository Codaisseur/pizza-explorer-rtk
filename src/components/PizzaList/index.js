import { useSelector, useDispatch } from "react-redux";
import { selectUser, selectUserFavPizzas } from "../../store/user/selectors";
import { selectPizzas } from "../../store/pizzas/selectors";
// import the action
import { toggleFav } from "../../store/user/slice";
import "./styles.scss";

// 1. add a button to the pizzas to toggle favourites DONE.
// 2. want to display if a specific pizza is a fav or the user. DONE
// Need: user.favorites + pizzas.allPizzas

// 3. Make the button work! if we click it should add/remove from the user
//
// favourites array

const PizzaList = () => {
  const user = useSelector(selectUser);
  const pizzas = useSelector(selectPizzas);
  const favs = useSelector(selectUserFavPizzas);
  const dispatch = useDispatch();

  console.log("favs", favs);

  const onFavClick = (pizzaId) => {
    dispatch(toggleFav(pizzaId));
  };

  return (
    <div className="pizza-list">
      <h1>Pizza Explorer</h1>
      <p>
        Welcome back, <strong>{user.name}</strong>! There are{" "}
        <strong>{pizzas.length}</strong> pizzas in total:
      </p>
      <ul className="pizzas">
        {pizzas.map((p) => (
          <li
            key={p.id}
            className="pizza"
            style={{ backgroundImage: `url(${p.image})` }}
          >
            <h4>{p.name}</h4>
            <button
              className={`fav-toggle ${favs.includes(p.id) ? "fav" : ""}`}
              onClick={() => onFavClick(p.id)}
            >
              {favs.includes(p.id) ? "♥" : "♡"}
            </button>
            <div className="overlay">
              <p>{p.description}</p>
              <span>
                Bought: <strong>{p.bought}</strong> times!
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { PizzaList };
