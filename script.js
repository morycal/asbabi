// داده‌های نمونه
let users = [
    { username: "user1", password: "pass1" },
    { username: "user2", password: "pass2" }
];

let verificationCode = ""; // کد تأیید ذخیره شده

// عناصر صفحه
const loginPage = document.getElementById("login-page");
const mainPage = document.getElementById("main-page");
const verifyPage = document.getElementById("verify-page");
const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");
const verifyForm = document.getElementById("verify-form");
const registerLink = document.getElementById("register-link");
const errorMessage = document.getElementById("error-message");

// نمایش فرم ثبت نام
registerLink.addEventListener("click", function(event) {
    event.preventDefault();
    loginForm.style.display = "none";
    registerForm.style.display = "block";
});

// ارسال کد تأیید
registerForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("new-password").value;

    // ایجاد کد تأیید ۶ رقمی
    verificationCode = Math.floor(100000 + Math.random() * 900000).toString();
    alert(`کد تأیید به ایمیل ${email} ارسال شد: ${verificationCode}`); // شبیه‌سازی ارسال ایمیل

    // نمایش صفحه تأیید کد
    registerForm.style.display = "none";
    verifyPage.style.display = "block";
});

// بررسی کد تأیید
verifyForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const enteredCode = document.getElementById("verification-code").value;

    if (enteredCode === verificationCode) {
        alert("ثبت نام شما با موفقیت انجام شد!");
        verifyPage.style.display = "none";
        loginPage.style.display = "block";
    } else {
        errorMessage.style.display = "block";
    }
});

// ورود کاربر
loginForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        loginPage.style.display = "none";
        mainPage.style.display = "block";
    } else {
        alert("نام کاربری یا رمز عبور اشتباه است!");
    }
});