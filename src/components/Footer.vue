<template>
  <footer
    class="footer footer-horizontal footer-center bg-cabin text-base-content rounded p-5 mt-20"
  >
    <nav class="grid grid-flow-col gap-4">
      <ul class="menu menu-horizontal text-fog font-semibold px-4 text-lg">
        <li class="hover:bg-cabin rounded-lg">
          <router-link to="/">Home</router-link>
        </li>
        <li class="hover:bg-cabin rounded-lg">
          <router-link to="/contact">Contact Us</router-link>
        </li>
        <li class="hover:bg-cabin rounded-lg">
          <router-link to="/book">Book</router-link>
        </li>
        <li class="hover:bg-cabin rounded-lg">
          <router-link to="/explore">Explore</router-link>
        </li>
      </ul>
    </nav>
    <nav>
      <div class="grid grid-flow-col gap-4">
        <a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            class="fill-current"
          >
            <path
              d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
            ></path>
          </svg>
        </a>
        <a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            class="fill-current"
          >
            <path
              d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
            ></path>
          </svg>
        </a>
      </div>
    </nav>
  </footer>
</template>

<script>
export default {};
</script>

<style></style>
