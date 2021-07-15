//@Nest----------------------------------------------------------------------------------
const Nest = (props) => {
  const b = [];
  const a = props;

  if (a.sol_yan.dahil) {
    b.push({
      name: a.sol_yan.name,
      kalinlik: a.sol_yan.x,
      boy: a.sol_yan.y,
      en: a.sol_yan.z,
    });
  }
  if (a.sag_yan.dahil) {
    b.push({
      name: a.sag_yan.name,
      kalinlik: a.sag_yan.x,
      boy: a.sag_yan.y,
      en: a.sag_yan.z,
    });
  }
  if (a.ust.dahil) {
    b.push({
      name: a.ust.name,
      boy: a.ust.x,
      kalinlik: a.ust.y,
      en: a.ust.z,
    });
  }
  if (a.alt.dahil) {
    b.push({
      name: a.alt.name,
      boy: a.alt.x,
      kalinlik: a.alt.y,
      en: a.alt.z,
    });
  }
  if (a.sol_pervaz.dahil) {
    b.push({
      name: a.sol_pervaz.name,
      boy: a.sol_pervaz.y,
      kalinlik: a.sag_pervaz.z,
      en: a.sol_pervaz.x,
    });
  }
  if (a.sag_pervaz.dahil) {
    b.push({
      name: a.sag_pervaz.name,
      boy: a.sag_pervaz.y,
      kalinlik: a.sag_pervaz.z,
      en: a.sag_pervaz.x,
    });
  }
  if (a.yatay_bolme.length > 0) {
    for (let index = 0; index < a.yatay_bolme.length; index++) {
      b.push({
        name: a.yatay_bolme[index].name,
        boy: a.yatay_bolme[index].x,
        kalinlik: a.yatay_bolme[index].y,
        en: a.yatay_bolme[index].z,
      });
    }
  }
  if (a.dikey_bolme.length > 0) {
    for (let index = 0; index < a.dikey_bolme.length; index++) {
      b.push({
        name: a.dikey_bolme[index].name,
        boy: a.dikey_bolme[index].y,
        kalinlik: a.dikey_bolme[index].x,
        en: a.dikey_bolme[index].z,
      });
    }
  }
  //console.log('b=', b)
  return b;
};
export default Nest;
