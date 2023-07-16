import ContactUs from "./ContactUs/ContactUs";
import styles from "./Footer.module.css";
import FooterInfo from "./FooterInfo/FooterInfo";

const Footer = ({category}) => {
  return (
    <div className={styles.footer}>
      <FooterInfo category={category} />
      <ContactUs />
    </div>
  );
};

export default Footer;
