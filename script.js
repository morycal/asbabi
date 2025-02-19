// داده‌های نمونه
let users = [
    { username: "user1", password: "pass1" },
    { username: "user2", password: "pass2" }
];

const posts = [
    { username: "user1", image: "/hippo.png.jpg", caption: "این اولین پست من است!", likes: 10, comments: [] },
    { username: "user2", image: "/agate.jpg", caption: "این پست دوم است!", likes: 5, comments: [] }
];

// عناصر صفحه
const loginPage = document.getElementById("login-page");
const mainPage = document.getElementById("main-page");
const profilePage = document.getElementById("profile-page");
const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");
const registerLink = document.getElementById("register-link");
const postsContainer = document.getElementById("posts");
const profilePostsContainer = document.getElementById("profile-posts");

// نمایش فرم ثبت نام
registerLink.addEventListener("click", function(event) {
    event.preventDefault();
    loginForm.style.display = "none";
    registerForm.style.display = "block";
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
        loadPosts();
    } else {
        alert("نام کاربری یا رمز عبور اشتباه است!");
    }
});

// ثبت نام کاربر
registerForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const newUsername = document.getElementById("new-username").value;
    const newPassword = document.getElementById("new-password").value;

    const userExists = users.find(u => u.username === newUsername);
    if (userExists) {
        alert("این نام کاربری قبلاً ثبت شده است!");
    } else {
        users.push({ username: newUsername, password: newPassword });
        alert("ثبت نام شما با موفقیت انجام شد!");
        registerForm.reset();
        registerForm.style.display = "none";
        loginForm.style.display = "block";
    }
});

// بارگذاری پست‌ها
function loadPosts() {
    postsContainer.innerHTML = "";
    posts.forEach(post => {
        const postElement = document.createElement("div");
        postElement.classList.add("post");
        postElement.innerHTML = `
            <img src="${post.image}" alt="پست">
            <p>${post.caption}</p>
            <div class="actions">
                <button onclick="likePost('${post.username}')">❤️ ${post.likes}</button>
                <button onclick="commentPost('${post.username}')">💬 کامنت</button>
            </div>
        `;
        postsContainer.appendChild(postElement);
    });
}

// لایک کردن پست
function likePost(username) {
    const post = posts.find(p => p.username === username);
    if (post) {
        post.likes++;
        loadPosts();
    }
}

// کامنت گذاشتن
function commentPost(username) {
    const comment = prompt("کامنت خود را وارد کنید:");
    if (comment) {
        const post = posts.find(p => p.username === username);
        if (post) {
            post.comments.push(comment);
            alert("کامنت شما ثبت شد!");
        }
    }
}