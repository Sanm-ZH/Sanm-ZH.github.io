<template>
  <div>
    <Common
      :sidebar="false"
      :isComment="false"
    >
    </Common>
  </div>
</template>

<script>
import Common from "@theme/components/Common.vue";
export default {
  name: "OtherLayout",
  components: {
    Common,
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="css" scope>
a {
  font-weight: 500;
  color: #37aabb;
  text-decoration: none;
}
a > i,
.title > i {
  font-size: 13px !important;
}
.color-button > i {
  font-size: 22.4px;
}
.navbar {
  position: fixed;
  z-index: 20;
  top: 0;
  left: 0;
  right: 0;
  height: 3.6rem;
  box-sizing: border-box;
}
.navbar {
  padding: 0.7rem 1.5rem;
  line-height: 2.2rem;
}
.nav-links a {
  line-height: 1.4rem;
}
</style>