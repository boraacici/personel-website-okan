<template>
  <div class="about">
    <div class="about-me">
      <div class="photo">
        <img src="../assets/images/okanuix.jpg" alt />
      </div>
      <div class="me">
        <h1>
          PRODUCT
          <span>UI UX</span>
        </h1>
        <h2>DESIGNER</h2>
        <p class="who-am-i">I am Okan Yıkmış</p>
        <p>I’m Bogdan, a self-taught digital product designer, working in the industry for over 5 years.</p>
        <p>Focused on transforming ideas into efficient user experiences, packaged in accessible and visually pleasing interfaces. I’m deeply passionate about-me product design at both a strategic and hands-on level. On the other hand, I have the knowledge to bridge the gap between design and implementation and build maintainable, fast, and accessible interfaces.</p>
      </div>
    </div>
    <div class="extras">
      <div class="design-direct">
        <img src="../assets/images/design-direct.jpg" alt />
        <h1 style=" left: 4vw; margin-top: 16vh;">I DESIGN &</h1>
        <h1 style=" margin-top: 30vh; margin-left: 13vw; ">DIRECT</h1>
      </div>
      <div class="do-something-great">
        <img src="../assets/images/do-something-great.jpg" alt />
        <div class="categories">
          <ul>
            <li>Brand Strategy</li>
            <li>Product Strategy</li>
            <li>Research & Analysis</li>
            <li>Service Design</li>
            <li>Content Strategy</li>
            <li>Venture Building</li>
          </ul>
          <ul>
            <li>UX / UI</li>
            <li>Web Design</li>
            <li>App Design</li>
            <li>Visual Identities</li>
            <li>Interaction Design</li>
            <li>Motion Design</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="contact-me">
      <div class="lets-do-together">
        <img src="../assets/images/hello.jpg" alt />
        <p>Let’s do a project together</p>
        <span>sayhello@okan.co</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.about-me {
  margin-top: 20vh;
  padding-left: 14vw;
  padding-right: 12vw;
  display: flex;

  .photo {
    display: inline-block;
    margin-right: 8vw;

    img {
      height: 700px;
    }
  }

  .me {
    padding-top: 7vh;

    h1 {
      font-family: Gilroy;
      font-style: normal;
      font-weight: bold;
      font-size: 100px;
      line-height: 124px;
      margin-left: -17vw;

      span {
        font-family: Gilroy;
        font-style: normal;
        font-weight: bold;
        font-size: 100px;
        line-height: 124px;
      }
    }

    h2 {
      font-family: Gilroy;
      font-style: normal;
      font-weight: bold;
      font-size: 100px;
      line-height: 124px;
      margin-left: -3vw;
    }

    .who-am-i {
      font-family: Gilroy;
      font-style: normal;
      font-weight: normal;
      font-size: 32px;
      line-height: 38px;

      color: #ffffff;
    }

    p {
      font-family: Gilroy;
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 28px;
      /* or 156% */

      letter-spacing: 0.8px;

      color: #ffffff;
    }
  }
}

.extras {
  display: flex;

  & > div {
    width: 40%;
  }

  .design-direct {
    margin-top: 291px;
    display: flex;

    img {
      opacity: 0.6;
    }

    h1 {
      font-family: Gilroy;
      font-style: normal;
      font-weight: bold;
      font-size: 100px;
      line-height: 124px;
      position: absolute;
    }
  }

  .do-something-great {
    .categories {
      display: flex;
      font-family: Gilroy;
      font-style: normal;
      font-weight: normal;
      font-size: 28px;
      line-height: 34px;

      color: #ffffff;

      ul {
        margin-right: 7vw;

        li {
          margin-bottom: 3vh;
        }
      }
    }
  }
}

.contact-me {
  .lets-do-together {
    text-align: center;
    margin-bottom: 100px;

    p {
      font-family: Gilroy;
      font-style: normal;
      font-weight: bold;
      font-size: 50px;
      line-height: 28px;
      /* identical to box height, or 56% */

      color: #ffffff;
      position: relative;
      margin-top: -110px;
    }

    span {
      font-family: Gilroy;
      font-style: normal;
      font-weight: 300;
      font-size: 32px;
      line-height: 28px;
      /* identical to box height, or 87% */
      color: #ffffff;
    }
  }
}
</style>