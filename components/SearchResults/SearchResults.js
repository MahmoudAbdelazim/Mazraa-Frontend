import { useEffect, useState } from "react";
import ProductReview from "../ProductPreview/ProductPreview";
import styles from "./SearchResults.module.css";

const SearchResults = ({ searchText }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    const searchProducts = async () => {
      setLoading(true);
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        searchText: searchText,
      });

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      try {
        const response = await fetch(
          process.env.NEXT_PUBLIC_BACKEND_URL + "/products/searchProducts",
          requestOptions
        );
        if (response.status === 200) {
          const result = await response.json();
          for (let i = 0; i < result.products?.length; i++) {
            result.products[i].productPhoto =
              "data:image/png;base64," + result.products[i].productPhoto;
          }
          setProducts(result.products);
          if (result.products.length === 0) {
            setMsg("عفوًا، لا يوجد نتائج لهذا البحث");
          } else {
            setMsg("");
          }
        }
      } catch (err) {
        console.error(err);
      }
      setLoading(false);
    };

    searchProducts();
  }, [searchText]);

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
      <p>{msg}</p>
      {products.map((product) => {
        return (
          <a key={product.id} href={`/product/${product.title.split(" ").join("-") + "--ID--" + product.id}`}>
            <ProductReview product={product} />
          </a>
        );
      })}
    </div>
  );
};

export default SearchResults;
