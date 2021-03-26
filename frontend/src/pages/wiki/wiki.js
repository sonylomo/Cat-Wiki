import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Ratings from "../../components/rating";
import styles from "./wiki.module.css";

const Wiki = () => {
  let { breedName } = useParams();
  const [details, setDetails] = useState(null);
  const [imageUrl, setImageUrl] = useState();
  const [cats, setCats] = useState();

  useEffect(() => {
    const fetchDisplay = async () => {
      const req = await axios.get(
        `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`
      );

      setDetails(req?.data[0]);
      console.log(req.data[0])
    };
    fetchDisplay();

    const imageUrl = async () => {
      const req = await axios.get(
        // https://api.thecatapi.com/v1/images/{image_id}
        `https://api.thecatapi.com/v1/images/${details.reference_image_id}`
      );
      setImageUrl(req.data.url);
    };
    imageUrl();

    const otherImg = async () => {
      const req = await axios.get(
        // https://api.thecatapi.com/v1/images/search
        `https://api.thecatapi.com/v1/images/search?breed_id=${details.id}`,
        { params: { limit: 4, size: "full" } }
      ); // Ask for 4 Images, at full resolution
      setCats(req.data);
    };

    otherImg();
  }, [breedName]);

  return (
    <>
      <div className={styles.wiki_upper}>
        {imageUrl ? (
          <div className={styles.wiki_img}>
            <img alt={breedName} src={imageUrl} />
          </div>
        ) : (
          <p>Loading...</p>
        )}
        <div className={styles.wiki_info}>
          {/* cat info from API */}
          <h1>{breedName ? breedName : "loading"}</h1>
          <p>{details?.description}</p>
        
          {details ? (
            <>
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
                <Ratings text="Adaptability:" rating={details?.adaptability} />
              </p>
              <p>
                <Ratings
                  text="Affection Level:"
                  rating={details?.affection_level}
                />
              </p>
              <p>
                <Ratings
                  text="Child Friendly:"
                  rating={details?.child_friendly}
                />
              </p>
              <p>
                <Ratings text="Grooming: " rating={details?.grooming} />
              </p>
              <p>
                <Ratings text="Intelligence: " rating={details?.intelligence} />
              </p>
              <p>
                <Ratings
                  text="Health Issues: "
                  rating={details?.health_issues}
                />
              </p>
              <p>
                <Ratings text="Social Needs: " rating={details?.social_needs} />
              </p>
            </>
          ) : (
            <p> Waiting for something to happen here...</p>
          )}

          <p>
            <span>Stranger Friendly: </span>
            {details?.stranger_friendly}
          </p>
        </div>
      </div>
      <h2>Other Photos</h2>
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
    </>
  );
};

export default Wiki;
