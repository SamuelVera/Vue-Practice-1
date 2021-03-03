/** Config that will control Vue App */
const vueConfig = {
  /**Given template */
  // template: "<h2>I am the template.</h2>", //Injected inside root
  /**Data for Vue app */
  data() {
    return {
      //Data accesible from Vue app scope
      showAlbums: true,
      title: "The World is Fvcked",
      author: "Sewerslvt",
      date: new Date(2020, 11, 5).toLocaleDateString(),
      views: 103046,
      buttonText: "Hide albums",
      x: 0,
      y: 0,
    };
  },
  /**Methods that can be used by the Vue scope */
  methods: {
    toggleShowAlbums() {
      this.buttonText = this.showAlbums ? "Show albums" : "Hide albums";
      this.showAlbums = !this.showAlbums;
    },
    handleEvent(e, data) {
      console.log(e.type);
      if (data) {
        console.log("With data", data);
      }
    },
    handleMousemove(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
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
