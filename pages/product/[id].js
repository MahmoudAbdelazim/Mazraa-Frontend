import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";
import NavList from "@/components/NavList/NavList";
import ProductDetails from "@/components/ProductDetails/ProductDetails";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

// export async function getStaticPaths() {
//   try {
//     const res = await fetch(
//       process.env.NEXT_PUBLIC_BACKEND_URL + "/products/allProducts"
//     );
//     const data = await res.json();
//     const products = data.products;
//     const paths = products.map((product) => ({
//       params: {
//         id: product.title.split(" ").join("-") + "--ID--" + product.id,
//       },
//     }));
//     return { paths, fallback: "blocking" };
//   } catch (err) {
//     console.error(err);
//   }
// }

// export async function getStaticProps({ params }) {
//   const idx = params.id.indexOf("--ID--");
//   const id = Number(params.id.substring(idx + 6));
//   const res = await fetch(
//     process.env.NEXT_PUBLIC_BACKEND_URL + "/products/product/" + Number(id)
//   );
//   const data = await res.json();
//   const formattedText = data.product.details
//     .replace(/ /g, "&nbsp;")
//     .replace(/\n/g, "<br>");
//   data.product.details = formattedText;
//   return {
//     props: {
//       product: data.product,
//     },
//   };
// }

const Product = () => {
  const [loading, setLoading] = useState(false);
  const [productPhoto, setProductPhoto] = useState(null);
  const [product, setProduct] = useState({});

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(
          process.env.NEXT_PUBLIC_BACKEND_URL +
            "/products/product/" +
            Number(id)
        );
        const data = await res.json();
        setProduct(data.product);
      } catch (err) {
        console.error(err);
      }
    };
    if (id) {
      fetchProduct();
    }
  }, [id]);

  useEffect(() => {
    const fetchProductPhoto = async () => {
      const res = await fetch(
        process.env.NEXT_PUBLIC_BACKEND_URL +
          "/products/productPhoto/" +
          Number(product.id)
      );
      const data = await res.json();
      console.log(data);
      setProductPhoto("data:image/png;base64," + data.photo);
    };
    if (product) {
      fetchProductPhoto();
    }
  }, [product]);
  return (
    <>
      <Head>
        <title>{product.title}</title>
        <meta
          name="description"
          content={product.title + " " + product.details}
        />
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
        <ProductDetails product={product} productPhoto={productPhoto} />
        <hr />
        <Footer />
        <div style={{ height: "60px", backgroundColor: "#007C21" }}></div>
      </div>
    </>
  );
};

export default Product;
