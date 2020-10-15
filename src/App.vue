<template>
  <div id="app" @mousemove="cursorMove" @mouseleave="cursorLeave">
    <!-- <div ref="transtionElement" class="transition-page">
      <h1>Okan Yıkmış</h1>
      <p>SELECTED FOLIO 2020</p>
    </div>-->
    <div id="cursor" ref="cursor">
      <div id="circle1" ref="circle1"></div>
      <div ref="circle2" id="circle2"></div>
    </div>
    <!-- <div class="welcome-page">
      <h1>Okan Yıkmış</h1>
      <p>SELECTED FOLIO 2020</p>
      <div class="circle-scroll">
        <h6>
          <span>S</span>
          <span>C</span>
          <span>R</span>
          <span>O</span>
          <span>L</span>
          <span>L</span>
          <span></span>
          <span>F</span>
          <span>O</span>
          <span>R</span>
          <span></span>
          <span>M</span>
          <span>Y</span>
          <span></span>
          <span>W</span>
          <span>O</span>
          <span>R</span>
          <span>K</span>
          <span></span>
        </h6>
      </div>
    </div> -->
    <div id="viewport" ref="viewport">
      <topbar />
      <transition name="slide-fade">
        <router-view></router-view>
      </transition>
    </div>
    <div id="scroll" ref="scroll">
      <span ref="scrollBar" class="scroll-bar"></span>
    </div>
  </div>
</template>

<script>
import Topbar from "./components/Topbar";

export default {
  name: "app",
  components: { topbar: Topbar },
  data() {
    return {
      transitionName: "",
      lastScrollY: null,
      scrollFadeInterval: null,
      scrollBarY: 0,
      transitionTl: gsap.timeline(),
      transitionTl2: gsap.timeline(),
    };
  },
  mounted() {
    this.$refs.viewport.addEventListener("wheel", this.onWheel);

    if ("ontouchstart" in window) {
      this.$refs.viewport.addEventListener(
        "touchstart",
        this.touchStartHandler
      );
      this.$refs.viewport.addEventListener("touchmove", this.touchMoveHandler);
      this.$refs.viewport.addEventListener("touchend", this.touchEndHandler);
    }
    this.setTextOnCircle();
  },
  watch: {
    $route(to, from) {
      this.cursorDefault();
      this.$refs.viewport.style.background = "black";
    },
  },
  methods: {
    setTextOnCircle() {
      let letters = document.querySelectorAll(".circle-scroll h6 span");
      var deg = 200;
      for (let index = 0; index < letters.length; index++) {
        const element = letters[index];
        element.style.setProperty("transform", `rotate(${deg}deg)`);

        deg += 360 / letters.length;
      }
    },
    transtionBeforeEnter() {
      this.transitionTl.fromTo(
        this.$refs.transtionElement,
        {
          width: "100vw",
          height: "0",
        },
        {
          height: "100vh",
          duration: 0.9,
        }
      );
      this.transitionTl2.to(this.$refs.transtionElement.children, {
        opacity: 1,
        duration: 0.1,
      });
      setTimeout(() => {}, 1000);
    },
    transitionEnter() {
      this.transitionTl.to(this.$refs.transtionElement, {
        width: 0,
        duration: 0.9,
      });
      this.transitionTl2.to(this.$refs.transtionElement.children, {
        opacity: 0,
        delay: 1,
        duration: 0.3,
      });
    },
    transitionLeave() {},
    cursorDefault() {
      if (this.$refs.circle1.className !== "")
        this.$refs.circle1.className = "enter";
    },
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
        duration: 0.6,
        ease: "circ.out",
      });

      this.updateScrollBar();
    },
    touchStartHandler(event) {
      this.touchStartY = event.changedTouches[0].pageY;
      this.touchStartTimeStamp = event.timeStamp;
    },
    touchMoveHandler(event) {
      if (this.touchStartY) {
        this.touchendY = event.changedTouches[0].pageY;

        let viewportRect = this.$refs.viewport.getClientRects()[0];
        let scrollFactor = 1000 - event.timeStamp + this.touchStartTimeStamp;
        let scrollY =
          viewportRect.y +
          (this.touchendY - this.touchStartY) * (1 + scrollFactor / 1000);
        console.log(event.timeStamp - this.touchStartTimeStamp);
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
          duration: 0.1,
          ease: "circ.out",
        });

        this.touchStartY = event.changedTouches[0].pageY;
        this.touchStartTimeStamp = event.timeStamp;

        this.updateScrollBar(0.1);
      } else {
        this.touchStartY = event.changedTouches[0].pageY;
      }
    },
    touchEndHandler(event) {
      this.touchStartY = null;
      this.touchStartTimeStamp = null;
      // if (this.touchStartY) {
      //   this.touchendY = event.changedTouches[0].pageY;
      //   let viewportRect = this.$refs.viewport.getClientRects()[0];
      //   let scrollY = viewportRect.y + (this.touchendY - this.touchStartY) * 1;
      //   if (
      //     scrollY * -1 > viewportRect.height - window.innerHeight ||
      //     viewportRect.y >= viewportRect.height - window.innerHeight
      //   ) {
      //     scrollY = (viewportRect.height - window.innerHeight) * -1;
      //   }
      //   if (scrollY > 0) {
      //     scrollY = 0;
      //   }
      //   gsap.to(this.$refs.viewport, {
      //     y: scrollY + "px",
      //     duration: 0.2,
      //     ease: "circ.out",
      //   });
      //   this.touchStartY = event.changedTouches[0].pageY;
      //   this.updateScrollBar();
      // } else {
      //   this.touchStartY = event.changedTouches[0].pageY;
      // }
    },
    updateScrollBar(duration = 0.1) {
      const scope = this;
      this.scrollFade = gsap.to(this.$refs.scroll, {
        opacity: 1,
        duration: 1.2,
        reversed: true,
      });
      scope.scrollFade.play();

      if (this.scrollFadeInterval) {
        clearInterval(this.scrollFadeInterval);
      }

      let viewportRect = this.$refs.viewport.getClientRects()[0];
      scope.scrollBarY =
        ((viewportRect.y * -1) / (viewportRect.height - window.innerHeight)) *
        88;
      gsap.to(this.$refs.scrollBar, {
        y: scope.scrollBarY + "vh",
        duration: duration,
        ease: "circ.out",
      });

      this.scrollFadeInterval = setInterval(() => {
        scope.scrollFadeOut = gsap.to(this.$refs.scroll, {
          opacity: 0,
          duration: 0.5,
        });
        scope.scrollFadeOut.play();
        clearInterval(scope.scrollFadeInterval);
      }, 1500);
    },
  },
};
</script>

<style lang="scss">
@import "assets/style/style.scss";
</style>
