const DikmeSil = (mobilya, secilenDikme) => {
  console.log("DikmeSil çalıştı");
  //dikmeninin silip silinemeyeceği kontrol edilecek
  //dikme silindikten sonra bölgeler dikmenin silinmesine göre ayarlanacak
  //bu bölgeler içindeki kapak çekmece kapağı ve kasa gibi unsurlar düzenlenecek
  //dikmeye komşu olan bölgelerin tespiti

  const newList = mobilya.dikme.filter((item, index) => index !== secilenDikme);
  mobilya.dikme = newList;

  return mobilya;
};

export default DikmeSil;
