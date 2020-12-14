<template>
  <div class="welcome-page" @mousemove="cursorMove" ref="welcomePage">
    <h1>Okan Yıkmış</h1>
    <p>SELECTED FOLIO 2020</p>
    <div class="circular" ref="circular" style="opacity: 0">
      <svg viewBox="0 0 100 100" ref="circularText">
        <path d="M 0,50 a 50,50 0 1,1 0,1" id="circle" />
        <text>
          <textPath xlink:href="#circle">SCROLL FOR MY WORK</textPath>
        </text>
      </svg>
      <i class="icon-scroll-down"></i>
    </div>
    <div id="temp-circular" ref="tempCircular">
      <div class="circular">
        <svg viewBox="0 0 100 100">
          <path d="M 0,50 a 50,50 0 1,1 0,1" id="circle" />
          <text>
            <textPath xlink:href="#circle">SCROLL FOR MY WORK</textPath>
          </text>
        </svg>
        <i class="icon-scroll-down"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WelcomePage",
  data() {
    return {
      rotateTl: null,
      rotateTimeout: null,
    };
  },
  mounted() {
    this.$refs.welcomePage.addEventListener("wheel", this.onWheel);

    this.rotateTl = gsap.to(this.$refs.circularText, {
      transformOrigin: "50% center",
      rotation: 36000,
      duration: 800,
      repeat: -1,
    });
  },
  methods: {
    onWheel() {
      this.startAnimation();
    },
    cursorMove(event) {
      const scope = this;
      this.mouseX = event.clientX;
      this.mouseY = event.clientY;

      if (this.$refs.circular.style.opacity == 0) {
        gsap.to(this.$refs.circular, {
          opacity: 1,
          delay: 0.4,
          duration: 3,
          ease: "circ.outIn",
        });

        gsap.to(this.$refs.tempCircular, {
          opacity: 0,
          delay: 0.2,
          duration: 0.2,
          ease: "circ.outIn",
        });
      }

      gsap.to(this.$refs.circular, {
        css: {
          left: event.clientX,
          top: event.clientY,
        },
        duration: 0.6,
        ease: "circ.outIn",
      });
    },
    startAnimation() {
      gsap.to(this.$el.querySelectorAll("p, h1"), {
        opacity: 0,
        delay: 0.2,
        duration: 0.2,
        ease: "circ.outIn",
      });
    },
  },
};
</script>

<style>
.icon-scroll-down {
  background: url(../assets/images/icon-scroll-down.png);
  width: 25px;
  height: 42px;
  position: absolute;
  margin-left: 45.5px;
  margin-top: -81px;
}
</style>