<template>
  <header>
    <nav class="navbar bg-custom fixed shadow-sm z-10">
      <!-- START (left - brand only) -->
      <div class="navbar-start">
        <a
          href="/"
          class="btn hover:bg-cabin border-none rounded-md btn-ghost text-2xl"
        >
          Mount Maroon View Farm Stay
        </a>
      </div>

      <!-- END (right - menu and mobile dropdown) -->
      <div class="navbar-end">
        <!-- Desktop menu -->
        <ul
          class="menu menu-horizontal text-fog font-semibold px-4 py-5 text-xl hidden lg:flex"
        >
          <li class="hover:bg-cabin rounded-md">
            <router-link to="/">Home</router-link>
          </li>
          <li class="hover:bg-cabin rounded-md">
            <router-link to="/gallery">Gallery</router-link>
          </li>
          <li class="hover:bg-cabin rounded-md">
            <router-link to="/contact">Contact Us</router-link>
          </li>
          <li class="hover:bg-cabin rounded-md">
            <router-link to="/book">Book</router-link>
          </li>
          <li class="hover:bg-cabin rounded-md">
            <router-link to="/explore">Explore</router-link>
          </li>
        </ul>

        <!-- Mobile dropdown -->
        <div class="dropdown dropdown-end lg:hidden">
          <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
          <ul
            tabindex="0"
            class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-custom text-fog rounded-box w-52"
          >
            <li class="hover:bg-cabin rounded-lg">
              <router-link to="/">Home</router-link>
            </li>
            <li class="hover:bg-cabin rounded-lg">
              <router-link to="/gallery">Gallery</router-link>
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
        </div>
      </div>
    </nav>
  </header>
</template>

<script></script>

<style></style>
