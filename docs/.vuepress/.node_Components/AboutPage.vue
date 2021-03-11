<template>
  <div>
    <div
      class="about-head-img-cont"
      :style="{ ...bgImageStyle }"
    >
      <ModuleTransition delay="0.08">
        <p
          v-if="$frontmatter.tagline !== null"
          class="description"
          v-html="$frontmatter.tagline || $description || 'Welcome to your vuePress-theme-reco site'"
        >
        </p>
      </ModuleTransition>
      <component
        v-if="bubbles"
        :is="bubbles"
        :options="options"
        style="position: absolute;top: auto;left: 0px;pointer-events: none;bottom: 0px;"
      />
    </div>
    <ModuleTransition delay="0.08">
      <Content class="about-content-cont" />
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
  computed: {
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
  mounted() {
    import("vue-canvas-effect/src/components/bubbles").then((module) => {
      this.bubbles = module.default;
    });
  },
};
</script>

<style lang="stylus">
@require '../styles/wrapper.styl';

.about-head-img-cont {
  width: 100%;
  font-size: 1.6rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.about-content-cont h2 {
  position: relative;
  padding-left: 0.8rem;

  &::before {
    position: absolute;
    left: 0;
    bottom: 0;
    display: block;
    height: 1.8rem;
    content: '';
    border-left: 5px solid $accentColor;
  }
}

.description {
  font-size: 20px;
  color: #03d9f9;
}
</style>