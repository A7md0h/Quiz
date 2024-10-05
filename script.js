<!DOCTYPE html>
<html lang="ar">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>لعبة الأسئلة التفاعلية</title>
    <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">

    <!-- استيراد Firebase SDK بالطريقة التقليدية -->
    <script src="https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js"></script>
    <script src="https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js"></script>

    <script>
        // إعداد Firebase
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
        const db = firebase.firestore();

        let currentQuestionIndex = 0;
        let correctAnswers = 0;
        let wrongAnswers = 0;
        let startTime, endTime;
        let shuffledQuestions = [];

        // الأسئلة العشرين
        const quizData = [
            {
                question: "ما هي الأنواع الرئيسية لأجهزة الحاسوب؟",
                answers: ["حاسوب مكتبي", "حاسوب محمول", "حاسوب لوحي", "جميع ما سبق"],
                correctAnswer: 3,
                image: "assets/images/computer_types.jpg"
            },
            {
                question: "ما هي الوحدة الرئيسية المسؤولة عن معالجة البيانات في الحاسوب؟",
                answers: ["القرص الصلب", "ذاكرة الوصول العشوائي", "وحدة المعالجة المركزية", "الشاشة"],
                correctAnswer: 2,
                image: "assets/images/cpu.jpg"
            },
            {
                question: "أي مما يلي يُستخدم لتخزين البيانات بشكل دائم؟",
                answers: ["ذاكرة الوصول العشوائي", "القرص الصلب", "وحدة المعالجة المركزية", "بطاقة الفيديو"],
                correctAnswer: 1,
                image: "assets/images/hard_drive.jpg"
            },
            // باقي الأسئلة هنا كما تم تقديمها سابقاً ...
        ];

        // وظيفة خلط الأسئلة
        function shuffle(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
            return array;
        }

        // بدء الاختبار
        function startQuiz() {
            const studentName = document.getElementById("student-name").value.trim();
            const studentGrade = document.getElementById("student-grade").value.trim();

            if (studentName === "" || studentGrade === "") {
                alert("الرجاء إدخال الاسم والصف قبل البدء.");
                return;
            }

            startTime = new Date();
            shuffledQuestions = shuffle([...quizData]);

            // إخفاء شاشة البداية والفوتر
            document.getElementById("start-screen").classList.add("hidden");
            document.getElementById("quiz-container").classList.remove("hidden");

            showQuestion();
        }

        // عرض السؤال
        function showQuestion() {
            const questionElement = document.getElementById("question");
            const questionNumberElement = document.getElementById("question-number");
            const questionImageElement = document.getElementById("question-image");

            const questionData = shuffledQuestions[currentQuestionIndex];

            questionNumberElement.innerText = `السؤال ${currentQuestionIndex + 1}`;
            questionElement.innerText = questionData.question;
            questionImageElement.src = questionData.image || '';  
            questionImageElement.alt = "صورة السؤال";

            const shuffledAnswers = shuffle([...questionData.answers]);

            document.querySelectorAll('.answer-buttons .btn').forEach((button, index) => {
                button.innerText = shuffledAnswers[index];
                button.disabled = false;
                button.style.backgroundColor = "#3498db";
            });

            document.getElementById('next-btn').classList.add('hidden');
        }

        // اختيار الإجابة
        function selectAnswer(index) {
            const correctAnswer = shuffledQuestions[currentQuestionIndex].correctAnswer;
            const selectedAnswer = document.querySelectorAll('.answer-buttons .btn')[index].innerText;
            const correctAnswerText = shuffledQuestions[currentQuestionIndex].answers[correctAnswer];

            document.querySelectorAll('.answer-buttons .btn').forEach((button) => {
                button.disabled = true;
            });

            if (selectedAnswer === correctAnswerText) {
                document.getElementById(`btn${index + 1}`).style.backgroundColor = "green";
                correctAnswers++;
            } else {
                document.getElementById(`btn${index + 1}`).style.backgroundColor = "red";
                document.querySelectorAll('.answer-buttons .btn').forEach((button) => {
                    if (button.innerText === correctAnswerText) {
                        button.style.backgroundColor = "green";
                    }
                });
                wrongAnswers++;
            }

            document.getElementById('next-btn').classList.remove('hidden');
        }

        // الانتقال للسؤال التالي
        function nextQuestion() {
            currentQuestionIndex++;

            if (currentQuestionIndex < shuffledQuestions.length) {
                showQuestion();
            } else {
                showResult();
            }
        }

        // دالة عرض النتيجة النهائية
        function showResult() {
            endTime = new Date();
            let timeSpent = Math.floor((endTime - startTime) / 1000);
            let minutes = Math.floor(timeSpent / 60);
            let seconds = timeSpent % 60;

            document.getElementById("quiz-container").classList.add("hidden");
            document.getElementById("result-screen").classList.remove("hidden");

            document.getElementById("student-info").innerText = `${document.getElementById('student-name').value}, الصف ${document.getElementById('student-grade').value}`;
            document.getElementById("correct-answers").innerText = correctAnswers;
            document.getElementById("wrong-answers").innerText = wrongAnswers;
            document.getElementById("time-spent").innerText = ` : ${minutes} دقيقة و ${seconds} ثانية`;
            document.getElementById("final-score").innerText = `${(correctAnswers / shuffledQuestions.length) * 100}%`;

            // حفظ تقرير الطالب في Firebase
            saveStudentReport();
        }

        // حفظ تقرير الطالب في Firestore
        function saveStudentReport() {
            const studentName = document.getElementById("student-name").value.trim();
            const studentGrade = document.getElementById("student-grade").value.trim();

            const score = (correctAnswers / shuffledQuestions.length) * 100;
            const timeSpent = Math.floor((endTime - startTime) / 1000);
            
            // حفظ البيانات في Firestore
            db.collection("studentReports").add({
                name: studentName,
                grade: studentGrade,
                correctAnswers: correctAnswers,
                wrongAnswers: wrongAnswers,
                score: score,
                timeSpent: timeSpent,
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
            }).then(() => {
                console.log("تم حفظ تقرير الطالب بنجاح.");
            }).catch((error) => {
                console.error("خطأ في حفظ التقرير:", error);
            });
        }
    </script>
</head>

<body>
    <!-- واجهة إدخال اسم الطالب والصف -->
    <div id="start-screen" class="start-screen">
        <h1>مرحباً بكم في الأسئلة التفاعلية</h1>
        <h1>الصف الخامس / أساسيات الحاسوب</h1>
        
        <div class="input-container">
            <input type="text" id="student-name" placeholder="ادخل اسمك" required>
            <input type="text" id="student-grade" placeholder="ادخل صفك" required>
            <button onclick="startQuiz()" class="start-btn">ابدأ</button>
        </div>

        <!-- أيقونة الترس لفتح صفحة الإعدادات -->
        <div class="settings-icon">
            <a href="settings.html"><img src="assets/icons/gear.png" alt="الإعدادات" /></a>
        </div>
    </div>

    <!-- واجهة الأسئلة -->
    <div id="quiz-container" class="quiz-container hidden">
        <h2 id="question-number"></h2>
        <h2 id="question">السؤال هنا</h2>
        <img id="question-image" src="" alt="صورة السؤال" class="question-image">
        <div class="answer-buttons">
            <button class="btn" id="btn1" onclick="selectAnswer(0)">اختيار 1</button>
            <button class="btn" id="btn2" onclick="selectAnswer(1)">اختيار 2</button>
            <button class="btn" id="btn3" onclick="selectAnswer(2)">اختيار 3</button>
            <button class="btn" id="btn4" onclick="selectAnswer(3)">اختيار 4</button>
        </div>
        <button id="next-btn" class="next-btn hidden" onclick="nextQuestion()">السؤال التالي</button>
    </div>

    <!-- واجهة التقرير النهائي -->
    <div id="result-screen" class="result-screen hidden">
        <h1>تقرير الأداء</h1>
        <p id="student-info"></p>
        <p>عدد الأسئلة الصحيحة: <span id="correct-answers"></span></p>
        <p>عدد الأسئلة الخاطئة: <span id="wrong-answers"></span></p>
        <p>الوقت المستغرق: <span id="time-spent"></span></p>
        <p>الدرجة النهائية: <span id="final-score"></span></p>
        <h2>شكراً لمشاركتك!</h2>
    </div>

    <!-- أصوات الإجابات -->
    <audio id="correct-sound" src="correct-sound.mp3"></audio>
    <audio id="wrong-sound" src="wrong-sound.mp3"></audio>

    <!-- تصميم الأستاذ أحمد الضامري -->
    <footer class="footer">
        <p class="credit">تصميم: الأستاذ أحمد الضامري</p>
    </footer>

    <script src="script.js"></script>
</body>
</html>
