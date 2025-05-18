<template>
  <main>
    <Hero
      style="background-image: url('src/assets/Boonah.jpg')"
      buttonText="Book Now"
    />
    <!-- Welcome Section -->
    <section class="p-20 mt-10 md:p-20 text-xl">
      <div class="grid md:grid-cols-2 gap-20 items-center">
        <!-- TEXT SIDE -->
        <div>
          <h2 class="text-4xl text-center font-bold mb-6">
            Welcome To Mount Maroon Farm Stay
            <hr class="mt-4" />
          </h2>

          <p class="mb-4 font-bold">
            Nestled in the heart of the Scenic Rim, take a break and unwind at
            this secluded couples retreat. With majestic views of Mt Maroon and
            surrounding mountains.
          </p>
          <p class="mb-4 font-bold">
            *Please note this accommodation is only intended for singles or
            couples*
          </p>
          <p class="mb-4">
            Our farmhouse is the perfect retreat for that getaway, all within
            less than a 90-minute drive from Brisbane/Gold Coast. Only 15
            minutes from Boonah and 3 minutes from Maroon Dam, this picturesque
            farm is ideal for a Scenic Rim getaway, writers retreat, artist
            inspiration, or wedding accommodation.
          </p>
          <p>
            The farmhouse is perched on the highest point of the property,
            commanding 180° views of the valley and mountains. Enjoy the
            changing colours of Mt Maroon from two decks and wander across five
            paddocks.
          </p>
        </div>

        <!-- IMAGE SIDE -->
        <aside>
          <div class="card bg-base-100 shadow-sm">
            <figure>
              <img
                src="/src/assets/Sunset.avif"
                alt="Sunset in Boonah"
                class="w-full h-auto object-cover rounded-lg"
              />
            </figure>
          </div>
        </aside>
      </div>
    </section>

    <!-- The property -->
    <section class="p-20 md:p-20 text-xl">
      <div class="grid md:grid-cols-2 gap-20 items-center">
        <!-- IMAGE SIDE -->
        <aside>
          <div class="card bg-base-100 shadow-sm">
            <figure>
              <video
                src="../assets/video.mp4"
                autoplay
                muted
                loop
                playsinline
                class="w-full h-150 object-cover rounded-lg"
              ></video>
            </figure>
          </div>
        </aside>
        <!-- TEXT SIDE -->
        <div>
          <h2 class="text-4xl text-center font-bold mb-6">
            The Property
            <hr class="mt-4" />
          </h2>
          <p class="mb-4 font-bold">
            There are 24 Sheep and two cheeky horses that love to get a carrot
            or apple. They may even go for a walk with you in the main paddock.
          </p>
          <p class="mb-4">
            Our house is very spacious for a couple with three decks and out
            door undercover areas to enjoy the views. There are fold out tables
            supplied for outdoor dining . Two hammocks available as well . There
            is a HD TV and an open Netflicks account ,but no WiFi or Free to Air
            .Mobile service works well for 4G telstra for hot spotting. The
            kitchen is set up for self-catering and has a microwave, oven,
            kettle and toaster with pantry staples and a well stocked spice
            rack. Or perhaps cook a wood fire pizza.
          </p>
          <p>
            The nearest supermarket is in Boonah, (Drakes IGA) call into Oppy's
            fruit and Veg for local fresh produce. We can recommend the two
            quality butchers in town for supplies. Fire pit outside (weather
            permitting) and being in a rural area, fire restrictions are
            sometimes in place . There is extra wood for sale at the Farm. There
            is an office work space complete with extra monitor (if you need to
            work )
          </p>
        </div>
      </div>
    </section>

    <!-- House Section -->
    <section class="p-20 md:p-20 text-xl">
      <div class="grid md:grid-cols-2 gap-20 items-center">
        <!-- TEXT SIDE -->
        <div>
          <h2 class="text-4xl text-center font-bold mb-6">
            The House
            <hr class="mt-4" />
          </h2>
          <p class="mb-4 font-bold">
            Our house is the perfect retreat for a couple
          </p>
          <p class="mb-4">
            Offering three decks and outdoor undercover areas with stunning
            views. Enjoy outdoor dining with the fold-out tables provided, or
            relax in one of our two hammocks. For entertainment, we have an HD
            TV and an open Netflix account.
          </p>

          <h2 class="text-xl font-semibold mb-2">House Features:</h2>
          <ul class="list-disc list-inside space-y-1">
            <li>1x Queen Sized Bed</li>
            <li>HD TV</li>
            <li>StarLink WiFi</li>
            <li>Netflix Account</li>
            <li>Pizza Oven</li>
            <li>Well Equipped Kitchen</li>
            <li>Oven + Electric Stove Top</li>
            <li>Indoor/Outdoor Fire Pit</li>
            <li>Hammocks</li>
          </ul>
        </div>

        <!-- IMAGE SIDE -->
        <aside>
          <Carousel />
        </aside>
      </div>
    </section>

    <!-- Banner Image Section -->
    <section class="h-[30vh] max-w-screen flex justify-center mt-20 mb-20">
      <img
        src="/src/assets/Banner.avif"
        alt="Sunset Banner"
        class="w-full h-full object-cover"
      />
    </section>

    <!-- Testimonial Section -->
    <section class="mx-5 md:mx-10 lg:mx-40">
      <TestimonialSection />
    </section>
  </main>
</template>

<script>
import Hero from "../components/Hero.vue";
import Carousel from "../components/Carousel.vue";
import TestimonialSection from "../components/TestimonialSection.vue";

export default {
  components: { TestimonialSection, Carousel, Hero },
  data() {},
};
</script>

<style></style>
