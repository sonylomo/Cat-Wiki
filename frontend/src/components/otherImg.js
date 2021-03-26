import React from "react";
import styles from "otherImg.module.css"

const OtherImg = () => {
  return (
    <div className={styles.wiki_lower_images}>
      {cats ? (
        cats.map((cat) => (
          <div key={cat.id}>
            <img alt="white cat" src={cat.url} />
          </div>
        ))
      ) : (
        <p>loading...</p>
      )}
    </div>
  );
};

export default OtherImg;
