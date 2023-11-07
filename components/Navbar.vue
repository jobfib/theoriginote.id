<script setup lang="ts">
const showProductMenu = ref<boolean>(false);
</script>

<template>
  <nav
    class="bg-white z-30 border-gray-200 dark:border-gray-600 dark:bg-gray-900"
  >
    <div
      class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl py-3 md:py-6 px-3 md:px-12"
    >
      <div class="hidden md:block">
        <ul
          class="flex font-semibold flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
        >
          <li>
            <a
              href="#"
              class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
              aria-current="page"
              >Home</a
            >
          </li>
          <li>
            <button
              @click="showProductMenu = !showProductMenu"
              id="mega-menu-full-dropdown-button"
              data-collapse-toggle="mega-menu-full-dropdown"
              class="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded md:w-auto hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
            >
              Produk
              <svg
                v-if="!showProductMenu"
                class="w-2.5 h-2.5 ml-2.5 mt-[3px]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
              <svg
                v-if="showProductMenu"
                class="w-2.5 h-2.5 ml-2.5 mt-0.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 8"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 7 7.674 1.3a.91.91 0 0 0-1.348 0L1 7"
                />
              </svg>
            </button>
          </li>
        </ul>
      </div>
      <NuxtLink to="/" class="flex items-center">
        <img
          src="/image/the-originote.png"
          alt="The Originote"
          title="The Originote"
          class="w-44"
        />
      </NuxtLink>
      <button
        @click="showProductMenu = !showProductMenu"
        data-collapse-toggle="mega-menu-full"
        type="button"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="mega-menu-full"
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
      <div
        id="mega-menu-full"
        class="items-center justify-between font-medium hidden w-full md:flex md:w-auto md:order-1"
      >
        <ul
          class="flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
        >
          <li>
            <a
              href="#"
              class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
              >About
            </a>
          </li>
          <li>
            <a
              href="#"
              class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
              >Blog</a
            >
          </li>
        </ul>
      </div>
    </div>
    <div
      v-if="showProductMenu"
      class="mt-1 border-gray-200 z-50 shadow-sm bg-gray-50 md:bg-white border-y dark:bg-gray-800 dark:border-gray-600"
    >
      <div
        class="grid max-w-screen-xl px-4 py-5 mx-auto text-gray-900 dark:text-white sm:grid-cols-2 md:px-6"
      >
        <ul>
          <li>
            <a
              href="#"
              class="p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-3"
            >
              <img
                src="/image/mois.jpg"
                alt="Moisturizer"
                title="Moisturizer"
                class="w-20 md:w-14 rounded-xl"
              />
              <div>
                <div class="font-semibold">Moisturizer</div>
                <span class="text-sm text-gray-500 dark:text-gray-400"
                  >Melembapkan kulit dengan lembut, meninggalkan kesegaran
                  alami.</span
                >
              </div>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-3"
              ><img
                src="/image/bundle.jpg"
                alt="Moisturizer"
                title="Moisturizer"
                class="w-20 md:w-14 rounded-xl"
              />
              <div>
                <div class="font-semibold">Bundles Kit</div>
                <span class="text-sm text-gray-500 dark:text-gray-400"
                  >Paket lengkap perawatan kulit untuk peremajaan efektif.</span
                >
              </div>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-3"
              ><img
                src="/image/sunscreen.jpg"
                alt="Moisturizer"
                title="Moisturizer"
                class="w-20 md:w-14 rounded-xl"
              />
              <div>
                <div class="font-semibold">Sunscreen</div>
                <span class="text-sm text-gray-500 dark:text-gray-400"
                  >Perlindungan kulit dari sinar matahari dengan krim.</span
                >
              </div>
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <a
              href="#"
              class="p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-3"
              ><img
                src="/image/mask.jpg"
                alt="Moisturizer"
                title="Moisturizer"
                class="w-20 md:w-14 rounded-xl"
              />
              <div>
                <div class="font-semibold">Masks</div>
                <span class="text-sm text-gray-500 dark:text-gray-400"
                  >Produk perawatan wajah untuk mempercantik kulit Anda.</span
                >
              </div>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-3"
              ><img
                src="/image/serum.jpg"
                alt="Moisturizer"
                title="Moisturizer"
                class="w-20 md:w-14 rounded-xl"
              />
              <div>
                <div class="font-semibold">Serum</div>
                <span class="text-sm text-gray-500 dark:text-gray-400"
                  >Serum yang menghidrasi kulit dengan formula ringan.</span
                >
              </div>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-3"
              ><img
                src="/image/eye-serum.jpg"
                alt="Moisturizer"
                title="Moisturizer"
                class="w-20 md:w-14 rounded-xl"
              />
              <div>
                <div class="font-semibold">Eye Serum</div>
                <span class="text-sm text-gray-500 dark:text-gray-400"
                  >Serum mata inovatif untuk kulit sekitar yang sensitif.</span
                >
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

