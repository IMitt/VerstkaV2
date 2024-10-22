let signImg = document.querySelector(".sign-section__wrapper");
let btnSection = document.querySelector(".btn-section");
let signSection = document.querySelector(".sign");
let signIn = document.querySelector(".signIn");
let signUp = document.querySelector(".signUp");
let or = document.querySelector(".or");
let step1 = document.querySelector(".step_one");
let step2 = document.querySelector(".step_two");
let step3 = document.querySelector(".step_three");
let mainSection = document.querySelector(".main-section");
let statusSection = document.querySelector(".status-section");
let profileSection = document.querySelector('.profile-section')
let plansSection = document.querySelector('.plans-section')
const buttons = document.querySelectorAll('button');
let inputEmail = document.querySelector('.signInEmail')
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let password = ''
let user = []
let tempUser = {};
// let newUser = []
// const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
// for (let i = 0; i < buttons.length; i++) {
//   buttons[i].addEventListener('click', e => e.preventDefault());
// }

if (localStorage.getItem('userInfo')) {
  user = JSON.parse(localStorage.getItem('userInfo'))
} else {
  let user = [
  {
    id: 1,
    name: 'Андрей',
    email: 'andrixa007@gmail.com',
    password: 'Aa12345678',
    weight: 74.5,
    goalWeight: 70,
    height: 175,
    permission: 'user',
  },
  {
    id: 2,
    name: 'Андройд',
    email: 'andrixa077@gmail.com',
    password: 'Aa12345678',
    weight: 74.5,
    goalWeight: 70,
    height: 175,
    permission: 'trainer',
  },
  {
    id: 3,
    name: 'Андромеда',
    email: 'andrixa777@gmail.com',
    password: 'Aa12345678',
    weight: 74.5,
    goalWeight: 70,
    height: 175,
    permission: 'admin',
  },
]

localStorage.setItem('userInfo', JSON.stringify(user))
}

console.log(JSON.parse(localStorage.getItem('userInfo')))

function sign() {
  // signImg.style.backgroundImage = 'url(/img/sing.png)'
  signImg.style.minHeight = "calc(100vh - 185px)";
  btnSection.style.display = "flex";
}

// Вход

function signInn() {
  signImg.style.minHeight = "calc(100vh - 400px)";
  signIn.style.display = "flex";
  signUp.style.display = "none";
  or.style.display = "flex";
  // document.getElementById("btnSignIn").onclick = mainSign;
  document.getElementById("btnSignIn").onclick = validateSingIn;
  document.getElementById("create").onclick = signUpp;
}

// Валидация входа

function validateSingIn() {
  console.log(document.querySelector('.signInEmail').value, document.querySelector('.signInPassword').value)
  password = document.querySelector('.signInPassword').value;
  console.log(password)
  validateCredentials(document.querySelector('.signInEmail').value, password);
}

function validateCredentials(email, password) {
  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

  if (!emailPattern.test(email)) {
    console.log('Некорректный формат имейла.');
    return false;
  }

  if (!passwordPattern.test(password)) {
    console.log('Пароль должен содержать минимум 8 символов, одну заглавную букву и одну цифру.');
    return false;
  }

  console.log('Имейл и пароль валидны.');
  findUserByEmail(document.querySelector('.signInEmail').value)
  return true;
}

function findUserByEmail(email) {
  const foundUser = user.find(u => u.email === email);
  console.log(password)
  
  if (foundUser) {
    if (foundUser.password == password) {
      console.log('Данные пользователя:', foundUser);
      mainSign(); // Вызов функции для успешного входа
    } else {
      console.log(foundUser.password, password)
      console.log(foundUser.password)
      console.log('Неверный пароль.');
    }
  } else {
    console.log('Пользователь не найден.');
  }
}

// Регистрация

function signUpp() {
  signImg.style.minHeight = "calc(100vh - 485px)";
  signIn.style.display = "none";
  signUp.style.display = "flex";
  or.style.display = "none";
  document.getElementById("create").onclick = mainSignUp;
  document.getElementById("btnSignIn").onclick = signInn;
}


function mainSignUp() {
  const email = document.querySelector('.signUpEmail').value;
  console.log(email)
  
  if (!emailPattern.test(email)) {
    console.log('Некорректный формат имейла.');
    return false;
  }

  const emailExists = user.some(user => user.email === email);
  if (emailExists) {
    console.log('Пользователь с таким имейлом уже существует.');
    return;
  }
  
  if (document.querySelector('.signFirstUpPassword').value != document.querySelector('.signSecondUpPassword').value) {
    console.log('Пароли не совпадают')
    return;
  } else {
    password = document.querySelector('.signFirstUpPassword').value;
  }; 
  
  
  // Проверка пароля
  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
  if (!passwordPattern.test(password)) {
    console.log('Пароль не соответствует требованиям.');
    return;
  }
  const newId = user.length > 0 ? user[user.length - 1].id + 1 : 1;
  // Сохранение данных в временное хранилище
  tempUser.id = newId
  tempUser.email = email;
  tempUser.password = password;

  console.log('Данные для первого этапа сохранены. Переходите ко второму этапу.');
  console.log(tempUser)
  
  // step2(); // Переход ко второму этапу
  stepFirst()
}

// Первый шаг

function stepFirst() {
  console.log("1");
  signSection.style.display = "none";
  step1.style.display = "flex";
  step1.addEventListener("input", () => {
    if (
      document.getElementById("weightInput").value > 0 &&
      document.getElementById("weightInput").value < 500
    ) {
      document.getElementById("weightInput").value =
        document.getElementById("weightInput").value;
    } else {
      console.log("Некорректный ввод данных");
    }
  });
  console.log(tempUser)
}

// Второй шаг

function stepTwo() {
  console.log("2");
  step1.style.display = "none";
  step2.style.display = "flex";
  console.log(document.getElementById("weightInput").value)
  tempUser.weight = document.getElementById("weightInput").value;
}

// Третий шаг

function stepThree() {
  console.log("3");
  step2.style.display = "none";
  step3.style.display = "flex";
  tempUser.goalWeight = document.getElementById('goalWeightInput').value
  console.log(tempUser)
}

// Главная с регстрации

function main() {
  step3.style.display = "none";
  mainSection.style.display = "flex";
  localStorage.setItem("page", "mainPage");
  tempUser.height = document.getElementById('heightInput').value
  user = JSON.parse(localStorage.getItem('userInfo'))
  console.log(user)
  user.push(tempUser)
  localStorage.setItem('userInfo', JSON.stringify(user))
}

// Главная с входа

function mainSign() {
  signSection.style.display = "none";
  mainSection.style.display = "flex";
}

function return1() {
  step1.style.display = "none";
  signSection.style.display = "flex";
  signUpp();
}

function status() {
  if (localStorage.getItem("page") == "mainPage") {
    mainSection.style.display = "none";
    statusSection.style.display = "flex";
    localStorage.setItem("page", "statusPage");
  } else if (localStorage.getItem("page") == "statusPage") {
    statusSection.style.display = "none";
    mainSection.style.display = "flex";
    localStorage.setItem("page", "mainPage");
  }
}


function handleButton(page) {
  switch (page) {
    case "mainPage":
      console.log("Вы нажали на кнопку Главная");
      localStorage.setItem("page", "mainPage");
      document.addEventListener('click', function (event) {
        if (event.target.closest('section').className !== 'main-section') {
          console.log(event.target.closest('section').className, 'main-section')
          console.log(event.target.closest('section').className)
          event.target.closest('section').style.display = 'none'
        }
      })
      mainSection.style.display = "flex";
      break;
    case "statusPage":
      console.log("Вы нажали на кнопку Статус");
      localStorage.setItem("page", "statusPage");
      document.addEventListener('click', function (event) {
        if (event.target.closest('section').className !== 'status-section') {
          console.log(event.target.closest('section').className !== 'status-section')
          event.target.closest('section').style.display = 'none'
        }
      })
      statusSection.style.display = "flex";
      break;
    case "profilePage":
      console.log("Вы нажали на кнопку Профиль");
      console.log(localStorage.getItem('page'))
      localStorage.setItem("page", "profilePage");
      document.addEventListener('click', function (event) {
        if (event.target.closest('section').className !== 'profile-section') {
          event.target.closest('section').style.display = 'none'
        }
      })
      profileSection.style.display = 'flex'
      break;
    default:
      console.log("Неизвестная страница");
  }
}



function goToPlan() {
  mainSection.style.display = 'none'
  plansSection.style.display = 'flex'
}

function backToMain() {
  plansSection.style.display = 'none'
  document.querySelector('.allPLans-section').style.display = 'none'
  mainSection.style.display = 'flex'
}

function goToAllPlans() {
  mainSection.style.display = 'none'
  document.querySelector('.allPLans-section').style.display = 'flex'
}

function goToPlanAtProfile() {
  if (localStorage.getItem('page') != 'mainPage') {
    console.log('asd')
  }
  profileSection.style.display = 'none'
  document.querySelector('.allPLans-section').style.display = 'flex'
}

// function generatePlanList() {
// 
// }

let workoutPlans = [
  {
    id: 1,
    title: "Low Workout",
    description: "Тренировка низкой интенсивности",
    trainerName: 'Андрей',
    duration: "15 мин",
    calories: "250 ККал",
    imageUrl: {
      duration: "img/time.svg",
      calories: "img/kall.svg",
      background: "img/plan-1.png"
    },
    onClickFunction: generateExerciseList
  },
  {
    id: 2,
    title: "Medium Workout",
    description: "Средняя тренировка всего тела",
    duration: "30 мин",
    calories: "350 ККал",
    imageUrl: {
      duration: "img/time.svg",
      calories: "img/kall.svg",
      background: "img/plan-2.png"
    },
    onClickFunction: generateExerciseList
  },
  {
    id: 3,
    title: "High Intensity Workout",
    description: "Высокоинтенсивная тренировка",
    duration: "45 мин",
    calories: "550 ККал",
    imageUrl: {
      duration: "img/time.svg",
      calories: "img/kall.svg",
      background: "img/plan-3.jpg"
    },
    onClickFunction: generateExerciseList
  },
];

function createCard(plan) {
  let card = document.createElement('div');
  card.className = 'plan-card';
  card.id = `plan-${plan.id}`
  card.setAttribute('data-id', plan.id);

  card.onclick = generateExerciseList;

  card.innerHTML = `
      <div>
          <p class="plan-card__title">${plan.title}</p>
          <p class="plan-card__text">${plan.description}</p>
      </div>
      <div class="plan-card__btn-wrapper">
          <button class="plan-card__btn">
              <img src="${plan.imageUrl.duration}" alt="" class="plan-card__btn-img">${plan.duration}
          </button>
          <button class="plan-card__btn">
              <img src="${plan.imageUrl.calories}" alt="" class="plan-card__btn-img">${plan.calories}
          </button>
      </div>
  `;

  return card;
}

function renderCards(plans) {
  let container = document.querySelector('.allPLans-section__wrapper'); // Предполагается, что у вас есть контейнер с таким ID
  plans.forEach(plan => {
    let card = createCard(plan);
    container.appendChild(card);
  });
}

renderCards(workoutPlans);

function generateExerciseList(event) {
  let planId = event.currentTarget.getAttribute('data-id');
  console.log("Вы нажали на карточку с ID:", planId);
}
