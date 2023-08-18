<template>
    <div class="wrapper">
        <div class="text">
            <h1>Заполните форму,</h1>
        </div>
        <div class="text">
            <h3>Чтобы мы получили от вас обратную связь &hearts;</h3>
        </div>
        <div class="form">
            <form action="" class="feedback-form" @submit.prevent="submitForm">
                <h1>Обратная связь</h1>
                <div>
                    <input v-model="feedback" type="text" id="feedback" name="feedback" required class="input"
                        placeholder="Введите текст">
                </div>
                <div>
                    <button type="submit" class="button">Отправить</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            feedback: ''
        };
    },
    methods: {
        async submitForm() {
            try {
                const response = await fetch('https://yandex-praktikum-backend.glitch.me/feedback', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `JWT ${localStorage.getItem("token")}`
                    },
                    body: JSON.stringify({ text: this.feedback })
                });

                const data = await response.json();
                console.log('Response from server:', data);
                this.feedback = ''
            } catch (error) {
                console.error('Error submitting form:', error);
            }
        }
    }
}
</script>

<style>
.wrapper {
    margin-top: 5rem;
}
.text {
    margin-top: 2rem;
    text-align: center;
}

.form {
    margin-top: 2rem;
    text-align: center;
}

.feedback-form {
    width: 400px;
    background-color: #dfd2c5be;
    border-radius: 20px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.input {
    margin-top: 1rem;
    padding: 7px 10px;
    height: 50px;
    width: 270px;
    margin-bottom: 16px;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: #dfd2c586;
    border: 1px solid black;
}

input::placeholder {
    color: #000;
    font-size: 1rem;
    text-align: left;
    margin-left: 25px;
}

.button {
    padding: 10px 16px;
    background-color: #C8A383;
    color: #000;
    border: 1px solid black;
    border-radius: 4px;
    cursor: pointer;
}

.button:hover {
    cursor: pointer;
    background-color: #c8ad96;
}
</style>
