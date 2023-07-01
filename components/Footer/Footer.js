import ContactUs from "./ContactUs/ContactUs";
import styles from "./Footer.module.css";
import FooterInfo from "./FooterInfo/FooterInfo";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <FooterInfo />
      <ContactUs />
    </div>
  );
};

export default Footer;
