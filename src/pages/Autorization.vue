<template>
    <div class="login-container">
        <form class="login-form" @submit.prevent="login">
            <h1>Авторизация</h1>
            <label for="email">Email:</label>
            <div>
                <input v-model="email" type="email" id="email" name="email" required class="input"
                    placeholder="Введите email">
            </div>

            <label for="password">Пароль:</label>
            <div>
                <input v-model="password" type="password" id="password" name="password" required class="input"
                    placeholder="Введите пароль">
            </div>

            <div>
                <button type="submit">Войти</button>
            </div>
        </form>
    </div>
</template>
  
<script>
import { authState } from '../auth.js';
export default {
    data() {
        return {
            email: '',
            password: '',
        };
    },
    methods: {
        async login() {
            const requestBody = {
                email: this.email,
                password: this.password
            };

            try {
                const response = await fetch('http://46.17.104.99:8888/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(requestBody)
                });

                if (!response.ok) {
                    throw new Error('Ошибка при авторизации');
                }
                localStorage.setItem("token", (await response.json()).accessToken)
                authState.isAuthenticated = true;
                console.log('Успешная авторизация');
                this.$router.push('/success');
            } catch (error) {
                console.error('Ошибка авторизации:', error);
            }
        }
    }
};
</script>
  
<style scoped>
.login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-image: url('../assets/desert.jpg');
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: cover;
}

.login-form {
    width: 400px;
    background-color: #dfd2c5;
    border-radius: 8px;

    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.input {
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

h1 {
    font-size: 24px;
    margin-bottom: 20px;
}

label {
    font-size: 14px;
    margin-bottom: 6px;
}

input {}

button {
    padding: 10px 16px;
    background-color: #986c54;
    color: #000;
    border: 1px solid black;
    border-radius: 4px;
    cursor: pointer;
}

button:hover {
    background-color: #986c54a8;
}
</style>
  