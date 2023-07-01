import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";
import NavList from "@/components/NavList/NavList";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from "./login.module.css";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const { push, reload } = useRouter();

  const handleLogin = async (e) => {
    setLoading(true);
    e.preventDefault();
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({ username, password });
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_BACKEND_URL + "/auth/login",
        requestOptions
      );
      if (response.status === 200) {
        setMsg("");
        const result = await response.json();
        localStorage.setItem("token", result.token);
        localStorage.setItem("userId", result.id);
        localStorage.setItem("username", result.username);
        localStorage.setItem("name", result.name);
        localStorage.setItem("role", result.role);
        localStorage.setItem("location", result.location);
        localStorage.setItem("phoneNumber", result.phoneNumber);
        push("/");
      } else {
        setMsg(
          "اسم المستخدم أو كلمة المرور غير صحيحة، برجاء التأكد من صحة البيانات"
        );
      }
      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>المزرعة - تسجيل الدخول</title>
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
      <NavBar />
      <NavList />
      <div className={styles.container}>
        <div className={styles.inputsDiv}>
          <p className={styles.title}> تسجيل الدخول</p>
          <input
            className={styles.inputs}
            type="text"
            placeholder="اسم المستخدم"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className={styles.inputs}
            type="password"
            placeholder="كلمة المرور"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className={styles.message}>{msg}</p>
          <button onClick={handleLogin} className={styles.loginBtn}>
            {" "}
            تسجيل الدخول{" "}
          </button>
          <hr />
          <p>ليس لديك حساب بالفعل؟</p>
          <button
            className={styles.accountBtn}
            onClick={() => {
              push("/signup");
            }}
          >
            {" "}
            إنشاء حساب{" "}
          </button>
        </div>
        <div className={styles.logoDiv}>
          <div className={styles.subLogoDiv}>
            <div className={styles.imgDiv}>
              <img
                src={"/mazraa.png"}
                alt="Mazraa"
                width="100%"
                height="350px"
              />
            </div>
            <div className={styles.txtDiv}>{}</div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
