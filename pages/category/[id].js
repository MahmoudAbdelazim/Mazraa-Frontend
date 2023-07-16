import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";
import NavList from "@/components/NavList/NavList";
import Products from "@/components/Products/Products";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export async function getStaticPaths() {
  try {
    const res = await fetch(
      process.env.NEXT_PUBLIC_BACKEND_URL + "/categories/allCategories"
    );
    const data = await res.json();
    const categories = data.categories;
    const paths = categories.map((category) => ({
      params: {
        id:
          category.categoryNameArabic.split(" ").join("-") +
          "--ID--" +
          category.id,
      },
    }));
    return { paths, fallback: "blocking" };
  } catch (err) {
    console.error(err);
  }
}

export async function getStaticProps({ params }) {
  const idx = params.id.indexOf("--ID--");
  const id = Number(params.id.substring(idx + 6));
  const res = await fetch(
    process.env.NEXT_PUBLIC_BACKEND_URL + "/categories/category/" + Number(id)
  );
  const data = await res.json();
  return {
    props: {
      category: data.category,
    },
  };
}

const Category = ({ category }) => {
  return (
    <>
      <Head>
        <title>{category.categoryNameArabic}</title>
        <meta
          name="description"
          content={
            category.categoryNameArabic +
            " بيع تسويق منتجات زراعية المزرعة زراعة "
          }
        />
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
          <h2>{category.categoryNameArabic}</h2>
          <Products category={category} />
        </div>
        <hr />
        <Footer category={category} />
        <div style={{ height: "60px", backgroundColor: "#007C21" }}></div>
      </div>
    </>
  );
};
export default Category;
