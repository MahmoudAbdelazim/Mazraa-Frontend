import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";
import NavList from "@/components/NavList/NavList";
import Products from "@/components/Products/Products";
import Slideshow from "@/components/Slideshow/Slideshow";
import Head from "next/head";

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>المزرعة</title>
        <meta
          name="description"
          content={
            "المزرعة هو موقع و تطبيق الكترونى لبيع و تسويق منتجات زراعية و الات زراعية و تسويق محاصيل و مشاركة محاصيل و حدائق ريفية"
          }
        />
      </Head>
      <div style={{ textAlign: "center" }}>
        <NavBar />
        <NavList />
        <Slideshow />
        <div
          style={{
            paddingTop: "30px",
            paddingRight: "50px",
            paddingLeft: "50px",
          }}
        >
          <h2>نظرة عامة</h2>
          <Products />
        </div>
        <hr />
        <Footer />
        <div style={{ height: "60px", backgroundColor: "#007C21" }}></div>
      </div>
    </>
  );
}
