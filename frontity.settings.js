const settings = {
  name: "blog",
  state: {
    frontity: {
      url: "https://extender.tk",
      title: "Jessika Blog",
      description: "Site of Lady Justice",
    },
  },
  packages: [
    {
      name: "@frontity/mars-theme",
      state: {
        theme: {
          menu: [
            ["Home", "/"],
            ["Nature", "/category/priroda/"],
            ["Travel", "/category/travel/"],
            ["Architect", "/category/arhitektura/"],
            ["Animals", "/category/zhivotnyie/"],
          ],
          featured: {
            showOnList: false,
            showOnPost: false,
          },
        },
      },
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          api: "https://extender.tk/index.php/wp-json",
        },
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
  ],
};

export default settings;
