// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8PsmPIKDIra4JyujpMtUxmjKIq5HTjwc",
  authDomain: "quiz-75392.firebaseapp.com",
  projectId: "quiz-75392",
  storageBucket: "quiz-75392.appspot.com",
  messagingSenderId: "936722185875",
  appId: "1:936722185875:web:ba0cad58fe4efab399d766"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// تسجيل الدخول
function checkLogin() {
    const email = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const auth = firebase.auth();

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log("تم تسجيل الدخول:", user.email);
            window.location.href = "reports.html"; // توجيه المعلم لصفحة التقارير
        })
        .catch((error) => {
            document.getElementById("error-message").style.display = "block"; // عرض رسالة الخطأ
            console.error("خطأ في تسجيل الدخول:", error.message);
        });
}
