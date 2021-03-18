import React from "react";
import styles from "./home.module.css";
import { Search } from "@material-ui/icons";
import { Button } from "@material-ui/core";
import whitecat from "../../assets/whitecat.jpg";

const Home = () => {
  return (
    <>
      <div className={styles.home}>
        <h1>CatWiki</h1>
        <p>Get to know more about your cat breed</p>

        <div className={styles.home_left}>
          <input type="text" placeholder="Enter your breed" />
          <Button>
            <Search style={{ color: " #291507" }} />
          </Button>
        </div>
      </div>
      <div className={styles.home_breeds}>
        <h5>Most Searched Breeds</h5>
        <hr />
        <div className={styles.home_breeds_title}>
          <h2>66+ Breeds For you to discover</h2>
          <p>SEE MORE --&gt;</p>
        </div>
        <div className={styles.home_breeds_pics}>
          <div>
            <img alt="white cat" src={whitecat} />
            <p>Bengal</p>
          </div>
          <div>
            <img alt="white cat" src={whitecat} />
            <p>Bengal</p>
          </div>
          <div>
            <img alt="white cat" src={whitecat} />
            <p>Bengal</p>
          </div>
          <div>
            <img alt="white cat" src={whitecat} />
            <p>Bengal</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
