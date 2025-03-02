import { Link } from "react-router";
import styles from "./HeroCommunity.module.css";

export default function HeroCommunity({auth}) {
  return (
    <section className={styles.heroSection}>
      <div className={styles.imageContainer}>
        <img 
          src="https://images.pexels.com/photos/30251338/pexels-photo-30251338/free-photo-of-man-practicing-yoga-by-sunset-lake.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
          alt="Community" 
          className={styles.image} 
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Join Our Community</h1>
        <p className={styles.description}>Connect with like-minded individuals, share knowledge, and grow together. Be part of a supportive and inspiring environment.</p>
        {auth ? <Link to="/community/social-community"><button className={styles.button}>
          Join Now
        </button></Link> : <Link to="/login"><button className={styles.button}>
          Sign Up
        </button></Link>}
      </div>
    </section>
  );
}
