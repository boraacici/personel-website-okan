<template>
  <div id="app">
    <div id="viewport" ref="viewport" @mousemove="cursorMove" @mouseleave="cursorLeave">
      <div id="cursor" ref="cursor">
        <div id="circle1" ref="circle1"></div>
        <div ref="circle2" id="circle2"></div>
      </div>
      <router-view />
    </div>
    <div id="scroll" ref="scroll">
      <span ref="scrollBar" class="scroll-bar"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  mounted() {
    document.getElementById("viewport").addEventListener("wheel", this.onWheel);
  },
  methods: {
    cursorMove(event) {
      if (
        this.$refs.circle1.className === "" ||
        this.$refs.circle1.className === "leave"
      )
        this.$refs.circle1.className = "enter";

      let viewportRect = this.$refs.viewport.getClientRects()[0];

      this.$refs.cursor.style.left = event.clientX + "px";
      this.$refs.cursor.style.top = event.clientY - viewportRect.y + "px";
    },
    cursorLeave() {
      this.$refs.circle1.className = "leave";
    },
    onWheel(event) {
      let viewportRect = this.$refs.viewport.getClientRects()[0];
      let scrollY = viewportRect.y + event.wheelDeltaY;
      if (
        scrollY * -1 > viewportRect.height - window.innerHeight ||
        viewportRect.y >= viewportRect.height - window.innerHeight
      ) {
        scrollY = (viewportRect.height - window.innerHeight) * -1;
      }

      if (scrollY > 0) {
        scrollY = 0;
      }

      this.$refs.viewport.style.transform = "translateY(" + scrollY + "px)";

      this.updateScrollBar();
    },
    updateScrollBar() {
      let viewportRect = this.$refs.viewport.getClientRects()[0];
      let scrollBarY =
        ((viewportRect.y * -1) / (viewportRect.height - window.innerHeight)) *
        88;

      this.$refs.scrollBar.style.top = scrollBarY + "vh";
    },
  },
};
</script>

<style lang="scss">
@import "assets/style/style.scss";
</style>
