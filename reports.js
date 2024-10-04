function showTotalReport() {
    document.getElementById("report-display").innerHTML = `
        <h2>التقارير الإجمالية</h2>
        <p>إجمالي عدد الطلاب: 50</p>
        <p>عدد الطلاب الذين اجتازوا: 30</p>
        <p>نسبة النجاح: 60%</p>
    `;
}

function showGradeReport() {
    document.getElementById("report-display").innerHTML = `
        <h2>تقارير حسب الصف</h2>
        <p>صف 5: 20 طالب، اجتاز 15 طالب</p>
        <p>صف 6: 15 طالب، اجتاز 10 طلاب</p>
        <p>صف 7: 15 طالب، اجتاز 5 طلاب</p>
    `;
}

function showDetailedReport() {
    document.getElementById("report-display").innerHTML = `
        <h2>تقارير مفصلة</h2>
        <p>اسم الطالب: أحمد، الدرجة: 90</p>
        <p>اسم الطالب: فاطمة، الدرجة: 85</p>
        <p>اسم الطالب: يوسف، الدرجة: 70</p>
    `;
}
