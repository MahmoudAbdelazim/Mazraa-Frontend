import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ProductReview from "../ProductPreview/ProductPreview";
import styles from "./MyProductsDetails.module.css";

const MyProductsDetails = () => {
  const [myProducts, setMyProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const {push, reload} = useRouter();

  useEffect(() => {
    fetchMyProducts();
  }, []);

  const fetchMyProducts = async () => {
    setLoading(true);
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + localStorage["token"]);

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_BACKEND_URL + "/products/myProducts",
        requestOptions
      );
      if (response.status === 200) {
        const result = await response.json();
        for (let i = 0; i < result.products?.length; i++) {
          result.products[i].productPhoto =
            "data:image/png;base64," + result.products[i].productPhoto;
        }
        if (result.products.length === 0) {
          setMsg("لا يوجـــد لديـــك أى منتجـــات علــى المزرعــــة")
        }
        setMyProducts(result.products);
      }
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

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
      <button className={styles.addProduct} onClick={() => push("/add-product")}>
        إضافـــة منتــــج جديـــد
      </button>
      <div className={styles.productsContainer}>
      {myProducts.map((product) => {
        return (
          <a key={product.id} href={`/edit-product/${product.id}`}>
            <ProductReview product={product} />
          </a>
        );
      })}
      </div>
    </div>
  );
};

export default MyProductsDetails;
