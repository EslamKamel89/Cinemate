<script setup lang="ts"></script>
<template>
  <div class="flex flex-col min-h-screen">
    <nav
      class="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700"
    >
      <div
        class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
      >
        <NuxtLink
          to="/"
          class="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src="/images/logo.png" class="h-14" alt="Cinemate Logo" />
          <span
            class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
            >Flowbite</span
          >
        </NuxtLink>
        <button
          data-collapse-toggle="navbar-solid-bg"
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-solid-bg"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div id="navbar-solid-bg" class="hidden w-full md:block md:w-auto">
          <ul
            class="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 space-y-4 md:space-y-0 md:space-x-4 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700"
          >
            <li>
              <NuxtLink
                to="/"
                class="block !pb-2 pt-2 px-3 md:px-0 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent"
                aria-current="page"
                active-class="!px-3  border-b-1 border-white "
                >Home</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/search"
                class="block !pb-2 pt-2 px-3 md:px-0 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent"
                aria-current="page"
                active-class="!px-3 border-b-1  border-white"
                >Search</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/now-playing"
                class="block !pb-2 pt-2 px-3 md:px-0 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent"
                aria-current="page"
                active-class="!px-3 border-b-1  border-white"
                >Now Playing</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/top-rated"
                class="block !pb-2 pt-2 px-3 md:px-0 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent"
                aria-current="page"
                active-class="!px-3 border-b-1  border-white"
                >Top Rated</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/upcoming"
                class="block !pb-2 pt-2 px-3 md:px-0 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent"
                aria-current="page"
                active-class="!px-3 border-b-1  border-white"
                >Upcoming</NuxtLink
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <main class="flex-1">
      <slot />
    </main>

    <footer class="bg-white rounded-lg shadow-sm m-4 dark:bg-gray-800">
      <div
        class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between"
      >
        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400"
          >© 2023
          <a href="https://islamdev.com/" class="hover:underline">IslamDev™</a>.
          All Rights Reserved.
        </span>
        <ul
          class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0"
        >
          <li>
            <a href="#" class="hover:underline me-4 md:me-6">About</a>
          </li>
          <li>
            <a href="#" class="hover:underline me-4 md:me-6">Privacy Policy</a>
          </li>
          <li>
            <a href="#" class="hover:underline me-4 md:me-6">Licensing</a>
          </li>
          <li>
            <a href="#" class="hover:underline">Contact</a>
          </li>
        </ul>
      </div>
    </footer>
  </div>
</template>
