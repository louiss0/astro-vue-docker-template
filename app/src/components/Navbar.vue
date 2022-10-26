<script lang="tsx" setup>
import { onMounted } from "vue";
import { NavLinks } from "~/types";
import LightDarkSwitch from "./LightDarkSwitch.vue";
import { useToast } from "primevue/usetoast";
import { ToastSeverity } from "primevue/api";
import useBoolean from "~/composables/useBoolean";
const links: ReadonlyArray<NavLinks> = [{ path: "/", text: "Home" }];

const [showSideBar, openSidebar, closeSidebar] = useBoolean();

const toast = useToast();

onMounted(() => {
  toast.add({
    severity: ToastSeverity.SUCCESS,
    summary: "Project is ready",
    detail: "Time to use prime vue to reach success",
    life: 550,
  });
});
</script>
<template>
  <Toast />
  <nav class="bg-blue-600 dark:bg-blue-300 text-gray-50 dark:text-gray-900">
    <div class="w-5/6 max-w-screen-xl">
      <div data-padding-layer class="py-2 px-6">
        <div data-content-layer class="flex justify-around">
          <div data-hamburger-menu @click="openSidebar">
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
  <Sidebar
    @hide="closeSidebar"
    position="left"
    class="p-sidebar-md"
    :visible="showSideBar"
  >
    <ul class="w-full px-4 py-12 text-lg">
      <li
        v-for="{ path, text } in links"
        class="hover:bg-blue-400 dark:hover:bg-blue-600"
      >
        <a :href="path">{{ text }}</a>
      </li>
    </ul>
  </Sidebar>
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
