import { useState } from "react";
import { useEffect } from "react";
import ProductReview from "../ProductPreview/ProductPreview";
import styles from "./Products.module.css";

const Products = ({ category }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      var requestOptions = {
        method: "GET",
      };
      try {
        let url = process.env.NEXT_PUBLIC_BACKEND_URL + "/products/latestProducts";
        if (category) {
          url =
          process.env.NEXT_PUBLIC_BACKEND_URL + "/products/categoryProducts/" + category.id;
        }
        const response = await fetch(url, requestOptions);
        if (response.status === 200) {
          const result = await response.json();
          for (let i = 0; i < result.products?.length; i++) {
            result.products[i].productPhoto =
              "data:image/png;base64," + result.products[i].productPhoto;
          }
          setProducts(result.products);
        }
      } catch (err) {
        console.error(err);
      }
      setLoading(false);
    };

    fetchProducts();
  }, [category]);

  return (
    <div className={styles.products}>
      {loading && (
        <>
          <div className="loading-overlay"></div>
          <div className="loading-overlay-image-container">
            <img
              src="/images/loading.gif"
              className="loading-overlay-img"
              alt="Loading GIF"
            />
          </div>
        </>
      )}
      {products.map((product) => {
        return (
          <a key={product.id} href={`/product/${product.id}`}>
            <ProductReview product={product} />
          </a>
        );
      })}
    </div>
  );
};

export default Products;
