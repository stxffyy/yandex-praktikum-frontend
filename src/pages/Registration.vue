<template>
  <div class="registration-container">
    <form class="registration-form" @submit.prevent="register">
      <h1>Регистрация</h1>
      <label for="username">Имя пользователя:</label>
      <input v-model="name" type="text" id="username" name="username" required placeholder="Введите имя">

      <label for="email">Email:</label>
      <input v-model="email" type="email" id="email" name="email" required placeholder="Введите email">

      <label for="password">Пароль:</label>
      <input v-model="password" type="password" id="password" name="password" required placeholder="Введите пароль">

      <label for="confirm-password">Подтвердите пароль:</label>
      <input v-model="confirmPassword" type="password" id="confirm-password" name="confirm-password" required
        placeholder="Введите пароль">

      <button type="submit">Зарегистрироваться</button>

      <h5>Уже есть аккаунт? <a @click="autorization" class="auth">Авторизуйтесь</a></h5>
    </form>
  </div>
</template>

<script>

export default {
  data() {
    return {
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    };
  },
  methods: {
    async register()
    {
      if (this.password !== this.confirmPassword) {
        alert('Пароли не совпадают');
        return;
      }

      const requestBody = {
        name: this.name,
        email: this.email,
        password: this.password
      };

      try {
        await fetch('https://yandex-praktikum-backend.glitch.me/auth/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(requestBody)
        });
        console.log('Успешная регистрация:');
        this.$router.push('/success');
      } catch (error) {
        console.error('Ошибка регистрации:', error);
      }
    }
,
    autorization() {
      this.$router.push('/auth');
    }
  }
};
</script>


<style scoped>
.registration-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-image: url('../assets/desert.jpg');
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: cover;
}

.registration-form {
  width: 400px;
  background-color: #dfd2c5;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

h1 {
  font-size: 24px;
  margin-bottom: 20px;
}

label {
  font-size: 14px;
  margin-bottom: 6px;
}

input {
  padding: 10px;
  margin-bottom: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #dfd2c5;
  border: 1px solid black;
}

input::placeholder {
  color: #000;
}

button {
  padding: 10px;
  background-color: #986c54;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  border: 1px solid black;
  color: black;
  margin-bottom: 16px;
}

button:hover {
  background-color: #986c54a8;
}

.auth {
  color: #986c54;
  cursor: pointer;
}

.auth:hover {
  text-decoration: underline;
}
</style>
  
