/** Config that will control Vue App */
const vueConfig = {
  /**Given template */
  // template: "<h2>I am the template.</h2>", //Injected inside root
  /**Data for Vue app */
  data() {
    return {
      //Data accesible from Vue app scope
      showAlbums: true,
      buttonText: "Hide albums",
      albums: [
        {
          title: "The World is Fvcked",
          author: "Sewerslvt",
          date: new Date(2020, 11, 5).toLocaleDateString(),
          views: 103046,
          bandcampUrl: "https://sewerslvt.com/album/the-world-is-fvcked",
          alt: "The World is Fvcked",
          imageUrl: "https://f4.bcbits.com/img/a1273865211_16.jpg",
          isFav: true,
        },
        {
          title: "Drowning In The Sewer",
          author: "Sewerslvt",
          date: new Date(2019, 5, 11).toLocaleDateString(),
          views: 488554,
          bandcampUrl: "https://sewerslvt.com/album/drowning-in-the-sewer",
          alt: "Drowning In The Sewer",
          imageUrl: "https://f4.bcbits.com/img/a0515657606_16.jpg",
          isFav: false,
        },
        {
          title: "Everything Flows",
          author: "Tanpopo Crisis",
          date: new Date(2016, 7, 22).toLocaleDateString(),
          views: 167,
          bandcampUrl:
            "https://tanpopocrisis.bandcamp.com/album/everything-flows",
          alt: "Everything Flows",
          imageUrl: "https://f4.bcbits.com/img/a0092087838_16.jpg",
          isFav: true,
        },
      ],
    };
  },
  /**Methods that can be used by the Vue scope */
  methods: {
    toggleShowAlbums() {
      this.buttonText = this.showAlbums ? "Show albums" : "Hide albums";
      this.showAlbums = !this.showAlbums;
    },
    /**Toggle fav of given album */
    toggleFav(album) {
      album.isFav = !album.isFav;
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
