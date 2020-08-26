<template>
  <div class="home">
    <div class="projects">
      <ul class="list">
        <li>
          <div
            @mouseenter="mouseenterTitle"
            @mouseleave="mouseleaveTitle"
            class="title"
            v-observe-visibility="titleVisibility"
          >Zaha Hadid Architects</div>
        </li>
        <li>
          <div class="title" v-observe-visibility="titleVisibility">Zaha Hadid Architects</div>
        </li>
        <li>
          <div class="title" v-observe-visibility="titleVisibility">Zaha Hadid Architects</div>
        </li>
        <li>
          <div class="title" v-observe-visibility="titleVisibility">Zaha Hadid Architects</div>
        </li>
        <li>
          <div class="title" v-observe-visibility="titleVisibility">Zaha Hadid Architects</div>
        </li>
        <li>
          <div class="title" v-observe-visibility="titleVisibility">Zaha Hadid Architects</div>
        </li>
        <li>
          <div class="title" v-observe-visibility="titleVisibility">Zaha Hadid Architects</div>
        </li>
        <li>
          <div class="title" v-observe-visibility="titleVisibility">Zaha Hadid Architects</div>
        </li>
        <li>
          <div class="title" v-observe-visibility="titleVisibility">Zaha Hadid Architects</div>
        </li>
      </ul>
    </div>
    <div class="project-infos">
      <div class="project-info" :class="onHover ? 'active' : 'inactive'">
        <span class="category-info">Web + Mobile + Branding</span>
        <span class="year">2019</span>
        <div class="left-image">
          <img src="../assets/images/zahahadid-right.jpg" alt />
        </div>
        <div class="right-image">
          <img src="../assets/images/zahahadid-right.jpg" alt />
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
      onHover: false,
    };
  },
  components: {},
  methods: {
    titleVisibility(isVisible, entry) {
      // debugger;
      let element = entry.target;
      if (isVisible && !element.classList.contains("fadeInUp")) {
        element.classList.add("fadeInUp");
      }
    },
    mouseenterTitle() {
      console.log("mouseenter");
      this.onHover = true;
    },
    mouseleaveTitle() {
      console.log("mouseleave");
      this.onHover = false;
    },
  },
};
</script>

<style lang="scss" scoped>
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
        animation: scaleTo0 .7s cubic-bezier(0.23, 1, 0.32, 1) forwards;
      }

      .year,
      .category-info {
        animation: opacityTo0 .7s cubic-bezier(0.23, 1, 0.32, 1) forwards;
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
      top: 10vh;
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