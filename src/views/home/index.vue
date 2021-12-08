<template>
  <div class="home">
    <div class="top-banner">
      <svg width="100%" viewBox="0 0 1440 400" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="5%" stop-color="#002bdc88"></stop>
            <stop offset="95%" stop-color="#32ded488"></stop>
          </linearGradient>
        </defs>
        <path
          d="M 0,400 C 0,400 0,133 0,133 C 95.03571428571428,150.85714285714286 190.07142857142856,168.71428571428572 293,152 C 395.92857142857144,135.28571428571428 506.75,83.99999999999999 657,90 C 807.25,96.00000000000001 996.9285714285713,159.28571428571428 1134,176 C 1271.0714285714287,192.71428571428572 1355.5357142857142,162.85714285714286 1440,133 C 1440,133 1440,400 1440,400 Z"
          stroke="none" stroke-width="0" fill="url(#gradient)" class="transition-all duration-300 ease-in-out delay-150 path-0"></path>
        <defs>
          <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="5%" stop-color="#002bdcff"></stop>
            <stop offset="95%" stop-color="#32ded4ff"></stop>
          </linearGradient>
        </defs>
        <path
          d="M 0,400 C 0,400 0,266 0,266 C 88.5,256.7142857142857 177,247.42857142857144 316,258 C 455,268.57142857142856 644.5,298.99999999999994 765,307 C 885.5,315.00000000000006 937,300.5714285714286 1038,290 C 1139,279.4285714285714 1289.5,272.71428571428567 1440,266 C 1440,266 1440,400 1440,400 Z"
          stroke="none" stroke-width="0" fill="url(#gradient)" class="transition-all duration-300 ease-in-out delay-150 path-1"></path>
      </svg>
      <div class="welcome">
        <div class="title">Moban UI</div>
        <div style="height: 40px">一套全新的无限自定义组件库</div>
        <mo-button type="primary" @click="handleStartUsing">开始使用</mo-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  methods: {
    handleStartUsing() {
      this.$router.push("/doc/installation");
    },
  },
};
</script>
<style lang="less" scoped>
.home {
  background-color: #f1f1f1;
  .top-banner {
    position: relative;
    background: #fff;
    height: calc(100vh - 76px);
    .welcome {
      z-index: 1;
      display: flex;
      position: relative;
      align-items: center;
      flex-direction: column;
      .title {
        font-size: 48px;
        font-weight: bold;
        white-space: nowrap;
        padding: 160px 0 30px 0;
      }
    }
    svg {
      left: 0;
      bottom: 0;
      position: absolute;
    }
  }
}
</style>