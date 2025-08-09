import { Box } from "@mui/material";
import BodyPart from "./BodyPart";
import { useState } from "react";

function HorizontalScrollbar({ data , setBodyPart, bodyPart}) {
  
  return (
    <div>
      {data.map((item) => (
        <Box
          key={item.id || item}
          itemId={item.id || item}
          title={item.id || item}
        >
          <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} />
        </Box>
      ))}
    </div>
  );
}

export default HorizontalScrollbar;
