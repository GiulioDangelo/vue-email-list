const app = Vue.createApp({
    data() {
        return {
            mails : '',
        }
    },

    methods: {
        randMail() {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((request) => this.mails = request.data.response)
        }



        // methods: {
        //     randMail() {
        //         axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        //         .then((request) => { this.mails.push(request.data.response)})
        // },
    },

    created() {
        this.randMail()
    },
})

app.mount('#app')