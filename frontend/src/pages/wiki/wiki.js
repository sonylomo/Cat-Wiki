import { useEffect, useState } from "react";
import styles from "./wiki.module.css";
import whitecat from "../../assets/whitecat.jpg";
import axios from "axios";
import { useParams } from "react-router-dom";

const Wiki = () => {
  let { breedName } = useParams();
  const [details, setDetails] = useState([]);
  const [imageUrl, setImageUrl] = useState();
  const [Cats, setCats] = useState()

  useEffect(() => {
    console.log(breedName);
    const fetchDisplay = async () => {
      const req = await axios.get(
        `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`
      );
      setDetails(req.data[0]);
    };
    fetchDisplay();

    const imageUrl = async () => {
      const req = await axios.get(
        `https://api.thecatapi.com/v1/images/${details.reference_image_id}`
      );
      setImageUrl(req.data.url);
      console.log(req.data.url)
    };
    imageUrl();

    // const otherImg = async () => {
    //   const req = await axios.get(
    //     "https://api.thecatapi.com/v1/images/search",
    //     { params: { limit: 4, size: "full" } }
    //   ); // Ask for 4 Images, at full resolution
    //   setCats(req.data);
    // };

    // otherImg();
  }, [breedName, details.reference_image_id]);  

  return (
    <>
      <div className={styles.wiki_upper}>
        <div className={styles.wiki_img}>
          <img alt={breedName} src={imageUrl} />
        </div>
        <div className={styles.wiki_info}>
          {/* cat info from API */}
          <h1>{breedName ? breedName : "loading"}</h1>
          <p>{details.description}</p>
          <p>
            <span>Temperament: </span>
            {details.temperament}
          </p>
          <p>
            <span>Origin: </span>
            {details.origin}
          </p>
          <p>
            <span>Life Span: </span>
            {details.life_span}
          </p>
          <p>
            <span>Adaptability: </span>
            {details.adaptability}
          </p>
          <p>
            <span>Affection Level: </span>
            {details.affection_level}
          </p>
          <p>
            <span>Child Friendly: </span>
            {details.child_friendly}
          </p>
          <p>
            <span>Grooming: </span>
            {details.grooming}
          </p>
          <p>
            <span>Intelligence: </span>
            {details.intelligence}
          </p>
          <p>
            <span>Health Issues: </span>
            {details.health_issues}
          </p>
          <p>
            <span>Social Needs: </span>
            {details.social_needs}
          </p>
          <p>
            <span>Stranger Friendly: </span>
            {details.stranger_friendly}
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
