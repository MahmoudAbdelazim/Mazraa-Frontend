import { useEffect, useState } from "react";
import styles from "./Slideshow.module.css";

const Slideshow = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      var requestOptions = {
        method: "GET",
      };
      try {
        let url = process.env.NEXT_PUBLIC_BACKEND_URL + "/products/allProducts";
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
    };

    fetchProducts();
  }, []);

  return (
    <div className={styles.slideshow}>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {products.map((product, idx) => {
            return (
              <div key={product.id} className={`carousel-item ${idx === 0 ? 'active' : ''}`}>
                <img
                  src={product.productPhoto}
                  className="d-block w-100"
                  alt="..."
                />
              </div>
            );
          })}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Slideshow;
