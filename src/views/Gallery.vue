<template>
  <main class="bg-fog text-cabin min-h-screen p-20 grid text-center">
    <section>
      <h1 class="my-20 text-3xl md:text-4xl font-bold">The Property</h1>
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
      <h1 class="my-20 text-3xl md:text-4xl font-bold">Animals and wildlife</h1>
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
      <h1 class="my-20 text-3xl md:text-4xl font-bold">The House</h1>
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
        { src: "/MountMaroonV2/Misty.avif" },
        { src: "/MountMaroonV2/rainbow.avif" },
        { src: "/MountMaroonV2/dam.jpg" },
        { src: "/MountMaroonV2/farm.avif" },
        { src: "/MountMaroonV2/fire.avif" },
        { src: "/MountMaroonV2/view.avif" },
        { src: "/MountMaroonV2/Sunset.avif" },
        { src: "/MountMaroonV2/mistMountain.jpg" },
        { src: "/MountMaroonV2/sunSet.jpg" },
      ],
      animalImages: [
        { src: "/MountMaroonV2/lamb.avif" },
        { src: "/MountMaroonV2/horse1.avif" },
        { src: "/MountMaroonV2/frog.avif" },
        { src: "/MountMaroonV2/parrot.avif" },
        { src: "/MountMaroonV2/galah.avif" },
        { src: "/MountMaroonV2/kangaroo.avif" },
        { src: "/MountMaroonV2/sheep.avif" },
        { src: "/MountMaroonV2/horse.jpeg" },
        { src: "/MountMaroonV2/mistyHorse.jpg" },
      ],
      houseImages: [
        { src: "/MountMaroonV2/House1.avif" },
        { src: "/MountMaroonV2/House2.avif" },
        { src: "/MountMaroonV2/House3.avif" },
        { src: "/MountMaroonV2/Boonah.jpg" },
        { src: "/MountMaroonV2/OutsideHouse.jpg" },
        { src: "/MountMaroonV2/OutsideHouseView.jpg" },
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
