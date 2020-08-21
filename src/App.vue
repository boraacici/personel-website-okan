<template>
  <div id="app">
    <div id="cursor" ref="cursor">
      <div id="circle1" ref="circle1"></div>
      <div ref="circle2" id="circle2"></div>
    </div>
    <div id="viewport" ref="viewport" @mousemove="cursorMove" @mouseleave="cursorLeave">
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
  data() {
    return {
      lastScrollY: null,
      scrollTimeline: new gsap.timeline(),
    };
  },
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
      this.$refs.cursor.style.top = event.clientY + "px";
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

      gsap.to(this.$refs.viewport, {
        y: scrollY + "px",
        duration: 0.35,
        ease: "power3.out",
      });

      this.updateScrollBar();
    },
    updateScrollBar() {
      const scope = this;
      this.scrollFade = gsap.to(this.$refs.scroll, {
        opacity: 1,
        duration: 1.2,
        reversed: true,
      });
      scope.scrollFade.play();
      if (scope.scrollFade && !scope.scrollFade.isActive()) {
        this.$refs.scroll.style.opacity = 1;

        if (scope.scrollFadeOut) {
          scope.scrollFadeOut.paused(true);
        }
      }
      let viewportRect = this.$refs.viewport.getClientRects()[0];
      let scrollBarY =
        ((viewportRect.y * -1) / (viewportRect.height - window.innerHeight)) *
        88;
      gsap.to(this.$refs.scrollBar, {
        y: scrollBarY + "vh",
        duration: 0.35,
        ease: "power3.out",
      });

      setTimeout(() => {
        if (!scope.scrollFade.isActive()) {
          scope.scrollFadeOut = gsap.to(this.$refs.scroll, {
            opacity: 0,
            duration: 0.5,
          });
          scope.scrollFadeOut.play();
        }
      }, 1500);
    },
  },
};
</script>

<style lang="scss">
@import "assets/style/style.scss";
</style>
