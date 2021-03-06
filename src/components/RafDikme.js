// Filename: public/RafDikeyBolme.js
let açıklık_gen = 0;
let açıklık_yük = 0;
let x_1 = 0;
let y_1 = 0;
let z_1 = 0;
//let bölge = []
let üst_kalınlık;
let alt_kalınlık;
//let seç = { tip: 0, s: 0 }
let kalınlık = 1.8 / 2;
export function basla(mod) {
  let bölge = [];
  let yatay_bolme = [];
  let dikey_bolme = [];
  if (mod.üst.düz.dahil) {
    üst_kalınlık = mod.üst.düz.malzeme.kalınlık;
  } else if (mod.üst.ön_kayıt.dahil) {
    üst_kalınlık = mod.üst.ön_kayıt.malzeme.kalınlık;
  } else if (mod.üst.arka_kayıt.dahil) {
    üst_kalınlık = mod.üst.arka_kayıt.malzeme.kalınlık;
  } else if (mod.üst.dik_köşe.dahil) {
    üst_kalınlık = mod.üst.dik_köşe.malzeme.kalınlık;
  } else if (mod.üst.açılı_köşe.dahil) {
    üst_kalınlık = mod.üst.açılı_köşe.malzeme.kalınlık;
  } else {
    üst_kalınlık = 0;
  }
  //--------
  if (mod.alt.düz.dahil) {
    alt_kalınlık = mod.alt.düz.malzeme.kalınlık;
  } else if (mod.alt.dik_köşe.dahil) {
    alt_kalınlık = mod.alt.dik_köşe.malzeme.kalınlık;
  } else if (mod.üst.açılı_köşe.dahil) {
    alt_kalınlık = mod.alt.açılı_köşe.malzeme.kalınlık;
  } else {
    alt_kalınlık = 0;
  }
  if (mod.baza.dahil) {
    alt_kalınlık = alt_kalınlık + mod.baza.en;
  }
  //---------
  x_1 = mod.sol_yan.malzeme.kalınlık + mod.kln_sol.malzeme.kalınlık;
  y_1 = üst_kalınlık;
  z_1 = mod.arkalık.malzeme.kalınlık + mod.arkalık.arka_gir;
  açıklık_yük = mod.yükseklik - (üst_kalınlık + alt_kalınlık);
  açıklık_gen =
    mod.eni -
    (x_1 + mod.kln_sağ.malzeme.kalınlık + mod.sağ_yan.malzeme.kalınlık);
  //------burada birinci dikdörtgen oluşturuluyor

  if (mod.bölge.length === 0) {
    mod.bölge.push({
      x1: x_1,
      y1: y_1,
      gen: açıklık_gen,
      yük: açıklık_yük,
    });
    //bölge = mod.bölge
    //console.log(bölge)
  }
  let r = mod.yatay_bolme;
  /*
	for (var i = 0; i < mod.yatay_bolme.length; i++) {
		yatay_bolme[i].x_1 = mod.yatay_bolme[i].x_1 - x_1
		yatay_bolme[i].y_1 = mod.yatay_bolme[i].y_1 - y_1
	}
*/
  let dik = mod.dikey_bolme;
  /*
    for (var j = 0; j < mod.dikey_bolme.length; j++) {
    	dikey_bolme[j].x_1 = mod.dikey_bolme[j].x_1 - x_1
    	dikey_bolme[j].y_1 = mod.dikey_bolme[j].y_1 - y_1
    }
    */
  bölge = mod.bölge;
  /*
    for (var k = 0; k < mod.bölge.length; k++) {
    	bölge[k].x1 = mod.bölge[k].x1 - x_1
    	bölge[k].y1 = mod.bölge[k].y1 - y_1
    }
    
    */

  return {
    r,
    dik,
    bölge,
  };
}

export function imgModul(mod, seç, x12, y12) {
  if (mod.yatay_bolme.length > 0 || mod.dikey_bolme.length > 0) {
    //---tıklandığındaki bölgeyi buluyor
    for (var i = 0; i < mod.bölge.length; i++) {
      // burada bölge seçiliyor
      if (
        x12 >= mod.bölge[i].x1 &&
        x12 <= mod.bölge[i].x1 + mod.bölge[i].gen &&
        y12 >= mod.bölge[i].y1 &&
        y12 <= mod.bölge[i].yük + mod.bölge[i].y1
      ) {
        seç = {
          tip: 0,
          s: i,
        };
        console.log("bölge=" + i);
      }
    }
    for (var j = 0; j < mod.yatay_bolme.length; j++) {
      // burda yatay_bolme seçiliyor
      if (
        x12 >= mod.yatay_bolme[j].x_1 &&
        x12 <= mod.yatay_bolme[j].x_1 + mod.yatay_bolme[j].boy &&
        y12 >= mod.yatay_bolme[j].y_1 &&
        y12 <= mod.yatay_bolme[j].malzeme.kalınlık + mod.yatay_bolme[j].y_1
      ) {
        seç = {
          tip: 1,
          s: j,
        };
        //console.log("y2=" + (yatay_bolme[j].malzeme.kalınlık + yatay_bolme[j].y_1 + y_1))
        console.log("yatay_bolme seçildi=" + seç.s);
      }
    }
    for (var k = 0; k < mod.dikey_bolme.length; k++) {
      // burda yatay_bolme seçiliyor
      if (
        x12 >= mod.dikey_bolme[k].x_1 &&
        x12 <= mod.dikey_bolme[k].x_1 + mod.dikey_bolme[k].malzeme.kalınlık &&
        y12 >= mod.dikey_bolme[k].y_1 &&
        y12 <= mod.dikey_bolme[k].boy + mod.dikey_bolme[k].y_1
      ) {
        seç = {
          tip: 2,
          s: k,
        };
        //console.log("y2=" + (dikey_bolme[k].malzeme.kalınlık + dikey_bolme[k].y_1 + y_1))
        console.log("dikey_bolme seçildi=" + seç.s);
      }
    }
  } else {
    /*
        if (mod.üst.düz.dahil) {
        	üst_kalınlık = mod.üst.düz.malzeme.kalınlık
        } else if (mod.üst.ön_kayıt.dahil) {
        	üst_kalınlık = mod.üst.ön_kayıt.malzeme.kalınlık
        } else if (mod.üst.arka_kayıt.dahil) {
        	üst_kalınlık = mod.üst.arka_kayıt.malzeme.kalınlık
        } else if (mod.üst.dik_köşe.dahil) {
        	üst_kalınlık = mod.üst.dik_köşe.malzeme.kalınlık
        } else if (mod.üst.açılı_köşe.dahil) {
        	üst_kalınlık = mod.üst.açılı_köşe.malzeme.kalınlık
        } else {
        	üst_kalınlık = 0
        }
        //--------			
        if (mod.alt.düz.dahil) {
        	alt_kalınlık = mod.alt.düz.malzeme.kalınlık
        } else if (mod.alt.dik_köşe.dahil) {
        	alt_kalınlık = mod.alt.dik_köşe.malzeme.kalınlık
        } else if (mod.üst.açılı_köşe.dahil) {
        	alt_kalınlık = mod.alt.açılı_köşe.malzeme.kalınlık
        } else {
        	alt_kalınlık = 0
        }
        if (mod.baza.dahil) {
        	alt_kalınlık = alt_kalınlık + mod.baza.en
        }
        //---------
        x_1 = mod.sol_yan.malzeme.kalınlık + mod.kln_sol.malzeme.kalınlık;
        y_1 = üst_kalınlık;
        z_1 = mod.arkalık.malzeme.kalınlık + mod.arkalık.arka_gir
        açıklık_yük = (mod.yükseklik - (üst_kalınlık + alt_kalınlık));
        açıklık_gen = (mod.eni - (x_1 + mod.kln_sağ.malzeme.kalınlık + mod.sağ_yan.malzeme.kalınlık));
        //------burada birinci dikdörtgen oluşturuluyor
        if (bölge.length === 0) {
        	bölge.push({
        		x1: 0,
        		y1: 0,
        		gen: açıklık_gen,
        		yük: açıklık_yük,
        	})
        }
        */
  }

  return seç;
}

export function btnRafEkle(mod, seç, sabit) {
  //console.log(seç.s)
  //mod.bölge[(seç.s)].x1 = mod.bölge[(seç.s)].x1
  //mod.bölge[(seç.s)].y1 = mod.bölge[(seç.s)].y1
  //mod.bölge[(seç.s)].gen = mod.bölge[(seç.s)].gen;
  mod.bölge[seç.s].yük = mod.bölge[seç.s].yük / 2 - kalınlık;
  mod.bölge.push({
    x1: mod.bölge[seç.s].x1,
    y1: mod.bölge[seç.s].yük + mod.bölge[seç.s].y1 + kalınlık * 2,
    gen: mod.bölge[seç.s].gen,
    yük: mod.bölge[seç.s].yük,
  });
  //-----------------
  mod.yatay_bolme.push({
    şekli: 0, //0: düz yatay_bolme 1: köşeli yatay_bolme 2: açılı yatay_bolme
    sabit: sabit,
    adı: "yatay_bolme",
    tip: 3,
    x_1: mod.bölge[seç.s].x1,
    y_1: mod.bölge[mod.bölge.length - 1].y1 - kalınlık * 2,
    z_1: 0,
    en: mod.derinlik,
    boy: mod.bölge[seç.s].gen,
    adet: 1,
    malzeme: {
      mn: 0,
      tp: 0,
      kn: 0,
      marka: "starwood",
      adı: "66_Kar Beyaz",
      kalınlık: 1.8,
      image: "rgb(255,255,255)",
      fiyat: 0,
    },
    raf_sabit: 0,
    ön_gir: 0,
    arka_gir: 0,
    sol_gir: 0,
    sağ_gir: 0,
    ön_bant: 0.8,
    arka_bant: 0.8,
    sol_bant: 0.8,
    sağ_bant: 0.8,
    ön_bağlantı: 0, // 0:yüz yüze bağlantı
    arka_bağlantı: 0,
    sol_bağlantı: 0,
    sağ_bağlantı: 0,
  });
  //console.log(mod.yatay_bolme)
  return mod;
}

export function btnDikeyBolmeEkle(mod, seç) {
  //console.log(seç.s)
  //bölge[(seç.s)].x1 = bölge[(seç.s)].x1
  //bölge[(seç.s)].y1 = bölge[(seç.s)].y1
  mod.bölge[seç.s].gen = mod.bölge[seç.s].gen / 2 - kalınlık;
  //bölge[(seç.s)].yük = bölge[(seç.s)].yük;
  mod.bölge.push({
    x1: mod.bölge[seç.s].x1 + mod.bölge[seç.s].gen + kalınlık * 2,
    y1: mod.bölge[seç.s].y1,
    gen: mod.bölge[seç.s].gen,
    yük: mod.bölge[seç.s].yük,
  });
  //-----------------
  mod.dikey_bolme.push({
    şekli: 0, //0: düz dikey_bolme
    sabit: true,
    adı: "dikey_bolme",
    tip: 2,
    x_1: mod.bölge[mod.bölge.length - 1].x1 - kalınlık * 2,
    y_1: mod.bölge[seç.s].y1,
    z_1: 0,
    en: mod.derinlik,
    boy: mod.bölge[seç.s].yük,
    adet: 1,
    malzeme: {
      mn: 0,
      tp: 0,
      kn: 0,
      marka: "starwood",
      adı: "66_Kar Beyaz",
      kalınlık: 1.8,
      image: "rgb(255,255,255)",
      fiyat: 0,
    },
    raf_sabit: 0,
    ön_gir: 0,
    arka_gir: 0,
    üst_gir: 0,
    alt_gir: 0,
    ön_bant: 0.8,
    arka_bant: 0.8,
    üst_bant: 0.8,
    alt_bant: 0.8,
    ön_bağlantı: 0, // 0:yüz yüze bağlantı
    arka_bağlantı: 0,
    üst_bağlantı: 0,
    alt_bağlantı: 0,
  });

  return mod;
}

export function btnSil(mod, seç) {
  let toplam = [];
  let a11 = [];
  for (var i = 0; i < mod.bölge.length; i++) {
    //console.log(mod.bölge.length + "i=" + i + "---" + yatay_bolme[seç.s].y_1 + "--" + (mod.bölge[i].yük + mod.bölge[i].y1) + "---" + (yatay_bolme[seç.s].y_1 + yatay_bolme[seç.s].malzeme.kalınlık) + "--" + mod.bölge[i].y1)
    switch (seç.tip) {
      case 1:
        if (
          mod.yatay_bolme[seç.s].y_1.toFixed(1) ===
            (mod.bölge[i].yük + mod.bölge[i].y1).toFixed(1) ||
          (
            mod.yatay_bolme[seç.s].y_1 + mod.yatay_bolme[seç.s].malzeme.kalınlık
          ).toFixed(1) === mod.bölge[i].y1.toFixed(1)
        ) {
          console.log("aynı olanlar=" + i);
          toplam.push(mod.bölge[i]);
        } else {
          a11.push(mod.bölge[i]);
        }
        break;
      case 2:
        if (
          (mod.dikey_bolme[seç.s].x_1.toFixed(1) ===
            (mod.bölge[i].gen + mod.bölge[i].x1).toFixed(1) &&
            mod.dikey_bolme[seç.s].y_1.toFixed(1) ===
              mod.bölge[i].y1.toFixed(1)) ||
          ((
            mod.dikey_bolme[seç.s].x_1 + mod.dikey_bolme[seç.s].malzeme.kalınlık
          ).toFixed(1) === mod.bölge[i].x1.toFixed(1) &&
            mod.dikey_bolme[seç.s].y_1.toFixed(1) ===
              mod.bölge[i].y1.toFixed(1))
        ) {
          console.log("aynı olanlar=" + i);
          toplam.push(mod.bölge[i]);
        } else {
          a11.push(mod.bölge[i]);
        }
        break;
      default:
        break;
    }
  }
  console.log("toplam.length=" + toplam.length);
  if (toplam.length > 2) {
    console.log("yapı halinde silinmez");
  } else {
    switch (seç.tip) {
      case 0:
        break;
      case 1:
        mod.yatay_bolme.splice(seç.s, 1);
        break;
      case 2:
        mod.dikey_bolme.splice(seç.s, 1);
        break;
      default:
        break;
    }
    mod.bölge = a11;
    console.log(toplam);
    let yeni_bölge = y_bölge(toplam);
    mod.bölge.push(yeni_bölge);
    console.log(yeni_bölge);
    //imgModul_click(event)
  }
  return mod;
}

function y_bölge(t) {
  let ek_x1 = t[0].x1;
  let ek_y1 = t[0].y1;
  let eb_x2 = t[0].x1 + t[0].gen;
  let eb_y2 = t[0].y1 + t[0].yük;

  for (var i = 1; i < t.length; i++) {
    if (t[i].x1 < ek_x1) {
      ek_x1 = t[i].x1;
    }
    if (t[i].y1 < ek_y1) {
      ek_y1 = t[i].y1;
    }
    if (t[i].x1 + t[i].gen > eb_x2) {
      eb_x2 = t[i].x1 + t[i].gen;
    }
    if (t[i].y1 + t[i].yük > eb_y2) {
      eb_y2 = t[i].y1 + t[i].yük;
    }
  }
  let kutu = {
    x1: ek_x1,
    y1: ek_y1,
    gen: eb_x2 - ek_x1,
    yük: eb_y2 - ek_y1,
  };
  return kutu;
}

function yük_fark_f(b, seç, k) {
  let ek_k = 10000;

  for (var i1 = 0; i1 < k.length; i1++) {
    if (b[k[i1]].yük < ek_k) {
      ek_k = b[k[i1]].yük;
    }
  }

  return ek_k;
}

export function RafGüncelle(mod, seç, y, rdgRaf, uyari) {
  let toplam = [];
  let r_üst;
  let r_üst_var = false;
  let r_alt_var = false;
  let r_alt;
  let rü_ak = []; // üst yatay_bolme alt komşu bölgeler
  let rü_ük = []; // üst yatay_bolme üst komşu
  let ra_ak = []; // alt yatay_bolme alt komşu modüller
  let ra_ük = []; //alt yatay_bolme üst komşu modüller
  let rü_dü = []; //üst dikey_bolme üst komşu
  let rü_da = []; // üst dikey_bolme alt komşu
  let ra_dü = []; //alt yatay_bolme dikey_bolme üst komşu
  let ra_da = []; // alt yatay_bolme dikey_bolme alt komşu
  if (seç.tip === 0) {
    for (var i = 0; i < mod.yatay_bolme.length; i++) {
      // burada seçilen bölgenin üstüne komşu alan yatay_bolme bulunuyor
      if (
        Math.abs(
          mod.bölge[seç.s].y1 -
            (mod.yatay_bolme[i].y_1 + mod.yatay_bolme[i].malzeme.kalınlık)
        ) <= 0.1 &&
        mod.bölge[seç.s].x1 >= mod.yatay_bolme[i].x_1 &&
        mod.bölge[seç.s].x1 <= mod.yatay_bolme[i].x_1 + mod.yatay_bolme[i].boy
      ) {
        r_üst = i;
        r_üst_var = true;
        //console.log("seçilen_üst=" + i)
      }
      if (
        Math.abs(
          mod.yatay_bolme[i].y_1 - (mod.bölge[seç.s].y1 + mod.bölge[seç.s].yük)
        ) <= 0.1 &&
        mod.bölge[seç.s].x1 >= mod.yatay_bolme[i].x_1 &&
        mod.bölge[seç.s].x1 <= mod.yatay_bolme[i].x_1 + mod.yatay_bolme[i].boy
      ) {
        r_alt = i;
        r_alt_var = true;
        //console.log("seçilen_alt=" + i)
      }
    }
    for (var i3 = 0; i3 < mod.dikey_bolme.length; i3++) {
      // seçilen rafa komşu olan dikey_bolmeler
      if (r_üst_var) {
        if (
          Math.abs(
            mod.dikey_bolme[i3].y_1 -
              (mod.yatay_bolme[r_üst].y_1 +
                mod.yatay_bolme[r_üst].malzeme.kalınlık)
          ) <= 0.1 &&
          mod.dikey_bolme[i3].x_1 >= mod.yatay_bolme[r_üst].x_1 &&
          mod.dikey_bolme[i3].x_1 <=
            mod.yatay_bolme[r_üst].x_1 + mod.yatay_bolme[r_üst].boy
        ) {
          rü_da.push(i3);
          //console.log("rü_da=" + rü_da[i3])
        }
        if (
          Math.abs(
            mod.dikey_bolme[i3].y_1 +
              mod.dikey_bolme[i3].boy -
              mod.yatay_bolme[r_üst].y_1
          ) <= 0.1 &&
          mod.dikey_bolme[i3].x_1 >= mod.yatay_bolme[r_üst].x_1 &&
          mod.dikey_bolme[i3].x_1 <=
            mod.yatay_bolme[r_üst].x_1 + mod.yatay_bolme[r_üst].boy
        ) {
          rü_dü.push(i3);
          //console.log("rü_dü=" + rü_dü[i3])
        }
      }
      if (r_alt_var) {
        if (
          Math.abs(
            mod.dikey_bolme[i3].y_1 +
              mod.dikey_bolme[i3].boy -
              mod.yatay_bolme[r_alt].y_1
          ) <= 0.1 &&
          mod.dikey_bolme[i3].x_1 >= mod.yatay_bolme[r_alt].x_1 &&
          mod.dikey_bolme[i3].x_1 <=
            mod.yatay_bolme[r_alt].x_1 + mod.yatay_bolme[r_alt].boy
        ) {
          ra_dü.push(i3);
          //console.log("ra_dü=" + ra_dü[i3])
        }
        if (
          Math.abs(
            mod.dikey_bolme[i3].y_1 -
              (mod.yatay_bolme[r_alt].y_1 +
                mod.yatay_bolme[r_alt].malzeme.kalınlık)
          ) <= 0.1 &&
          mod.dikey_bolme[i3].x_1 >= mod.yatay_bolme[r_alt].x_1 &&
          mod.dikey_bolme[i3].x_1 <=
            mod.yatay_bolme[r_alt].x_1 + mod.yatay_bolme[r_alt].boy
        ) {
          ra_da.push(i3);
          //console.log("ra_da=" + ra_da[i3])
        }
      }
    }
    for (var j = 0; j < mod.bölge.length; j++) {
      // seçilen bölgeye komşu olan bölgeler bulunuyor
      if (r_üst_var) {
        if (
          Math.abs(
            mod.bölge[j].y1 -
              (mod.yatay_bolme[r_üst].y_1 +
                mod.yatay_bolme[r_üst].malzeme.kalınlık)
          ) <= 0.1 &&
          mod.bölge[j].x1 >= mod.yatay_bolme[r_üst].x_1 &&
          mod.bölge[j].x1 <=
            mod.yatay_bolme[r_üst].x_1 + mod.yatay_bolme[r_üst].boy
        ) {
          rü_ak.push(j);
          //console.log("rü_ak=")
          //console.log(rü_ak)
        }
        if (
          Math.abs(
            mod.bölge[j].y1 + mod.bölge[j].yük - mod.yatay_bolme[r_üst].y_1
          ) <= 0.1 &&
          mod.bölge[j].x1 >= mod.yatay_bolme[r_üst].x_1 &&
          mod.bölge[j].x1 <=
            mod.yatay_bolme[r_üst].x_1 + mod.yatay_bolme[r_üst].boy
        ) {
          rü_ük.push(j);
          //console.log("rü_ük=")
          //console.log(rü_ük)
        }
      }
      if (r_alt_var) {
        if (
          Math.abs(
            mod.bölge[j].y1 -
              (mod.yatay_bolme[r_alt].y_1 +
                mod.yatay_bolme[r_alt].malzeme.kalınlık)
          ) <= 0.1 &&
          mod.bölge[j].x1 >= mod.yatay_bolme[r_alt].x_1 &&
          mod.bölge[j].x1 <=
            mod.yatay_bolme[r_alt].x_1 + mod.yatay_bolme[r_alt].boy
        ) {
          ra_ak.push(j);
          //console.log("ra_ak=")
          //console.log(ra_ak)
        }
        if (
          Math.abs(
            mod.bölge[j].y1 + mod.bölge[j].yük - mod.yatay_bolme[r_alt].y_1
          ) <= 0.1 &&
          mod.bölge[j].x1 >= mod.yatay_bolme[r_alt].x_1 &&
          mod.bölge[j].x1 <=
            mod.yatay_bolme[r_alt].x_1 + mod.yatay_bolme[r_alt].boy
        ) {
          ra_ük.push(j);
          //console.log("ra_ük=")
          //console.log(ra_ük)
        }
      }
    }
  }
  let yük_fark = mod.bölge[seç.s].yük - y;

  console.log("yük_fark=" + yük_fark);

  //console.log("rdgRaf=" + rdgRaf)
  switch (rdgRaf) {
    case 0:
      if (r_üst_var) {
        if (yük_fark < 0) {
          let ük = yük_fark_f(mod.bölge, seç, rü_ük);
          if (Math.abs(yük_fark) > ük) {
            yük_fark = -ük;
            if (rü_dü.length > 0) {
              yük_fark = -ük + en_küçük_raf_aralığı;
            }
            console.log("ük=" + ük);
          }
        } else {
          let ak = yük_fark_f(mod.bölge, seç, rü_ak);
          if (Math.abs(yük_fark) > ak) {
            yük_fark = ak;
            if (rü_da.length > 0) {
              yük_fark = ak + en_küçük_raf_aralığı;
            }
            console.log("ak=" + ak);
          }
        }
        for (var i1 = 0; i1 < rü_ak.length; i1++) {
          mod.bölge[rü_ak[i1]].y1 = mod.bölge[rü_ak[i1]].y1 + yük_fark;
          mod.bölge[rü_ak[i1]].yük = mod.bölge[rü_ak[i1]].yük - yük_fark;
        }
        for (var i2 = 0; i2 < rü_ük.length; i2++) {
          //mod.bölge[rü_ük[i2]].y1 = mod.bölge[rü_ük[i2]].y1 + yük_fark
          mod.bölge[rü_ük[i2]].yük = mod.bölge[rü_ük[i2]].yük + yük_fark;
        }
        for (var i4 = 0; i4 < rü_da.length; i4++) {
          mod.dikey_bolme[rü_da[i4]].y_1 =
            mod.dikey_bolme[rü_da[i4]].y_1 + yük_fark;
          mod.dikey_bolme[rü_da[i4]].boy =
            mod.dikey_bolme[rü_da[i4]].boy - yük_fark;
        }
        for (var j1 = 0; j1 < rü_dü.length; j1++) {
          //mod.dikey_bolme[rü_dü[j1]].y_1 = mod.dikey_bolme[rü_dü[j1]].y_1 + yük_fark
          mod.dikey_bolme[rü_dü[j1]].boy =
            mod.dikey_bolme[rü_dü[j1]].boy + yük_fark;
        }
        mod.yatay_bolme[r_üst].y_1 = mod.yatay_bolme[r_üst].y_1 + yük_fark;
        //console.log("mod.yatay_bolme[r_üst].y_1=" + mod.yatay_bolme[r_üst].y_1)
      } else {
        uyari = "üst yatay_bolme yok alt rafı ayarlayın";
      }

      break;
    case 1:
      if (r_alt_var) {
        if (yük_fark < 0) {
          let ak = yük_fark_f(mod.bölge, seç, ra_ak);
          if (Math.abs(yük_fark) > ak) {
            yük_fark = -ak;
            if (ra_dü.length > 0) {
              yük_fark = -ak + en_küçük_raf_aralığı;
            }
            console.log("ra ak=" + ak);
          }
        } else {
          let ük = yük_fark_f(mod.bölge, seç, ra_ük);
          if (Math.abs(yük_fark) > ük) {
            yük_fark = ük;
            if (ra_da.length > 0) {
              yük_fark = ük + en_küçük_raf_aralığı;
            }
            console.log("ra ük=" + ük);
          }
        }
        for (var i5 = 0; i5 < ra_ak.length; i5++) {
          mod.bölge[ra_ak[i5]].y1 = mod.bölge[ra_ak[i5]].y1 - yük_fark;
          mod.bölge[ra_ak[i5]].yük = mod.bölge[ra_ak[i5]].yük + yük_fark;
        }
        for (var i6 = 0; i6 < ra_ük.length; i6++) {
          //mod.bölge[ük[i6]].y1 = mod.bölge[ük[i6]].y1 + yük_fark
          mod.bölge[ra_ük[i6]].yük = mod.bölge[ra_ük[i6]].yük - yük_fark;
        }
        for (var i7 = 0; i7 < ra_dü.length; i7++) {
          //mod.dikey_bolme[ra_dü[i7]].y_1 = mod.dikey_bolme[ra_dü[i7]].y_1 + yük_fark
          mod.dikey_bolme[ra_dü[i7]].boy =
            mod.dikey_bolme[ra_dü[i7]].boy - yük_fark;
        }
        for (var j2 = 0; j2 < ra_da.length; j2++) {
          mod.dikey_bolme[ra_da[j2]].y_1 =
            mod.dikey_bolme[ra_da[j2]].y_1 - yük_fark;
          mod.dikey_bolme[ra_da[j2]].boy =
            mod.dikey_bolme[ra_da[j2]].boy + yük_fark;
        }
        mod.yatay_bolme[r_alt].y_1 = mod.yatay_bolme[r_alt].y_1 - yük_fark;
        //console.log("mod.yatay_bolme[r_alt].y_1=" + mod.yatay_bolme[r_alt].y_1)
      } else {
        uyari = "alt yatay_bolme yok üst rafı ayarlayın";
      }

      break;
    case 2:
      break;
    default:
      break;
  }
  return {
    mod,
    uyari,
  };
}

function gen_fark_f(b, seç, k) {
  let ek_k = 10000;

  for (var i1 = 0; i1 < k.length; i1++) {
    if (b[k[i1]].gen < ek_k) {
      ek_k = b[k[i1]].gen;
    }
  }

  return ek_k;
}

let en_küçük_raf_aralığı = 5;
export function DikeyBolmeGuncelle(mod, seç, gen, rdgDikeyBolme, uyari) {
  let toplam = [];
  let d_sol; // bölgeye komşu sol dikey_bolme
  let d_sol_var = false; // bölgeye komşu sol dikey_bolme var
  let d_sağ_var = false; // bölgeye komsu sağ dime var
  let d_sağ; // bölgeye komşu sağ dikey_bolme
  let dsol_sağk = []; // sol dikey_bolme sağ komşu bölgeler
  let dsol_solk = []; // sol dikey_bolme sol komşu bölgeler
  let dsağ_solk = []; // sağ dikey_bolme sol komşu bölgeler
  let dsağ_sağk = []; //sağ dikey_bolme sağ komşu bölgeler
  let dsol_rsol = []; //sol dikey_bolmeye komşu sol raflar
  let dsol_rsağ = []; //sol dikey_bolmeye komşu sağ yatay_bolme
  let dsağ_rsol = []; //sağ dikey_bolmeye komşu sol yatay_bolme
  let dsağ_rsağ = []; // sağ dikey_bolmeye komşu sağ yatay_bolme
  if (seç.tip === 0) {
    for (var i = 0; i < mod.dikey_bolme.length; i++) {
      // seçilen bölgeye komşu sol ve sağ dikey_bolmeler
      if (
        Math.abs(
          mod.bölge[seç.s].x1 -
            (mod.dikey_bolme[i].x_1 + mod.dikey_bolme[i].malzeme.kalınlık)
        ) <= 0.1 &&
        mod.bölge[seç.s].y1 >= mod.dikey_bolme[i].y_1 &&
        mod.bölge[seç.s].y1 <= mod.dikey_bolme[i].y_1 + mod.dikey_bolme[i].boy
      ) {
        d_sol = i;
        d_sol_var = true;
        //console.log("seçilen_sol_dikey_bolme=" + i)
      }
      if (
        Math.abs(
          mod.dikey_bolme[i].x_1 - (mod.bölge[seç.s].x1 + mod.bölge[seç.s].gen)
        ) <= 0.1 &&
        mod.bölge[seç.s].y1 >= mod.dikey_bolme[i].y_1 &&
        mod.bölge[seç.s].y1 <= mod.dikey_bolme[i].y_1 + mod.dikey_bolme[i].boy
      ) {
        d_sağ = i;
        d_sağ_var = true;
        //console.log("seçilen_sağ_dikey_bolme=" + i)
      }
    }
    for (var i3 = 0; i3 < mod.yatay_bolme.length; i3++) {
      // seçilen dikey_bolmeye komşu olan raflar bulunacak
      if (d_sol_var) {
        if (
          Math.abs(
            mod.yatay_bolme[i3].x_1 -
              (mod.dikey_bolme[d_sol].x_1 +
                mod.dikey_bolme[d_sol].malzeme.kalınlık)
          ) <= 0.1 &&
          mod.yatay_bolme[i3].y_1 >= mod.dikey_bolme[d_sol].y_1 &&
          mod.yatay_bolme[i3].y_1 <=
            mod.dikey_bolme[d_sol].y_1 + mod.dikey_bolme[d_sol].boy
        ) {
          dsol_rsağ.push(i3);
          //console.log("dsol_rsağ=" + i3)
        }
        if (
          Math.abs(
            mod.yatay_bolme[i3].x_1 +
              mod.yatay_bolme[i3].boy -
              mod.dikey_bolme[d_sol].x_1
          ) <= 0.1 &&
          mod.yatay_bolme[i3].y_1 >= mod.dikey_bolme[d_sol].y_1 &&
          mod.yatay_bolme[i3].y_1 <=
            mod.dikey_bolme[d_sol].y_1 + mod.dikey_bolme[d_sol].boy
        ) {
          dsol_rsol.push(i3);
          //console.log("dsol_rsol=" + i3)
        }
      }
      if (d_sağ_var) {
        if (
          Math.abs(
            mod.yatay_bolme[i3].x_1 +
              mod.yatay_bolme[i3].boy -
              mod.dikey_bolme[d_sağ].x_1
          ) <= 0.1 &&
          mod.yatay_bolme[i3].y_1 >= mod.dikey_bolme[d_sağ].y_1 &&
          mod.yatay_bolme[i3].y_1 <=
            mod.dikey_bolme[d_sağ].y_1 + mod.dikey_bolme[d_sağ].boy
        ) {
          dsağ_rsol.push(i3);
          //console.log("dsağ_rsol=" + i3)
        }
        if (
          Math.abs(
            mod.yatay_bolme[i3].x_1 -
              (mod.dikey_bolme[d_sağ].x_1 +
                mod.dikey_bolme[d_sağ].malzeme.kalınlık)
          ) <= 0.1 &&
          mod.yatay_bolme[i3].y_1 >= mod.dikey_bolme[d_sağ].y_1 &&
          mod.yatay_bolme[i3].y_1 <=
            mod.dikey_bolme[d_sağ].y_1 + mod.dikey_bolme[d_sağ].boy
        ) {
          dsağ_rsağ.push(i3);
          //console.log("dsağ_rsağ=" + i3)
        }
      }
    }
    for (var j = 0; j < mod.bölge.length; j++) {
      // seçilen bölgeye komşu olan bölgeler bulunuyor
      if (d_sol_var) {
        if (
          Math.abs(
            mod.bölge[j].x1 -
              (mod.dikey_bolme[d_sol].x_1 +
                mod.dikey_bolme[d_sol].malzeme.kalınlık)
          ) <= 0.1 &&
          mod.bölge[j].y1 >= mod.dikey_bolme[d_sol].y_1 &&
          mod.bölge[j].y1 <=
            mod.dikey_bolme[d_sol].y_1 + mod.dikey_bolme[d_sol].boy
        ) {
          dsol_sağk.push(j);
          //console.log("dsol_sağk=" + j)
        }
        if (
          Math.abs(
            mod.bölge[j].x1 + mod.bölge[j].gen - mod.dikey_bolme[d_sol].x_1
          ) <= 0.1 &&
          mod.bölge[j].y1 >= mod.dikey_bolme[d_sol].y_1 &&
          mod.bölge[j].y1 <=
            mod.dikey_bolme[d_sol].y_1 + mod.dikey_bolme[d_sol].boy
        ) {
          dsol_solk.push(j);
          //console.log("dsol_solk=" + j)
        }
      }
      if (d_sağ_var) {
        if (
          Math.abs(
            mod.bölge[j].x1 -
              (mod.dikey_bolme[d_sağ].x_1 +
                mod.dikey_bolme[d_sağ].malzeme.kalınlık)
          ) <= 0.1 &&
          mod.bölge[j].y1 >= mod.dikey_bolme[d_sağ].y_1 &&
          mod.bölge[j].y1 <=
            mod.dikey_bolme[d_sağ].y_1 + mod.dikey_bolme[d_sağ].boy
        ) {
          dsağ_sağk.push(j);
          //console.log("dsağ_sağk=" + j)
        }
        if (
          Math.abs(
            mod.bölge[j].x1 + mod.bölge[j].gen - mod.dikey_bolme[d_sağ].x_1
          ) <= 0.1 &&
          mod.bölge[j].y1 >= mod.dikey_bolme[d_sağ].y_1 &&
          mod.bölge[j].y1 <=
            mod.dikey_bolme[d_sağ].y_1 + mod.dikey_bolme[d_sağ].boy
        ) {
          dsağ_solk.push(j);
          //console.log("dsağ_solk=" + j)
        }
      }
    }
  }
  let gen_fark = mod.bölge[seç.s].gen - gen;
  //console.log("rdgDikeyBolme=" + rdgDikeyBolme)

  switch (rdgDikeyBolme) {
    case 0:
      if (d_sol_var) {
        if (gen_fark < 0) {
          let ük = gen_fark_f(mod.bölge, seç, dsol_solk);
          if (Math.abs(gen_fark) > ük) {
            gen_fark = -ük;
            if (dsol_rsol.length > 0) {
              gen_fark = -ük + en_küçük_raf_aralığı;
            }
            console.log("ük=" + ük);
          }
        } else {
          let ak = gen_fark_f(mod.bölge, seç, dsol_sağk);
          if (Math.abs(gen_fark) > ak) {
            gen_fark = ak;
            if (dsol_rsağ.length > 0) {
              gen_fark = ak - en_küçük_raf_aralığı;
            }
            console.log("ak=" + ak);
          }
        }
        for (var i1 = 0; i1 < dsol_sağk.length; i1++) {
          mod.bölge[dsol_sağk[i1]].x1 = mod.bölge[dsol_sağk[i1]].x1 + gen_fark;
          mod.bölge[dsol_sağk[i1]].gen =
            mod.bölge[dsol_sağk[i1]].gen - gen_fark;
        }
        for (var i2 = 0; i2 < dsol_solk.length; i2++) {
          //mod.bölge[dsol_solk[i2]].x1 = mod.bölge[dsol_solk[i2]].x1 + gen_fark
          mod.bölge[dsol_solk[i2]].gen =
            mod.bölge[dsol_solk[i2]].gen + gen_fark;
        }
        for (var i4 = 0; i4 < dsol_rsağ.length; i4++) {
          mod.yatay_bolme[dsol_rsağ[i4]].x_1 =
            mod.yatay_bolme[dsol_rsağ[i4]].x_1 + gen_fark;
          mod.yatay_bolme[dsol_rsağ[i4]].boy =
            mod.yatay_bolme[dsol_rsağ[i4]].boy - gen_fark;
        }
        for (var j1 = 0; j1 < dsol_rsol.length; j1++) {
          //mod.yatay_bolme[dsol_rsol[j1]].x_1 = mod.yatay_bolme[dsol_rsol[j1]].x_1 + gen_fark
          mod.yatay_bolme[dsol_rsol[j1]].boy =
            mod.yatay_bolme[dsol_rsol[j1]].boy + gen_fark;
        }
        mod.dikey_bolme[d_sol].x_1 = mod.dikey_bolme[d_sol].x_1 + gen_fark;
        //console.log("mod.dikey_bolme[d_sol].x_1=" + mod.dikey_bolme[d_sol].x_1)
      } else {
        uyari = "sol dikey_bolme yok sağ dikey_bolmeyi ayarla";
      }
      debugger;
      break;
    case 1:
      if (d_sağ_var) {
        if (gen_fark < 0) {
          let ak = gen_fark_f(mod.bölge, seç, dsağ_sağk);
          if (Math.abs(gen_fark) > ak) {
            gen_fark = -ak;
            if (dsağ_rsağ.length > 0) {
              gen_fark = -ak + en_küçük_raf_aralığı;
            }
            console.log("sağ_k=" + ak);
          }
        } else {
          let ük = gen_fark_f(mod.bölge, seç, dsağ_solk);
          if (Math.abs(gen_fark) > ük) {
            gen_fark = +ük;
            if (dsağ_rsol.length > 0) {
              gen_fark = ük - en_küçük_raf_aralığı;
            }
            console.log("ük=" + ük);
          }
        }

        for (var i5 = 0; i5 < dsağ_solk.length; i5++) {
          //mod.bölge[dsağ_solk[i5]].x1 = mod.bölge[dsağ_solk[i5]].x1 - gen_fark
          mod.bölge[dsağ_solk[i5]].gen =
            mod.bölge[dsağ_solk[i5]].gen - gen_fark;
        }
        for (var i6 = 0; i6 < dsağ_sağk.length; i6++) {
          mod.bölge[dsağ_sağk[i6]].x1 = mod.bölge[dsağ_sağk[i6]].x1 - gen_fark;
          mod.bölge[dsağ_sağk[i6]].gen =
            mod.bölge[dsağ_sağk[i6]].gen + gen_fark;
        }
        for (var i7 = 0; i7 < dsağ_rsol.length; i7++) {
          //mod.yatay_bolme[dsağ_rsol[i7]].x_1 = mod.yatay_bolme[dsağ_rsol[i7]].x_1 + gen_fark
          mod.yatay_bolme[dsağ_rsol[i7]].boy =
            mod.yatay_bolme[dsağ_rsol[i7]].boy - gen_fark;
        }
        for (var j2 = 0; j2 < dsağ_rsağ.length; j2++) {
          mod.yatay_bolme[dsağ_rsağ[j2]].x_1 =
            mod.yatay_bolme[dsağ_rsağ[j2]].x_1 - gen_fark;
          mod.yatay_bolme[dsağ_rsağ[j2]].boy =
            mod.yatay_bolme[dsağ_rsağ[j2]].boy + gen_fark;
        }
        mod.dikey_bolme[d_sağ].x_1 = mod.dikey_bolme[d_sağ].x_1 - gen_fark;
        //console.log("mod.dikey_bolme[d_sağ].x_1=" + mod.dikey_bolme[d_sağ].x_1)
      } else {
        uyari = "sağ dikey_bolme yok soldikey_bolmeyi ayarlayın";
      }

      break;
    case 2:
      break;
    default:
      break;
  }
  return {
    mod,
    uyari,
  };
}
