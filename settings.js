import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js"; // استيراد Authentication

// Initialize Firebase Authentication
const auth = getAuth();

function checkLogin() {
    const email = document.getElementById("username").value; // استخدام البريد الإلكتروني كاسم المستخدم
    const password = document.getElementById("password").value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // تسجيل الدخول بنجاح
            const user = userCredential.user;
            console.log("تم تسجيل الدخول:", user.email);
            // هنا يمكنك إعادة توجيه المستخدم إلى صفحة التقارير
            window.location.href = "reports.html"; // توجيه المعلم إلى صفحة التقارير
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error("خطأ في تسجيل الدخول:", errorMessage);
            alert("خطأ في اسم المستخدم أو كلمة المرور."); // رسالة خطأ
        });
}
