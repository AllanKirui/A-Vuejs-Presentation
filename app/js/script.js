// Create a Vue app
const app = Vue.createApp({
   // Define the return value for the data() option
   data() {
      return {
         counter: 20,
         name: "",
      };
   },
   computed: {
      // Define a function to show a quote when the user enters their name
      fullQuote() {
         if (this.name === "") {
            return "";
         }
         return (
            "Look at your progress and be proud, " +
            this.name +
            ". (seriously, you should be)"
         );
      },
      // Define a function to show a winning message when the counter is zero
      winningMessage() {
         if (this.counter === -1) {
            return "Thank you for playing ( ͡ᵔ ͜ʖ ͡ᵔ )";
         }
      },
   },
   methods: {
      // Here we define functions to execute when events fire off
      // This function adds the number passed in to the "counter" property
      add(num) {
         this.counter += num;
      },
      // This function subtracts the number passed in to the "counter" property
      reduce(num) {
         this.counter -= num;
      },
      // This function resets the input entered into the form field of the phone
      resetInput() {
         this.name = "";
         this.counter = 20;
      },
   },
});

// Connect the Vue app with the HTML code
app.mount("#app");
