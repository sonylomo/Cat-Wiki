import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import SentimentDissatisfiedIcon from "@material-ui/icons/SentimentDissatisfied";
import SentimentSatisfiedIcon from "@material-ui/icons/SentimentSatisfied";
import SentimentSatisfiedAltIcon from "@material-ui/icons/SentimentSatisfiedAltOutlined";
import SentimentVeryDissatisfiedIcon from "@material-ui/icons/SentimentVeryDissatisfied";
import SentimentVerySatisfiedIcon from "@material-ui/icons/SentimentVerySatisfied";
import Rating from "@material-ui/lab/Rating";
import styles from "./ratings.module.css";

const customIcons = {
  1: {
    icon: <SentimentVeryDissatisfiedIcon />,
    label: "Very Dissatisfied",
  },
  2: {
    icon: <SentimentDissatisfiedIcon />,
    label: "Dissatisfied",
  },
  3: {
    icon: <SentimentSatisfiedIcon />,
    label: "Neutral",
  },
  4: {
    icon: <SentimentSatisfiedAltIcon />,
    label: "Satisfied",
  },
  5: {
    icon: <SentimentVerySatisfiedIcon />,
    label: "Very Satisfied",
  },
};

function IconContainer(props) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
}

export default function Ratings(props) {
  return (
    <Box
      component="fieldset"
      className={styles.rating}
      mb={3}
      borderColor="transparent"
    >
      <div className={styles.label}>
        <Typography
          style={{ fontWeight: "bold", fontSize: "16px", color: "black" }}
          component="legend"
        >
          {props.text}
        </Typography>
      </div>
      <div>
        <Rating
          name="customized-icons"
          defaultValue={0}
          value={props.rating}
          IconContainerComponent={IconContainer}
        />
      </div>
    </Box>
  );
}
