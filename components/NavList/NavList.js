import { useEffect, useState } from "react";
import styles from "./NavList.module.css";

const NavList = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      var requestOptions = {
        method: "GET",
        redirect: "follow",
      };
      try {
        const response = await fetch(
          process.env.NEXT_PUBLIC_BACKEND_URL + "/categories/allCategories",
          requestOptions
        );
        if (response.status === 200) {
          const result = await response.json();
          setCategories(result.categories);
        }
      } catch (err) {
        console.error(err);
      }
    };
    fetchCategories();
  }, []);
  return (
    <div className={styles.navList}>
      <ul>
        {categories.map((category) => {
          return (
            <li key={category.id}>
              <a href={`/category/${category.categoryNameArabic.split(" ").join("-") + "--ID--" + category.id}`}>
                {category.categoryNameArabic}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NavList;
