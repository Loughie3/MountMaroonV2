<template>
  <footer
    class="footer footer-horizontal footer-center bg-custom text-base-content rounded p-5 mt-20"
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
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            class="fill-current"
          >
            <path
              d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm5.25-.75a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5z"
            />
          </svg>
        </a>
        <a
          href="https://www.facebook.com/p/Mt-Maroon-View-Farm-Stay-100086182662778/"
        >
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
