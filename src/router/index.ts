import { createRouter, createWebHashHistory } from "vue-router";

import HomeView from "@/views/HomeView.vue";
import JobResultsView from "@/views/JobResultsView.vue";
import JobView from "@/views/JobView.vue";
import TeamsView from "@/views/TeamsView.vue";
import LocationsView from "@/views/LocationsView.vue";
import LifeAtUAView from "@/views/LifeAtUAView.vue";
import HowWeHireView from "@/views/HowWeHireView.vue";
import StudentsView from "@/views/StudentsView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/jobs/results",
    name: "JobResults",
    component: JobResultsView,
  },
  {
    path: "/jobs/results/:id",
    name: "JobListing",
    component: JobView,
  },
  {
    path: "/teams",
    name: "Teams",
    component: TeamsView,
  },
  {
    path: "/locations",
    name: "Locations",
    component: LocationsView,
  },
  {
    path: "/life",
    name: "Life",
    component: LifeAtUAView,
  },
  {
    path: "/hire",
    name: "Hire",
    component: HowWeHireView,
  },
  {
    path: "/students",
    name: "Students",
    component: StudentsView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0, left: 0, behavior: "smooth" };
  },
});

export default router;
