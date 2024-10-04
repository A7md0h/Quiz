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
    {
        question: "ما هو الغرض من إعادة تشغيل الحاسوب؟",
        answers: ["توفير الطاقة", "إصلاح الأخطاء", "إغلاق الحاسوب", "تنظيف الشاشة"],
        correctAnswer: 1,
        image: "assets/images/restart_computer.jpg"
    },
    {
        question: "كيف يمكنك نقل ملف من مجلد إلى آخر؟",
        answers: ["النسخ واللصق", "سحبه", "استخدام قائمة المشاركة", "كل ما سبق"],
        correctAnswer: 3,
        image: "assets/images/file_transfer.jpg"
    },
    {
        question: "ما هو الاختصار الذي يُستخدم لإنشاء اختصار لملف على سطح المكتب؟",
        answers: ["Ctrl + C", "Ctrl + V", "Ctrl + X", "Alt + Drag"],
        correctAnswer: 3,
        image: "assets/images/shortcut.jpg"
    },
    {
        question: "أي نوع من الملفات يمكن ضغطه؟",
        answers: ["ملف نصي", "مجلد", "ملف صورة", "كل ما سبق"],
        correctAnswer: 3,
        image: "assets/images/compressed_files.jpg"
    },
    {
        question: "ما هي الطريقة الأفضل لعرض الملفات بطرق مختلفة؟",
        answers: ["تغيير الحجم", "تغيير العرض", "تغيير الموقع", "تغيير الاسم"],
        correctAnswer: 1,
        image: "assets/images/file_view.jpg"
    },
    {
        question: "كيف يمكن توصيل جهاز تخزين خارجي بالحاسوب؟",
        answers: ["عبر البلوتوث", "باستخدام USB", "عن طريق Wi-Fi", "لا يمكن توصيله"],
        correctAnswer: 1,
        image: "assets/images/usb.jpg"
    },
    {
        question: "ماذا تحتاج لاستخدام بطاقة التخزين على حاسوب محمول؟",
        answers: ["قارئ بطاقات", "كابل USB", "محول Bluetooth", "Wi-Fi"],
        correctAnswer: 0,
        image: "assets/images/sd_card_reader.jpg"
    },
    {
        question: "ما هو الخيار الأمثل لإلغاء تثبيت برنامج؟",
        answers: ["حذفه يدويًا", "إلغاء التثبيت من لوحة التحكم", "إعادة تشغيل الحاسوب", "إيقافه"],
        correctAnswer: 1,
        image: "assets/images/uninstall_program.jpg"
    },
    {
        question: "ما هو المكون الأساسي الذي يُعد قلب الحاسوب؟",
        answers: ["الذاكرة", "المعالج", "القرص الصلب", "لوحة المفاتيح"],
        correctAnswer: 1,
        image: "assets/images/cpu_inside.jpg"
    },
    {
        question: "ما هي الفائدة الرئيسية من استخدام ذاكرة الوصول العشوائي؟",
        answers: ["زيادة سرعة الحاسوب", "تخزين الملفات", "إدارة الرسومات", "تشغيل الصوت"],
        correctAnswer: 0,
        image: "assets/images/ram.jpg"
    },
    {
        question: "أي من هذه الخيارات يمثل نوعاً من وسائط التخزين؟",
        answers: ["ذاكرة USB", "قرص مضغوط", "قرص صلب", "كل ما سبق"],
        correctAnswer: 3,
        image: "assets/images/storage_media.jpg"
    },
    {
        question: "ما هو الفرق بين الحاسوب المكتبي والحاسوب المحمول؟",
        answers: ["الحجم", "السعر", "القابلية للنقل", "جميع ما سبق"],
        correctAnswer: 3,
        image: "assets/images/desktop_vs_laptop.jpg"
    },
    {
        question: "كيف يتم فك ضغط ملف؟",
        answers: ["النقر المزدوج عليه", "حذفه", "نقله", "النقر بزر الفأرة الأيمن واختيار فك الضغط"],
        correctAnswer: 3,
        image: "assets/images/extract_file.jpg"
    },
    {
        question: "أي مما يلي يُستخدم لقياس سرعة المعالج؟",
        answers: ["ميجابايت", "جيجاهيرتز", "كيلوواط", "نانوثانية"],
        correctAnswer: 1,
        image: "assets/images/processor_speed.jpg"
    },
    {
        question: "ما هو استخدام ذاكرة التخزين المؤقت (Cache)؟",
        answers: ["زيادة المساحة التخزينية", "تسريع الوصول إلى البيانات", "تشغيل الرسومات", "إدارة البرامج"],
        correctAnswer: 1,
        image: "assets/images/cache_memory.jpg"
    },
    {
        question: "ما هي الخطوة الأولى لنقل ملف إلى جهاز تخزين خارجي؟",
        answers: ["إعادة تشغيل الحاسوب", "توصيل جهاز التخزين", "إلغاء تثبيت البرامج", "إنشاء مجلد جديد"],
        correctAnswer: 1,
        image: "assets/images/transfer_to_external_drive.jpg"
    },
    {
        question: "أي مما يلي يعد أفضل وسيلة لحماية البيانات المخزنة؟",
        answers: ["حذف الملفات القديمة", "تشفير البيانات", "زيادة مساحة التخزين", "ترقية المعالج"],
        correctAnswer: 1,
        image: "assets/images/encrypt_data.jpg"
    }
];

let currentQuestionIndex = 0;
let correctAnswers = 0;
let wrongAnswers = 0;
let startTime, endTime;
let shuffledQuestions = [];

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function startQuiz() {
    const studentName = document.getElementById("student-name").value.trim();
    const studentGrade = document.getElementById("student-grade").value.trim();

    if (studentName === "" || studentGrade === "") {
        alert("الرجاء إدخال الاسم والصف قبل البدء.");
        return;
    }

    startTime = new Date();
    shuffledQuestions = shuffle([...quizData]);
    document.getElementById("start-screen").classList.add("hidden");
    document.getElementById("quiz-container").classList.remove("hidden");
    showQuestion();
}

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

function selectAnswer(index) {
    const correctAnswer = shuffledQuestions[currentQuestionIndex].correctAnswer;
    const selectedAnswer = document.querySelectorAll('.answer-buttons .btn')[index].innerText;
    const correctAnswerText = shuffledQuestions[currentQuestionIndex].answers[correctAnswer];

    const correctSound = document.getElementById("correct-sound");
    const wrongSound = document.getElementById("wrong-sound");

    document.querySelectorAll('.answer-buttons .btn').forEach((button) => {
        button.disabled = true;
    });

    if (selectedAnswer === correctAnswerText) {
        document.getElementById(`btn${index + 1}`).style.backgroundColor = "green";
        correctAnswers++;
        correctSound.play();
    } else {
        document.getElementById(`btn${index + 1}`).style.backgroundColor = "red";
        wrongSound.play();
        document.querySelectorAll('.answer-buttons .btn').forEach((button) => {
            if (button.innerText === correctAnswerText) {
                button.style.backgroundColor = "green";
            }
        });
        wrongAnswers++;
    }

    document.getElementById('next-btn').classList.remove('hidden');
}

function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < shuffledQuestions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

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
}


async function fetchStudentsData() {
    try {
        const snapshot = await db.collection("students").get();
        snapshot.forEach(doc => {
            console.log(doc.id, "=>", doc.data());
            // هنا يمكنك معالجة البيانات كما تحتاج، مثل تخزينها في مصفوفة أو استخدامها لعرضها
        });
    } catch (error) {
        console.error("Error fetching students data: ", error);
    }
}

// استدعاء الدالة لجلب البيانات عند بدء التطبيق
fetchStudentsData();

