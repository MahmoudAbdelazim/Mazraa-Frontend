import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "./NavBar.module.css";
import {AiOutlineSearch} from "react-icons/ai";

const NavBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [profilePic, setProfilePic] = useState(null);
  const [searchText, setSearchText] = useState("");

  const {push, reload} = useRouter();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsLoggedIn(true);
      const fetchProfilePic = async () => {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + localStorage["token"]);

        var requestOptions = {
          method: "GET",
          headers: myHeaders,
          redirect: "follow",
        };

        try {
          const response = await fetch(
            process.env.NEXT_PUBLIC_BACKEND_URL + "/users/profilePic",
            requestOptions
          );
          if (response.status === 200) {
            const result = await response.json();
            if (result.profilePic) {
              let prof = "data:image/jpeg;base64," + result.profilePic;
              setProfilePic(prof);
            }
          }
        } catch (err) {
          console.log(err);
        }
      };
      fetchProfilePic();
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    push("/login");
  };

  const handleSearch = () => {
    push("/search/" + searchText);
  };

  const handleSearchKeyUp = (e) => {
    if (e.keyCode === 13) {
      handleSearch();
    }
  }

  return (
    <div className={styles.searchDivWrapper}>
      <div className={styles.title}>
        <a href={"/"}>
          <p
            style={{
              color: "#009C41",
              fontSize: "40px",
              fontWeight: "bolder",
            }}
          >
            {" "}
            المزرعة{" "}
          </p>
        </a>
      </div>
      <div className={styles.search}>
        <span className={styles.searchButton} onClick={handleSearch}>
          <AiOutlineSearch
            style={{
              width: "5%",
              height: "50%",
              position: "absolute",
              left: "13%",
              top: "25%",
            }}
          />
        </span>
        <input
          type="text"
          className={styles.searchInput}
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder={"إبحث عن منتج"}
          onKeyUp={handleSearchKeyUp}
        />
      </div>
      <div className={styles.icon}>
        {isLoggedIn ? (
          <>
            <div className="dropdown">
              <img
                src={profilePic ? profilePic : "/images/user.png"}
                style={{ width: "50px", height: "50px", borderRadius: "50%" }}
                alt="Man"
                className="dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
              />
              <ul className={`dropdown-menu ${styles.dropdown}`}>
                <li>
                  <a className="dropdown-item" href={"/profile"}>
                    الصفحة الشخصية
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href={"/my-products"}>
                    منتجاتى
                  </a>
                </li>
                <li>
                  <button className="dropdown-item" onClick={handleLogout}>
                    تسجيل الخروج
                  </button>
                </li>
              </ul>
            </div>
            <a href={"/add-product"}>
              <img
                className={styles.plusSign}
                src={"/images/plus.png"}
                alt="Add Product"
              />
            </a>
          </>
        ) : (
          <a href="/login" className={styles.logout}>
            تسجيل الدخول
          </a>
        )}
      </div>
    </div>
  );
};

export default NavBar;
