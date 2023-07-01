import styles from "./ProfileDetails.module.css";
import { useEffect, useState } from "react";
import axios from "axios";

const ProfileDetails = () => {
  const [profileDetails, setProfileDetails] = useState({});
  const [profilePic, setProfilePic] = useState(null);
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    const fetchProfileDetails = async () => {
      var myHeaders = new Headers();
      myHeaders.append("Authorization", "Bearer " + localStorage["token"]);
      var requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };

      try {
        const response = await fetch(
          process.env.NEXT_PUBLIC_BACKEND_URL + "/users/profile",
          requestOptions
        );
        if (response.status === 200) {
          const result = await response.json();
          setProfileDetails(result.profileDetails);
        }
      } catch (err) {
        console.error(err);
      }
    };

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

    fetchProfileDetails();
    fetchProfilePic();
  }, []);

  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
    });

  const handleUpdateProfilePic = async (e) => {
    setLoading(true);
    e.preventDefault();
    console.log(e.target.files[0]);
    try {
      const newProfilePic = await toBase64(e.target.files[0]);
      let data = JSON.stringify({
        profilePic: newProfilePic,
      });
      console.log(newProfilePic);
      let config = {
        method: "put",
        url: process.env.NEXT_PUBLIC_BACKEND_URL + "/users/profilePic",
        headers: {
          Authorization: "Bearer " + localStorage["token"],
          "Content-Type": "application/json",
        },
        data: data,
      };
      const response = await axios(config);
      if (response.status === 200) {
        window.location.reload(false);
      }
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  const handleEditProfile = async (e) => {
    setLoading(true);
    e.preventDefault();
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + localStorage["token"]);
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify(profileDetails);
    var requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_BACKEND_URL + "/users/profile",
        requestOptions
      );
      if (response.status === 200) {
        window.location.reload(false);
      } else {
        setMsg("لم يتم التعديل، يرجى مراجعة البيانات مرة أخرى");
      }
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  return (
    <div className={styles.profileDetails}>
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
      <div className={styles.profileContainer}>
        <img
          src={profilePic ? profilePic : "/images/user.png"}
          alt="profile Pic"
        />
        <p>تحميل صورة شخصية</p>
        <label for="upload" className={styles.upload}>
          تحميل
        </label>
        <input
          onChange={handleUpdateProfilePic}
          className={styles.upload}
          type="file"
          id="upload"
          name="upload"
          accept="image/jpeg, image/png"
          style={{ display: "none" }}
        />
      </div>
      <div className={styles.form}>
        <div className={styles.inputContainer}>
          <label className={styles.label}>اسم المستخدم</label>
          <input
            className={styles.inputs}
            type="text"
            placeholder="اسم المستخدم"
            value={profileDetails.username}
            onChange={(e) =>
              setProfileDetails({ ...profileDetails, username: e.target.value })
            }
          />
        </div>
        <div className={styles.inputContainer}>
          <label className={styles.label}>الاسم الكامل</label>
          <input
            className={styles.inputs}
            type="text"
            placeholder="الاسم الكامل"
            value={profileDetails.name}
            onChange={(e) =>
              setProfileDetails({ ...profileDetails, name: e.target.value })
            }
          />
        </div>
        <div className={styles.inputContainer}>
          <label className={styles.label}>رقم المحمول</label>
          <input
            className={styles.inputs}
            type="text"
            placeholder="رقم المحمول"
            value={profileDetails.phoneNumber}
            onChange={(e) =>
              setProfileDetails({
                ...profileDetails,
                phoneNumber: e.target.value,
              })
            }
          />
        </div>
        <div className={styles.inputContainer}>
          <label className={styles.label}>الموقع</label>
          <input
            className={styles.inputs}
            type="text"
            placeholder=" الموقع"
            value={profileDetails.location}
            onChange={(e) =>
              setProfileDetails({ ...profileDetails, location: e.target.value })
            }
          />
        </div>
        <div className={styles.inputContainer}>
          <button className={styles.editButton} onClick={handleEditProfile}>
            تعديل
          </button>
        </div>
        <p className={styles.message}>{msg}</p>
      </div>
    </div>
  );
};

export default ProfileDetails;
