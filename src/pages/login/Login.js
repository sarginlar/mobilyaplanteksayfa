//Login.js

import "./Login.module.css";
import {
  Container,
  Typography,
  Button,
  FormControl,
  FilledInput,
  InputLabel,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

import { useState } from "react";

export default function Login() {
  const [values, setValues] = useState({
    email: "",
    password: "",
    showPassword: false,
  });
  //-- aşağıdaki fonksiyonda values da hangisi değişirse ona göre çalışacak
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  //------
  //-prevent default ile varsayılan özellikleri siliniyor.
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };
  //---------
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };
  //---------
  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Typography
          sx={{ mt: 20, ml: 5, fontWeight: "bold" }}
          variant="h4"
          color="darkslateblue"
        >
          Giriş Yap
        </Typography>

        <FormControl fullWidth sx={{ mt: 5 }}>
          <InputLabel htmlFor="email">Email</InputLabel>
          <FilledInput
            values={values.email}
            onChange={handleChange("email")}
            id="email"
            label="Email"
          />
        </FormControl>

        <FormControl fullWidth sx={{ my: 5 }}>
          <InputLabel htmlFor="password">Parola</InputLabel>
          <FilledInput
            values={values.password}
            onChange={handleChange("password")}
            id="password"
            label="Parola"
            type={values.showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  area-label="Toggle Password"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <Button
          variant="outlined"
          type="submit"
          color="info"
          size="large"
          sx={{ mt: 5 }}
        >
          GİRİŞ
        </Button>
      </form>
    </Container>
  );
}
