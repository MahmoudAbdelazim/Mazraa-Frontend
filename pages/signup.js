import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";
import NavList from "@/components/NavList/NavList";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from "./signup.module.css";

const Signup = () => {
  const [signupData, setSignupData] = useState({});
  const [repeatedPassword, setRepeatedPassword] = useState(null);
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const { push, reload } = useRouter();

  const validateSignup = () => {
    if (
      !signupData.username ||
      !signupData.name ||
      !signupData.phoneNumber ||
      !signupData.location ||
      !signupData.password ||
      !repeatedPassword
    ) {
      setMsg("برجاء ملء جميع الحقول");
      return false;
    }
    if (signupData.username.length < 4) {
      setMsg("الحد الأدنى لإسم المستخدم هو 4 أحرف");
      alert("here");
      return false;
    }
    if (signupData.username.length > 20) {
      setMsg("الحد الأقصى لإسم المستخدم هو 20 حرف");
      return false;
    }
    if (signupData.password.length < 4) {
      setMsg("الحد الأدنى لكلمة المرور هو 4 أحرف/رموز");
      return false;
    }
    if (signupData.password.length > 40) {
      setMsg("الحد الأقصى لكلمة المرور هو 40 حرف/رمز");
      return false;
    }
    let isnum = /^\d+$/.test(signupData.phoneNumber);
    if (!isnum) {
      setMsg("يجب أن يتكون رقم الهاتف من أرقام فقط");
      setSignupData({ ...signupData, phoneNumber: "" });
      return false;
    }
    if (signupData.password !== repeatedPassword) {
      setMsg("تكرار كلمة السر غير متطابق");
      return false;
    }
    return true;
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!validateSignup()) {
      setLoading(false);
      return;
    }
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(signupData);
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_BACKEND_URL + "/auth/signup",
        requestOptions
      );
      if (response.status === 201) {
        push("/login");
      } else if (response.status === 401) {
        setMsg("اسم المستخدم موجود من قبل، برجاء اختيار اسم مستخدم آخر");
      }
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  return (
    <>
      <Head>
        <title>المزرعة - إنشاء حساب</title>
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
          <p className={styles.title}> إنشاء حساب جديد</p>
          <input
            className={styles.inputs}
            type="text"
            placeholder="اسم المستخدم"
            value={signupData.username}
            onChange={(e) =>
              setSignupData({ ...signupData, username: e.target.value })
            }
          />
          <input
            className={styles.inputs}
            type="text"
            placeholder="الاسم بالكامل"
            value={signupData.name}
            onChange={(e) =>
              setSignupData({ ...signupData, name: e.target.value })
            }
          />
          <input
            className={styles.inputs}
            type="text"
            placeholder="رقم الهاتف"
            value={signupData.phoneNumber}
            onChange={(e) =>
              setSignupData({ ...signupData, phoneNumber: e.target.value })
            }
          />
          <input
            className={styles.inputs}
            type="text"
            placeholder=" الموقع"
            value={signupData.location}
            onChange={(e) =>
              setSignupData({ ...signupData, location: e.target.value })
            }
          />
          <input
            className={styles.inputs}
            type="password"
            placeholder="كلمة المرور"
            value={signupData.password}
            onChange={(e) =>
              setSignupData({ ...signupData, password: e.target.value })
            }
          />
          <input
            className={styles.inputs}
            type="password"
            placeholder=" تأكيد كلمة المرور"
            value={repeatedPassword}
            onChange={(e) => setRepeatedPassword(e.target.value)}
          />
          <p className={styles.message}>{msg}</p>
          <button onClick={handleSignup} className={styles.loginBtn}>
            {" "}
            إنشــاء حســاب{" "}
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
            <div className={styles.txtDiv}></div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Signup;