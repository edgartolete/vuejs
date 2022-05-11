const { createApp } = Vue

createApp({
    data() {
        return {
            message: 'Hello Vue!',
            love: 'I love you'
        }
    }
}).mount('#app')
