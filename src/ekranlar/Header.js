import { Menu } from "semantic-ui-react";
import { useContext } from "react";
import { MenuContext } from "../contexts/MenuContext";
//@Header-------------------------------------------------------

const Header = () => {
  const { menu, setmenu } = useContext(MenuContext);
  return (
    <Menu stackable>
      <Menu.Item
        name="anasayfa"
        onClick={() => {
          setmenu({
            main: true,
            Login: false,
            SignUp: false,
            Ekran3d: false,
            ScreenDikeyBolme: false,
            Nesting: false,
            Price: false,
            Materials: false,
            Hardwares: false,
            ScreenProducts: false,
            KayitliDolapListesi: false,
          });
        }}
      >
        AnaSayfa
      </Menu.Item>

      <Menu.Item
        name="Giriş"
        onClick={() => {
          setmenu({
            main: false,
            Login: true,
            SignUp: false,
            Ekran3d: false,
            ScreenDikeyBolme: false,
            Nesting: false,
            Price: false,
            Materials: false,
            Hardwares: false,
            ScreenProducts: false,
            KayitliDolapListesi: false,
          });
        }}
      >
        Giriş
      </Menu.Item>

      <Menu.Item
        name="Kayıt"
        onClick={() => {
          setmenu({
            main: false,
            Login: false,
            SignUp: true,
            Ekran3d: false,
            ScreenDikeyBolme: false,
            Nesting: false,
            Price: false,
            Materials: false,
            Hardwares: false,
            ScreenProducts: false,
            KayitliDolapListesi: false,
          });
        }}
      >
        Kayıt
      </Menu.Item>
      <Menu.Item
        name="Çizim"
        onClick={() => {
          setmenu({
            main: false,
            Login: false,
            SignUp: false,
            Ekran3d: true,
            ScreenDikeyBolme: false,
            Nesting: false,
            Price: false,
            Materials: false,
            Hardwares: false,
            ScreenProducts: false,
            KayitliDolapListesi: false,
          });
        }}
      >
        Çizim
      </Menu.Item>
      <Menu.Item
        name="2D"
        onClick={() => {
          setmenu({
            main: false,
            Login: false,
            SignUp: false,
            Ekran3d: false,
            ScreenDikeyBolme: true,
            Nesting: false,
            Price: false,
            Materials: false,
            Hardwares: false,
            ScreenProducts: false,
            KayitliDolapListesi: false,
          });
        }}
      >
        2D
      </Menu.Item>
      <Menu.Item
        name="Nesting"
        onClick={() => {
          setmenu({
            main: false,
            Login: false,
            SignUp: false,
            Ekran3d: false,
            ScreenDikeyBolme: false,
            Nesting: true,
            Price: false,
            Materials: false,
            Hardwares: false,
            ScreenProducts: false,
            KayitliDolapListesi: false,
          });
        }}
      >
        Nesting
      </Menu.Item>
      <Menu.Item
        name="Price"
        onClick={() => {
          setmenu({
            main: false,
            Login: false,
            SignUp: false,
            Ekran3d: false,
            ScreenDikeyBolme: false,
            Nesting: false,
            Price: true,
            Materials: false,
            Hardwares: false,
            ScreenProducts: false,
            KayitliDolapListesi: false,
          });
        }}
      >
        Price
      </Menu.Item>
      <Menu.Item
        name="Materials"
        onClick={() => {
          setmenu({
            main: false,
            Login: false,
            SignUp: false,
            Ekran3d: false,
            ScreenDikeyBolme: false,
            Nesting: false,
            Price: false,
            Materials: true,
            Hardwares: false,
            ScreenProducts: false,
            KayitliDolapListesi: false,
          });
        }}
      >
        Materials
      </Menu.Item>
      <Menu.Item
        name="Hardwares"
        onClick={() => {
          setmenu({
            main: false,
            Login: false,
            SignUp: false,
            Ekran3d: false,
            ScreenDikeyBolme: false,
            Nesting: false,
            Price: false,
            Materials: false,
            Hardwares: true,
            ScreenProducts: false,
            KayitliDolapListesi: false,
          });
        }}
      >
        Hardwares
      </Menu.Item>
      <Menu.Item
        name="ScreenProducts"
        onClick={() => {
          setmenu({
            main: false,
            Login: false,
            SignUp: false,
            Ekran3d: false,
            ScreenDikeyBolme: false,
            Nesting: false,
            Price: false,
            Materials: false,
            Hardwares: false,
            ScreenProducts: true,
            KayitliDolapListesi: false,
          });
        }}
      >
        Ürünler
      </Menu.Item>
      <Menu.Item
        name="KayitliDolapListesi"
        onClick={() => {
          setmenu({
            main: false,
            Login: false,
            SignUp: false,
            Ekran3d: false,
            ScreenDikeyBolme: false,
            Nesting: false,
            Price: false,
            Materials: false,
            Hardwares: false,
            ScreenProducts: false,
            KayitliDolapListesi: true,
          });
        }}
      >
        Kayitli Dolaplar
      </Menu.Item>
    </Menu>
  );
};
export default Header;
