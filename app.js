/** Config that will control Vue App */
const vueConfig = {
  /**Given template */
  // template: "<h2>I am the template.</h2>", //Injected inside root
  /**Data for Vue app */
  data() {
    return {
      //Data accesible from Vue app scope
      title: "The World is Fvcked",
      author: "Sewerslvt",
      date: new Date(2020, 11, 5).toLocaleDateString(),
      views: 103046,
    };
  },
  /**Methods that can be used by the Vue scope */
  methods: {
    changeAlbum(newTitle) {
      //this.title = "New Title"; //Without arguments
      this.title = newTitle; //With arguments
    },
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
