import { firebaseAuth } from "./firebase";

const handleLogout = async () => {
  try {
    await firebaseAuth.signOut();
    localStorage.removeItem("accessToken");
  } catch (error) {
    console.log(error);
  }
};

export { handleLogout };
