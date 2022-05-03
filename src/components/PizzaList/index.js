import { useSelector } from "react-redux";
import { selectUser } from "../../store/user/selectors";
import { selectPizzas } from "../../store/pizzas/selectors";

const PizzaList = () => {
  const user = useSelector(selectUser);
  const pizzas = useSelector(selectPizzas);
  return (
    <div>
      <h1>Pizza Explorer</h1>
      <p>
        Welcome back, <strong>{user.name}</strong>! There are{" "}
        <strong>{pizzas.length}</strong> pizzas in total:
      </p>
      <ul>
        {pizzas.map((p) => (
          <li key={p.id}>
            <h4>{p.name}</h4>
            <button>{user.favorites.includes(p.id) ? "♥" : "♡"}</button>
            <p>{p.description}</p>
            <span>
              Bought: <strong>{p.bought}</strong> times!
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { PizzaList };
