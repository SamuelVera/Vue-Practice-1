/** Config that will control Vue App */
const vueConfig = {
  /**Given template */
  // template: "<h2>I am the template.</h2>", //Injected inside root
  /**Data for Vue app */
  data() {
    return {
      //Data accesible from Vue app scope
      title: "The Final Empire",
      author: "Brandon Sanderson",
      age: 45,
    };
  },
};
//Instantiate the Vue App
/**Vuew Application */
const app = Vue.createApp({
  //Data, functions
  ...vueConfig,
});

//Mount Vue App with given selector as root
app.mount("#root");
