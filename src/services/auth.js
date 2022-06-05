import { firebaseAuth, googleProvider } from "./firebase";

import api from "../api";

const handleLogin = async () => {
  try {
    const loggedInResult = await firebaseAuth.signInWithPopup(googleProvider);
    const accessToken = loggedInResult.credential.accessToken;

    localStorage.setItem("accessToken", accessToken);

    await api.post("/login", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

const handleLogout = async () => {
  try {
    await firebaseAuth.signOut();
    localStorage.removeItem("accessToken");
  } catch (error) {
    console.log(error);
  }
};

export { handleLogin, handleLogout };
