import React from "react";
import styles from "./footer.module.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_title}>CatWiki</div>
      <div>
        <p>
          © created by{" "}
          <Link to="https://devchallenges.io/portfolio/sonylomo">
            Sony Lomo
          </Link>{" "}
          - devChallenge.io 2021
        </p>
      </div>
    </div>
  );
};

export default Footer;
