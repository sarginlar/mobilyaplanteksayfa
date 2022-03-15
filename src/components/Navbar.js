import styles from "./Navbar.module.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link component="button" to="/" className={styles.link}>
              MP
            </Link>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link component="button" to="/cizim" className={styles.link}>
              Cizim
            </Link>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link component="button" to="/cizim2d" className={styles.link}>
              2d
            </Link>
          </Typography>

          <Button variant="outlined" color="inherit">
            <Link component="button" to="/login" className={styles.link}>
              GİRİŞ
            </Link>{" "}
          </Button>
          <Button variant="text" color="secondary">
            <Link component="button" to="/signup" className={styles.link}>
              Üye Ol
            </Link>{" "}
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
