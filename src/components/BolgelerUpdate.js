const BolgelerUpdate = (mobilya, olculer) => {
  const yeniMobilya = mobilya;
  yeniMobilya.X = olculer.X;
  yeniMobilya.Y = olculer.Y;
  yeniMobilya.Z = olculer.Z;
  //----------------------

  for (let index = 0; index < mobilya.bolge.length; index++) {
    yeniMobilya.bolge[index].cx =
      (mobilya.bolge[index].cx / mobilya.X) * yeniMobilya.X;
  }
  console.log("yeniMobilya.bolge.cx=", yeniMobilya.bolge);

  return mobilya.bolgeler;
};

export default BolgelerUpdate;
