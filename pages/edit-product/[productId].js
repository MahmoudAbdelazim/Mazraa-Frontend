import EditProductDetails from "@/components/EditProductDetails/EditProductDetails";
import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";
import NavList from "@/components/NavList/NavList";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const EditProduct = () => {
  const router = useRouter();
  const { productId } = router.query;
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);

  const { push, reload } = useRouter();

  useEffect(() => {
    if (localStorage.getItem("token") == null) {
      push("/login");
    }
  }, []);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      var requestOptions = {
        method: "GET",
        redirect: "follow",
      };

      try {
        const response = await fetch(
          process.env.NEXT_PUBLIC_BACKEND_URL +
            "/products/product/" +
            productId,
          requestOptions
        );
        if (response.status === 200) {
          const result = await response.json();
          result.product.productPhoto =
            "data:image/png;base64," + result.product.productPhoto;
          setProduct(result.product);
        }
      } catch (err) {
        console.error(err);
      }
      setLoading(false);
    };
    fetchProduct();
  }, [productId]);
  return (
    <>
      <Head>
        <title>تعديل منتج</title>
      </Head>
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
      <div style={{ textAlign: "center" }}>
        <NavBar />
        <NavList />
        <div
          style={{
            paddingTop: "30px",
            paddingRight: "50px",
            paddingLeft: "50px",
          }}
        >
          <h2>تعديـــل منتـــج</h2>
          {product && (
            <EditProductDetails
              productDetails={product}
              setProductDetails={setProduct}
            />
          )}
        </div>
        <hr />
        <Footer />
        <div style={{ height: "60px", backgroundColor: "#007C21" }}></div>
      </div>
    </>
  );
};

export default EditProduct;
