<script lang="ts" setup>
import useSideBarStore from "~/stores/useSideBarStore";
import { NavLinks } from "~/types";

const { isShown, setIsShownToFalse } = useSideBarStore();

defineProps<{ links: ReadonlyArray<NavLinks> }>();
</script>

<template>
  <aside class="absolute inset-0 z-50" :aria-hidden="isShown" v-show="isShown">
    <div class="relative w-full h-full">
      <Transition
        enterActiveClass="transform transition-transform duration-300 delay-300 ease-in-out"
        enterFromClass="-translate-x-full"
        leaveToClass="-translate-x-full"
      >
        <div
          v-show="isShown"
          class="absolute top-0 bottom-0 bg-gray-100 w-2/5 lg:w-1/5 z-20"
        >
          <div class="px-4 py-2">
            <div class="flex justify-end" @click="setIsShownToFalse">
              <svg width="32" height="32" viewBox="0 0 24 24">
                <path
                  fill="#888888"
                  d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41z"
                />
              </svg>
            </div>
            <ul role="list">
              <li v-for="{ path, text } of links">
                <div class="py-2 px-6">
                  <a :href="path">{{ text }}</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </Transition>
      <Transition
        enterActiveClass="transform transition-transform duration-400 ease-in-out"
        enterFromClass="scale-0"
        leaveToClass="scale-25"
      >
        <div v-show="isShown" class="w-full h-full z-10 bg-gray-500 opacity-80">
          <div class="sr-only">Backdrop</div>
        </div>
      </Transition>
    </div>
  </aside>
</template>
