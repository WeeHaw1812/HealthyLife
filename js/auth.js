const USERS_STORAGE_KEY = "healthyUsers";
const CURRENT_USER_STORAGE_KEY = "healthyCurrentUser";

function getUsers() {
  const storedUsers = localStorage.getItem(USERS_STORAGE_KEY);

  if (storedUsers) {
    try {
      const users = JSON.parse(storedUsers);
      return Array.isArray(users) ? users : [];
    } catch (error) {
      return [];
    }
  }

  // Migrate the old single-account format without losing the existing user.
  const oldUser = localStorage.getItem("healthyUser");

  if (oldUser) {
    try {
      const user = JSON.parse(oldUser);
      const users = user ? [user] : [];
      localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));
      return users;
    } catch (error) {
      return [];
    }
  }

  return [];
}

function getCurrentUser() {
  const currentEmail = localStorage.getItem(CURRENT_USER_STORAGE_KEY);
  return getUsers().find((user) => user.email === currentEmail) || null;
}

document.addEventListener("DOMContentLoaded", function () {
  const registerForm = document.getElementById("registerForm");

  const loginForm = document.getElementById("loginForm");

  // ================= ĐĂNG KÝ =================

  if (registerForm) {
    registerForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const name = document.getElementById("registerName").value.trim();

      const email = document.getElementById("registerEmail").value.trim();

      const password = document.getElementById("registerPassword").value;

      const confirm = document.getElementById("registerConfirm").value;

      const message = document.getElementById("registerMessage");

      if (password !== confirm) {
        message.textContent = "Mật khẩu nhập lại không khớp.";

        return;
      }

      const user = {
        name,
        email,
        password,
      };

      const users = getUsers();
      const emailExists = users.some(
        (existingUser) => existingUser.email.toLowerCase() === email.toLowerCase(),
      );

      if (emailExists) {
        message.textContent = "Email này đã được đăng ký.";
        return;
      }

      users.push(user);
      localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));

      message.textContent = "Đăng ký thành công!";

      setTimeout(function () {
        window.location.href = "login.html";
      }, 1000);
    });
  }

  // ================= ĐĂNG NHẬP =================

  if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const email = document.getElementById("loginEmail").value.trim();

      const password = document.getElementById("loginPassword").value;

      const user = getUsers().find(
        (existingUser) =>
          existingUser.email.toLowerCase() === email.toLowerCase() &&
          existingUser.password === password,
      );

      const message = document.getElementById("loginMessage");

      if (user && user.email === email && user.password === password) {
        localStorage.setItem("loggedIn", "true");
        localStorage.setItem(CURRENT_USER_STORAGE_KEY, user.email);

        window.location.href = "dashboard.html";
      } else {
        message.textContent = "Email hoặc mật khẩu không đúng.";
      }
    });
  }

  // ================= ĐĂNG XUẤT =================

  const logoutBtn = document.getElementById("logoutBtn");

  if (logoutBtn) {
    logoutBtn.addEventListener("click", function () {
      localStorage.removeItem("loggedIn");
      localStorage.removeItem(CURRENT_USER_STORAGE_KEY);

      window.location.href = "../index.html";
    });
  }

  // ================= DASHBOARD =================

  const userName = document.getElementById("userName");

  if (userName) {
    const user = getCurrentUser();

    if (user) {
      userName.textContent = user.name;
    }
  }
});
