import { recipes } from "./data.js";

export default function App() {
  return (
    <div>
      <h1>Recipes</h1>
      {recipes.map((obj, index) => (
        <div>
          <h2>{obj.name}</h2>
          <ul>
            {obj.ingredients.map((ing, i) => (
              <li>{ing}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
