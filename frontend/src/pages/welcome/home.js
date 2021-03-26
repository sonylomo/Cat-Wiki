import { useEffect, useState } from "react";
import styles from "./home.module.css";
import { Search } from "@material-ui/icons";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";

const Home = () => {
  const [Cats, setCats] = useState([]);
  const [Breeds, setBreeds] = useState([]);

  const searcher = async (e) => {
    const req = await axios.get(
      `https://api.thecatapi.com/v1/breeds/search?q=${e.target.value}`
    );
    setBreeds(req.data);
  };

  useEffect(() => {
    const fetchCats = async () => {
      const req = await axios.get(
        "https://api.thecatapi.com/v1/images/search",
        { params: { limit: 4, size: "full" } }
      ); // Ask for 4 Images, at full resolution
      setCats(req.data);
      console.log(req.data);
    };

    fetchCats();
  }, []);

  return (
    <>
      <div className={styles.home}>
        <h1>CatWiki</h1>
        <p>Get to know more about your cat breed</p>

        <div className={styles.home_left}>
          <Combobox aria-label="CatBreeds">
            <ComboboxInput
              onChange={searcher}
              className={styles.breed_search}
              autoFocus
            />
            {Breeds && (
              <ComboboxPopover className={styles.popup}>
                {Breeds.length > 0 ? (
                  <ComboboxList className={styles.popup_list}>
                    {Breeds.map((Breed) => (
                      <Link
                        to={`/wiki/${Breed.name}`}
                        key={Breed.id}
                        className={styles.popup_link}
                      >
                        <ComboboxOption
                          value={`${Breed.name}`}
                          style={{ fontWeight: "500" }}
                        />
                      </Link>
                    ))}
                  </ComboboxList>
                ) : (
                  <span style={{ display: "block", margin: 8 }}>
                    No Breeds found
                  </span>
                )}
              </ComboboxPopover>
            )}
          </Combobox>

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
          {Cats.map((cat) => (
            <div key={cat.id}>
              <img alt="white cat" src={cat.url} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
