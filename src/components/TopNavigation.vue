<template>
  <mo-header height="76px">
    <router-link to="/">
      <img src="../assets/logo.png" width="50px" />
    </router-link>
    <div class="flex-ver-c">
      <a class="npm" href="https://www.npmjs.com/package/moban-ui" target="_blank">
        <svg t="1638626343486" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3286" width="20" height="20">
          <path d="M0 0v1024h1024V0H0z m832 832h-128V320h-192v512H192V192h640v640z" p-id="3287"></path>
        </svg>
      </a>
      <a class="gitee" href="https://gitee.com/tanglaoji/moban-ui" target="_blank">
        <svg t="1638625752185" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2479" width="21" height="21">
          <path
            d="M512 1024C229.248 1024 0 794.752 0 512S229.248 0 512 0s512 229.248 512 512-229.248 512-512 512z m259.168-568.896h-290.752a25.28 25.28 0 0 0-25.28 25.28l-0.032 63.232c0 13.952 11.296 25.28 25.28 25.28h177.024a25.28 25.28 0 0 1 25.28 25.28v12.64a75.84 75.84 0 0 1-75.84 75.84h-240.224a25.28 25.28 0 0 1-25.28-25.28v-240.192a75.84 75.84 0 0 1 75.84-75.84h353.92a25.28 25.28 0 0 0 25.28-25.28l0.064-63.2a25.312 25.312 0 0 0-25.28-25.312H417.184a189.632 189.632 0 0 0-189.632 189.6v353.952c0 13.952 11.328 25.28 25.28 25.28h372.928a170.656 170.656 0 0 0 170.656-170.656v-145.376a25.28 25.28 0 0 0-25.28-25.28z"
            p-id="2480"></path>
        </svg>
      </a>
      <a class="git" href="https://github.com/tanglaoji/moban-ui" target="_blank">
        <svg t="1638625394435" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2313" width="24" height="24">
          <path
            d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9 23.5 23.2 38.1 55.4 38.1 91v112.5c0.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"
            p-id="2314"></path>
        </svg>
      </a>
    </div>
  </mo-header>
</template>

<script>
export default {
  name: "TopNavigation",
};
</script>
<style lang="less" scoped>
.mo-header {
  width: 100%;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  justify-content: space-between;
  border-bottom: 1px solid #dcdfe6;
  svg {
    cursor: pointer;
    margin-left: 14px;
    path {
      fill: gray;
      transition: all 0.3s;
    }
  }
  .npm {
    svg {
      margin-top: 1px;
    }
    &:hover {
      path {
        fill: #cb0000;
      }
    }
  }
  .gitee {
    svg {
      margin-top: 1px;
    }
    &:hover {
      path {
        fill: #c71d23;
      }
    }
  }
  .git {
    &:hover {
      path {
        fill: #333;
      }
    }
  }
}
</style>
