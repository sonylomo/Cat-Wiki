import React from "react";
import styles from "./about.module.css";
import catsample3 from "../../assets/image 3.png"
import catsample2 from "../../assets/image 2.png"
import catsample1 from "../../assets/image 1.png"

const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.about_right}>
        <hr />
        <h2>Why should you have a cat?</h2>
        <p>
          Having a cat around you can actually trigger the release of calming
          chemicals in your body which lower your stress and anxiety leves
        </p>
        <span>READ MORE --&gt;</span>
      </div>
      <div className={styles.about_left}>
          <img alt="cat sample3" src={catsample3} />
          <img alt="cat sample2" src={catsample2} />
          <img alt="cat sample1" src={catsample1} />

      </div>
    </div>
  );
};

export default About;
