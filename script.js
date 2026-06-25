const translations = {
  en: {
    title: "AI Powered Learning Platform",
    category: "Choose a Category",
    startQuiz: "Start Quiz",
    submitQuiz: "Submit Quiz",
    retryQuiz: "Retry Quiz",
    home: "Home",
    language: "Language",
    difficulty: "Difficulty",
    questions: "Number of Questions",
    easy: "Easy",
    normal: "Normal",
    hard: "Hard",
    categories: "Categories",
    setup: "Setup",
    quiz: "Quiz",
    notice: "Notice",
    noticeMessage: "Please choose a domain before starting the quiz.",
    noQuizMessage: "No quiz is available for this domain yet.",
    chooseDomain: "Choose a domain",
    yourAnswer: "Your answer",
    correctAnswer: "Correct answer",
    noAnswer: "No answer",
    finalScore: "Final Score",
    expert: "🏆 Expert",
    advanced: "⭐ Advanced",
    intermediate: "📘 Intermediate",
    beginner: "🌱 Beginner",
    questionLabel: "Question",
    sorry: "Sorry"
  },
  fr: {
    title: "Plateforme d'apprentissage alimentée par l'IA",
    category: "Choisir une catégorie",
    startQuiz: "Commencer le quiz",
    submitQuiz: "Soumettre le quiz",
    retryQuiz: "Recommencer le quiz",
    home: "Accueil",
    language: "Langue",
    difficulty: "Difficulté",
    questions: "Nombre de questions",
    easy: "Facile",
    normal: "Normal",
    hard: "Difficile",
    categories: "Catégories",
    setup: "Configuration",
    quiz: "Quiz",
    notice: "Attention",
    noticeMessage: "Choisissez d’abord un domaine avant de commencer le quiz.",
    noQuizMessage: "Aucun quiz n’est disponible pour ce domaine pour l’instant.",
    chooseDomain: "Choisir un domaine",
    yourAnswer: "Votre réponse",
    correctAnswer: "Réponse correcte",
    noAnswer: "Aucune réponse",
    finalScore: "Score final",
    expert: "🏆 Expert",
    advanced: "⭐ Avancé",
    intermediate: "📘 Intermédiaire",
    beginner: "🌱 Débutant",
    questionLabel: "Question",
    sorry: "Désolé"
  }
};



const categoryLabels = {
  Technology: { en: "🖥️ Technology", fr: "🖥️ Technologie" },
  Health: { en: "🏥 Health & Medicine", fr: "🏥 Santé et Médecine" },
  Engineering: { en: "🏗️ Engineering & Architecture", fr: "🏗️ Ingénierie et Architecture" },
  Science: { en: "🔬 Science", fr: "🔬 Sciences" },
  Languages: { en: "📚 Languages", fr: "📚 Langues" },
  Sports: { en: "⚽ Sports", fr: "⚽ Sports" },
  Business: { en: "💼 Business", fr: "💼 Business" },
  Law: { en: "⚖️ Law", fr: "⚖️ Droit" }
};

const domainOptions = {
  Technology: {
    en: [
      { value: "Programming", label: "Programming" },
      { value: "Networking", label: "Networking" },
      { value: "Cybersecurity", label: "Cybersecurity" },
      { value: "Database", label: "Database" },
      { value: "Cloud Computing", label: "Cloud Computing" },
      { value: "Artificial Intelligence", label: "Artificial Intelligence" }
    ],
    fr: [
      { value: "Programming", label: "Programmation" },
      { value: "Networking", label: "Réseaux" },
      { value: "Cybersecurity", label: "Cybersécurité" },
      { value: "Database", label: "Base de données" },
      { value: "Cloud Computing", label: "Informatique en nuage" },
      { value: "Artificial Intelligence", label: "Intelligence artificielle" }
    ]
  },
  Health: {
    en: [
      { value: "Medicine", label: "Medicine" },
      { value: "Nursing", label: "Nursing" },
      { value: "Pharmacy", label: "Pharmacy" },
      { value: "Anatomy", label: "Anatomy" },
      { value: "Physiology", label: "Physiology" }
    ],
    fr: [
      { value: "Medicine", label: "Médecine" },
      { value: "Nursing", label: "Soins infirmiers" },
      { value: "Pharmacy", label: "Pharmacie" },
      { value: "Anatomy", label: "Anatomie" },
      { value: "Physiology", label: "Physiologie" }
    ]
  },
  Engineering: {
    en: [
      { value: "Architecture", label: "Architecture" },
      { value: "Civil Engineering", label: "Civil Engineering" },
      { value: "Mechanical Engineering", label: "Mechanical Engineering" }
    ],
    fr: [
      { value: "Architecture", label: "Architecture" },
      { value: "Civil Engineering", label: "Génie civil" },
      { value: "Mechanical Engineering", label: "Génie mécanique" }
    ]
  },
  Science: {
    en: [
      { value: "Mathematics", label: "Mathematics" },
      { value: "Physics", label: "Physics" },
      { value: "Chemistry", label: "Chemistry" },
      { value: "Biology", label: "Biology" }
    ],
    fr: [
      { value: "Mathematics", label: "Mathématiques" },
      { value: "Physics", label: "Physique" },
      { value: "Chemistry", label: "Chimie" },
      { value: "Biology", label: "Biologie" }
    ]
  },
  Languages: {
    en: [
      { value: "English", label: "English" },
      { value: "French", label: "French" },
      { value: "Spanish", label: "Spanish" }
    ],
    fr: [
      { value: "English", label: "Anglais" },
      { value: "French", label: "Français" },
      { value: "Spanish", label: "Espagnol" }
    ]
  },
  Sports: {
    en: [
      { value: "Football", label: "Football" },
      { value: "Basketball", label: "Basketball" },
      { value: "Tennis", label: "Tennis" }
    ],
    fr: [
      { value: "Football", label: "Football" },
      { value: "Basketball", label: "Basketball" },
      { value: "Tennis", label: "Tennis" }
    ]
  },
  Business: {
    en: [
      { value: "Accounting", label: "Accounting" },
      { value: "Marketing", label: "Marketing" },
      { value: "Economics", label: "Economics" }
    ],
    fr: [
      { value: "Accounting", label: "Comptabilité" },
      { value: "Marketing", label: "Marketing" },
      { value: "Economics", label: "Économie" }
    ]
  },
  Law: {
    en: [
      { value: "Law", label: "Law" },
      { value: "History", label: "History" },
      { value: "Political Science", label: "Political Science" }
    ],
    fr: [
      { value: "Law", label: "Droit" },
      { value: "History", label: "Histoire" },
      { value: "Political Science", label: "Science politique" }
    ]
  }
};

let currentLanguage = "en";
let selectedCategory = "";
let selectedDomain = "";
let questions = [];

function getDomainPlaceholderText() {
  return translations[currentLanguage].chooseDomain;
}

function updateTextLabels() {
  const lang = translations[currentLanguage];

  document.getElementById("subtitle").textContent = lang.title;
  document.getElementById("category-title").textContent = lang.category;
  document.getElementById("start-btn").textContent = lang.startQuiz;
  document.getElementById("difficult-label").textContent = lang.difficulty;
  document.getElementById("count-label").textContent = lang.questions;
  document.getElementById("language-label").textContent = lang.language;
  document.getElementById("categories-link").textContent = lang.categories;
  document.getElementById("setup-link").textContent = lang.setup;
  document.getElementById("quiz-link").textContent = lang.quiz;

  document.getElementById("tech-card").textContent = categoryLabels.Technology[currentLanguage];
  document.getElementById("health-card").textContent = categoryLabels.Health[currentLanguage];
  document.getElementById("engin-card").textContent = categoryLabels.Engineering[currentLanguage];
  document.getElementById("science-card").textContent = categoryLabels.Science[currentLanguage];
  document.getElementById("lang-card").textContent = categoryLabels.Languages[currentLanguage];
  document.getElementById("sports-card").textContent = categoryLabels.Sports[currentLanguage];
  document.getElementById("business-card").textContent = categoryLabels.Business[currentLanguage];
  document.getElementById("law-card").textContent = categoryLabels.Law[currentLanguage];

  const levelSelect = document.getElementById("level");
  if (levelSelect) {
    levelSelect.options[0].textContent = lang.easy;
    levelSelect.options[1].textContent = lang.normal;
    levelSelect.options[2].textContent = lang.hard;
  }
}

function renderDomainSelect() {
  const domains = document.getElementById("domains");

  if (!selectedCategory) {
    domains.innerHTML = "";
    return;
  }

  const options = domainOptions[selectedCategory][currentLanguage] || [];
  let html = `<select id="domain" class="domain-select"><option value="">${getDomainPlaceholderText()}</option>`;

  options.forEach((option) => {
    html += `<option value="${option.value}" ${selectedDomain === option.value ? "selected" : ""}>${option.label}</option>`;
  });

  html += "</select>";
  domains.innerHTML = html;
}

function changeLanguage() {
  currentLanguage = document.getElementById("language").value;
  updateTextLabels();

  if (selectedCategory) {
    renderDomainSelect();
  }

  if (questions.length) {
    renderQuiz();
  }
}

function selectCategory(category) {
  selectedCategory = category;
  selectedDomain = "";
  renderDomainSelect();
}

function getQuestionsForDomain(domain) {
  const quizSet = quizzes[domain];
  if (quizSet && quizSet[currentLanguage]) return quizSet[currentLanguage];
  if (quizSet && quizSet.en) return quizSet.en;

  return [{
    question: currentLanguage === "fr" ? `Qu’est-ce que ${domain} ?` : `What is ${domain}?`,
    options: [
      currentLanguage === "fr" ? `Un sujet en ${domain}` : `A topic in ${domain}`,
      currentLanguage === "fr" ? "Un type de nourriture" : "A type of food",
      currentLanguage === "fr" ? "Une couleur" : "A color",
      currentLanguage === "fr" ? "Un instrument de musique" : "A musical instrument"
    ],
    answer: currentLanguage === "fr" ? `Un sujet en ${domain}` : `A topic in ${domain}`
  }];
}

const quizzes = {
  Programming: {
    en: [
      { question: "What is HTML?", options: ["Markup Language", "Programming Language", "Database", "Operating System"], answer: "Markup Language" },
      { question: "What does CSS do?", options: ["Style Web Pages", "Store Data", "Create Database", "Manage Server"], answer: "Style Web Pages" }
    ],
    fr: [
      { question: "Qu’est-ce que HTML ?", options: ["Langage de balisage", "Langage de programmation", "Base de données", "Système d’exploitation"], answer: "Langage de balisage" },
      { question: "À quoi sert CSS ?", options: ["Styliser les pages web", "Stocker des données", "Créer une base de données", "Gérer un serveur"], answer: "Styliser les pages web" }
    ]
  },
  Medicine: {
    en: [
      { question: "Which organ pumps blood?", options: ["Heart", "Liver", "Kidney", "Lung"], answer: "Heart" },
      { question: "How many lungs does a human have?", options: ["2", "1", "3", "4"], answer: "2" }
    ],
    fr: [
      { question: "Quel organe pompe le sang ?", options: ["Le cœur", "Le foie", "Le rein", "Le poumon"], answer: "Le cœur" },
      { question: "Combien de poumons un être humain a-t-il ?", options: ["2", "1", "3", "4"], answer: "2" }
    ]
  },
  Mathematics: {
    en: [
      { question: "What is 5 × 5 ?", options: ["25", "20", "15", "30"], answer: "25" }
    ],
    fr: [
      { question: "Combien font 5 × 5 ?", options: ["25", "20", "15", "30"], answer: "25" }
    ]
  }
};

function startQuiz() {
  const domainSelect = document.getElementById("domain");
  const quiz = document.getElementById("quiz");

  if (!domainSelect || !domainSelect.value) {
    quiz.innerHTML = `
      <div class="info-card">
        <h2>${translations[currentLanguage].notice}</h2>
        <p>${translations[currentLanguage].noticeMessage}</p>
      </div>
    `;
    return;
  }

  const domain = domainSelect.value;
  selectedDomain = domain;
  questions = getQuestionsForDomain(domain);

  if (!questions.length) {
    quiz.innerHTML = `
      <div class="info-card">
        <h2>${translations[currentLanguage].sorry}</h2>
        <p>${translations[currentLanguage].noQuizMessage}</p>
      </div>
    `;
    return;
  }

  renderQuiz();
}

function renderQuiz() {
  const quiz = document.getElementById("quiz");

  if (!questions.length) {
    quiz.innerHTML = "";
    return;
  }

  let html = "";
  questions.forEach((q, index) => {
    html += `<div class="question-card"><h3>${index + 1}. ${q.question}</h3>`;
    q.options.forEach((option) => {
      html += `<label class="option"><input type="radio" name="q${index}" value="${option}">${option}</label>`;
    });
    html += "</div>";
  });

  html += `<button class="submit-btn" onclick="submitQuiz()">${translations[currentLanguage].submitQuiz}</button>`;
  quiz.innerHTML = html;
}

function submitQuiz() {
  let score = 0;
  let resultHTML = "";

  questions.forEach((q, index) => {
    const selected = document.querySelector(`input[name="q${index}"]:checked`);
    const userAnswer = selected ? selected.value : translations[currentLanguage].noAnswer;
    const isCorrect = userAnswer === q.answer;

    if (isCorrect) score++;

    resultHTML += `
      <div class="result-card">
        <h3>${translations[currentLanguage].questionLabel} ${index + 1} ${isCorrect ? "✅" : "❌"}</h3>
        <p class="${isCorrect ? "correct-answer" : "wrong-answer"}"><strong>${translations[currentLanguage].yourAnswer}:</strong> ${userAnswer}</p>
        <p class="correct-answer"><strong>${translations[currentLanguage].correctAnswer}:</strong> ${q.answer}</p>
      </div>
    `;
  });

  const percentage = Math.round((score / questions.length) * 100);
  let badge = "";

  if (percentage >= 90) badge = translations[currentLanguage].expert;
  else if (percentage >= 70) badge = translations[currentLanguage].advanced;
  else if (percentage >= 50) badge = translations[currentLanguage].intermediate;
  else badge = translations[currentLanguage].beginner;

  document.getElementById("quiz").innerHTML = `
    <div class="score-card">
      <h2>🎯 ${translations[currentLanguage].finalScore}</h2>
      <h1>${score}/${questions.length}</h1>
      <h2>${percentage}%</h2>
      <p class="badge">${badge}</p>
    </div>
    ${resultHTML}
    <div class="action-buttons">
      <button class="retry-btn" onclick="startQuiz()">🔄 ${translations[currentLanguage].retryQuiz}</button>
      <button class="home-btn" onclick="location.reload()">🏠 ${translations[currentLanguage].home}</button>
    </div>
  `;
}

updateTextLabels();