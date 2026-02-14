/* =========================================
   1. DATABASE & LOCALIZATION
   ========================================= */
const translations = {
    ar: {
        nav_home: "الرئيسية", nav_facts: "الحقائق", nav_sol: "الحلول", nav_game: "اللعبة", nav_quiz: "الاختبار",
        hero_title: "بوابتك نحو الأمان الرقمي",
        hero_desc: "منصة تعليمية موثقة طبياً وتقنياً لحماية الطلاب.",
        stat_1: "ساعات استخدام يومي", stat_2: "% أخطاء بشرية", btn_start: "ابدأ التحدي",
        title_facts: "تحليل البيانات", chart_1_title: "تأثير الضوء الأزرق", chart_2_title: "أنواع التهديدات",
        source_1: "المصدر: Harvard Medical School", source_2: "المصدر: Cisco Annual Report",
        title_sol: "المشاكل والحلول", title_game: "لعبة: حارس الشبكية",
        g_start_t: "جاهز للمهمة؟", g_start_d: "اجمع الأخضر وتجنب الأحمر والأزرق.",
        title_quiz: "تحدي الخبراء (5 مستويات)",
        problems: [
            {p: "إجهاد العين الرقمي", s: "استخدم قاعدة 20-20-20: كل 20 دقيقة، انظر لـ 20 قدماً لمدة 20 ثانية.", i: "fas fa-eye"},
            {p: "الأرق (اضطراب النوم)", s: "الضوء الأزرق يوقف الميلاتونين. توقف عن الشاشات قبل النوم بساعة.", i: "fas fa-bed"},
            {p: "التصيد الاحتيالي", s: "تأكد من عنوان URL ولا تضغط على الروابط في البريد المجهول.", i: "fas fa-fish"},
            {p: "كلمات المرور الضعيفة", s: "استخدم 12 حرفاً على الأقل، مع أرقام ورموز. لا تستخدم اسمك.", i: "fas fa-key"},
            {p: "الواي فاي العام", s: "البيانات غير مشفرة. استخدم VPN عند الاتصال بشبكات المقاهي.", i: "fas fa-wifi"},
            {p: "سرقة الهوية", s: "فعل المصادقة الثنائية (2FA) لربط الحساب برقم هاتفك.", i: "fas fa-user-shield"},
            {p: "فقدان البيانات", s: "احتفظ بنسخة احتياطية (Backup) خارجية لملفاتك المهمة.", i: "fas fa-hdd"}
        ]
    },
    en: {
        nav_home: "Home", nav_facts: "Facts", nav_sol: "Solutions", nav_game: "Game", nav_quiz: "Quiz",
        hero_title: "Your Gateway to Digital Safety",
        hero_desc: "Medically and technically verified platform for student protection.",
        stat_1: "Daily Screen Hours", stat_2: "% Human Error Breaches", btn_start: "Start Challenge",
        title_facts: "Data Analysis", chart_1_title: "Blue Light Impact", chart_2_title: "Threat Types",
        source_1: "Source: Harvard Medical School", source_2: "Source: Cisco Annual Report",
        title_sol: "Problems & Solutions", title_game: "Game: Retina Guard",
        g_start_t: "Mission Ready?", g_start_d: "Collect Green. Avoid Red & Blue.",
        title_quiz: "Expert Challenge (5 Levels)",
        problems: [
            {p: "Digital Eye Strain", s: "Use 20-20-20 Rule: Every 20 mins, look 20 feet away for 20 secs.", i: "fas fa-eye"},
            {p: "Insomnia", s: "Blue light stops Melatonin. No screens 1 hour before bed.", i: "fas fa-bed"},
            {p: "Phishing", s: "Verify URLs. Never click links in unknown emails.", i: "fas fa-fish"},
            {p: "Weak Passwords", s: "Use 12+ chars with symbols/numbers. No names.", i: "fas fa-key"},
            {p: "Public WiFi", s: "Data is unencrypted. Use VPN in public places.", i: "fas fa-wifi"},
            {p: "Identity Theft", s: "Enable Two-Factor Authentication (2FA).", i: "fas fa-user-shield"},
            {p: "Data Loss", s: "Always keep an external backup of important files.", i: "fas fa-hdd"}
        ]
    },
    fr: {
        nav_home: "Accueil", nav_facts: "Faits", nav_sol: "Solutions", nav_game: "Jeu", nav_quiz: "Quiz",
        hero_title: "Portail de Sécurité Numérique",
        hero_desc: "Plateforme vérifiée médicalement et techniquement.",
        stat_1: "Heures d'écran/jour", stat_2: "% Erreurs Humaines", btn_start: "Commencer",
        title_facts: "Analyse de Données", chart_1_title: "Impact Lumière Bleue", chart_2_title: "Types de Menaces",
        source_1: "Source: Harvard Medical School", source_2: "Source: Cisco Annual Report",
        title_sol: "Problèmes & Solutions", title_game: "Jeu: Garde Rétine",
        g_start_t: "Prêt?", g_start_d: "Collectez le Vert. Évitez Rouge & Bleu.",
        title_quiz: "Défi Expert (5 Niveaux)",
        problems: [
            {p: "Fatigue Oculaire", s: "Règle 20-20-20 : Regardez au loin toutes les 20 min.", i: "fas fa-eye"},
            {p: "Insomnie", s: "La lumière bleue arrête la mélatonine. Pas d'écran le soir.", i: "fas fa-bed"},
            {p: "Hameçonnage", s: "Vérifiez les URL. Ne cliquez pas sur les liens inconnus.", i: "fas fa-fish"},
            {p: "Mots de Passe", s: "Utilisez 12+ caractères avec symboles.", i: "fas fa-key"},
            {p: "WiFi Public", s: "Utilisez un VPN dans les lieux publics.", i: "fas fa-wifi"},
            {p: "Vol d'Identité", s: "Activez l'authentification à deux facteurs (2FA).", i: "fas fa-user-shield"},
            {p: "Perte de Données", s: "Gardez toujours une sauvegarde externe.", i: "fas fa-hdd"}
        ]
    }
};

const quizData = [
    // Level 1: Medical Basics
    [
        {q: "ما هو الطول الموجي للضوء الأزرق الضار؟", o: ["380-500 نانومتر", "700 نانومتر", "100 نانومتر"], a: 0},
        {q: "هرمون النوم الذي يتأثر بالشاشات هو؟", o: ["الأدرينالين", "الميلاتونين", "الأنسولين"], a: 1},
        {q: "قاعدة 20-20-20 تتطلب النظر لمسافة؟", o: ["20 متراً", "20 قدماً (6 أمتار)", "20 سم"], a: 1},
        {q: "متلازمة CVS تصيب؟", o: ["العيون", "المعدة", "القلب"], a: 0},
        {q: "لتقليل الضرر ليلاً يجب تفعيل؟", o: ["الوضع الليلي", "سطوع عالي", "واي فاي"], a: 0}
    ],
    // Level 2: Cyber Basics
    [
        {q: "ما معنى Phishing؟", o: ["صيد السمك", "التصيد الاحتيالي", "إصلاح الحاسوب"], a: 1},
        {q: "أقوى كلمة مرور هي؟", o: ["123456", "Ahmed2020", "Tr#v3l&Safe9!"], a: 2},
        {q: "رمز القفل بجانب الرابط يعني؟", o: ["HTTPS (مشفر)", "موقع حكومي", "فيروس"], a: 0},
        {q: "المصادقة الثنائية (2FA) تتطلب؟", o: ["كلمة سر فقط", "كلمة سر + رمز", "ايميل فقط"], a: 1},
        {q: "تحديث النظام..؟", o: ["يسد الثغرات", "يبطئ الجهاز", "غير مهم"], a: 0}
    ],
    // Level 3: Advanced Cyber
    [
        {q: "هل شبكات الواي فاي العامة آمنة؟", o: ["نعم دائماً", "لا، يمكن التجسس عليها", "فقط في المطار"], a: 1},
        {q: "برمجيات الفدية (Ransomware) تقوم بـ؟", o: ["سرقة الكاميرا", "تشفير الملفات وطلب مال", "تسريع النت"], a: 1},
        {q: "الهندسة الاجتماعية تستهدف؟", o: ["البشر", "الأنظمة", "الأسلاك"], a: 0},
        {q: "أفضل مكان لحفظ النسخة الاحتياطية؟", o: ["نفس القرص", "قرص خارجي مفصول", "سطح المكتب"], a: 1},
        {q: "VPN يقوم بـ؟", o: ["إخفاء وتشفير الاتصال", "زيادة السرعة", "حذف الفيروسات"], a: 0}
    ],
    // Level 4: Situational
    [
        {q: "وصلك رابط فوز بجائزة، ماذا تفعل؟", o: ["أفتحه فوراً", "أحذفه", "أرسله لصديق"], a: 1},
        {q: "لاحظت بطء مفاجئ في الجهاز، ربما؟", o: ["البطارية ضعيفة", "يوجد برمجية خبيثة", "الشاشة متسخة"], a: 1},
        {q: "تطبيق يطلب صلاحيات لا يحتاجها؟", o: ["أوافق", "أرفض وأحذفه", "أطفئ الجهاز"], a: 1},
        {q: "صديق طلب كلمة سرك؟", o: ["أعطيه", "أرفض تماماً", "أكتبها في ورقة"], a: 1},
        {q: "الشراء من موقع لا يبدأ بـ HTTPS؟", o: ["آمن", "خطر جداً", "عادي"], a: 1}
    ],
    // Level 5: Expert
    [
        {q: "الضوء الأزرق يسبب ضرراً دائماً لـ؟", o: ["الشبكية (Retina)", "القرنية", "الجفن"], a: 0},
        {q: "هجوم Zero-Day هو؟", o: ["هجوم قديم", "استغلال ثغرة غير مكتشفة", "فيروس مجاني"], a: 1},
        {q: "Botnet هو؟", o: ["روبوت آلي", "شبكة أجهزة مخترقة", "برنامج دردشة"], a: 1},
        {q: "Man-in-the-Middle هجوم يتم عبر؟", o: ["الواي فاي غير الآمن", "الفلاش ميموري", "الشاشة"], a: 0},
        {q: "أفضل دفاع ضد فقدان البيانات؟", o: ["مضاد الفيروسات", "النسخ الاحتياطي المتكرر", "كلمة سر قوية"], a: 1}
    ]
];

/* =========================================
   2. CORE FUNCTIONS
   ========================================= */
let currentLang = 'ar';
let unlockedLevels = 1;

window.onload = function() {
    changeLanguage('ar');
    initCharts();
    renderSolutions();
    initQuizLevels();
};

function changeLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if(translations[lang][key]) el.innerText = translations[lang][key];
    });

    renderSolutions();
    if(document.getElementById('quiz-modal').classList.contains('hidden') === false) {
        startQuiz(currentQuizLvl); // Refresh text
    }
}

function toggleMobileMenu() {
    const menu = document.getElementById('mobile-nav');
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
}

function renderSolutions() {
    const container = document.getElementById('solutions-grid');
    container.innerHTML = '';
    translations[currentLang].problems.forEach(p => {
        container.innerHTML += `
            <div class="flip-card" onclick="this.classList.toggle('flipped')">
                <div class="flip-inner">
                    <div class="flip-front">
                        <i class="${p.i} fa-3x" style="color:var(--primary); margin-bottom:20px;"></i>
                        <h3>${p.p}</h3>
                    </div>
                    <div class="flip-back">
                        <i class="fas fa-check-circle fa-3x" style="color:var(--success); margin-bottom:20px;"></i>
                        <p>${p.s}</p>
                    </div>
                </div>
            </div>`;
    });
}

function initCharts() {
    // Chart 1: Melatonin
    new Chart(document.getElementById('sleepChart'), {
        type: 'line',
        data: {
            labels: ['8 PM', '9 PM', '10 PM', '11 PM', '12 AM'],
            datasets: [{
                label: 'Melatonin Levels',
                data: [100, 80, 40, 10, 5],
                borderColor: '#00f0ff',
                backgroundColor: 'rgba(0, 240, 255, 0.1)',
                fill: true
            }]
        },
        options: { scales: { y: { beginAtZero: true } } }
    });

    // Chart 2: Security
    new Chart(document.getElementById('securityChart'), {
        type: 'doughnut',
        data: {
            labels: ['Phishing', 'Malware', 'Passwords', 'Other'],
            datasets: [{
                data: [45, 20, 25, 10],
                backgroundColor: ['#7000ff', '#ff0050', '#00ff80', '#ffffff']
            }]
        }
    });
}

/* =========================================
   3. GAME ENGINE (TOUCH SUPPORTED)
   ========================================= */
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
let gameActive = false, score = 0, level = 1, hp = 100, frame = 0;
let player = { x: 0, w: 100 };
let drops = [];

function startGame() {
    gameActive = true; score = 0; level = 1; hp = 100; drops = [];
    document.getElementById('game-overlay').classList.add('hidden');
    document.getElementById('game-over').classList.add('hidden');
    resizeCanvas();
    loop();
}

function resizeCanvas() {
    const wrapper = document.querySelector('.game-wrapper');
    canvas.width = wrapper.clientWidth;
    canvas.height = 500;
    player.x = canvas.width / 2;
}

window.addEventListener('resize', resizeCanvas);

function loop() {
    if(!gameActive) return;
    ctx.clearRect(0,0,canvas.width,canvas.height);

    // Player
    ctx.fillStyle = '#00f0ff';
    ctx.shadowBlur = 15; ctx.shadowColor = '#00f0ff';
    ctx.fillRect(player.x - 50, canvas.height - 30, 100, 15);
    ctx.shadowBlur = 0;

    // Spawning
    if(frame % (60 - level*5) === 0) {
        let r = Math.random();
        let type = r > 0.4 ? 'bad' : (r > 0.1 ? 'virus' : 'good');
        drops.push({
            x: Math.random() * canvas.width,
            y: -20,
            s: 3 + Math.random() * 2 + level,
            type: type
        });
    }

    // Drops Logic
    drops.forEach((d, i) => {
        d.y += d.s;
        ctx.beginPath(); ctx.arc(d.x, d.y, 10, 0, Math.PI*2);
        if(d.type === 'good') ctx.fillStyle = '#00ff80'; // Green
        else if(d.type === 'bad') ctx.fillStyle = '#00f0ff'; // Blue
        else ctx.fillStyle = '#ff0050'; // Red
        ctx.fill();

        // Collision
        if(d.y > canvas.height - 30 && d.x > player.x - 50 && d.x < player.x + 50) {
            if(d.type === 'good') score += 10;
            else if(d.type === 'bad') score += 5; // Blocking blue is good
            else hp -= 20; // Red virus hurts
            drops.splice(i, 1);
        } else if(d.y > canvas.height) {
            if(d.type === 'bad') hp -= 10; // Blue light entered eye
            drops.splice(i, 1);
        }
    });

    // Update UI
    document.getElementById('score').innerText = score;
    document.getElementById('level').innerText = level;
    document.getElementById('hp').innerText = hp + '%';

    if(score > level * 100) level++;
    if(hp <= 0) {
        gameActive = false;
        document.getElementById('final-score').innerText = score;
        document.getElementById('game-over').classList.remove('hidden');
    }

    frame++;
    requestAnimationFrame(loop);
}

// Touch & Mouse Control
function movePlayer(x) {
    const rect = canvas.getBoundingClientRect();
    player.x = x - rect.left;
}
canvas.addEventListener('mousemove', e => movePlayer(e.clientX));
canvas.addEventListener('touchmove', e => {
    e.preventDefault();
    movePlayer(e.touches[0].clientX);
}, { passive: false });


/* =========================================
   4. QUIZ ENGINE (5 LEVELS)
   ========================================= */
let currentQuizLvl = 0;
let qIdx = 0;
let qScore = 0;

function initQuizLevels() {
    const container = document.getElementById('level-buttons');
    container.innerHTML = '';
    for(let i=0; i<5; i++) {
        let status = i < unlockedLevels ? 'unlocked' : '';
        if(i < unlockedLevels - 1) status += ' passed';
        let icon = i < unlockedLevels ? (i < unlockedLevels -1 ? '✔' : (i+1)) : '🔒';
        
        container.innerHTML += `
            <div class="lvl-btn ${status}" onclick="startQuiz(${i})">${icon}</div>
        `;
    }
}

function startQuiz(lvl) {
    if(lvl >= unlockedLevels) return;
    currentQuizLvl = lvl; qIdx = 0; qScore = 0;
    
    document.getElementById('quiz-modal').classList.remove('hidden');
    renderQuestion();
}

function renderQuestion() {
    // If we run out of defined questions (safety fallback), wrap around
    const qSet = quizData[currentQuizLvl] || quizData[0];
    const q = qSet[qIdx];
    
    document.getElementById('q-level-name').innerText = `Level ${currentQuizLvl+1}`;
    document.getElementById('q-progress').innerText = `${qIdx+1}/5`;
    document.getElementById('q-text').innerText = q.q;
    
    const grid = document.getElementById('q-options');
    grid.innerHTML = '';
    q.o.forEach((opt, i) => {
        grid.innerHTML += `<button class="opt-btn" onclick="checkAnswer(${i})">${opt}</button>`;
    });
}

function checkAnswer(idx) {
    const qSet = quizData[currentQuizLvl] || quizData[0];
    if(idx === qSet[qIdx].a) {
        confetti({ particleCount: 50, spread: 60, origin: { y: 0.7 } });
        qScore++;
    } else {
        alert("إجابة خاطئة!");
    }
    
    setTimeout(() => {
        qIdx++;
        if(qIdx < 5) renderQuestion();
        else finishLevel();
    }, 500);
}

function finishLevel() {
    document.getElementById('quiz-modal').classList.add('hidden');
    if(qScore >= 3) {
        alert("🎉 مبروك! نجحت في هذا المستوى.");
        if(unlockedLevels < 5 && unlockedLevels === currentQuizLvl + 1) {
            unlockedLevels++;
        }
        initQuizLevels();
    } else {
        alert("❌ لم تنجح. حاول مرة أخرى (تحتاج 3/5).");
    }
}