<script lang="tsx" setup>
import useSideBarStore from "@/stores/useSideBarStore";
import { NavLinks } from "@/types";
import LightDarkSwitch from "./LightDarkSwitch.vue";
import Sidebar from "./Sidebar.vue";

const { setIsShownToTrue } = useSideBarStore();

const links: ReadonlyArray<NavLinks> = [{ path: "/", text: "Home" }];
</script>

<template>
  <nav class="bg-blue-600 dark:bg-blue-300 text-gray-50 dark:text-gray-900">
    <div class="w-5/6 max-w-screen-xl">
      <div data-padding-layer class="py-2 px-6">
        <div data-content-layer class="flex justify-around">
          <div data-hamburger-menu @click="setIsShownToTrue">
            <HambugerIcon />
          </div>
          <div class="w-2/5 lg:w-4/5">
            <div data-padding-layer class="py-2 px-6">
              <ul data-content-layer class="flex gap-4 items-center">
                <template v-for="{ path, text } of links">
                  <li class="hover:bg-blue-400 dark:hover:bg-blue-600">
                    <div class="px-3 py-1">
                      <a class="text-lg" :href="path">{{ text }}</a>
                    </div>
                  </li>
                </template>
              </ul>
            </div>
          </div>
          <LightDarkSwitch />
        </div>
      </div>
    </div>
  </nav>

  <Sidebar :links="links" />
</template>

<script lang="tsx">
export default {
  components: {
    HambugerIcon() {
      return (
        <svg viewBox="0 0 24 24" class="w-12 h-full">
          <path
            fill="currentColor"
            d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
          ></path>
        </svg>
      );
    },
  },
};
</script>
