// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";
import Explore from "./views/Explore.vue";
import Contact from "./views/Contact.vue";
import Book from "./views/Book.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/explore", name: "Explore", component: Explore },
  { path: "/contact", name: "Contact", component: Contact },
  { path: "/book", name: "Book", component: Book },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
