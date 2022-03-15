import { useState } from "react";
import { useSignup } from "../../hooks/useSignup";

import "./Signup.module.css";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import Container from "@mui/material/Container";
import { Typography, Button } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";

export default function Signup() {
  const [values, setValues] = useState({
    email: "",
    password: "",
    showPassword: false,
    userName: "",
  });
  const { signup, hata, bekliyor } = useSignup();
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(values);

    signup(values.email, values.password, values.userName);
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Typography
          sx={{ mt: 15, ml: 5, fontWeight: "bold" }}
          variant="h4"
          color="darkslateblue"
        >
          Üye Ol
        </Typography>
        <FormControl fullWidth sx={{ mt: 5 }}>
          <InputLabel htmlFor="email">Email</InputLabel>
          <OutlinedInput
            id="email"
            value={values.email}
            onChange={handleChange("email")}
            label="Email"
          />
        </FormControl>

        <FormControl fullWidth sx={{ mt: 5 }}>
          <InputLabel htmlFor="password">Parola</InputLabel>
          <OutlinedInput
            id="password"
            value={values.password}
            onChange={handleChange("password")}
            label="Kullanıcı Ad"
            type={values.showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>

        <FormControl fullWidth sx={{ my: 5 }}>
          <InputLabel htmlFor="user-name">Kullanıcı Ad</InputLabel>
          <OutlinedInput
            id="user-name"
            value={values.userName}
            onChange={handleChange("userName")}
            label="Kullanıcı Ad"
          />
        </FormControl>
        <Button
          variant="contained"
          type="submit"
          color="info"
          size="large"
          sx={{ mt: 5 }}
        >
          Üye Ol
        </Button>
        {!bekliyor && (
          <Button
            variant="contained"
            type="submit"
            color="info"
            size="large"
            sx={{ mt: 5 }}
          >
            Üye Ol
          </Button>
        )}
        {bekliyor && (
          <Button
            disabled
            variant="contained"
            type="submit"
            color="info"
            size="large"
            sx={{ mt: 5 }}
          >
            Bekliyor
          </Button>
        )}
        {hata && <p>{hata}</p>}
      </form>
    </Container>
  );
}
