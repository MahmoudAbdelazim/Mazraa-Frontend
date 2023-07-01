import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "./EditProductDetails.module.css";
import axios from "axios";

const EditProductDetails = ({ productDetails, setProductDetails }) => {
  const [categories, setCategories] = useState([]);
  const [productImage, setProductImage] = useState(productDetails.productPhoto);
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");
  const [msgColor, setMsgColor] = useState("red");

  const {push, reload} = useRouter();

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    setLoading(true);
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_BACKEND_URL + "/categories/allCategories",
        requestOptions
      );
      if (response.status === 200) {
        const result = await response.json();
        setCategories(result.categories);
      }
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
    });

  const handleChangeProfileImage = async (e) => {
    setLoading(true);
    setProductImage(await toBase64(e.target.files[0]));
    setLoading(false);
  };

  const showDeleteModal = () => {
    document.getElementById("delete-product-modal-button").click();
  };

  const handleDeleteProduct = async () => {
    setLoading(true);
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + localStorage["token"]);

    var requestOptions = {
      method: "DELETE",
      headers: myHeaders,
      redirect: "follow",
    };

    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_BACKEND_URL + "/products/product/" + productDetails.id,
        requestOptions
      );
      if (response.status === 200) {
        setMsg("تــم حـــذف المنتـــج بنجــــاج");
        setMsgColor("green");
        setLoading(false);
        setTimeout(() => {
          push("/my-products");
        }, 1000);
      }
    } catch (err) {
      console.error(err);
      setMsg("حــدث خطـــأ مــا، لم يتم حـــذف المنتــــج");
      setMsgColor("red");
    }
    setLoading(false);
  };

  const validate = async () => {
    setMsgColor("red");
    if (!productDetails.title) {
      setMsg("برجــاء إدخـــال عنـــوان المنتــــج");
      return false;
    }
    if (!productDetails.details) {
      setMsg("برجــاء إدخـــال تفاصيـــل المنتـــج");
      return false;
    }
    if (!productDetails.price) {
      setMsg("برجـــاء إدخـــال سعـــر المنتـــج");
      return false;
    }
    if (!productDetails.location) {
      setMsg("برجـــاء إدخـــال عنـــوان (موقـــع) المنتـــج");
      return false;
    }
    if (!productDetails.phoneNumber) {
      setMsg("برجـــاء إدخـــال رقـــم الهاتـــف");
      return false;
    }
    if (
      !productDetails.category ||
      productDetails.category === "تصنيف المنتج"
    ) {
      setMsg("برجـــاء تحديـــد تصنيـــف المنتـــج");
      return false;
    }
    if (!productImage) {
      setMsg("برجـــاء رفـــع صـــورة للمنتـــج");
      return false;
    }
    return true;
  };

  const handleSubmit = async () => {
    setLoading(true);
    if (!(await validate())) {
      setLoading(false);
      return;
    }
    let data = JSON.stringify({
      id: productDetails.id,
      title: productDetails.title,
      details: productDetails.details,
      price: productDetails.price,
      location: productDetails.location,
      phoneNumber: productDetails.phoneNumber,
      category: productDetails.category,
      productPhoto: productImage,
    });

    try {
      let config = {
        method: "put",
        url: process.env.NEXT_PUBLIC_BACKEND_URL + "/products/product/" + productDetails.id,
        headers: {
          Authorization: "Bearer " + localStorage["token"],
          "Content-Type": "application/json",
        },
        data: data,
      };
      const response = await axios(config);
      if (response.status === 200) {
        setMsg("تــم تعديل المنتـــج بنجـــاج");
        setMsgColor("green");
        setLoading(false);
        setTimeout(() => {
          push("/my-products");
        }, 2000);
      } else {
        setMsg("حـــدث خطـــأ مــا، برجـــاء المحاولـــة مــرة أخــرى");
        setMsgColor("red");
      }
    } catch (err) {
      console.error(err);
      setMsg("حـــدث خطـــأ مــا، برجـــاء المحاولـــة مــرة أخــرى");
      setMsgColor("red");
    }
    setLoading(false);
  };

  return (
    <div className={styles.EditProductDetails}>
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
      <label htmlFor="title">عنوان المنتج</label>
      <input
        type={"text"}
        name="title"
        id="title"
        className="form-control"
        value={productDetails.title}
        onChange={(e) =>
          setProductDetails({ ...productDetails, title: e.target.value })
        }
      />

      <label htmlFor="details">تفاصيل المنتج</label>
      <textarea
        name="details"
        id="details"
        className="form-control"
        value={productDetails.details}
        onChange={(e) =>
          setProductDetails({ ...productDetails, details: e.target.value })
        }
      ></textarea>

      <label htmlFor="price"> السعر (بالجنيه)</label>
      <input
        type={"number"}
        name="price"
        id="price"
        className="form-control"
        value={productDetails.price}
        onChange={(e) =>
          setProductDetails({ ...productDetails, price: e.target.value })
        }
      />

      <label htmlFor="category">تصنيف المنتج</label>
      <select
        id="category"
        className="form-control"
        value={productDetails.category}
        onChange={(e) =>
          setProductDetails({ ...productDetails, category: e.target.value })
        }
      >
        <option value={null}>إختر التصنيف</option>
        {categories.map((category) => {
          return (
            <option key={category.id} value={category.id}>{category.categoryNameArabic}</option>
          );
        })}
      </select>

      <label htmlFor="location">العنوان (الموقع)</label>
      <input
        type={"location"}
        name="location"
        id="location"
        className="form-control"
        value={productDetails.location}
        onChange={(e) =>
          setProductDetails({ ...productDetails, location: e.target.value })
        }
      />

      <label htmlFor="phone-number">رقم الهاتف</label>
      <input
        type={"text"}
        name="phone-number"
        id="phone-number"
        className="form-control"
        value={productDetails.phoneNumber}
        onChange={(e) =>
          setProductDetails({ ...productDetails, phoneNumber: e.target.value })
        }
      />

      <label htmlFor="upload" className={styles.upload}>
        صورة المنتج (اتركها فارغة اذا كنت لا تريد تعديل الصورة)
      </label>
      <input
        type="file"
        id="upload"
        name="upload"
        accept="image/jpeg, image/png"
        className="form-control"
        onChange={handleChangeProfileImage}
      />

      <button className={styles.submit} onClick={handleSubmit}>
        تعديــــل المنتـــج
      </button>

      <button className={styles.delete} onClick={showDeleteModal}>
        حــــذف المنتـــج
      </button>

      <p style={{ color: msgColor, fontSize: "20px" }}>{msg}</p>

      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        id="delete-product-modal-button"
        hidden
      >
        Launch modal
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                تحذيــــــــر
              </h1>
            </div>
            <div className="modal-body">هل تريد بالفعل حذف هذا المنتج؟</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary btn-lg"
                data-bs-dismiss="modal"
              >
                لا
              </button>
              <button
                type="button"
                className="btn btn-danger btn-lg"
                onClick={handleDeleteProduct}
              >
                نعم
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProductDetails;
