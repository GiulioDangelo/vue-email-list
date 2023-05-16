const app = Vue.createApp({
	data() {
		return {
			mails: [],
		};
	},

	methods: {
		randMail() {
			axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then((request) => this.mails.push(request.data.response));
		},
	},



	created() {
		for (let i = 0; i < 10; i++) {
			this.randMail();
		}
	},
});

app.mount("#app");