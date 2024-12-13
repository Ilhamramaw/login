import '../App.css'
import { Box } from '@mui/material'
import MyTextField from './forms/MyTextField';
import MyPassFields from './forms/MyPassFields';
import MyButton from './forms/MyButton';
import { useForm } from "react-hook-form";
import AxiosInstance from './AxiosInstance';
import { useNavigate } from "react-router";
const Login = () => {
   const navigate = useNavigate();
   const { handleSubmit, control } = useForm()

   const submission = (data) => {
     AxiosInstance.post(`login/`, {
       email: data.email,
       password: data.password,
     })

     .then((response) => {
       console.log(response)
       localStorage.setItem('Token', response.data.token)
       navigate(`/home`)
     })
     .catch((error)=> {
      console.error('Error during login', error)
     }) 
   }
   
  return (
    <div className={"myBackground"}>
      <form onSubmit={handleSubmit(submission)}>
        <Box className={"whiteBox"}>
          <Box className={"itemBox"}>
            <Box className={"title"}>Login Admin</Box>
          </Box>
          <Box className={"itemBox"}>
            <MyTextField label={"E-mail"} name={"email"} control={control} />
          </Box>
          <Box className={"itemBox"}>
            <MyPassFields label={"Password"} name={"password"} control={control} />
          </Box>
          <Box className={"itemBox"}>
            <MyButton label={"Login"} type={"submit"}/>
          </Box>
        </Box>
      </form>
    </div>
  );
}

export default Login  