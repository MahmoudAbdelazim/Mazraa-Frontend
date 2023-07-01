import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";
import NavList from "@/components/NavList/NavList";
import SearchResults from "@/components/SearchResults/SearchResults";
import Head from "next/head";
import { useRouter } from "next/router";

const Search = () => {
  const router = useRouter();
  const { searchText } = router.query;

  return (
    <>
      <Head>
        <title>{"بحث - " + searchText}</title>
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
          <h2>نتائج البحث</h2>
          <SearchResults searchText={searchText} />
        </div>
        <hr />
        <Footer />
        <div style={{ height: "60px", backgroundColor: "#007C21" }}></div>
      </div>
    </>
  );
};

export default Search;
