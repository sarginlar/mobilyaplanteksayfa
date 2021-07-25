//@GenelAyarlar----------------------------------
import { Tab } from "semantic-ui-react";
import Malzeme from "../ekranlar/Malzeme";
import SolyanTip from "../tab/SolyanTip";

const GenelAyarlar = (props) => {
  const { mobilya, olculer } = props;

  console.log("mobilya==", mobilya);

  return (
    <Tab.Pane>
      <ul className="flex-container">
        <li className="flex-item1">
          <h3>Ölçüler</h3>
          <ul>
            <li className="girinti-block">
              <label htmlFor="name" className="girinti-label">
                Yükseklik
              </label>
              <input
                type="number"
                className="girinti"
                placeholder={mobilya.Y}
                id="name"
                name="name"
                onChange={(e) => {
                  olculer.Y = Number(e.target.value);
                }}
              />
            </li>
            <li className="girinti-block">
              <label htmlFor="name" className="girinti-label">
                Genişlik
              </label>
              <input
                type="number"
                className="girinti"
                placeholder={mobilya.X}
                id="name"
                name="name"
                onChange={(e) => {
                  olculer.X = Number(e.target.value);
                }}
              />
            </li>
            <li className="girinti-block">
              <label htmlFor="name" className="girinti-label">
                Derinlik
              </label>
              <input
                type="number"
                className="girinti"
                placeholder={mobilya.Z}
                id="name"
                name="name"
                onChange={(e) => {
                  olculer.Z = Number(e.target.value);
                }}
              />
            </li>
            <li className="girinti-block">
              <label htmlFor="name" className="girinti-label">
                Yükselt
              </label>
              <input
                type="number"
                className="girinti"
                placeholder={mobilya.sol_yan.yg1}
                id="name"
                name="name"
                onChange={(e) => {
                  mobilya.sol_yan.yg1 = e.target.value;
                }}
              />
            </li>
          </ul>
        </li>
        <li className="flex-item1">
          <h4>Sol Üst Birleşim</h4>
          <form>
            <input type="radio" id="male" name="gender" value="male" />
            <label htmlFor="male">Yan</label>
            <img
              className="image"
              src="https://i.pinimg.com/236x/aa/c1/41/aac1414fccbb69f6d5f0432b78554fe9.jpg"
              alt=""
            />
            <br />
            <input type="radio" id="female" name="gender" value="female" />
            <label htmlFor="female">Ust</label>
            <img
              className="image"
              src="https://i.pinimg.com/236x/14/b0/26/14b0266237fec8c53ec6a0c01974180f.jpg"
              alt=""
            />
          </form>
        </li>
        <li className="flex-item1">
          <h4>Sağ Üst Birleşim</h4>
          <form>
            <input type="radio" id="male" name="gender" value="male" />
            <label htmlFor="male">Yan</label>
            <img className="image" src="images/airpods.jpg" alt="" />
            <br />
            <input type="radio" id="female" name="gender" value="female" />
            <label htmlFor="female">Ust</label>
            <img className="image" src="images/airpods.jpg" alt="" />
          </form>
        </li>
        <li className="flex-item1">
          <h4>Sol Alt Birleşim</h4>
          <form>
            <input type="radio" id="male" name="gender" value="male" />
            <label htmlFor="male">Yan</label>
            <img className="image" src="images/airpods.jpg" alt="" />
            <br />
            <input type="radio" id="female" name="gender" value="female" />
            <label htmlFor="female">Ust</label>
            <img className="image" src="images/airpods.jpg" alt="" />
          </form>
        </li>
        <li className="flex-item1">
          <h4>Sağ Alt Birleşim</h4>
          <form>
            <input type="radio" id="male" name="gender" value="male" />
            <label htmlFor="male">Yan</label>
            <img className="image" src="images/airpods.jpg" alt="" />
            <br />
            <input type="radio" id="female" name="gender" value="female" />
            <label htmlFor="female">Ust</label>
            <img className="image" src="images/airpods.jpg" alt="" />
          </form>
        </li>
        <li className="flex-item">
          <Malzeme />
        </li>
        <li className="flex-item1">
          <SolyanTip />
        </li>
      </ul>
    </Tab.Pane>
  );
};
export default GenelAyarlar;
//-----------------------------------------------
