<template>
  <div class="about">
    <div class="row" style="margin-left: 100px">
      <div class="my-photo">
        <img src="../assets/images/okanuix.jpg" alt />
      </div>
      <div class="about-me">
        <div class="text text-product"></div>
        <div class="text text-ui-ux"></div>
        <div class="text text-designer"></div>
        <p>
          <span class="bold">Okan Yıkmış</span> is senior product designer, working in the industry for over 10+ Years
        </p>
        <p
          class="p2"
        >I craft interactive stories, responsible for designing interactive experiences and create strategies for services from the customer’s perspective is essential for delivering an end-to-end experience and concept strategies with great care.</p>
        <p class="p2">
          Currently based in Istanbul as a
          <span class="bold">Senior Product Designer</span> for
          <span class="bold">TRT</span>
        </p>
        <p class="p3">Turkish is my mother tongue. I am fluent in english and german.</p>
      </div>
    </div>
    <div class="row my-expertise-background" style="margin-left: -100px">
      <div class="my-expertise-1">
        <div class="title"></div>
        <ul>
          <li>Research & Analysis</li>
          <li>UX Brand Strategies</li>
          <li>Whiteboard Concept Sessions</li>
          <li>Wireframes Moodboards</li>
          <li>Persona Research Interactive</li>
          <li>Screen Prototypes</li>
          <li>Pre-visualization</li>
          <li>Process Customer</li>
          <li>Journey Research</li>
        </ul>
      </div>
      <div class="my-expertise-2">
        <ul>
          <li>Visual Designs & Specs</li>
          <li>Web Design</li>
          <li>App Design</li>
          <li>Visual Identities</li>
          <li>Interaction Design</li>
          <li>Real Prototypes</li>
          <li>Motion Design for UI Elements</li>
        </ul>
      </div>
    </div>
    <div class="row">
      <ul class="brands">
        <li>
          <img src alt />
        </li>
        <li>
          <img src alt />
        </li>
        <li>
          <img src alt />
        </li>
        <li>
          <img src alt />
        </li>
        <li>
          <img src alt />
        </li>
      </ul>
    </div>
    <div class="lets-do">
      <p class="lets">Let’s do a project together</p>
      <a href="mailto: okanyikmis@gmail.com">Contact with me</a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
ul {
  font-family: Gilroy-Light;
  font-size: 24px;
  line-height: 52px;
  /* or 217% */
  color: #ffffff;
  margin-top: 55px;

  li {
    margin-bottom: 5px;
  }
}
.about {
  .row {
    display: flex;
    // flex-basis: 50%;
    flex: 1 1 auto;
    padding: 0 400px;
    margin-top: 200px;
  }
}

.my-expertise-background {
  background: url(../assets/images/my-expertise-background.png);
  background-size: 60% 100%;
  background-repeat: no-repeat;
  background-position: 190px 0px;
}

.my-expertise-1 {
  height: 898px;

  .title {
    background: url(../assets/images/my-expertise.svg);
    background-size: 100% 100%;
    width: 471px;
    height: 99px;
    margin-left: -170px;
  }
}

.my-expertise-2 {
  margin-left: 490px;
  margin-top: 99px;
}

.about-me {
  margin-left: 100px;

  p {
    margin-left: 20px !important;
    font-family: Gilroy-Light;
    font-size: 24px;
    line-height: 38px;
    margin: 30px 0;
    display: flex;
    align-items: center;
    letter-spacing: 0.2px;

    span.bold {
      font-family: Gilroy;
      font-weight: bold;
      display: contents;
    }
  }

  .p2 {
    font-size: 18px;
    line-height: 28px;

    letter-spacing: 0.2px;
  }

  .p3 {
    font-size: 18px;
    line-height: 28px;
    letter-spacing: 0.2px;
    opacity: 0.5;
  }
}

.text {
  display: block;
  background-size: 100% 100%;

  &.text-product {
    display: inline-block;
    background: url(../assets/images/product.svg);
    margin-top: 80px;
    margin-left: -490px;
    width: 455.15px;
    height: 75.2px;
  }

  &.text-ui-ux {
    display: inline-block;
    background: url(../assets/images/ui-ux.svg);
    width: 235.25px;
    height: 71.4px;
    margin-left: 30px;
  }

  &.text-designer {
    background: url(../assets/images/designer.svg);
    width: 464.31px;
    height: 75.2px;
    margin-top: 35px;
  }
}

.lets-do {
  text-align: center;
  margin-bottom: 100px;
}

.lets {
  font-weight: bold;
  font-size: 48px;
  line-height: 28px;
  color: #ffffff;
}

a {
  font-family: Gilroy-Light;
  font-weight: 300;
  font-size: 28px;
  line-height: 28px;
  /* identical to box height, or 100% */
  color: #ffffff;
  text-decoration: none;
  cursor: none;
}
</style>