import React, { useEffect, useState } from "react";
import db, { auth, provider } from "../firebase";

const KayitliDolapListesi = () => {
  const [dolap, setDolap] = useState([]);
  useEffect(() => {
    db.collection("mobilya").onSnapshot((snapshoot) =>
      setDolap(
        snapshoot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
  }, []);
  console.log("dolaplar=", dolap);
  return (
    <div>
      <h3>Dolap listesi</h3>

      {dolap.map((item) => {
        console.log("id=", item.id);
        return <h5>{item.data.name}</h5>;
      })}
    </div>
  );
};

export default KayitliDolapListesi;
