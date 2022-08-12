import { categories } from "../../categories";
import { Card } from "../Card";
import "./styles.scss"

const Categories = () => {
  return (
    <div className="categories-container">
      {categories.map(content => <Card key={content.id} content={content} />)}
    </div>
  );
}

export default Categories;
