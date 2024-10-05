// إعداد Firebase
const db = firebase.firestore();

// وظيفة لجلب التقارير وتحديث الجدول في الوقت الفعلي
function loadReports() {
    db.collection("studentReports").onSnapshot((snapshot) => {
        const tableBody = document.getElementById("report-table-body");
        tableBody.innerHTML = ''; // مسح الجدول
        snapshot.forEach((doc) => {
            const data = doc.data();
            const row = `
                <tr>
                    <td>${data.name}</td>
                    <td>${data.grade}</td>
                    <td>${data.score}%</td>
                    <td>${data.correctAnswers}</td>
                    <td>${data.wrongAnswers}</td>
                    <td>${data.timeSpent} ثانية</td>
                </tr>
            `;
            tableBody.innerHTML += row;
        });
    });
}

// وظيفة للفرز
function sortTable(columnIndex) {
    const table = document.getElementById("report-table");
    let rows, switching, i, x, y, shouldSwitch;
    switching = true;
    while (switching) {
        switching = false;
        rows = table.rows;
        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("TD")[columnIndex];
            y = rows[i + 1].getElementsByTagName("TD")[columnIndex];
            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }
}

// إصدار تقرير PDF
function generateReport() {
    const table = document.getElementById("report-table").outerHTML;
    const pdfWindow = window.open("");
    pdfWindow.document.write(`<html><head><title>تقارير الطلاب</title></head><body>${table}</body></html>`);
    pdfWindow.print();
}

// تحميل التقارير عند فتح الصفحة
window.onload = loadReports;
