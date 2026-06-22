const CONFIG = {
    startDate: "2024-10-04T16:30:00+03:00", 
    secretPassword: "0558", 
    
    quiz: [
        { 
            q: "Где мы впервые долго болтали?", 
            options: ["В парке", "По телефону", "В переписке", "В кино"], 
            answer: 1 
        },
        { 
            q: "Какое мое любимое занятие?", 
            options: ["Спать", "Проводить время с тобой", "Играть", "Работать"], 
            answer: 1 
        },
        { 
            q: "Кто первым признался в чувствах?", 
            options: ["Я (Никита)", "Ты (Анастасия)", "Это вышло случайно", "Ветер подсказал"], 
            answer: 0 
        }
    ]
};

// 100 Причин (Массив генерируется прямо здесь, чтобы было компактно, но красиво)
const loveReasons = [
    "Твоя улыбка освещает мой день.", "В твоих глазах я вижу целый мир.", "Твой смех — моя любимая музыка.", 
    "С тобой я чувствую себя по-настоящему живым.", "Ты понимаешь меня даже без слов.", "Твоя нежность растапливает моё сердце.",
    "Ты всегда знаешь, как меня поддержать.", "Твои объятия — моё самое безопасное место.", "Я люблю твой запах.", 
    "Ты вдохновляешь меня становиться лучше.", "С тобой самые обычные вещи становятся особенными.", "Ты потрясающе красивая.",
    "У тебя прекрасное чувство юмора.", "Твоя доброта не знает границ.", "Ты делаешь меня счастливым каждую секунду.",
    "Я обожаю, когда ты улыбаешься во сне.", "Твои сообщения заставляют меня улыбаться.", "Ты мой лучший друг.",
    "Мне нравится, как ты морщишь носик.", "Твоя искренность бесценна.", "С тобой я могу быть самим собой.",
    "Ты всегда веришь в меня.", "Рядом с тобой время пролетает незаметно.", "Я люблю твои волосы.",
    "Ты умеешь слушать как никто другой.", "Твоя забота согревает мою душу.", "Мне нравится держать тебя за руку.",
    "Ты особенная, и другой такой нет.", "Моё сердце бьётся быстрее, когда ты рядом.", "Твои поцелуи — это космос.",
    "С тобой я забываю о всех проблемах.", "Ты моё солнце в пасмурный день.", "Я люблю твой голос.",
    "Мне нравится мечтать вместе с тобой.", "Ты придаешь смысл моей жизни.", "Я люблю то, как мы понимаем шутки друг друга.",
    "Твой взгляд сводит меня с ума.", "Ты самая милая девушка на свете.", "Я люблю просыпаться с мыслями о тебе.",
    "Каждый день с тобой — это приключение.", "Ты моё самое большое сокровище.", "С тобой я дома, где бы мы ни были.",
    "Мне нравится смотреть с тобой фильмы.", "Твоя целеустремленность восхищает.", "Я люблю твои случайные милые привычки.",
    "Ты всегда в моих мыслях.", "Твоя поддержка даёт мне крылья.", "Я люблю, когда ты называешь меня по имени.",
    "Ты делаешь этот мир лучше.", "Я готов ради тебя на всё.", "Твоя душа так же прекрасна, как и внешность.",
    "Мне нравится наше общее молчание.", "Ты заставляешь меня верить в чудеса.", "С тобой всё кажется возможным.",
    "Ты мой главный повод для гордости.", "Твоя страсть к жизни заразительна.", "Я люблю гулять с тобой.",
    "Твоя честность заслуживает уважения.", "Ты наполняешь мою жизнь яркими красками.", "Мне нравится делать тебя счастливой.",
    "Ты моя слабость и моя сила.", "Я люблю слушать, как ты дышишь.", "Твои прикосновения вызывают мурашки.",
    "С тобой я хочу провести всю жизнь.", "Ты умеешь прощать.", "Я люблю твой вкус во всём.",
    "Твоя смелость вдохновляет.", "Ты мой идеал.", "Мне нравится, когда мы дурачимся вместе.",
    "Ты умеешь находить прекрасное в мелочах.", "Я благодарен судьбе за нашу встречу.", "Ты моя главная удача.",
    "Твои советы всегда самые точные.", "Я люблю смотреть в твои глаза.", "Ты заставляешь моё сердце трепетать.",
    "Твоё присутствие успокаивает меня.", "Я обожаю твою улыбку после поцелуя.", "Ты моя путеводная звезда.",
    "С тобой я узнал, что такое настоящая любовь.", "Мне нравится, как ты рассуждаешь.", "Ты моё настоящее и моё будущее.",
    "Твоя энергия заряжает меня.", "Я люблю твой смех до слез.", "Ты делаешь меня самым счастливым парнем.",
    "С тобой каждое утро доброе.", "Мне нравится, как наши пальцы переплетаются.", "Ты моё вдохновение.",
    "Я люблю твою уникальность.", "Ты всегда знаешь, что сказать.", "Моя любовь к тебе растёт с каждым днём.",
    "Ты та, о ком я всегда мечтал.", "Я люблю каждую твою родинку.", "Твоя любовь — лучший подарок для меня.",
    "Мне нравится твоя походка.", "Ты зажигаешь огонь в моей душе.", "С тобой каждый момент бесценен.",
    "Ты моё всё.", "Я люблю тебя просто за то, что ты есть.", "Ты — моё самое любимое чувство.",
    "Потому что я не могу представить свою жизнь без тебя."
];

// 7-й стих возвращен и очищен от аудио
const poemsData = [
    {
        stanzas: ["Я вас любил, любить и буду.<br>И доброты я вашей не забуду,<br>Как счастливы мы были вместе.<br>Делили боль между собой.", "Когда я встретил вас на улице простой.<br>Вы были обоятельной и нежной.<br>И думал я, что вот - судьба!<br>Увы, сейчас не вместе, но помнить буду я всегда..."],
        desc: "Мой первый стих, что я написал.",
        icon: "🌹"
    },
    {
        stanzas: ["Услышал ветер мои чувства<br>Сказал мне - расскажи о них<br>И я сказал ему, о том как сильно я люблю,<br>Но он спросил - кого", "И я ответил, что девушка она<br>Красива, как ангел воплоти<br>В её глазах сиял закат красиво,<br>Который заходил", "И вот помчался он, по всей земле<br>Сказал он всём о моих чувствах<br>Чтоб знали всё, что я люблю<br>Такую девушку Анастасию"],
        desc: "Первый посвященный тебе стих. Ты меня сильно вдохновила на его написание.",
        icon: "🌬️"
    },
    {
        stanzas: ["Сидим, скучаем мы вдвоем,<br>Что рядом быть сейчас не можем,<br>Но все это пройдем потом,<br>Увидеться мы сможем.", "Потом опять разлука,<br>Сидим, тоскуем без друг друга<br>Все равно увидимся потом,<br>И будет хорошо как прежде."],
        desc: "Тут была буря эмоций, ожидание нашей встречи постигла написать этот стих.",
        icon: "⏳"
    },
    {
        stanzas: ["Ты чувствуешь лишь боль, страдания<br>Тебе все причиняют боль<br>Но это всё не вечно<br>Ты обретёшь покой, но не навечно", "Тебе поможет светлый луч,<br>Который пробиваеться сквозь туч<br>Сквозь туч печали и страданий<br>И выведет тебя на путь любви", "Где обретёшь покой и счастье наконец<br>Ты обернешься вспять и будешь вспоминать<br>Те дни с улыбкой, что смогла.."],
        desc: "Моя поддержка для тебя. Свет моей любви развеет любые тучи.",
        icon: "☀️"
    },
    {
        stanzas: ["Ты помнишь родная<br>Как было всё хорошо<br>Как гуляли с тобой первый раз<br>Как сидели, общались", "С вечера и до самого утра<br>Встречали восход, и провожали закат<br>Не замечая времени<br>Ты прости меня, что сейчас не так", "Что не могу я вернуть<br>Тех дней, когда мы гуляли<br>И сидели болтали всю ночь<br>Я стал жестоким и чёрствым", "Всё чаще стал обижаться<br>Всё чаще стали ругаться<br>Извини меня за то<br>Что я такой плохой"],
        desc: "Ностальгия по нашим долгим разговорам до рассвета и мои искренние извинения.",
        icon: "🌅"
    },
    {
        stanzas: ["Всё так хорошо начиналось<br>Хотели мы слиться в одно<br>Но щас мы увы не можем<br>Начинаем с тобой ссору опять", "Почему сейчас так - ты спросишь меня<br>А я отвечу \"не знаю...\"<br>Сидим мы тоскуем вдвоём<br>По тем дням весёлым", "Когда слиться хотели в одно<br>Но не вернуть тех дней хороших<br>Когда было всё так легко<br>Мы так хотим всё вернуть", "Но порой забываем зачем<br>И снова ругаемся, непонятно зачем<br>Сидим мы снова, тоскуем<br>Ведь знаешь родная, а было так хорошо..."],
        desc: "О сложных моментах и мечте вернуть нашу искреннюю гармонию.",
        icon: "💔"
    },
    {
        stanzas: [
            "Пошли гулять тогда мы вместе,<br>Тебя я встретил очень робко.<br>Твои глаза я помню чётко<br>И помню, как в них утонул.", 
            "Ведь ты, любимая, прекрасна,<br>И было нам так хорошо...<br>Вернуть бы мне то время снова,<br>Когда гуляли мы вдвоём.", 
            "Жаль, что мы сейчас не вместе,<br>Наш дом упал, порос травой.<br>Но вспоминать мне так приятно,<br>Жаль, в жизни всё выходит так.", 
            "Что мы заложники того,<br>Над чем не властны мы вдвоём.<br>Но приходить я буду в этот дом<br>И вспоминать, что было в нём.", 
            "Ведь нам так славно было вместе,<br>Но обстоятельства разнят.<br>Тот дом прекрасный был -<br>Его построили вдвоём..."
        ],
        desc: "О нашей первой встрече, волшебстве твоих глаз и о приятных воспоминаниях.",
        icon: "🏠"
    }
];

document.addEventListener("DOMContentLoaded", () => {
    initTabs();
    initTheme();
    initTimer();
    generateParticles();
    renderPoems();
    initQuiz();
    initReasons();
    initSecret();
    initReactionBtn();
    initParallax();
});

function initTabs() {
    const btns = document.querySelectorAll('.tab-btn');
    const contents = document.querySelectorAll('.tab-content');
    
    btns.forEach(btn => btn.addEventListener('click', () => {
        btns.forEach(b => b.classList.remove('active'));
        contents.forEach(c => c.classList.remove('active-content'));
        
        btn.classList.add('active');
        document.getElementById(btn.dataset.tab + '-tab').classList.add('active-content');
    }));
}

function initTheme() {
    const themeBtn = document.getElementById('theme-toggle');
    document.body.classList.add('dark-mode');
    themeBtn.textContent = '☀️';

    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        themeBtn.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
    });
}

function initTimer() {
    const start = new Date(CONFIG.startDate).getTime();
    
    const dEl = document.getElementById('days');
    const hEl = document.getElementById('hours');
    const mEl = document.getElementById('minutes');
    const sEl = document.getElementById('seconds');

    setInterval(() => {
        const now = new Date().getTime();
        const diff = now - start;
        
        if(diff < 0) return;
        
        dEl.textContent = Math.floor(diff / (1000 * 60 * 60 * 24));
        hEl.textContent = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        mEl.textContent = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        sEl.textContent = Math.floor((diff % (1000 * 60)) / 1000);
    }, 1000);
}

function renderPoems() {
    const container = document.getElementById('poems-container');
    
    poemsData.forEach((poem, index) => {
        const row = document.createElement('div');
        row.className = 'poem-row';
        
        const card = document.createElement('div');
        card.className = 'poem-card glass-card';
        
        let stanzasHtml = '';
        poem.stanzas.forEach(st => stanzasHtml += `<p>${st}</p>`);
        
        card.innerHTML = `
            <div class="card-glow"></div>
            <div class="poem-header">
                <span class="poem-number">Глава #${index + 1}</span>
                <span class="poem-icon">${poem.icon}</span>
            </div>
            ${stanzasHtml}
        `;
        
        const desc = document.createElement('div');
        desc.className = 'poem-description glass-card';
        desc.innerHTML = `
            <div class="card-glow"></div>
            <p class="desc-text">«${poem.desc}»</p>
        `;
        
        row.append(card, desc);
        container.appendChild(row);
    });
}

function initReasons() {
    const textEl = document.getElementById('reason-text');
    const btn = document.getElementById('next-reason-btn');
    const counterText = document.getElementById('reasons-counter');
    let usedIndices = [];

    btn.addEventListener('click', () => {
        if (usedIndices.length === loveReasons.length) {
            usedIndices = []; // Сброс, если все посмотрели
        }
        
        let rIdx;
        do { 
            rIdx = Math.floor(Math.random() * loveReasons.length); 
        } while(usedIndices.includes(rIdx));
        
        usedIndices.push(rIdx);
        
        textEl.classList.add('fade-out');
        setTimeout(() => {
            textEl.textContent = loveReasons[rIdx];
            counterText.textContent = `Открыто: ${usedIndices.length} / 100`;
            textEl.classList.remove('fade-out');
        }, 300);
    });
}

function initQuiz() {
    let currentQ = 0;
    const qText = document.getElementById('quiz-question');
    const optsBox = document.getElementById('quiz-options');
    const btn = document.getElementById('start-quiz-btn');

    btn.addEventListener('click', () => {
        btn.style.display = 'none';
        showQuestion();
    });

    function showQuestion() {
        if(currentQ >= CONFIG.quiz.length) {
            qText.textContent = "Ты молодец! Ты помнишь всё самое важное ❤️";
            optsBox.innerHTML = '';
            return;
        }
        
        const qData = CONFIG.quiz[currentQ];
        qText.textContent = qData.q;
        optsBox.innerHTML = '';
        
        qData.options.forEach((opt, i) => {
            const obtn = document.createElement('button');
            obtn.className = 'quiz-opt-btn';
            obtn.textContent = opt;
            obtn.onclick = () => {
                if(i === qData.answer) {
                    obtn.classList.add('correct');
                    setTimeout(() => { currentQ++; showQuestion(); }, 800);
                } else {
                    obtn.classList.add('wrong');
                }
            };
            optsBox.appendChild(obtn);
        });
    }
}

function initSecret() {
    const input = document.getElementById('secret-password');
    const btn = document.getElementById('unlock-secret-btn');
    const err = document.getElementById('secret-error');
    const content = document.getElementById('secret-content');
    const screen = document.getElementById('password-screen');

    function checkPassword() {
        if(input.value === CONFIG.secretPassword) {
            err.textContent = "";
            screen.style.opacity = '0';
            setTimeout(() => {
                screen.style.display = 'none';
                content.classList.add('open');
            }, 400);
        } else {
            err.textContent = "Неправильно. Прочитай подсказку-шифр внимательно ✨";
            input.value = "";
        }
    }

    btn.addEventListener('click', checkPassword);
    input.addEventListener('keypress', (e) => {
        if(e.key === 'Enter') checkPassword();
    });
}

function generateParticles() {
    const container = document.getElementById('magic-particles');
    const particleCount = 30;
    
    for(let i = 0; i < particleCount; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        p.style.left = Math.random() * 100 + 'vw';
        
        const size = Math.random() * 6 + 2;
        p.style.width = size + 'px';
        p.style.height = size + 'px';
        
        p.style.animationDuration = Math.random() * 8 + 6 + 's';
        p.style.animationDelay = Math.random() * 10 + 's';
        container.appendChild(p);
    }
}

function initReactionBtn() {
    const btn = document.getElementById('reaction-btn');
    
    btn.addEventListener('click', () => {
        const originalText = btn.textContent;
        btn.textContent = "Я тоже тебя люблю! 💖";
        btn.style.pointerEvents = "none";
        
        createConfetti();
        
        setTimeout(() => { 
            btn.textContent = originalText; 
            btn.style.pointerEvents = "auto";
        }, 4000);
    });
}

function createConfetti() {
    const container = document.getElementById('confetti-container');
    const colors = ['#ff7eb3', '#ff758c', '#ffffff', '#ff9a9e'];
    
    for(let i = 0; i < 70; i++) {
        const c = document.createElement('div');
        c.className = 'confetti';
        c.style.left = Math.random() * 100 + 'vw';
        c.style.top = -20 + 'px';
        c.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        
        c.style.animationDuration = Math.random() * 2 + 2 + 's';
        c.style.animationDelay = Math.random() * 0.5 + 's';
        
        container.appendChild(c);
        
        setTimeout(() => c.remove(), 5000);
    }
}

function initParallax() {
    const spheres = document.querySelectorAll('.glow-sphere');
    
    document.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        spheres.forEach((sphere, index) => {
            const speed = (index + 1) * 20;
            const xOffset = (window.innerWidth / 2 - e.pageX) / speed;
            const yOffset = (window.innerHeight / 2 - e.pageY) / speed;
            
            sphere.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
        });
    });
}
