<template>
  <div class="home">
    <div class="projects">
      <ul class="list">
        <li v-for="project in projects" v-bind:key="project.id">
          <div
            @mouseenter="mouseenterTitle(project)"
            @mouseleave="mouseleaveTitle(project)"
            @click="goLink(project)"
            class="title"
            v-observe-visibility="titleVisibility"
          >{{project.name}}</div>
        </li>
      </ul>
    </div>
    <div class="project-infos">
      <div
        v-for="project in projects"
        v-bind:key="project.id"
        class="project-info"
        :projectId="project.id"
      >
        <span class="category-info">{{project.category}}</span>
        <span class="year">{{project.year}}</span>
        <div class="left-image" v-if="project.leftImage">
          <img :src="require(`../assets/images/${project.leftImage}`)" alt />
        </div>
        <div class="right-image" v-if="project.rightImage">
          <img :src="require(`../assets/images/${project.rightImage}`)" alt />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      bgTl: new gsap.timeline(),
      projects: [
        {
          id: "1",
          name: "Zaha Hadid Architects",
          leftImage: "zahahadid-left.jpg",
          rightImage: "zahahadid-right.jpg",
          year: "2019",
          category: "Web + Mobile + Branding",
          backgroundColor: "black",
          status: "SOON",
        },
        {
          id: "2",
          name: "TRT Dinle",
          leftImage: "trtdinle-left.png",
          rightImage: "trtdinle-right.png",
          year: "2019 - Present",
          category: "Strategy • UX • App • Web",
          backgroundColor:
            "radial-gradient(136.62% 136.62% at 92.79% 3.56%, #27E4DC 0%, #1DB7CF 23.96%, #1071BF 44.27%, #06388B 78.65%, #021B50 100%)",
          status: "SEE_LIVE",
          goLink: "https://www.trtdinle.com/",
        },
        {
          id: "3",
          name: "TRT Belgesel",
          leftImage: "trtbelgesel-left.jpg",
          rightImage: "trtbelgesel-right.jpg",
          year: "2018",
          category: "Web • Service Design",
          backgroundColor: "#18181C",
          status: "SEE_LIVE",
          goLink: "https://www.trtbelgesel.com.tr/",
        },
        {
          id: "4",
          name: "UNO",
          leftImage: "uno-left.png",
          rightImage: "uno-right.png",
          year: "2016",
          category: "Web",
          backgroundColor: "#540306",
          status: "CONCEPT",
        },
        {
          id: "5",
          name: "Rush App",
          leftImage: "rush-left.png",
          rightImage: "rush-right.png",
          year: "2018",
          category: "UX • App Design",
          backgroundColor:
            "radial-gradient(54.26% 104.69% at 53.02% 72.55%, #251978 0%, #421E85 100%)",
          status: "OUTDATED",
        },
        {
          id: "6",
          name: "TRT World",
          leftImage: "trtworld-left.png",
          rightImage: "trtworld-right.png",
          year: "2017 - Present",
          category: "Strategy • UX • App • Web ",
          backgroundColor: "#283F46",
          status: "SEE_LIVE",
          goLink: "http://trtworld.com/",
        },
        {
          id: "7",
          name: "Turkish Airlines",
          year: "2015",
          category: "App Design • Web App",
          backgroundColor: "#000000",
          status: "PRIVATE",
        },
        {
          id: "8",
          name: "The Good Mood Co",
          leftImage: "goodmoodco-left.png",
          rightImage: "goodmoodco-right.png",
          year: "2016",
          category: "Strategy • Web",
          backgroundColor: "#2E022F",
          status: "NOT ALIVE",
        },
        {
          id: "9",
          name: "TRT Izle",
          leftImage: "trtizle-left.png",
          rightImage: "trtizle-right.png",
          year: "2019",
          category: "UX • Web • App",
          backgroundColor: "#18181C",
          status: "SEE_LIVE",
          goLink: "https://www.trtizle.com/",
        },
        {
          id: "10",
          name: "TRT Cocuk",
          leftImage: "trtcocuk-left.png",
          rightImage: "trtcocuk-right.png",
          year: "2020",
          category: "UX • Web",
          backgroundColor:
            "radial-gradient(54.26% 104.69% at 53.02% 72.55%, #251978 0%, #421E85 100%)",
          status: "SEE_LIVE",
          goLink: "www.trtcocuk.com",
        },
      ],
      activeProject: null,
      lastProject: null,
    };
  },
  components: {},
  methods: {
    goLink(project) {
      if (project.goLink) window.open(project.goLink, "_blank");
    },
    titleVisibility(isVisible, entry) {
      let element = entry.target;
      if (isVisible && !element.classList.contains("fadeInUp")) {
        element.classList.add("fadeInUp");
      }
    },
    mouseenterTitle(project) {
      if (this.activeProject) {
        this.lastProject = this.activeProject;
      }

      this.activeProject = project;

      let projectInfoEl = document.querySelector(
        `.project-infos [projectid='${this.activeProject.id}']`
      );
      projectInfoEl.classList.remove("inactive");
      projectInfoEl.classList.add("active");

      let viewport = document.getElementById("viewport");

      viewport.style.background = this.activeProject.backgroundColor;

      var translateY = this.getTranslateY(viewport);
      projectInfoEl.querySelector(
        ".year"
      ).style.top = `calc(95vh - ${translateY}px)`;
      projectInfoEl.querySelector(
        ".category-info"
      ).style.top = `calc(95vh - ${translateY}px)`;
      projectInfoEl.querySelector(
        ".left-image"
      ).style.top = `calc(5vh - ${translateY}px)`;
      projectInfoEl.querySelector(".right-image").style.top = `${
        translateY * -1
      }px`;

      let circle1 = document.querySelector("#cursor #circle1");

      if (this.activeProject.status) {
        circle1.className = `circle-${this.activeProject.status
          .toLowerCase()
          .replace("_", "")}`;
        setTimeout(() => {
          circle1.innerText = this.activeProject.status.replace("_", " ");
        }, 150);
      }
    },
    mouseleaveTitle(project) {
      this.lastProject = this.activeProject;
      this.activeProject = null;

      let projectInfoEl = document.querySelector(
        `.project-infos [projectid='${this.lastProject.id}']`
      );
      projectInfoEl.classList.remove("active");
      projectInfoEl.classList.add("inactive");

      let viewport = document.getElementById("viewport");

      viewport.style.background = "black";

      circle1.className = `title-to-default`;
      circle1.innerText = "";
    },
    getTranslateY(element) {
      var style = window.getComputedStyle(element);
      var matrix = new WebKitCSSMatrix(style.webkitTransform);

      return matrix.m42;
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  padding-top: 200px;
}
.project-infos {
  .project-info {
    display: none;

    &.active {
      display: block;
      .left-image,
      .right-image {
        animation: scaleTo1 1.5s cubic-bezier(0.23, 1, 0.32, 1) forwards;
      }

      .year,
      .category-info {
        animation: opacityTo1 1.5s cubic-bezier(0.23, 1, 0.32, 1) forwards;
      }
    }

    &.inactive {
      display: block;
      .left-image,
      .right-image {
        transform: scale(1);
        animation: scaleTo0 0.7s cubic-bezier(0.23, 1, 0.32, 1) forwards;
      }

      .year,
      .category-info {
        animation: opacityTo0 0.7s cubic-bezier(0.23, 1, 0.32, 1) forwards;
      }
    }
    .category-info {
      position: fixed;
      top: 95vh;
      right: 2vw;
      opacity: 0;
    }

    .year {
      position: fixed;
      top: 95vh;
      left: 2vw;
      opacity: 0;
    }

    .left-image {
      position: fixed;
      left: 10vh;
      top: 5vh;
      transform: scale(0.6);

      img {
        max-height: 95vh;
      }
    }

    .right-image {
      position: fixed;
      right: 6vw;
      top: 0;
      transform: scale(0.6);

      img {
        max-height: 90vh;
      }
    }
  }
}
</style>