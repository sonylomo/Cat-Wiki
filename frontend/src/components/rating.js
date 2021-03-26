import Box from "@material-ui/core/Box";
// import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import SentimentDissatisfiedIcon from "@material-ui/icons/SentimentDissatisfied";
import SentimentSatisfiedIcon from "@material-ui/icons/SentimentSatisfied";
import SentimentSatisfiedAltIcon from "@material-ui/icons/SentimentSatisfiedAltOutlined";
import SentimentVeryDissatisfiedIcon from "@material-ui/icons/SentimentVeryDissatisfied";
import SentimentVerySatisfiedIcon from "@material-ui/icons/SentimentVerySatisfied";
import Rating from "@material-ui/lab/Rating";

// const StyledRating = withStyles({
//   iconFilled: {
//     color: "#ff6d75",
//   },
//   iconHover: {
//     color: "#ff3d47",
//   },
// })(Rating);

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

// IconContainer.propTypes = {
//   value: PropTypes.number.isRequired,
// };

export default function Ratings(props) {
  return (
    <div>
      {/* <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend">{props.text}</Typography>
        <Rating
          name="customized-10"
          defaultValue={0}
          max={5}
          value={props.rating}
        />
      </Box> */}
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend">{props.text}</Typography>
        <Rating
          name="customized-icons"
          defaultValue={0}
          value={props.rating}
          IconContainerComponent={IconContainer }
        />
      </Box>
    </div>
  );
}
