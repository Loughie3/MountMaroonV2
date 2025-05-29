<template>
  <!--Fix bug when clicking carousel-->
  <div class="relative mx-auto w-full max-w-[900px]">
    <img
      class="w-full h-[300px] sm:h-[500px] object-cover rounded-lg"
      :src="house[currentIndex].src"
    />

    <!-- Prev Button -->
    <button
      v-if="currentIndex"
      @click="previousImage"
      class="absolute top-1/2 left-0 transform -translate-y-1/2 bg-base-200 text-white hover:bg-cabin cursor-pointer font-bold px-4 py-2 rounded shadow"
    >
      Prev
    </button>

    <!-- Next Button -->
    <button
      @click="nextImage"
      class="absolute top-1/2 right-0 transform -translate-y-1/2 bg-base-200 text-white hover:bg-cabin cursor-pointer font-bold px-4 py-2 rounded shadow"
    >
      Next
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0,
      house: [
        { src: "./src/assets/OutsideHouseView.jpg" },
        { src: "./src/assets/House1.avif" },
        { src: "./src/assets/House2.avif" },
        { src: "./src/assets/House3.avif" },
        { src: "./src/assets/House4.avif" },
      ],
    };
  },
  methods: {
    nextImage() {
      this.currentIndex++;
    },
    previousImage() {
      this.currentIndex--;
    },
  },
};
</script>

<style></style>
