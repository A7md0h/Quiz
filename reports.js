// استيراد Firebase و Firestore
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-firestore.js";

// إعداد Firebase
const firebaseConfig = {
    apiKey: "AIzaSyD8PsmPIKDIra4JyujpMtUxmjKIq5HTjwc",
    authDomain: "quiz-75392.firebaseapp.com",
    projectId: "quiz-75392",
    storageBucket: "quiz-75392.appspot.com",
    messagingSenderId: "936722185875",
    appId: "1:936722185875:web:ba0cad58fe4efab399d766"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

console.log("تم تحميل reports.js بنجاح");

function showTotalReport() {
    getDocs(collection(db, "studentReports")).then((querySnapshot) => {
        const totalStudents = querySnapshot.size;
        let passedStudents = 0;

        querySnapshot.forEach((doc) => {
            const data = doc.data();
            if (data.score >= 50) {
                passedStudents++;
            }
        });

        const passRate = (passedStudents / totalStudents) * 100;

        document.getElementById("report-display").innerHTML = `
            <h2>التقارير الإجمالية</h2>
            <p>إجمالي عدد الطلاب: ${totalStudents}</p>
            <p>عدد الطلاب الذين اجتازوا: ${passedStudents}</p>
            <p>نسبة النجاح: ${passRate.toFixed(2)}%</p>
        `;
    }).catch((error) => {
        console.error("Error fetching total report: ", error);
    });
}

function showGradeReport() {
    getDocs(collection(db, "studentReports")).then((querySnapshot) => {
        let gradeReports = {};

        querySnapshot.forEach((doc) => {
            const data = doc.data();
            const grade = data.grade;
            if (!gradeReports[grade]) {
                gradeReports[grade] = { total: 0, passed: 0 };
            }

            gradeReports[grade].total++;

            if (data.score >= 50) {
                gradeReports[grade].passed++;
            }
        });

        let gradeReportHTML = `<h2>تقارير حسب الصف</h2>`;
        for (const grade in gradeReports) {
            const total = gradeReports[grade].total;
            const passed = gradeReports[grade].passed;
            gradeReportHTML += `<p>صف ${grade}: ${total} طالب، اجتاز ${passed} طالب</p>`;
        }

        document.getElementById("report-display").innerHTML = gradeReportHTML;
    }).catch((error) => {
        console.error("Error fetching grade report: ", error);
    });
}

function showDetailedReport() {
    getDocs(collection(db, "studentReports")).then((querySnapshot) => {
        let detailedReportHTML = `<h2>تقارير مفصلة</h2>`;
        querySnapshot.forEach((doc) => {
            const data = doc.data();
            detailedReportHTML += `<p>اسم الطالب: ${data.name}، الدرجة: ${data.score}</p>`;
        });

        document.getElementById("report-display").innerHTML = detailedReportHTML;
    }).catch((error) => {
        console.error("Error fetching detailed report: ", error);
    });
}
