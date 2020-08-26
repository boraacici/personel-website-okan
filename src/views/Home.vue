<template>
  <div class="home">
    <div class="projects">
      <ul>
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
        <li>
          <div class="title" v-observe-visibility="titleVisibility">Zaha Hadid Architects</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  methods: {
    titleVisibility(isVisible, entry) {
      // debugger;
      let element = entry.target;
      if (isVisible && !element.classList.contains("fadeInUp")) {
        element.classList.add("fadeInUp");
      }
    },
  },
};
</script>
