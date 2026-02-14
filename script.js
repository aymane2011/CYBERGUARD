/* ================= DATABASE ================= */
const translations = {
    ar: {
        nav_home: "الرئيسية", nav_stats: "الإحصائيات", nav_info: "المعلومات", nav_sol: "الحلول (11)", nav_game: "اللعبة", nav_quiz: "الاختبار",
        hero_title: "الأمان الرقمي والصحة البصرية", hero_desc: "منصة تعليمية موثقة لحماية الطلاب.",
        btn_start: "ابدأ التحدي", title_stats: "تحليل البيانات",
        chart_1: "تأثير الضوء الأزرق (الميلاتونين)", chart_2: "أنواع التهديدات", chart_3: "إجهاد العين",
        title_info: "6 حقائق علمية وتقنية",
        title_sol: "11 مشكلة وحل (اضغط للقلب)", hint_flip: "تنبيه: يتم فتح بطاقة واحدة فقط في كل مرة",
        title_game: "حارس الشبكية", g_ready: "جاهز للمهمة؟", g_desc: "اجمع الأخضر وتجنب الأحمر والأزرق.",
        title_quiz: "تحدي الخبراء (7 مستويات)",
        // 6 INFO CARDS
        infos: [
            {t: "طيف الضوء المرئي", d: "الضوء الأزرق يقع بين 380-500 نانومتر، وهو الأقرب للأشعة فوق البنفسجية الضارة.", i: "fas fa-sun"},
            {t: "إيقاع الساعة البيولوجية", d: "التعرض للشاشات ليلاً يؤخر إفراز الميلاتونين لمدة تصل إلى 3 ساعات.", i: "fas fa-clock"},
            {t: "متلازمة CVS", d: "90% من مستخدمي الكمبيوتر يعانون من متلازمة النظر للكمبيوتر (إجهاد، جفاف، صداع).", i: "fas fa-desktop"},
            {t: "التشفير (Encryption)", d: "تحويل البيانات إلى رموز لا يمكن قراءتها إلا بمفتاح خاص، وهو أساس أمان الإنترنت.", i: "fas fa-lock"},
            {t: "الهندسة الاجتماعية", d: "اختراق العقول بدلاً من الأجهزة، عبر التلاعب النفسي للحصول على المعلومات.", i: "fas fa-user-secret"},
            {t: "البصمة الرقمية", d: "كل نشاط تقوم به على الإنترنت يترك أثراً دائماً يمكن تتبعه واستغلاله.", i: "fas fa-shoe-prints"}
        ],
        // 11 PROBLEMS & SOLUTIONS
        probs: [
            {p: "إجهاد العين الرقمي", s: "استخدم قاعدة 20-20-20: كل 20 دقيقة انظر لـ 20 قدماً لمدة 20 ثانية.", i: "fas fa-eye"},
            {p: "الأرق (اضطراب النوم)", s: "الضوء الأزرق يوقف الميلاتونين. توقف عن الشاشات قبل النوم بساعة.", i: "fas fa-bed"},
            {p: "التصيد الاحتيالي", s: "تحقق من عنوان المرسل ولا تضغط على الروابط المجهولة.", i: "fas fa-fish"},
            {p: "جفاف العين المزمن", s: "استخدم قطرات مرطبة ورمش (Blink) بشكل متكرر أثناء العمل.", i: "fas fa-tint"},
            {p: "كلمات المرور الضعيفة", s: "استخدم 12 حرفاً على الأقل (رموز وأرقام). لا تستخدم اسمك.", i: "fas fa-key"},
            {p: "الواي فاي العام", s: "البيانات غير مشفرة. استخدم VPN عند الاتصال في الأماكن العامة.", i: "fas fa-wifi"},
            {p: "سرقة الهوية", s: "فعل المصادقة الثنائية (2FA) لربط الحساب بهاتفك.", i: "fas fa-user-shield"},
            {p: "فقدان البيانات", s: "احتفظ بنسخة احتياطية (Backup) خارجية لملفاتك.", i: "fas fa-hdd"},
            {p: "آلام الرقبة (Tech Neck)", s: "ارفع الهاتف لمستوى العين لتخفيف الضغط على العمود الفقري.", i: "fas fa-mobile-alt"},
            {p: "التنمر الإلكتروني", s: "لا ترد. احظر المتنمر فوراً وأبلغ شخصاً بالغاً أو إدارة المدرسة.", i: "fas fa-ban"},
            {p: "إدمان الإنترنت", s: "حدد وقتاً يومياً لترك الهاتف (Digital Detox) واستبدله بالرياضة.", i: "fas fa-running"}
        ]
    },
    en: {
        nav_home: "Home", nav_stats: "Stats", nav_info: "Info", nav_sol: "Solutions", nav_game: "Game", nav_quiz: "Quiz",
        hero_title: "Digital Safety & Health", hero_desc: "Verified educational platform.",
        btn_start: "Start Challenge", title_stats: "Data Analysis",
        chart_1: "Blue Light Impact", chart_2: "Threat Types", chart_3: "Global Eye Strain",
        title_info: "6 Scientific Facts", title_sol: "11 Problems & Solutions", hint_flip: "One card flips at a time",
        title_game: "Retina Guard", g_ready: "Ready?", g_desc: "Collect Green. Avoid Red/Blue.",
        title_quiz: "Expert Challenge (7 Levels)",
        infos: [
            {t: "Visible Spectrum", d: "Blue light (380-500nm) is closest to harmful UV rays.", i: "fas fa-sun"},
            {t: "Circadian Rhythm", d: "Screen time at night delays melatonin by up to 3 hours.", i: "fas fa-clock"},
            {t: "CVS Syndrome", d: "90% of PC users suffer from Computer Vision Syndrome.", i: "fas fa-desktop"},
            {t: "Encryption", d: "Turning data into unreadable code, the basis of security.", i: "fas fa-lock"},
            {t: "Social Engineering", d: "Hacking humans instead of devices via manipulation.", i: "fas fa-user-secret"},
            {t: "Digital Footprint", d: "Every online activity leaves a permanent traceable trail.", i: "fas fa-shoe-prints"}
        ],
        probs: [
            {p: "Eye Strain", s: "Use 20-20-20 Rule.", i: "fas fa-eye"},
            {p: "Insomnia", s: "No screens 1 hour before bed.", i: "fas fa-bed"},
            {p: "Phishing", s: "Verify URLs carefully.", i: "fas fa-fish"},
            {p: "Dry Eyes", s: "Blink often and use drops.", i: "fas fa-tint"},
            {p: "Weak Passwords", s: "Use 12+ chars & symbols.", i: "fas fa-key"},
            {p: "Public WiFi", s: "Use VPN in public.", i: "fas fa-wifi"},
            {p: "Identity Theft", s: "Enable 2FA.", i: "fas fa-user-shield"},
            {p: "Data Loss", s: "Keep external backups.", i: "fas fa-hdd"},
            {p: "Tech Neck", s: "Raise phone to eye level.", i: "fas fa-mobile-alt"},
            {p: "Cyberbullying", s: "Block and report.", i: "fas fa-ban"},
            {p: "Addiction", s: "Practice Digital Detox.", i: "fas fa-running"}
        ]
    },
    fr: {
        nav_home: "Accueil", nav_stats: "Stats", nav_info: "Infos", nav_sol: "Solutions", nav_game: "Jeu", nav_quiz: "Quiz",
        hero_title: "Sécurité Numérique", hero_desc: "Plateforme éducative vérifiée.",
        btn_start: "Commencer", title_stats: "Analyse Données",
        chart_1: "Impact Lumière Bleue", chart_2: "Menaces", chart_3: "Fatigue Oculaire",
        title_info: "6 Faits Scientifiques", title_sol: "11 Problèmes & Solutions", hint_flip: "Une seule carte à la fois",
        title_game: "Garde Rétine", g_ready: "Prêt?", g_desc: "Prenez Vert. Évitez Rouge/Bleu.",
        title_quiz: "Défi Expert (7 Niveaux)",
        infos: [
            {t: "Spectre Visible", d: "La lumière bleue est proche des UV nocifs.", i: "fas fa-sun"},
            {t: "Rythme Circadien", d: "Les écrans retardent la mélatonine de 3 heures.", i: "fas fa-clock"},
            {t: "Syndrome CVS", d: "90% des utilisateurs souffrent de fatigue visuelle.", i: "fas fa-desktop"},
            {t: "Chiffrement", d: "Base de la sécurité Internet.", i: "fas fa-lock"},
            {t: "Ingénierie Sociale", d: "Manipuler les humains pour pirater.", i: "fas fa-user-secret"},
            {t: "Empreinte Num.", d: "Toute activité laisse une trace.", i: "fas fa-shoe-prints"}
        ],
        probs: [
            {p: "Fatigue Oculaire", s: "Règle 20-20-20.", i: "fas fa-eye"},
            {p: "Insomnie", s: "Pas d'écran le soir.", i: "fas fa-bed"},
            {p: "Hameçonnage", s: "Vérifiez les URL.", i: "fas fa-fish"},
            {p: "Yeux Secs", s: "Clignez souvent.", i: "fas fa-tint"},
            {p: "Mots de Passe", s: "Utilisez des symboles.", i: "fas fa-key"},
            {p: "WiFi Public", s: "Utilisez un VPN.", i: "fas fa-wifi"},
            {p: "Vol d'Identité", s: "Activez la 2FA.", i: "fas fa-user-shield"},
            {p: "Perte de Données", s: "Sauvegardes externes.", i: "fas fa-hdd"},
            {p: "Cou Texto", s: "Levez le téléphone.", i: "fas fa-mobile-alt"},
            {p: "Cyber-harcèlement", s: "Bloquez et signalez.", i: "fas fa-ban"},
            {p: "Addiction", s: "Détox numérique.", i: "fas fa-running"}
        ]
    }
};

const quizData = [
    // Level 1: Medical Basics
    [{q: "الطول الموجي للضوء الأزرق الضار؟", o: ["380-500nm", "700nm", "100nm"], a: 0},
     {q: "هرمون النوم هو؟", o: ["الأدرينالين", "الميلاتونين", "الأنسولين"], a: 1},
     {q: "قاعدة 20-20-20 تخص؟", o: ["العين", "الظهر", "البطن"], a: 0},
     {q: "Phishing هو؟", o: ["صيد السمك", "التصيد الاحتيالي", "إصلاح"], a: 1},
     {q: "أفضل مكان للشاشة؟", o: ["أعلى الرأس", "مستوى العين", "قريب"], a: 1}],
    // Level 2: Cyber Basics
    [{q: "HTTPS يعني؟", o: ["آمن", "خطر", "بطيء"], a: 0},
     {q: "كلمة المرور القوية؟", o: ["123456", "User", "Tr#v3l!9"], a: 2},
     {q: "2FA تعني؟", o: ["كلمة سر", "مصادقة ثنائية", "ايميل"], a: 1},
     {q: "تحديث النظام؟", o: ["يسد الثغرات", "يبطئ", "غير هام"], a: 0},
     {q: "WiFi العام؟", o: ["آمن", "خطر", "سريع"], a: 1}],
    // Level 3: Advanced
    [{q: "الإجهاد التأكسدي يصيب؟", o: ["الشبكية", "الشعر", "اليد"], a: 0},
     {q: "الهندسة الاجتماعية تستهدف؟", o: ["البشر", "الآلات", "الأسلاك"], a: 0},
     {q: "Ransomware هو؟", o: ["تسريع", "فدية وتشفير", "مسح"], a: 1},
     {q: "VPN يقوم بـ؟", o: ["تشفير الاتصال", "سرقة", "إصلاح"], a: 0},
     {q: "النسخ الاحتياطي؟", o: ["مهم", "غير مهم", "مضيعة"], a: 0}],
    // Level 4: Situational
    [{q: "رابط مجهول؟", o: ["أفتحه", "أحذفه", "أنشره"], a: 1},
     {q: "بطء مفاجئ بالجهاز؟", o: ["فيروس محتمل", "شاشة", "بطارية"], a: 0},
     {q: "تطبيق يطلب صلاحيات غريبة؟", o: ["أوافق", "أرفض", "لا أعلم"], a: 1},
     {q: "صديق طلب الباسوورد؟", o: ["أعطيه", "أرفض", "أكتبه"], a: 1},
     {q: "موقع بدون قفل؟", o: ["آمن", "غير آمن", "عادي"], a: 1}],
    // Level 5: Expert
    [{q: "الضرر الدائم يصيب؟", o: ["القرنية", "الشبكية", "الجفن"], a: 1},
     {q: "Zero-Day؟", o: ["ثغرة جديدة", "فيروس قديم", "برنامج"], a: 0},
     {q: "Botnet؟", o: ["شبكة مخترقة", "روبوت", "لعبة"], a: 0},
     {q: "Man-in-Middle؟", o: ["تجسس اتصال", "فيروس", "شاشة"], a: 0},
     {q: "حماية البيانات؟", o: ["Backup", "Format", "Reset"], a: 0}],
    // Level 6: Master
    [{q: "DDOS Attack?", o: ["قطع الخدمة", "سرقة", "تجسس"], a: 0},
     {q: "Cookies تستخدم لـ؟", o: ["التتبع", "الفيروسات", "التسريع"], a: 0},
     {q: "جدار الحماية Firewall؟", o: ["يمنع الدخول غير المصرح", "يحرق الجهاز", "يزيد السرعة"], a: 0},
     {q: "الضوء الأزرق يسرع؟", o: ["الضمور البقعي", "النمو", "الهضم"], a: 0},
     {q: "المسافة الآمنة للشاشة؟", o: ["50-70 سم", "10 سم", "3 متر"], a: 0}],
    // Level 7: Legend
    [{q: "التشفير End-to-End؟", o: ["المرسل والمستقبل فقط يقرآن", "الشركة تقرأ", "الكل يقرأ"], a: 0},
     {q: "VPN يخفي؟", o: ["عنوان IP", "الشاشة", "لوحة المفاتيح"], a: 0},
     {q: "Keylogger يسجل؟", o: ["ضربات المفاتيح", "الصوت", "الفيديو"], a: 0},
     {q: "Bloatware هي؟", o: ["برامج زائدة غير مفيدة", "فيروسات", "تحديثات"], a: 0},
     {q: "الوضع المظلم Dark Mode؟", o: ["يقلل الضوء الأزرق", "يزيد البطارية فقط", "يضر العين"], a: 0}]
];

/* ================= APP LOGIC ================= */
let currentLang = 'ar';
let unlockedLevels = 1;
let activeFlipCard = null;

window.onload = function() {
    changeLang('ar');
    initCharts();
    initQuizLevels();
};

function changeLang(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if(translations[lang][key]) el.innerText = translations[lang][key];
    });

    renderProblems();
    renderInfoCards();
}

function scrollToSection(id) { document.getElementById(id).scrollIntoView(); }
function toggleMenu() { document.querySelector('.nav-links').classList.toggle('active'); }

function changeBG(type) {
    const bg = document.getElementById('main-bg');
    const urls = {
        space: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072',
        matrix: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070',
        cyber: 'https://images.unsplash.com/photo-1555680202-c86f0e12f086?q=80&w=2070'
    };
    bg.style.backgroundImage = `url(${urls[type]})`;
}

// 1. Info Cards Render (New)
function renderInfoCards() {
    const container = document.getElementById('info-container');
    container.innerHTML = '';
    translations[currentLang].infos.forEach(info => {
        container.innerHTML += `
            <div class="info-card-styled">
                <i class="${info.i} info-icon"></i>
                <div class="info-h">${info.t}</div>
                <div class="info-p">${info.d}</div>
            </div>`;
    });
}

// 2. Problems Logic (One Card Flip)
function renderProblems() {
    const container = document.getElementById('prob-container');
    container.innerHTML = '';
    translations[currentLang].probs.forEach(item => {
        const card = document.createElement('div');
        card.className = 'flip-card';
        card.innerHTML = `
            <div class="flip-inner">
                <div class="flip-front">
                    <i class="${item.i} fa-3x" style="color:var(--accent); margin-bottom:15px;"></i>
                    <h3>${item.p}</h3>
                </div>
                <div class="flip-back">
                    <i class="fas fa-check fa-3x" style="color:var(--success); margin-bottom:15px;"></i>
                    <p>${item.s}</p>
                </div>
            </div>`;
        card.onclick = function() {
            if(activeFlipCard && activeFlipCard !== card) activeFlipCard.classList.remove('flipped');
            if(card.classList.contains('flipped')) {
                card.classList.remove('flipped'); activeFlipCard = null;
            } else {
                card.classList.add('flipped'); activeFlipCard = card;
            }
        };
        container.appendChild(card);
    });
}

// 3. Game Logic
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
let gameActive=false, score=0, level=1, hp=100, frame=0, player={x:0,w:100}, drops=[];

function startGame() {
    gameActive=true; score=0; level=1; hp=100; drops=[];
    document.getElementById('game-overlay').classList.add('hidden');
    document.getElementById('game-over').classList.add('hidden');
    resizeGame(); loop();
}
function resizeGame() {
    canvas.width = document.querySelector('.game-box').clientWidth;
    canvas.height = 500; player.x = canvas.width/2;
}
window.addEventListener('resize', resizeGame);

function loop() {
    if(!gameActive) return;
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle='#00f3ff'; ctx.shadowBlur=20; ctx.shadowColor='#00f3ff';
    ctx.fillRect(player.x-50, canvas.height-30, 100, 15); ctx.shadowBlur=0;

    if(frame%(60-level*5)===0) {
        let r=Math.random(), type=r>0.4?'bad':(r>0.1?'virus':'good');
        drops.push({x:Math.random()*canvas.width, y:-20, s:3+level, t:type});
    }
    drops.forEach((d,i)=>{
        d.y+=d.s; ctx.beginPath(); ctx.arc(d.x, d.y, 10, 0, Math.PI*2);
        ctx.fillStyle= d.t==='good'?'#00ff6a':(d.t==='bad'?'#00f3ff':'#ff003c'); ctx.fill();
        if(d.y>canvas.height-30 && d.x>player.x-50 && d.x<player.x+50) {
            if(d.t==='good') score+=10; else if(d.t==='bad') score+=5; else hp-=20;
            drops.splice(i,1);
        } else if(d.y>canvas.height) { if(d.t==='bad') hp-=10; drops.splice(i,1); }
    });
    document.getElementById('g-score').innerText=score; document.getElementById('g-lvl').innerText=level; document.getElementById('g-hp').innerText=hp+'%';
    if(score>level*100) level++;
    if(hp<=0) { gameActive=false; document.getElementById('final-score').innerText=score; document.getElementById('game-over').classList.remove('hidden'); }
    frame++; requestAnimationFrame(loop);
}
function moveP(x) { const r=canvas.getBoundingClientRect(); player.x=x-r.left; }
canvas.addEventListener('mousemove', e=>moveP(e.clientX));
canvas.addEventListener('touchmove', e=>{e.preventDefault(); moveP(e.touches[0].clientX);}, {passive:false});

// 4. Quiz Logic (7 Levels, Score /10)
let qLvl=0, qIdx=0, qScore=0;

function initQuizLevels() {
    const c = document.getElementById('lvl-map'); c.innerHTML = '';
    for(let i=0; i<7; i++) {
        let s = i<unlockedLevels?'unlocked':''; if(i<unlockedLevels-1) s+=' passed';
        let ico = i<unlockedLevels?(i+1):'<i class="fas fa-lock"></i>';
        c.innerHTML += `<div class="lvl-btn ${s}" onclick="startQ(${i})">${ico}</div>`;
    }
}
function startQ(l) {
    if(l>=unlockedLevels) return;
    qLvl=l; qIdx=0; qScore=0;
    document.getElementById('quiz-window').classList.remove('hidden'); renderQ();
}
function renderQ() {
    const q=quizData[qLvl][qIdx];
    document.getElementById('q-level').innerText=`Level ${qLvl+1}`;
    document.getElementById('q-progress').innerText=`${qIdx+1}/5`;
    document.getElementById('q-text').innerText=q.q;
    const g=document.getElementById('q-opts'); g.innerHTML='';
    q.o.forEach((o,i)=>{ g.innerHTML+=`<button class="opt-btn" onclick="checkA(${i})">${o}</button>`; });
}
function checkA(i) {
    if(i===quizData[qLvl][qIdx].a) { confetti({particleCount:30, spread:50, origin:{y:0.7}}); qScore++; }
    else alert("Wrong!");
    setTimeout(()=>{
        qIdx++;
        if(qIdx<5) renderQ();
        else {
            document.getElementById('quiz-window').classList.add('hidden');
            let finalScore = qScore * 2; // Score out of 10
            if(finalScore > 6) {
                alert(`Passed! Score: ${finalScore}/10`);
                if(unlockedLevels<7 && unlockedLevels===qLvl+1) unlockedLevels++;
                initQuizLevels();
            } else alert(`Failed. Score: ${finalScore}/10. Try again.`);
        }
    }, 500);
}

function initCharts() {
    new Chart(document.getElementById('chartLine'), {
        type: 'line',
        data: {
            labels: ['8PM', '9PM', '10PM', '11PM', '12AM'],
            datasets: [{label:'Melatonin', data:[100,80,40,10,5], borderColor:'#00f3ff', backgroundColor:'rgba(0,243,255,0.1)', fill:true}]
        }
    });
    new Chart(document.getElementById('chartDoughnut'), {
        type: 'doughnut',
        data: {
            labels: ['Phishing', 'Malware', 'Passwords'],
            datasets: [{data:[50,30,20], backgroundColor:['#7000ff','#ff003c','#00ff6a']}]
        }
    });
    new Chart(document.getElementById('chartBar'), {
        type: 'bar',
        data: {
            labels: ['Teenagers', 'Adults', 'Kids'],
            datasets: [{label:'Eye Strain %', data:[65, 80, 40], backgroundColor:'#00f3ff'}]
        }
    });
}