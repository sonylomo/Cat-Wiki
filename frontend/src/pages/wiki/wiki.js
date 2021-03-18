import React from "react";
import styles from "./wiki.module.css";
import whitecat from "../../assets/whitecat.jpg";

const Wiki = () => {
  return (
    <>
      <div className={styles.wiki_upper}>
        <div className={styles.wiki_img}>
          <img alt="cat on display" src={whitecat} />
        </div>
        <div className={styles.wiki_info}>
          {/* cat info from DB */}
          <h1>Bengal</h1>
          <p>
            Bengals are a lot of fun to live with, but they're definitely not
            the cat for everyone, or for first-time cat owners. Extremely
            intelligent, curious and active, they demand a lot of interaction
            and woe betide the owner who doesn't provide it.
          </p>
          <p>
            <span>Temperament: </span>Alert, Agile, Energetic, Demanding,
            Intelligent
          </p>
          <p>
            <span>Origin: </span>United States
          </p>
          <p>
            <span>Life Span: </span>12 - 15 years
          </p>
          <p>
            <span>Adaptability: </span>
          </p>
          <p>
            <span>Affection Level: </span>
          </p>
          <p>
            <span>Child Friendly: </span>
          </p>
          <p>
            <span>Grooming: </span>
          </p>
          <p>
            <span>Intelligence: </span>
          </p>
          <p>
            <span>Health Issues: </span>
          </p>
          <p>
            <span>Social Needs: </span>
          </p>
          <p>
            <span>Stranger Friendly: </span>
          </p>
        </div>
      </div>
      <h2>Other Photos</h2>
      <div className={styles.wiki_lower_images}>
        <div>
          <img alt="cat on display" src={whitecat} />
        </div>
        <div>
          <img alt="cat on display" src={whitecat} />
        </div>
        <div>
          <img alt="cat on display" src={whitecat} />
        </div>
        <div>
          <img alt="cat on display" src={whitecat} />
        </div>
      </div>
    </>
  );
};

export default Wiki;
