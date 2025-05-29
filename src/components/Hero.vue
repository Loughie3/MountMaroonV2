<template>
  <div class="hero min-h-screen brightness-150 bg-[position:bottom]">
    <div class="hero-overlay"></div>
    <div class="hero-content text-neutral-content text-center">
      <div>
        <h1 class="mb-5 text-5xl font-bold">{{ title }}</h1>
        <!--if We don't pass the prop to the parent component - Nothing is Displayed-->
        <button
          v-if="buttonText"
          class="btn bg-base-200 border-none hover:bg-cabin"
        >
          <router-link to="/book">{{ buttonText }}</router-link>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Mount Maroon Farm Stay",
    },
    buttonText: {
      type: String,
      default: "",
    },
  },
};
</script>

<style></style>
