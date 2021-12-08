<template>
  <div class="log-container">
    <div class="change-time">
      <div class="time">{{changeTime}}</div>
    </div>
    <div class="change-content">
      <div class="version flex-ver-c">🎉&nbsp;{{version}}</div>
      <ul class="description">
        <li v-for="item in logList" :key="item">{{item}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "LogContainer",
  props: {
    changeTime: {
      type: String,
      default: "",
    },
    version: {
      type: String,
      default: "",
    },
    logList: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="less" scoped>
.log-container {
  display: flex;
  padding: 30px 0;
  .change-time {
    flex: 1;
    min-width: 100px;
    max-width: 200px;
    box-sizing: border-box;
    padding: 40px 30px 0 30px;
    .time {
      height: 20px;
      width: 100px;
      font-size: 13px;
      text-align: center;
      border-bottom: 1px solid #ccc;
    }
  }
  .change-content {
    flex: 3;
    .version {
      height: 30px;
      font-size: 24px;
      font-weight: bold;
      margin-bottom: 20px;
    }
    .description {
      list-style: disc;
      padding-left: 20px;
      li {
        height: 30px;
      }
    }
  }
}
</style>
