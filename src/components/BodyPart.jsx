import { Stack, Typography } from "@mui/material";
import Icon from "../assets/icons/gym.png";

function BodyPart({ item, setBodyPart, bodyPart }) {
  
  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={
        !bodyPart === !item && {
          borderBottomLeftRadius: "20px",
          cursor: "pointer",
          pl: "20px",
          pb: "80px",
        }
      }
      mt="100px"
      gap="10px"
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
      }}
    >
      <img src={Icon} alt="Dumbbel" style={{ width: "40px", height: "40px" }} />
      <Typography
        fontSize="20px"
        fontFamily="sans-serif"
        fontWeight="bold"
        color="#3a1212"
        textTransform="capitalize"
      >
        {item}
      </Typography>
    </Stack>
  );
}

export default BodyPart;
