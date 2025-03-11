// Створіть об'єкт "bankAccount" з властивостями "ownerName", "accountNumber", "balance". Додайте до об'єкту метод "deposit", який дозволяє додавати гроші на рахунок, та метод "withdraw", який дозволяє знімати гроші з рахунку. Використайте cofirm() щоб поповнити рахунок або отримати готівку та prompt() щоб дізнатися сумму. Після проведення операції виводити повідомлення про залишок на рахунку. 

const login = prompt("Ввійдіть на свій акаунт! Впишіть будь ласка своє ім'я і Прізвище")


const password = prompt("Впишіть будь ласка свій пароль щоб ввійти :)")



const bankAccount = {
    ownerName: `${login}`,
    accountNumber: `${password}`,
    balance: 1000,

  deposit: function(amount) {
    this.balance += amount;
  },

  withdraw: function(amount) {
    if (this.balance >= amount) {
      this.balance -= amount;
    } else {
      alert("Недостатньо коштів.");
    }
  }
};

if (confirm("Бажаєте поповнити рахунок?")) {
  let depositAmount = parseFloat(prompt("Введіть суму для поповнення:"));
  bankAccount.deposit(depositAmount);
} else if (confirm("Бажаєте зняти гроші?")) {
  let withdrawAmount = parseFloat(prompt("Введіть суму для зняття:"));
  bankAccount.withdraw(withdrawAmount);
}

alert("Баланс: " + bankAccount.balance);

// Створіть об'єкт "weather" з властивостями "temperature", "humidity", "windSpeed". Додайте до об'єкту метод, який повертає "true", якщо температура нижче 0 градусів Цельсія, та "false", якщо температура вище або рівна 0 градусів Цельсія. Температуру потрібно отримати з prompt(). Якщо метод повернув "true" вивести повідомлення “температура нижче 0 градусів Цельсія” і навпаки


let weather = {
  temperature: 0,
  humidity: 60,
  windSpeed: 15,

  tempFn: function() {
    return this.temperature < 0;
  }
};


weather.temperature = parseFloat(prompt("Введіть температуру в градусах Цельсія:"));

if (weather.tempFn()) {
  alert("Температура нижче 0 градусів Цельсія");
} else {
  alert("Температура не нижче 0 градусів Цельсія");
}

// Створіть об’єкт "user", який буде мати властивості "name", "email", "password". Додайте метод "login", який буде перевіряти правильність введеного email та password. 

let email = prompt("Введіть ваш email:");
let passwordAc = prompt("Введіть ваш пароль:");

let user = {
  email: "ivan@example.com",
  passwordAc: "12345",

  login: function(inputEmail, inputPassword) {
    return inputEmail === this.email && inputPassword === this.passwordAc;
  }
};


if (user.login(email, passwordAc)) {
  alert("Вхід успішний!");
} else {
  alert("Невірний email або пароль.");
}


// Створіть об'єкт "movie" з властивостями "title", "director", "year", "rating". Додайте до об'єкту метод, який повертає "true", якщо рейтинг фільму вище 8, та "false", якщо рейтинг фільму 8 або нижче. Вивести значення властивостей в консоль. 


let movie = {
  title: "Гаррі Поттер",
  director: "Крис Коламбус",
  year: 2007,
  rating: 8.6,

  isHighRated: function() {
    return this.rating > 8;
  }
};

if (movie.isHighRated()) {
  console.log("Рейтинг фільму вище 8.");
} else {
  console.log("Рейтинг фільму 8 або нижче.");
}
