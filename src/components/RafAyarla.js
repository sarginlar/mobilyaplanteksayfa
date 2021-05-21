const bolge = [{ x1: 0, y1: 0, x2: 0, y2: 0, x3: 0, y3: 0, x4: 0, y4: 0, x: 0, y: 0 }]
const raf = [{ x1: 0, y1: 0, x2: 0, y2: 0, x3: 0, y3: 0, x4: 0, y4: 0 }]
const dikme = [{ x1: 0, y1: 0, x2: 0, y2: 0, x3: 0, y3: 0, x4: 0, y4: 0 }]

const RafAyarla = (mobilya, bolge_x, bolge_y, secilenBolge, islem) => {
  console.log('islem=', islem)
  console.log('--secilenBolge=', secilenBolge)
  let secilenAltRaf_index = 0
  let secilenUstRaf_index = 0
  let secilenAltRaf = 'yok'
  let secilenUstRaf = 'yok'
  let komsu_ust_bolge = []
  let komsu_alt_bolge = []
  let komsuUstDikme = []
  let komsuAltDikme = []
  //bolgenin dört köşe noktasını buluyoruz.
  if (mobilya.bolge.length > 0) {
    for (let index = 0; index < mobilya.bolge.length; index++) {
      bolge[index] = {
        x1: mobilya.bolge[index].cx - mobilya.bolge[index].x / 2,
        y1: mobilya.bolge[index].cy + mobilya.bolge[index].y / 2,
        x2: mobilya.bolge[index].cx + mobilya.bolge[index].x / 2,
        y2: mobilya.bolge[index].cy + mobilya.bolge[index].y / 2,
        x3: mobilya.bolge[index].cx - mobilya.bolge[index].x / 2,
        y3: mobilya.bolge[index].cy - mobilya.bolge[index].y / 2,
        x4: mobilya.bolge[index].cx + mobilya.bolge[index].x / 2,
        y4: mobilya.bolge[index].cy - mobilya.bolge[index].y / 2,
        x: mobilya.bolge[index].x,
        y: mobilya.bolge[index].y,
      }
    }
  }
  // rafın dört köşe noktasını buluyoruz.
  if (mobilya.raf.length > 0) {
    for (let index = 0; index < mobilya.raf.length; index++) {
      raf[index] = {
        x1: mobilya.raf[index].x0 - mobilya.raf[index].x / 2,
        y1: mobilya.raf[index].y0 + mobilya.raf[index].y / 2,
        x2: mobilya.raf[index].x0 + mobilya.raf[index].x / 2,
        y2: mobilya.raf[index].y0 + mobilya.raf[index].y / 2,
        x3: mobilya.raf[index].x0 - mobilya.raf[index].x / 2,
        y3: mobilya.raf[index].y0 - mobilya.raf[index].y / 2,
        x4: mobilya.raf[index].x0 + mobilya.raf[index].x / 2,
        y4: mobilya.raf[index].y0 - mobilya.raf[index].y / 2,
      }
    }
  }
  if (mobilya.dikme.length > 0) {
    for (let index = 0; index < mobilya.dikme.length; index++) {
      dikme[index] = {
        x1: mobilya.dikme[index].x0 - mobilya.dikme[index].x / 2,
        y1: mobilya.dikme[index].y0 + mobilya.dikme[index].y / 2,
        x2: mobilya.dikme[index].x0 + mobilya.dikme[index].x / 2,
        y2: mobilya.dikme[index].y0 + mobilya.dikme[index].y / 2,
        x3: mobilya.dikme[index].x0 - mobilya.dikme[index].x / 2,
        y3: mobilya.dikme[index].y0 - mobilya.dikme[index].y / 2,
        x4: mobilya.dikme[index].x0 + mobilya.dikme[index].x / 2,
        y4: mobilya.dikme[index].y0 - mobilya.dikme[index].y / 2,
      }
    }
  }

  //önce bölge seçilecek
  //bölgenin değdiği raf bulunacak
  // bölgenin değdiği raf için cx ve xo merkez noktaları eşit olacak
  //bu rafa komşu olan(değen) tüm bölgeler ve dikmeler seçilecek
  // rafın haraketine göre bölge ve raf ayarları yapılacak
  //seçilen bölge ** secilenBolge
  //seçilen raf iki adet ise ???

  // secilenBolgeye komşu olan rafın bulunması

  for (let index = 0; index < mobilya.raf.length; index++) {
    if (raf[index].x1 <= bolge[secilenBolge].x3 && raf[index].x2 >= bolge[secilenBolge].x4 && bolge[secilenBolge].y3 === raf[index].y1) {
      secilenAltRaf_index = index
      secilenAltRaf = raf[index]
    }

    if (raf[index].x3 <= bolge[secilenBolge].x1 && raf[index].x4 >= bolge[secilenBolge].x2 && bolge[secilenBolge].y1 === raf[index].y3) {
      secilenUstRaf_index = index
      secilenUstRaf = raf[index]
    }
  }

  console.log('secilenAltRaf=', secilenAltRaf)
  console.log('secilenUstRaf=', secilenUstRaf)

  //@alt_raf işlemi--------------------------------------------------------------
  console.log('mobilya.bolge[secilenBolge].y=', mobilya.bolge[secilenBolge].y, 'bolge_y=', bolge_y)
  if (islem === 'alt_raf' && bolge_y > 0) {
    //secilenAltRafı ın üst komşuları x1-x2 arasında kalan x3-x4 ler
    let say = 0
    let say1 = 0
    for (let index = 0; index < bolge.length; index++) {
      if (secilenAltRaf.x1 <= bolge[index].x3 && secilenAltRaf.x2 >= bolge[index].x4 && secilenAltRaf.y1 === bolge[index].y3) {
        komsu_ust_bolge.push(index)
        say = say + 1
        console.log('secilen rafa komşu olan bölge_üst bolge=', komsu_ust_bolge)
      }
      if (secilenAltRaf.x3 <= bolge[index].x1 && secilenAltRaf.x2 >= bolge[index].x2 && secilenAltRaf.y3 === bolge[index].y1) {
        komsu_alt_bolge.push(index)
        say1 = say1 + 1
        console.log('secilen rafa komşu olan bölge_alt_bolge=', komsu_alt_bolge)
      }
    }
    // seçilen rafa komsu olan dikmeler seçilecek
    let artir = 0
    let artir1 = 0
    for (let index = 0; index < mobilya.dikme.length; index++) {
      if (dikme[index].x3 >= raf[secilenAltRaf_index].x1 && dikme[index].x4 <= raf[secilenAltRaf_index].x2 && dikme[index].y3 === raf[secilenAltRaf_index].y1) {
        komsuUstDikme.push(index)
        artir = artir + 1
        console.log('alt rafa komşu olan üst_dikme=', komsuUstDikme)
      }
      if (dikme[index].x1 >= raf[secilenAltRaf_index].x3 && dikme[index].x2 <= raf[secilenAltRaf_index].x4 && dikme[index].y1 === raf[secilenAltRaf_index].y3) {
        komsuAltDikme.push(index)
        artir1 = artir1 + 1
        console.log('alt rafa komşu olan alt_dikme=', komsuAltDikme)
      }
    }
    console.log('alt rafa komsu_ust_bolge.length=', komsu_ust_bolge.length)
    const sonuc = mobilya.bolge[secilenBolge].y - bolge_y
    for (let index = 0; index < komsu_ust_bolge.length; index++) {
      if (bolge_y > 0) {
        //const sonuc = mobilya.bolge[komsu_ust_bolge[index]].y - bolge_y
        mobilya.bolge[komsu_ust_bolge[index]].cy = mobilya.bolge[komsu_ust_bolge[index]].cy + sonuc / 2
        mobilya.bolge[komsu_ust_bolge[index]].y = mobilya.bolge[komsu_ust_bolge[index]].y - sonuc
        console.log('mobilya.bolge[komsu_ust_bolge[index]=', mobilya.bolge[komsu_ust_bolge[index]])
      }
    }
    for (let index = 0; index < komsu_alt_bolge.length; index++) {
      if (bolge_y > 0) {
        mobilya.bolge[komsu_alt_bolge[index]].cy = mobilya.bolge[komsu_alt_bolge[index]].cy + sonuc / 2
        mobilya.bolge[komsu_alt_bolge[index]].y = mobilya.bolge[komsu_alt_bolge[index]].y + sonuc
        console.log('mobilya.bolge[komsu_alt_bolge[index]=', mobilya.bolge[komsu_alt_bolge[index]])
      }
    }
    console.log('komsu_alt_bolge.length=', komsu_alt_bolge.length)

    //komşu altdikmenin ayarlanması
    if (secilenAltRaf === 'yok') {
      console.log('***alt raf yok')
    } else {
      for (let index = 0; index < komsuAltDikme.length; index++) {
        mobilya.dikme[komsuAltDikme[index]].y0 = mobilya.dikme[komsuAltDikme[index]].y0 + sonuc / 2
        mobilya.dikme[komsuAltDikme[index]].y = mobilya.dikme[komsuAltDikme[index]].y + sonuc
      }
      for (let index = 0; index < komsuUstDikme.length; index++) {
        mobilya.dikme[komsuUstDikme[index]].y0 = mobilya.dikme[komsuUstDikme[index]].y0 + sonuc / 2
        mobilya.dikme[komsuUstDikme[index]].y = mobilya.dikme[komsuUstDikme[index]].y - sonuc
      }
      //rafın ayarlanması
      mobilya.raf[secilenAltRaf_index].y0 = mobilya.raf[secilenAltRaf_index].y0 + sonuc
    }
  }
  //----------------------------------------------------------------------------
  //@ust_raf--------------------------------------------------------------------
  if (islem === 'ust_raf' && bolge_y > 0) {
    //secilen rafa komşu olan alt bolge ve ust bolgeler seçilecek
    let say = 0
    let say1 = 0
    for (let index = 0; index < bolge.length; index++) {
      if (secilenUstRaf.x1 <= bolge[index].x3 && secilenUstRaf.x2 >= bolge[index].x4 && secilenUstRaf.y1 === bolge[index].y3) {
        komsu_ust_bolge.push(index)
        say = say + 1
        console.log('üst_raf komşu olan bölge_üst bolge=', komsu_ust_bolge)
      }
      if (secilenUstRaf.x3 <= bolge[index].x1 && secilenUstRaf.x2 >= bolge[index].x2 && secilenUstRaf.y3 === bolge[index].y1) {
        komsu_alt_bolge.push(index)
        say1 = say1 + 1
        console.log('üst_raf komşu olan bölge_alt_bolge=', komsu_alt_bolge)
      }
    }
    // seçilen rafa komsu olan dikmeler seçilecek
    let artir = 0
    let artir1 = 0
    for (let index = 0; index < mobilya.dikme.length; index++) {
      if (dikme[index].x3 >= raf[secilenUstRaf_index].x1 && dikme[index].x4 <= raf[secilenUstRaf_index].x2 && dikme[index].y3 === raf[secilenUstRaf_index].y1) {
        komsuUstDikme.push(index)
        artir = artir + 1
        console.log('komşu olan üst_dikme=', komsuUstDikme)
      }
      if (dikme[index].x1 >= raf[secilenUstRaf_index].x3 && dikme[index].x2 <= raf[secilenUstRaf_index].x4 && dikme[index].y1 === raf[secilenUstRaf_index].y3) {
        komsuAltDikme.push(index)
        artir1 = artir1 + 1
        console.log('komşu olan alt_dikme=', komsuAltDikme)
      }
    }

    //ölcüye göre bolgelerin ayarlanması
    const sonuc = mobilya.bolge[secilenBolge].y - bolge_y
    for (let index = 0; index < komsu_ust_bolge.length; index++) {
      if (bolge_y > 0) {
        //const sonuc = mobilya.bolge[komsu_ust_bolge[index]].y - bolge_y
        mobilya.bolge[komsu_ust_bolge[index]].cy = mobilya.bolge[komsu_ust_bolge[index]].cy - sonuc / 2
        mobilya.bolge[komsu_ust_bolge[index]].y = mobilya.bolge[komsu_ust_bolge[index]].y + sonuc
        console.log('mobilya.bolge[komsu_ust_bolge[index]=', mobilya.bolge[komsu_ust_bolge[index]])
      }
    }
    for (let index = 0; index < komsu_alt_bolge.length; index++) {
      if (bolge_y > 0) {
        mobilya.bolge[komsu_alt_bolge[index]].cy = mobilya.bolge[komsu_alt_bolge[index]].cy - sonuc / 2
        mobilya.bolge[komsu_alt_bolge[index]].y = mobilya.bolge[komsu_alt_bolge[index]].y - sonuc
        console.log('mobilya.bolge[komsu_alt_bolge[index]=', mobilya.bolge[komsu_alt_bolge[index]])
      }
    }
    console.log('komsu_alt_bolge.length=', komsu_alt_bolge.length)

    //komşu altdikmenin ayarlanması
    if (secilenUstRaf === 'yok') {
      console.log('***Üst raf yok')
    } else {
      for (let index = 0; index < komsuUstDikme.length; index++) {
        mobilya.dikme[komsuUstDikme[index]].y0 = mobilya.dikme[komsuUstDikme[index]].y0 - sonuc / 2
        mobilya.dikme[komsuUstDikme[index]].y = mobilya.dikme[komsuUstDikme[index]].y + sonuc
      }
      for (let index = 0; index < komsuAltDikme.length; index++) {
        mobilya.dikme[komsuAltDikme[index]].y0 = mobilya.dikme[komsuAltDikme[index]].y0 - sonuc / 2
        mobilya.dikme[komsuAltDikme[index]].y = mobilya.dikme[komsuAltDikme[index]].y - sonuc
      }
      //rafın ayarlanması
      mobilya.raf[secilenUstRaf_index].y0 = mobilya.raf[secilenUstRaf_index].y0 - sonuc
    }
  }

  //----------------------------------------------------------------------------

  console.log('mobilya=', mobilya)
  return mobilya
}
export default RafAyarla