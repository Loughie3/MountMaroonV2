<template>
  <main class="bg-fog text-cabin min-h-screen p-20 grid text-center">
    <section>
      <h1 class="my-20 text-4xl font-bold">The Property</h1>
      <div class="grid-cols-1 md:grid-cols-3 grid gap-4">
        <a
          v-for="image in propertyImages"
          :key="image.src"
          :href="image.src"
          class="glightbox"
        >
          <img
            :src="image.src"
            class="overflow-hidden transition-transform duration-300 transform hover:scale-103 cursor-pointer"
            alt="Property image"
          />
        </a>
      </div>
    </section>
    <section>
      <h1 class="my-20 text-4xl font-bold">Animals and wildlife</h1>
      <div class="grid-cols-1 md:grid-cols-3 grid gap-4">
        <a
          v-for="image in animalImages"
          :key="image.src"
          :href="image.src"
          class="glightbox"
        >
          <img
            class="overflow-hidden transition-transform duration-300 transform hover:scale-103"
            :key="image"
            :src="image.src"
          />
        </a>
      </div>
    </section>
    <section>
      <h1 class="my-20 text-4xl font-bold">The House</h1>
      <div class="grid-cols-1 md:grid-cols-3 grid gap-4">
        <a
          v-for="image in houseImages"
          :key="image.src"
          :href="image.src"
          class="glightbox"
        >
          <img
            class="overflow-hidden transition-transform duration-300 transform hover:scale-103"
            :key="image"
            :src="image.src"
          />
        </a>
      </div>
    </section>
  </main>
</template>

<script>
import GLightbox from "glightbox";
export default {
  data() {
    return {
      propertyImages: [
        { src: "./src/assets/Misty.avif" },
        { src: "./src/assets/rainbow.avif" },
        { src: "./src/assets/dam.jpg" },
        { src: "./src/assets/farm.avif" },
        { src: "./src/assets/fire.avif" },
        { src: "./src/assets/view.avif" },
        { src: "./src/assets/Sunset.avif" },
        { src: "./src/assets/mistMountain.jpg" },
        { src: "./src/assets/sunSet.jpg" },
      ],
      animalImages: [
        { src: "./src/assets/lamb.avif" },
        { src: "./src/assets/horse1.avif" },
        { src: "./src/assets/frog.avif" },
        { src: "./src/assets/parrot.avif" },
        { src: "./src/assets/galah.avif" },
        { src: "./src/assets/kangaroo.avif" },
        { src: "./src/assets/sheep.avif" },
        { src: "./src/assets/horse.jpeg" },
        { src: "./src/assets/mistyHorse.jpg" },
      ],
      houseImages: [
        { src: "./src/assets/House1.avif" },
        { src: "./src/assets/House2.avif" },
        { src: "./src/assets/House3.avif" },
        { src: "./src/assets/Boonah.jpg" },
        { src: "./src/assets/OutsideHouse.jpg" },
        { src: "./src/assets/OutsideHouseView.jpg" },
      ],
    };
  },
  mounted() {
    //lightbox settings
    this.lightbox = GLightbox({
      selector: ".glightbox",
    });
  },
};
</script>

<style></style>
