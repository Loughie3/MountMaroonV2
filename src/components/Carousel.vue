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
      class="absolute top-1/2 left-0 transform -translate-y-1/2 bg-custom text-white hover:bg-cabin cursor-pointer font-bold px-4 py-2 rounded shadow"
    >
      Prev
    </button>

    <!-- Next Button -->
    <button
      @click="nextImage"
      class="absolute top-1/2 right-0 transform -translate-y-1/2 bg-custom text-white hover:bg-cabin cursor-pointer font-bold px-4 py-2 rounded shadow"
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
        { src: "./src/assets/horse1.avif" },
        { src: "./src/assets/sheep.avif" },
        { src: "./src/assets/horse.jpeg" },
      ],
    };
  },
  //This method gets rid of the bug where the image would get stuck if I kept pressing "next"
  methods: {
    nextImage() {
      if (this.currentIndex < this.house.length - 1) {
        this.currentIndex++;
      }
    },
    previousImage() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
      }
    },
  },
};
</script>

<style></style>
