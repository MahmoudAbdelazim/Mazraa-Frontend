import AddProductDetails from "@/components/AddProductDetails/AddProductDetails";
import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";
import NavList from "@/components/NavList/NavList";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";

const AddProduct = () => {
  const { push, reload } = useRouter();

  useEffect(() => {
    if (localStorage.getItem("token") == null) {
      push("/login");
    }
  }, []);
  return (
    <>
      <Head>
        <title>المزرعة - إضافة منتج جديد</title>
      </Head>
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
          <h2>نشــر منتــج جديــد</h2>
          <AddProductDetails />
        </div>
        <hr />
        <Footer />
        <div style={{ height: "60px", backgroundColor: "#007C21" }}></div>
      </div>
    </>
  );
};

export default AddProduct;
