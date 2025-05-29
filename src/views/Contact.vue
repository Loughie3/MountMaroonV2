<template>
  <main>
    <Hero
      style="background-image: url('src/assets/Outsidehouseview.jpg')"
      title="Contact Us"
    />

    <section
      class="w-full grid grid-cols-1 md:grid-cols-2 p-20 md:p-20 gap-10 md:gap-20 text-cabin"
    >
      <h1
        class="col-span-1 md:col-span-2 text-center font-bold text-2xl md:text-3xl"
      >
        Get in touch
      </h1>

      <div class="flex bg-grey items-center justify-center border-cabin p-12">
        <div class="mx-auto w-full max-w-[550px]">
          <form ref="form" @submit.prevent="sendEmail">
            <div class="mb-5">
              <label
                for="name"
                class="mb-3 block text-base font-bold text-cabin"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                class="w-full text-cabin rounded-md border border-cabin bg-white py-3 px-6 text-base font-medium outline-none focus:border-cabin focus:shadow-md"
              />
            </div>

            <div class="mb-5">
              <label
                for="email"
                class="mb-3 block text-base font-bold text-cabin"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="example@domain.com"
                class="w-full text-cabin rounded-md border border-cabin bg-white py-3 px-6 text-base font-medium outline-none focus:border-cabin focus:shadow-md"
              />
            </div>

            <div class="mb-5">
              <label
                for="subject"
                class="mb-3 block text-base font-bold text-cabin"
              >
                Subject
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="Enter your subject"
                class="w-full text-cabin rounded-md border border-cabin bg-white py-3 px-6 text-base font-medium outline-none focus:border-cabin focus:shadow-md"
              />
            </div>

            <div class="mb-5">
              <label
                for="message"
                class="mb-3 block text-base font-bold text-cabin"
              >
                Message
              </label>
              <textarea
                rows="4"
                name="message"
                id="message"
                placeholder="Type your message"
                class="w-full text-cabin resize-none rounded-md border border-cabin bg-white py-3 px-6 text-base font-medium outline-none focus:border-cabin focus:shadow-md"
              ></textarea>
            </div>

            <div>
              <button
                class="hover:shadow-form rounded-md hover:bg-base-200 cursor-pointer bg-cabin py-3 px-8 text-base font-semibold text-white outline-none"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      <aside><img class="w-full h-auto" src="/src/assets/Misty.avif" /></aside>
    </section>
  </main>
</template>

<script>
import emailjs from "@emailjs/browser";
import Hero from "../components/Hero.vue";
export default {
  components: { Hero },
  methods: {
    sendEmail() {
      emailjs
        .sendForm("service_782v726", "template_4wt4phr", this.$refs.form, {
          publicKey: "7SreG1RwN4Y_f0fzK",
        })
        .then(
          () => {
            console.log("SUCCESS!");
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    },
  },
};
</script>

<style>
/* You can remove or leave this empty */
</style>
