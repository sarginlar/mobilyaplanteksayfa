const KapakProfil = (mobilya, secilenBolge) => {
  console.log('kapak çalıştı')
  console.log('mobilya==', mobilya, 'secilenBolge=', secilenBolge)
  //kapak: [{ dahil: true, tip: 3,kapak_model=1, name: 'Kapak', material_id: 18, x0: 0, y0: 0, z0: 0, x: 1000, y: 100, z: 18, xg0: 0, xg1: 0, zg0: 0, zg1: 0, yg0: 0, yg1: 0 }],
  const profil_eni = 100
  const profil_kalinligi = 18
  mobilya.kapak_profil[mobilya.kapak_profil.length] = {
    dahil: true,
    tip: 3,
    kapak_model: 2,
    name: 'profil_kapak',
    material_id: 18,
    x0: mobilya.bolge[secilenBolge].cx,
    y0: mobilya.bolge[secilenBolge].cy,
    z0: 318,
    x: mobilya.bolge[secilenBolge].x,
    y: mobilya.bolge[secilenBolge].y,
    z: 18,
    //sol_ust_kose
    sol_ust_kose: {
      x0: mobilya.bolge[secilenBolge].cx - mobilya.bolge[secilenBolge].x / 2 + profil_eni / 2,
      y0: mobilya.bolge[secilenBolge].cy + mobilya.bolge[secilenBolge].y / 2 - profil_eni / 2,
      z0: mobilya.Z0 + mobilya.Z / 2 + profil_kalinligi,
      x: profil_eni,
      y: profil_eni,
    },
    //sol_duz
    sol_duz: {
      x0: mobilya.bolge[secilenBolge].cx - mobilya.bolge[secilenBolge].x / 2 + profil_eni / 2,
      y0: mobilya.bolge[secilenBolge].cy,
      z0: mobilya.Z0 + mobilya.Z / 2 + profil_kalinligi,
      x: profil_eni,
      y: mobilya.bolge[secilenBolge].y - 2 * profil_eni,
    },
    sol_alt_kose: {
      x0: mobilya.bolge[secilenBolge].cx - mobilya.bolge[secilenBolge].x / 2 + profil_eni / 2,
      y0: mobilya.bolge[secilenBolge].cy - mobilya.bolge[secilenBolge].y / 2 + profil_eni / 2,
      z0: mobilya.Z0 + mobilya.Z / 2 + profil_kalinligi,
      x: profil_eni,
      y: profil_eni,
    },
    orta_ust: {
      x0: mobilya.bolge[secilenBolge].cx,
      //y0: 2000,
      y0: mobilya.bolge[secilenBolge].cy + mobilya.bolge[secilenBolge].y / 2 - profil_eni / 2,
      z0: mobilya.Z0 + mobilya.Z / 2 + profil_kalinligi,
      x: mobilya.bolge[secilenBolge].x - 2 * profil_eni,
      y: profil_eni,
    },
    orta_orta: {
      x0: mobilya.bolge[secilenBolge].cx,
      y0: mobilya.bolge[secilenBolge].cy,
      z0: mobilya.Z0 + mobilya.Z / 2 + profil_kalinligi,
      x: mobilya.bolge[secilenBolge].x - 2 * profil_eni,
      y: mobilya.bolge[secilenBolge].y - 2 * profil_eni,
    },
    orta_alt: {
      x0: mobilya.bolge[secilenBolge].cx,
      y0: mobilya.bolge[secilenBolge].cy - mobilya.bolge[secilenBolge].y / 2 + profil_eni / 2,
      z0: mobilya.Z0 + mobilya.Z / 2 + profil_kalinligi,
      x: mobilya.bolge[secilenBolge].x - 2 * profil_eni,
      y: profil_eni,
    },
    sag_ust_kose: {
      x0: mobilya.bolge[secilenBolge].cx + mobilya.bolge[secilenBolge].x / 2 - profil_eni / 2,
      y0: mobilya.bolge[secilenBolge].cy + mobilya.bolge[secilenBolge].y / 2 - profil_eni / 2,
      z0: mobilya.Z0 + mobilya.Z / 2 + profil_kalinligi,
      x: profil_eni,
      y: profil_eni,
    },
    sag_duz: {
      x0: mobilya.bolge[secilenBolge].cx + mobilya.bolge[secilenBolge].x / 2 - profil_eni / 2,
      y0: mobilya.bolge[secilenBolge].cy,
      z0: mobilya.Z0 + mobilya.Z / 2 + profil_kalinligi,
      x: profil_eni,
      y: mobilya.bolge[secilenBolge].y - 2 * profil_eni,
    },
    sag_alt_kose: {
      x0: mobilya.bolge[secilenBolge].cx + mobilya.bolge[secilenBolge].x / 2 - profil_eni / 2,
      y0: mobilya.bolge[secilenBolge].cy - mobilya.bolge[secilenBolge].y / 2 + profil_eni / 2,
      z0: mobilya.Z0 + mobilya.Z / 2 + profil_kalinligi,
      x: profil_eni,
      y: profil_eni,
    },

    //------

    xg0: 0,
    xg1: 0,
    zg0: 0,
    zg1: 0,
    yg0: 0,
    yg1: 0,
  }

  return mobilya
}

export default KapakProfil
