import "../App.css";
import { Box } from "@mui/material";
import MyTextField from "./forms/MyTextField";
import MyPassFields from "./forms/MyPassFields";
import MyButton from "./forms/MyButton";
import { useForm } from "react-hook-form";
import AxiosInstance from "./AxiosInstance";
import { useNavigate } from "react-router";

const Register = () => {
  const navigate = useNavigate()
  const {handleSubmit, control} = useForm()

  const submission = (data) => {
    AxiosInstance.post(`register/`, {
      email: data.email,
      password: data.password,
    })
    
    .then(()=>{
      navigate(`/`)
    })

  }
  return (
    <div className={"myBackground"}>

      <form onSubmit={handleSubmit(submission)}>
      <Box className={"whiteBox"}>
        <Box className={"itemBox"}>
          <Box className={"title"}>Register</Box>
        </Box>
        <Box className={"itemBox"}>
          <MyTextField label={"E-mail"} name={"email"} control={control}/>
        </Box>
        <Box className={"itemBox"}>
          <MyPassFields label={"Password"} name={"password"} control={control} />
        </Box>
        <Box className={"itemBox"}>
          <MyPassFields label={"Confirm Password"} name={"confirmpassword"} control={control} />
        </Box>
        <Box className={"itemBox"}>
          <MyButton type={"submit"} label={"Register"} />
        </Box>
      </Box>
      </form>
    </div>
  );
};

export default Register;
