<template>
  <div>
    <div
      class="hero"
      :style="{ ...bgImageStyle }"
    >
      <component
        v-if="bubbles"
        :is="bubbles"
        :options="options"
      ></component>
    </div>
    <ModuleTransition delay="0.08">
      <Content class="" />
    </ModuleTransition>
  </div>
</template>

<script>
import { ModuleTransition } from "@vuepress-reco/core/lib/components";

export default {
  components: { ModuleTransition },
  data() {
    return {
      bubbles: null,
      options: {},
    };
  },
  mounted() {
    import("vue-canvas-effect/src/components/bubbles").then((module) => {
      this.bubbles = module.default;
    });
  },
  methods: {
    bgImageStyle() {
      const initBgImageStyle = {
        textAlign: "center",
        overflow: "hidden",
        background: `
          url(${
            this.$frontmatter.bgImage
              ? this.$withBase(this.$frontmatter.bgImage)
              : require("../images/bg.svg")
          }) center/cover no-repeat
        `,
      };
      const { bgImageStyle } = this.$frontmatter;

      return bgImageStyle
        ? { ...initBgImageStyle, ...bgImageStyle }
        : initBgImageStyle;
    },
  },
};
</script>