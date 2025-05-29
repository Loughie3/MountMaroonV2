<template>
  <header>
    <nav class="navbar bg-cabin fixed shadow-sm z-10">
      <div class="flex-1">
        <a href="/" class="btn btn-ghost text-2xl">Mount Maroon Farm Stay</a>
      </div>
      <div class="flex-none">
        <ul
          class="menu menu-horizontal text-fog font-semibold px-4 py-5 text-xl"
        >
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
      </div>
    </nav>
  </header>
</template>

<script></script>

<style></style>
