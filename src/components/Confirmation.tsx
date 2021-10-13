import React, { FC } from "react";
import {

  Typography,
  Button
} from "@material-ui/core";

interface Props {
  submit: React.Dispatch<React.SetStateAction<number>>;
}

const Confirmation: FC<Props> = ({ submit }) => {
  return (
    <div>
      <Typography className='heading' variant='h4' >Review youn Information before Submit</Typography >


      <div className="buttons">
        <Button variant="contained" color="primary" onClick={() => submit(1)}>
          Back
        </Button>
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </div>

    </div>
  );
};

export default Confirmation;