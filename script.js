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
    sorry: "Sorry",
    login: "Login",
    register: "Register",
    fullName: "Full Name",
    email: "Email",
    password: "Password",
    confirmPassword: "Confirm Password",
    loginButton: "Login",
    registerButton: "Register",
    authSuccessLogin: "Login successful",
    authSuccessRegister: "Account created successfully",
    authError: "Please fill in all required fields",
    authPasswordMismatch: "Passwords do not match",
    logout: "Logout",
    welcome: "Welcome",
    loggedInAs: "You are signed in as",
    accountExists: "An account with this email already exists",
    invalidCredentials: "Email or password is incorrect",
    loginToUnlock: "Login or register to unlock the quiz",
    aiLoading: "🤖 AI is generating your quiz...",
    pleaseWait: "⏳ Please wait...",
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
    sorry: "Désolé",
    login: "Connexion",
    register: "Créer un compte",
    fullName: "Nom complet",
    email: "E-mail",
    password: "Mot de passe",
    confirmPassword: "Confirmer le mot de passe",
    loginButton: "Se connecter",
    registerButton: "Créer le compte",
    authSuccessLogin: "Connexion réussie",
    authSuccessRegister: "Compte créé avec succès",
    authError: "Veuillez remplir tous les champs requis",
    authPasswordMismatch: "Les mots de passe ne correspondent pas",
    logout: "Déconnexion",
    welcome: "Bienvenue",
    loggedInAs: "Vous êtes connecté en tant que",
    accountExists: "Un compte avec cet e-mail existe déjà",
    invalidCredentials: "L’e-mail ou le mot de passe est incorrect",
    loginToUnlock: "Connectez-vous ou créez un compte pour débloquer le quiz",
    aiLoading: "🤖 L'IA génère votre quiz...",
    pleaseWait: "⏳ Veuillez patienter..."
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
let quizTimer;
let timeLeft = 0;
let authMode = "login";
let currentUser = null;

const AUTH_USERS_KEY = "luniq-users";
const AUTH_CURRENT_USER_KEY = "luniq-current-user";
let authMemory = { users: [], currentUser: null };

function storageAvailable(type) {
  try {
    const storage = window[type];
    const testKey = "__luniq_test__";
    storage.setItem(testKey, "1");
    storage.removeItem(testKey);
    return true;
  } catch {
    return false;
  }
}

function getStorage() {
  if (storageAvailable("localStorage")) return localStorage;
  if (storageAvailable("sessionStorage")) return sessionStorage;
  return null;
}

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

  const showLoginBtn = document.getElementById("show-login-btn");
  const showRegisterBtn = document.getElementById("show-register-btn");
  const loginTab = document.getElementById("tab-login");
  const registerTab = document.getElementById("tab-register");
  const loginEmailLabel = document.getElementById("login-email-label");
  const loginPwdLabel = document.getElementById("login-password-label");
  const loginSubmitBtn = document.getElementById("login-submit-btn");
  const registerNameLabel = document.getElementById("register-name-label");
  const registerEmailLabel = document.getElementById("register-email-label");
  const registerPwdLabel = document.getElementById("register-password-label");
  const registerConfirmLabel = document.getElementById("register-confirm-label");
  const registerSubmitBtn = document.getElementById("register-submit-btn");

  if (showLoginBtn) showLoginBtn.textContent = lang.login;
  if (showRegisterBtn) showRegisterBtn.textContent = lang.register;
  if (loginTab) loginTab.textContent = lang.login;
  if (registerTab) registerTab.textContent = lang.register;
  if (loginEmailLabel) loginEmailLabel.textContent = lang.email;
  if (loginPwdLabel) loginPwdLabel.textContent = lang.password;
  if (loginSubmitBtn) loginSubmitBtn.textContent = lang.loginButton;
  if (registerNameLabel) registerNameLabel.textContent = lang.fullName;
  if (registerEmailLabel) registerEmailLabel.textContent = lang.email;
  if (registerPwdLabel) registerPwdLabel.textContent = lang.password;
  if (registerConfirmLabel) registerConfirmLabel.textContent = lang.confirmPassword;
  if (registerSubmitBtn) registerSubmitBtn.textContent = lang.registerButton;
}

function loadUsers() {
  const storage = getStorage();
  if (storage) {
    try {
      return JSON.parse(storage.getItem(AUTH_USERS_KEY)) || [];
    } catch {
      return [];
    }
  }
  return authMemory.users;
}

function saveUsers(users) {
  const storage = getStorage();
  if (storage) {
    storage.setItem(AUTH_USERS_KEY, JSON.stringify(users));
  } else {
    authMemory.users = users;
  }
}

function loadCurrentUser() {
  const storage = getStorage();
  if (storage) {
    try {
      return JSON.parse(storage.getItem(AUTH_CURRENT_USER_KEY));
    } catch {
      return null;
    }
  }
  return authMemory.currentUser;
}

function saveCurrentUser(user) {
  const storage = getStorage();
  if (storage) {
    if (user) {
      storage.setItem(AUTH_CURRENT_USER_KEY, JSON.stringify(user));
    } else {
      storage.removeItem(AUTH_CURRENT_USER_KEY);
    }
  } else {
    authMemory.currentUser = user;
  }
}

function showAuthForm(mode) {
  if (currentUser) return;

  authMode = mode;
  const loginForm = document.getElementById("login-form");
  const registerForm = document.getElementById("register-form");
  const loginTab = document.getElementById("tab-login");
  const registerTab = document.getElementById("tab-register");
  const showLoginBtn = document.getElementById("show-login-btn");
  const showRegisterBtn = document.getElementById("show-register-btn");

  if (loginForm && registerForm) {
    loginForm.classList.toggle("active", mode === "login");
    registerForm.classList.toggle("active", mode === "register");
  }

  if (loginTab && registerTab) {
    loginTab.classList.toggle("active", mode === "login");
    registerTab.classList.toggle("active", mode === "register");
  }

  if (showLoginBtn && showRegisterBtn) {
    showLoginBtn.classList.toggle("active", mode === "login");
    showRegisterBtn.classList.toggle("active", mode === "register");
  }

  const message = document.getElementById("auth-message");
  if (message) {
    message.textContent = "";
    message.className = "auth-message";
  }
}

function updateQuizAccess() {
  const startBtn = document.getElementById("start-btn");
  const accessNote = document.getElementById("quiz-access-note");
  const categoryCards = document.querySelectorAll(".category-card");

  const locked = !currentUser;

  if (startBtn) {
    startBtn.disabled = locked;
  }

  categoryCards.forEach((card) => {
    card.classList.toggle("locked", locked);
  });

  if (accessNote) {
    accessNote.textContent = currentUser ? "" : translations[currentLanguage].loginToUnlock;
  }

  if (!currentUser) {
    const quiz = document.getElementById("quiz");
    if (quiz) {
      quiz.innerHTML = "";
    }
  }
}

function updateAuthView() {
  const authCard = document.getElementById("auth-card");
  const authStatus = document.getElementById("auth-status");
  const authMessage = document.getElementById("auth-message");

  if (currentUser) {
    if (authCard) authCard.classList.add("hidden");
    renderDashboard();
  } else {
    if (authCard) authCard.classList.remove("hidden");
    if (authStatus) authStatus.innerHTML = "";
  }

  updateQuizAccess();

  if (authMessage) {
    authMessage.textContent = "";
    authMessage.className = "auth-message";
  }
}

function renderDashboard() {

  if (!currentUser) return;

  const users = loadUsers();

  const user = users.find(
    u => u.email === currentUser.email
  );

  if (!user) return;

  const authStatus =
    document.getElementById("auth-status");

  authStatus.innerHTML = `
    <div class="auth-status-card">
      <h2>👋 ${translations[currentLanguage].welcome} ${user.name}</h2>

      <p>📚 Quizzes completed:
      ${user.stats.quizzesCompleted}</p>

      <p>🏆 Best score:
      ${user.stats.bestScore}%</p>

      <p>📈 Last score:
      ${user.stats.lastScore}%</p>

      <p>🖥️ Favorite category:
      ${user.stats.favoriteCategory}</p>

      <br>

      <button class="auth-btn"
              onclick="logoutUser()">
        ${translations[currentLanguage].logout}
      </button>
    </div>
  `;
}

function logoutUser() {
  currentUser = null;
  saveCurrentUser(null);
  updateAuthView();
  showAuthForm("login");
}

function handleAuthSubmit(event) {
  event.preventDefault();
  const message = document.getElementById("auth-message");

  if (!message) return;

  if (authMode === "login") {
    const email = document.getElementById("login-email").value.trim();
    const password = document.getElementById("login-password").value;

    if (!email || !password) {
      message.textContent = translations[currentLanguage].authError;
      message.className = "auth-message error";
      return;
    }

    const users = loadUsers();
    const user = users.find((item) => item.email.toLowerCase() === email.toLowerCase());

    if (!user || user.password !== password) {
      message.textContent = translations[currentLanguage].invalidCredentials;
      message.className = "auth-message error";
      return;
    }

    currentUser = { name: user.name, email: user.email };
    saveCurrentUser(currentUser);
    updateAuthView();
    message.textContent = translations[currentLanguage].authSuccessLogin;
    message.className = "auth-message success";
    return;
  }

  const name = document.getElementById("register-name").value.trim();
  const email = document.getElementById("register-email").value.trim();
  const password = document.getElementById("register-password").value;
  const confirmPassword = document.getElementById("register-confirm").value;

  if (!name || !email || !password || !confirmPassword) {
    message.textContent = translations[currentLanguage].authError;
    message.className = "auth-message error";
    return;
  }

  if (password !== confirmPassword) {
    message.textContent = translations[currentLanguage].authPasswordMismatch;
    message.className = "auth-message error";
    return;
  }

  const users = loadUsers();
  const existingUser = users.find((item) => item.email.toLowerCase() === email.toLowerCase());

  if (existingUser) {
    message.textContent = translations[currentLanguage].accountExists;
    message.className = "auth-message error";
    return;
  }

  users.push({
  name,
  email,
  password,
  stats: {
    quizzesCompleted: 0,
    bestScore: 0,
    lastScore: 0,
    favoriteCategory: "-"
  }
});
  saveUsers(users);
  currentUser = { name, email };
  saveCurrentUser(currentUser);
  updateAuthView();
  message.textContent = translations[currentLanguage].authSuccessRegister;
  message.className = "auth-message success";
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
  currentUser = loadCurrentUser();
updateTextLabels();
updateAuthView();
showAuthForm("login");

  if (selectedCategory) {
    renderDomainSelect();
  }

  if (questions.length) {
    renderQuiz();
  }
}

function selectCategory(category) {
  if (!currentUser) return;

  document.querySelectorAll(".category-card").forEach(card => {
    card.classList.remove("selected");
  });

  const categoryMap = {
    Technology: "tech-card",
    Health: "health-card",
    Engineering: "engin-card",
    Science: "science-card",
    Languages: "lang-card",
    Sports: "sports-card",
    Business: "business-card",
    Law: "law-card"
  };

  const selectedCard =
      document.getElementById(categoryMap[category]);

  if(selectedCard){
      selectedCard.classList.add("selected");
  }

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
  if (!currentUser) {
    const quiz = document.getElementById("quiz");
    if (quiz) {
      quiz.innerHTML = `
        <div class="info-card">
          <h2>${translations[currentLanguage].loginToUnlock}</h2>
        </div>
      `;
    }
    return;
  }

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

quiz.innerHTML = `
  <div class="info-card">
    <div class="loader"></div>
    <h2>${translations[currentLanguage].aiLoading}</h2>
    <p>${translations[currentLanguage].pleaseWait}</p>
  </div>
`;

setTimeout(() => {
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
    startTimer();

}, 2000);
}

function renderQuiz() {
  const quiz = document.getElementById("quiz");

  if (!questions.length) {
    quiz.innerHTML = "";
    return;
  }

  let html = `
<div class="info-card">
  <h2 id="timer"></h2>
</div>
`;
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
  clearInterval(quizTimer);
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

function startTimer() {

  const count = parseInt(document.getElementById("count").value);

  if(count === 5){
    timeLeft = 120;
  }
  else if(count === 10){
    timeLeft = 300;
  }
  else{
    timeLeft = 600;
  }

  updateTimerDisplay();

  quizTimer = setInterval(() => {

    timeLeft--;

    updateTimerDisplay();

    if(timeLeft <= 0){
      clearInterval(quizTimer);

      alert("⏰ Time is up!");

      submitQuiz();
    }

  },1000);
}

function updateTimerDisplay(){

  const timerElement =
    document.getElementById("timer");

  if(!timerElement) return;

  const minutes =
    Math.floor(timeLeft / 60);

  const seconds =
    timeLeft % 60;

  timerElement.textContent =
    `⏱ ${minutes}:${seconds
      .toString()
      .padStart(2,"0")}`;
}