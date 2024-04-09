/* Attraverso l'apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all'interno di una lista. */

const { createApp } = Vue;

createApp({
  data() {
    return {
      mailArray: [],
      isReady: false
    };
  },
  methods: {
    getMailFromApi() {
      for (let i = 0; i < 10; i++) {
        axios
          .get("https://flynn.boolean.careers/exercises/api/random/mail")
          .then((response) => {
            const serverData = response.data;
            this.mailArray.push(serverData.response);
            if(i==9) {
                this.isReady = true;
            }
          });
      }
      console.log(this.mailArray);
    },
  },
  mounted() {
    this.getMailFromApi();
  },
}).mount("#app");
