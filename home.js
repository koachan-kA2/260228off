import { initializeApp } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyA5KQPd73BJS7k6ueZP8KjyEz78LQfhzek",
  authDomain: "offline-meet-up.firebaseapp.com",
  projectId: "offline-meet-up",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

onAuthStateChanged(auth, user => {
  if (!user || !user.emailVerified) location.href = "login.html";
  else document.getElementById("userEmail").textContent = user.email;
});

document.getElementById("logoutBtn").onclick = async () => {
  await signOut(auth);
  location.href = "login.html";
<script type="module">
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/12.8.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyA5KQPd73BJS7k6ueZP8KjyEz78LQfhzek",
  authDomain: "offline-meet-up.firebaseapp.com",
  projectId: "offline-meet-up",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
  onAuthStateChanged,
  signOut
};
</script>
};

