function checkLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // تحقق بسيط (يتم تطويره لاحقًا مع Firebase)
    if (username === "teacher" && password === "1234") {
        alert("تم تسجيل الدخول بنجاح!");
        // هنا يمكن التوجيه إلى إعدادات حقيقية أو Firebase
    } else {
        alert("خطأ في اسم المستخدم أو كلمة المرور.");
    }
}
