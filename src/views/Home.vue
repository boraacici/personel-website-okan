<template>
  <div class="home">
    <div class="projects">
      <ul class="list">
        <li v-for="project in projects" v-bind:key="project.id">
          <div
            @mouseenter="mouseenterTitle(project)"
            @mouseleave="mouseleaveTitle(project)"
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
        <div class="left-image">
          <img :src="require(`../assets/images/${project.leftImage}`)" alt />
        </div>
        <div class="right-image">
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
          name: "TRT Belgesel",
          leftImage: "trtbelgesel-left.jpg",
          rightImage: "trtbelgesel-right.jpg",
          year: "2020",
          category: "Web + Mobile + Branding",
          backgroundColor: "#2D3E18",
        },
        {
          id: "3",
          name: "Zaha Hadid Architects",
          leftImage: "zahahadid-left.jpg",
          rightImage: "zahahadid-right.jpg",
          year: "2019",
          category: "Web + Mobile + Branding",
          backgroundColor: "black",
        },
        {
          id: "4",
          name: "TRT Belgesel",
          leftImage: "trtbelgesel-left.jpg",
          rightImage: "trtbelgesel-right.jpg",
          year: "2020",
          category: "Web + Mobile + Branding",
          backgroundColor: "#2D3E18",
        },
        {
          id: "5",
          name: "Zaha Hadid Architects",
          leftImage: "zahahadid-left.jpg",
          rightImage: "zahahadid-right.jpg",
          year: "2019",
          category: "Web + Mobile + Branding",
          backgroundColor: "black",
        },
        {
          id: "6",
          name: "TRT Belgesel",
          leftImage: "trtbelgesel-left.jpg",
          rightImage: "trtbelgesel-right.jpg",
          year: "2020",
          category: "Web + Mobile + Branding",
          backgroundColor: "#2D3E18",
        },
        {
          id: "7",
          name: "Zaha Hadid Architects",
          leftImage: "zahahadid-left.jpg",
          rightImage: "zahahadid-right.jpg",
          year: "2019",
          category: "Web + Mobile + Branding",
          backgroundColor: "black",
        },
        {
          id: "8",
          name: "TRT Belgesel",
          leftImage: "trtbelgesel-left.jpg",
          rightImage: "trtbelgesel-right.jpg",
          year: "2020",
          category: "Web + Mobile + Branding",
          backgroundColor: "#2D3E18",
        },
        {
          id: "9",
          name: "Zaha Hadid Architects",
          leftImage: "zahahadid-left.jpg",
          rightImage: "zahahadid-right.jpg",
          year: "2019",
          category: "Web + Mobile + Branding",
          backgroundColor: "black",
        },
        {
          id: "10",
          name: "TRT Belgesel",
          leftImage: "trtbelgesel-left.jpg",
          rightImage: "trtbelgesel-right.jpg",
          year: "2020",
          category: "Web + Mobile + Branding",
          backgroundColor: "#2D3E18",
        },
      ],
      activeProject: null,
      lastProject: null,
    };
  },
  components: {},
  methods: {
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

      viewport.style.backgroundColor = this.activeProject.backgroundColor;

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
        circle1.innerText = this.activeProject.status;
        circle1.className = `circle-${this.activeProject.status.toLowerCase()}`;
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

      viewport.style.backgroundColor = "black";

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
    }

    .right-image {
      position: fixed;
      right: 6vw;
      top: 0;
      opacity: 0.8;
      transform: scale(0.6);

      img {
        max-height: 90vh;
      }
    }
  }
}
</style>