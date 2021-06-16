const KapakProfil = (mobilya, secilenBolge, secilen) => {
  console.log("--kapakprofil e uğradı");
  console.log("mobilya==", mobilya, "secilenBolge=", secilenBolge);
  //kapak: [{ dahil: true, tip: 3,kapak_model=1, name: 'Kapak', material_id: 18, x0: 0, y0: 0, z0: 0, x: 1000, y: 100, z: 18, xg0: 0, xg1: 0, zg0: 0, zg1: 0, yg0: 0, yg1: 0 }],
  const profil_eni = 100;
  const profil_kalinligi = 18;
  const sol_girinti = 7;
  const sag_girinti = 7;
  const alt_girinti = 7;
  const ust_girinti = 7;
  if (
    secilen.bolge === true &&
    secilen.kapak === false &&
    secilen.kapak_profil === false
  ) {
    mobilya.kapak_profil[mobilya.kapak_profil.length] = {
      dahil: true,
      tip: 3,
      bolge: secilenBolge,
      kapak_model: 2,
      name: "profil_kapak",
      material_id: 18,
      x0: mobilya.bolge[secilenBolge].cx,
      y0: mobilya.bolge[secilenBolge].cy,
      z0: 318,
      x: mobilya.bolge[secilenBolge].x,
      y: mobilya.bolge[secilenBolge].y,
      z: 18,
      //sol_ust_kose
      sol_ust_kose: {
        x0:
          mobilya.bolge[secilenBolge].cx -
          mobilya.bolge[secilenBolge].x / 2 +
          profil_eni / 2 -
          sol_girinti,
        y0:
          mobilya.bolge[secilenBolge].cy +
          mobilya.bolge[secilenBolge].y / 2 -
          profil_eni / 2 +
          ust_girinti,
        z0: mobilya.Z0 + mobilya.Z / 2 + profil_kalinligi,
        x: profil_eni,
        y: profil_eni,
      },
      //sol_duz
      sol_duz: {
        x0:
          mobilya.bolge[secilenBolge].cx -
          mobilya.bolge[secilenBolge].x / 2 +
          profil_eni / 2 -
          sol_girinti,
        y0: mobilya.bolge[secilenBolge].cy + ust_girinti / 2 - alt_girinti / 2,
        z0: mobilya.Z0 + mobilya.Z / 2 + profil_kalinligi,
        x: profil_eni,
        y:
          mobilya.bolge[secilenBolge].y -
          2 * profil_eni +
          ust_girinti +
          alt_girinti,
      },
      //sol_at_kose
      sol_alt_kose: {
        x0:
          mobilya.bolge[secilenBolge].cx -
          mobilya.bolge[secilenBolge].x / 2 +
          profil_eni / 2 -
          sol_girinti,
        y0:
          mobilya.bolge[secilenBolge].cy -
          mobilya.bolge[secilenBolge].y / 2 +
          profil_eni / 2 -
          alt_girinti,
        z0: mobilya.Z0 + mobilya.Z / 2 + profil_kalinligi,
        x: profil_eni,
        y: profil_eni,
      },
      //orta_ust
      orta_ust: {
        x0: mobilya.bolge[secilenBolge].cx - sol_girinti / 2 + sag_girinti / 2,
        //y0: 2000,
        y0:
          mobilya.bolge[secilenBolge].cy +
          mobilya.bolge[secilenBolge].y / 2 -
          profil_eni / 2 +
          ust_girinti,
        z0: mobilya.Z0 + mobilya.Z / 2 + profil_kalinligi,
        x:
          mobilya.bolge[secilenBolge].x -
          2 * profil_eni +
          sol_girinti +
          sag_girinti,
        y: profil_eni,
      },
      //orta_orta
      orta_orta: {
        x0: mobilya.bolge[secilenBolge].cx - sol_girinti / 2 + sag_girinti / 2,
        y0: mobilya.bolge[secilenBolge].cy + ust_girinti / 2 - alt_girinti / 2,
        z0: mobilya.Z0 + mobilya.Z / 2 + profil_kalinligi,
        x:
          mobilya.bolge[secilenBolge].x -
          2 * profil_eni +
          sol_girinti +
          sag_girinti,
        y:
          mobilya.bolge[secilenBolge].y -
          2 * profil_eni +
          alt_girinti +
          ust_girinti,
      },
      //orta_alt
      orta_alt: {
        x0: mobilya.bolge[secilenBolge].cx - sol_girinti / 2 + sag_girinti / 2,
        y0:
          mobilya.bolge[secilenBolge].cy -
          mobilya.bolge[secilenBolge].y / 2 +
          profil_eni / 2 -
          alt_girinti,
        z0: mobilya.Z0 + mobilya.Z / 2 + profil_kalinligi,
        x:
          mobilya.bolge[secilenBolge].x -
          2 * profil_eni +
          sol_girinti +
          sag_girinti,
        y: profil_eni,
      },
      //sag_ust_kose
      sag_ust_kose: {
        x0:
          mobilya.bolge[secilenBolge].cx +
          mobilya.bolge[secilenBolge].x / 2 -
          profil_eni / 2 +
          sag_girinti,
        y0:
          mobilya.bolge[secilenBolge].cy +
          mobilya.bolge[secilenBolge].y / 2 -
          profil_eni / 2 +
          ust_girinti,
        z0: mobilya.Z0 + mobilya.Z / 2 + profil_kalinligi,
        x: profil_eni,
        y: profil_eni,
      },
      //sag_duz
      sag_duz: {
        x0:
          mobilya.bolge[secilenBolge].cx +
          mobilya.bolge[secilenBolge].x / 2 -
          profil_eni / 2 +
          sag_girinti,
        y0: mobilya.bolge[secilenBolge].cy + ust_girinti / 2 - alt_girinti / 2,

        z0: mobilya.Z0 + mobilya.Z / 2 + profil_kalinligi,
        x: profil_eni,
        y:
          mobilya.bolge[secilenBolge].y -
          2 * profil_eni +
          ust_girinti +
          alt_girinti,
      },
      //sag_alt_kose
      sag_alt_kose: {
        x0:
          mobilya.bolge[secilenBolge].cx +
          mobilya.bolge[secilenBolge].x / 2 -
          profil_eni / 2 +
          sag_girinti,
        y0:
          mobilya.bolge[secilenBolge].cy -
          mobilya.bolge[secilenBolge].y / 2 +
          profil_eni / 2 -
          alt_girinti,
        z0: mobilya.Z0 + mobilya.Z / 2 + profil_kalinligi,
        x: profil_eni,
        y: profil_eni,
      },
      //sag_yan
      sag_yan: {
        x0:
          mobilya.bolge[secilenBolge].cx +
          mobilya.bolge[secilenBolge].x / 2 +
          sag_girinti,
        y0: mobilya.bolge[secilenBolge].cy + ust_girinti / 2 - alt_girinti / 2,
        z0: mobilya.Z0 + mobilya.Z / 2 + profil_kalinligi / 2,
        y: mobilya.bolge[secilenBolge].y + alt_girinti + ust_girinti,
        z: 18,
      },
      //sol_yan
      sol_yan: {
        x0:
          mobilya.bolge[secilenBolge].cx -
          mobilya.bolge[secilenBolge].x / 2 -
          sol_girinti,
        y0: mobilya.bolge[secilenBolge].cy,
        z0: mobilya.Z0 + mobilya.Z / 2 + profil_kalinligi / 2,
        y: mobilya.bolge[secilenBolge].y + ust_girinti + alt_girinti,
        z: 18,
      },
      //ust
      ust_yan: {
        x0: mobilya.bolge[secilenBolge].cx - sol_girinti / 2 + sag_girinti / 2,
        y0:
          mobilya.bolge[secilenBolge].cy +
          mobilya.bolge[secilenBolge].y / 2 +
          ust_girinti,
        z0: mobilya.Z0 + mobilya.Z / 2 + profil_kalinligi / 2,
        x: mobilya.bolge[secilenBolge].x + sag_girinti + sol_girinti,
        z: 18,
      },
      //alt
      alt_yan: {
        x0: mobilya.bolge[secilenBolge].cx - sol_girinti + sag_girinti,
        y0:
          mobilya.bolge[secilenBolge].cy -
          mobilya.bolge[secilenBolge].y / 2 -
          alt_girinti,
        z0: mobilya.Z0 + mobilya.Z / 2 + profil_kalinligi / 2,
        x: mobilya.bolge[secilenBolge].x,
        z: 18,
      },
      //arka
      arka: {
        x0: mobilya.bolge[secilenBolge].cx + sag_girinti / 2 - sol_girinti / 2,
        y0: mobilya.bolge[secilenBolge].cy - ust_girinti / 2 + alt_girinti / 2,
        z0: mobilya.Z0 + mobilya.Z / 2,
        x: mobilya.bolge[secilenBolge].x + sag_girinti + sol_girinti,
        y: mobilya.bolge[secilenBolge].y + ust_girinti + alt_girinti,
        z: 18,
      },
      //------

      xg0: 0,
      xg1: 0,
      zg0: 0,
      zg1: 0,
      yg0: 0,
      yg1: 0,
    };
  } else {
    console.log("kapak var profil kapak eklenmedi");
  }

  return mobilya;
};

export default KapakProfil;
