import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";
import NavList from "@/components/NavList/NavList";
import ProfileDetails from "@/components/ProfileDetails/ProfileDetails";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Profile = () => {
  const { push, reload } = useRouter();

  useEffect(() => {
    if (localStorage.getItem("token") == null) {
      push("/login");
    }
  }, []);

  return (
    <>
      <Head>
        <title>المزرعة - الصفحة الشخصية</title>
      </Head>
      <div style={{ textAlign: "center" }}>
        <NavBar />
        <NavList />
        <ProfileDetails />
        <hr />
        <Footer />
        <div style={{ height: "60px", backgroundColor: "#007C21" }}></div>
      </div>
    </>
  );
};

export default Profile;
