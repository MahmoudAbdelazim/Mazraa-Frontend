import styles from "./ProductDetails.module.css";

const ProductDetails = ({product, productPhoto}) => {
  return (
    <div className={styles.productDetails}>
      <img src={productPhoto} alt="product" />
      <h1>{product.title}</h1>
      <div className={styles.flexContainer}>
        <div className={styles.right}>
          <h3>تفاصيل</h3>
          <p dangerouslySetInnerHTML={{ __html: product.details }}></p>
        </div>
        <div>
          <p className={styles.price}>{product.price} EGP</p>
          <p className={styles.location}>{product.location}</p>
        </div>
      </div>
      <p className={styles.phoneNumber}>رقم الهاتف :{product.phoneNumber}</p>
    </div>
  );
};

export default ProductDetails;
