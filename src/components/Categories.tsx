import React from "react";
type Props = {
  categories: string[];
  selected: string;
  onCLick: (category: string) => void;
};

const Categories = ({ categories, selected, onCLick }: Props) => {
  return (
    <section className={"text-center p-4"}>
      <h2 className={"text-lg font-bold border-b border-sky-500 mb-2"}>
        Category
      </h2>
      <ul>
        {categories.map((category) => (
          <li
            className={`cursor-pointer hover:text-sky-500 ${
              selected === category && "text-sky-600"
            }`}
            key={category}
            onClick={() => onCLick(category)}
          >
            {category}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Categories;
