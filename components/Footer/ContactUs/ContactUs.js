import styles from './ContactUs.module.css';

import {FaFacebookF, FaTwitter, FaYoutube, FaInstagram} from 'react-icons/fa';

const ContactUs = () => {
  return (
    <div className={styles.contactUs}>
      <h2>تابعنا</h2>
      <ul className={styles.social} style={{paddingLeft: '80px'}}>
        <li><a href='https://www.facebook.com/'><FaFacebookF /></a></li>
        <li><a href='https://www.instagram.com/'><FaInstagram /></a></li>
        <li><a href='https://youtube.com/'><FaYoutube /></a></li>
        <li><a href='https://twitter.com/'><FaTwitter /></a></li>
      </ul>
      <ul className={styles.download}>
        <li><a href='https://appgallery.huawei.com/'><img src='/images/app-gallery.png' alt='app gallery' /></a></li>
        <li><a href='https://play.google.com/store/games'><img src='/images/google-play.png' alt='Google play' /></a></li>
        <li><a href='https://www.apple.com/eg/app-store/'><img src='/images/app-store.png' alt='App Store' /></a></li>
      </ul>
    </div>
  )
}

export default ContactUs;