//src / hooks /useSignup.js

import { useState } from "react";
import { auth } from "../firebase/config";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export const useSignup = () => {
  const [hata, setHata] = useState(null);
  const [bekliyor, setBekliyor] = useState(false);

  const signup = async (email, password, displayName) => {
    setHata(null);
    setBekliyor(true);

    try {
      // signup
      const res = await createUserWithEmailAndPassword(auth, email, password);
      console.log(res.user);

      if (!res) {
        throw new Error("Üye işleminde hata oluştu");
      }

      //await updateProfile(res.user, { displayName });

      setBekliyor(false);
      setHata(null);
    } catch (err) {
      console.log(err.message);
      setHata(err.message);
      setBekliyor(false);
    }
  };

  return { signup, hata, bekliyor };
};
