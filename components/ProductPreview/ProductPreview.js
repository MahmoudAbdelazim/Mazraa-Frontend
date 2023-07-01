import { useEffect, useState } from "react";
import styles from "./ProductPreview.module.css";

const ProductReview = ({ product }) => {
  const [category, setCategory] = useState({});

  useEffect(() => {
    const fetchCategory = async () => {
      var requestOptions = {
        method: "GET",
        redirect: "follow",
      };
      try {
        const response = await fetch(
          process.env.NEXT_PUBLIC_BACKEND_URL + "/categories/category/" + product.category,
          requestOptions
        );
        if (response.status === 200) {
          const result = await response.json();
          setCategory(result.category);
        }
      } catch (err) {
        console.error(err);
      }
    };
    fetchCategory();
  }, [product.category]);

  return (
    <div className={styles.productPreview}>
      <img src={product.productPhoto} alt="product preview" />
      <h3>{product.title}</h3>
      <p className={styles.category}>{category?.categoryNameArabic}</p>
      <p className={styles.price}>{product.price} EGP</p>
      <div className={styles.container}>
        <p className={styles.location}>{product.location}</p>
        <p className={styles.createdAt}>{new Date(product.createdAt).toLocaleDateString('ar')}</p>
      </div>
    </div>
  );
};

export default ProductReview;
