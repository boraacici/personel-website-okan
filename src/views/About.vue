<template>
  <div class="about">
    <div class="row">
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
    <div class="row"></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.about {
  .row {
    display: flex;
    flex-basis: 50%;
    padding: 0 400px;
    margin-top: 200px;
  }
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
</style>