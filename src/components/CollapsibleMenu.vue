<template>
  <div class="collapsible-menu">
    <div class="name flex-row-b" @click="handleFold">
      <span>{{menuName}}</span>
      <i class="mo-icon-arrow-up" :style="`transform: rotate(${icon_rotate}deg);`"></i>
    </div>
    <ul class="panel" :class="is_fold ? 'fold' : 'unfold'">
      <router-link :to="item.path" v-for="item in menuList" :key="item.title" @click="current_path = item.path" :class="$route.path === item.path ? 'selected' : ''">
        <li class="flex-ver-c">
          <i class="item.icon"></i>
          <span>{{item.title}}</span>
        </li>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: "CollapsibleMenu",
  props: {
    menuList: {
      type: Array,
      default: () => [],
    },
    menuName: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      is_fold: false,
      icon_rotate: 0,
      current_path: "",
    };
  },
  methods: {
    handleFold() {
      this.is_fold = !this.is_fold;
      this.icon_rotate = this.is_fold ? 180 : 0;
    },
  },
};
</script>
<style lang="less" scoped>
.collapsible-menu {
  .name {
    color: #333;
    height: 36px;
    cursor: pointer;
    margin-top: 8px;
    font-size: 14px;
    padding: 8px 12px;
    font-weight: bold;
    box-sizing: border-box;
    i {
      font-weight: bold;
      transition: all 0.2s;
    }
    &:hover {
      background-color: #f4f5f5;
    }
  }
  a {
    color: #333;
    display: block;
    text-decoration: none;
    &:hover {
      background-color: #f4f5f5;
    }
  }
  li {
    height: 36px;
    cursor: pointer;
    margin-top: 8px;
    font-size: 14px;
    padding: 8px 12px;
    box-sizing: border-box;
  }
  .selected {
    color: #1482fa;
    background-color: #eaf5ff;
    &:hover {
      background-color: #eaf5ff;
    }
  }
  .panel {
    overflow: hidden;
    transition: all 0.3s;
  }
  .fold {
    transition: all 0.3s;
    animation: fold 0.3s;
    -webkit-animation: fold 0.3s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    -webkit-animation-iteration-count: 1;
    -webkit-animation-fill-mode: forwards;
  }
  .unfold {
    transition: all 0.3s;
    animation: unfold 0.3s;
    -webkit-animation: unfold 0.3s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    -webkit-animation-iteration-count: 1;
    -webkit-animation-fill-mode: forwards;
  }
  @keyframes fold {
    0% {
      opacity: 1;
      max-height: 500px;
    }
    100% {
      opacity: 0;
      max-height: 0px;
    }
  }
  @keyframes unfold {
    0% {
      opacity: 0;
      max-height: 0px;
    }
    100% {
      opacity: 1;
      max-height: 500px;
    }
  }
}
</style>
