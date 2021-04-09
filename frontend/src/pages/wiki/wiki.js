import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Ratings from "../../components/rating";
import styles from "./wiki.module.css";

const Wiki = () => {
  let { breedName } = useParams();
  const [details, setDetails] = useState();
  const [imageUrl, setImageUrl] = useState();
  const [cats, setCats] = useState();

  useEffect(() => {
    const fetchDisplay = async () => {
      await axios
        .get(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, {
          params: { limit: 4, size: "full" },
        })
        .then((req) => {
          setDetails(() => req?.data[0]);
          console.log(req.data[0]);
          // imageUrl(req.data[0])
          axios
            .get(
              `https://api.thecatapi.com/v1/images/${req?.data[0].reference_image_id}`
            )
            .then((imgreq) => setImageUrl(imgreq.data.url));
          axios
            .get(
              `https://api.thecatapi.com/v1/images/search?breed_id=${req?.data[0].id}`,
              { params: { limit: 4, size: "full" } }
            )
            .then((catreq) => setCats(catreq.data));
        });
    };

    fetchDisplay();
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

              <Ratings text="Adaptability:" rating={details?.adaptability} />
              <Ratings
                text="Affection Level:"
                rating={details?.affection_level}
              />
              <Ratings
                text="Child Friendly:"
                rating={details?.child_friendly}
              />
              <Ratings text="Grooming: " rating={details?.grooming} />

              <Ratings text="Intelligence: " rating={details?.intelligence} />

              <Ratings text="Health Issues: " rating={details?.health_issues} />

              <Ratings text="Social Needs: " rating={details?.social_needs} />

              <Ratings
                text="Stranger Friendly: "
                rating={details?.stranger_friendly}
              />
            </>
          ) : (
            <p> Waiting for something to happen here...</p>
          )}
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
