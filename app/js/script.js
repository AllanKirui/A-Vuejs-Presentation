// Create a Vue app
const app = Vue.createApp({
   // Define the return value for the data() option
   data() {
      return {
         counter: 20,
         name: "",
      };
   },
   // watch: {
   //    // Here we use "name" from the data property as a watcher method
   //    // This tells Vue one important thing, whenever "name" changes,
   //    // the watcher method will re-execute
   //    name(value) {
   //       // Inside the braces, we don't return anything, we just add some logic
   //       // that get's executed when the name changes.
   //       // Since a watch gets the last/latest value of the watched property,
   //       // we don't need to use "this.name"
   //       // Using a second argument above, gives us the previous value
   //       // of the watch property
   //       if (value === "") {
   //          this.fullname = "";
   //       } else {
   //          this.fullname = value + " " + "Will Jr";
   //       }
   //    },
   // },
   computed: {
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
      // Define functions to execute when events fire off
      outputFullQuote() {
         if (this.name === "") {
            return "";
         }
         return (
            "Look at your progress and be proud," +
            " " +
            this.name.fontcolor("#ff1111") +
            ". (seriously, you should be)"
         );
      },
      add(num) {
         this.counter += num;
      },
      reduce(num) {
         this.counter -= num;
      },
      // The addName() method takes in an event as a parameter
      // Since we're listening for the "input" event, which
      // fires off with every keystroke...
      //   addName(e) {
      //      // ...we take that keystroke and get it's value and
      //      // that value is what we pass to the DOM
      //      this.name = e.target.value;
      //   },
      resetInput() {
         this.name = "";
      },
   },
});

// Connect the Vue app with the HTML code
app.mount("#app");
