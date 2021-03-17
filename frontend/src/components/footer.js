import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_title}>CatWiki</div>
      <div>
        <p>
          © created by{" "}
          <a href="https://devchallenges.io/portfolio/sonylomo">Sony Lomo</a> -
          devChallenge.io 2021
        </p>
      </div>
    </div>
  );
};

export default Footer;
