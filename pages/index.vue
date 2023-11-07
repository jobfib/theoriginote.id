<template>
  <div class="bg-white min-h-screen">
    <Carousel />

    <section class="bg-white dark:bg-gray-900">
      <div class="py-8 px-2 md:px-4 mx-auto max-w-screen-xl lg:py-16">
        <div
          class="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 md:p-12 mb-8"
        >
          <div
            class="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-1.5 rounded-md dark:bg-gray-700 dark:text-blue-400 mb-2"
          >
            <svg
              class="w-5 h-5 mr-1.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 21"
            >
              <path
                d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z"
              />
            </svg>
            Beli Sekarang
          </div>
          <h1
            class="text-gray-900 dark:text-white text-3xl md:text-5xl font-extrabold mb-2"
          >
            Produk Terlaris
          </h1>
          <p
            class="text-sm md:text-lg font-normal text-gray-500 dark:text-gray-400 mb-6"
          >
            The Originote memproduksi produk terlaris dalam perawatan kulit,
            menyediakan formula alami yang menghidrasi, menyegarkan, dan
            mengembalikan kecerahan kulit secara efektif.
          </p>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            <CardProduct></CardProduct>
            <CardProduct></CardProduct>
            <CardProduct></CardProduct>
            <CardProduct></CardProduct>
          </div>
        </div>
        <div class="grid md:grid-cols-2 gap-8">
          <div
            class="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 md:p-12"
          >
            <a
              href="#"
              class="bg-pink-100 text-pink-600 text-xs font-medium inline-flex items-center px-2.5 py-1.5 rounded-md dark:bg-gray-700 dark:text-green-400 mb-2"
            >
              <svg
                class="w-5 h-5 mr-1.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 21"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m12.555 5.117 2.828 2.828M14 16v4m-2-2h4M3 6v4M1 8h4m11.01-6.339 2.828 2.829L3.99 19.339 1.161 16.51 16.01 1.661Z"
                />
                <path
                  fill="currentColor"
                  d="M16 13h-2v2h2v-2ZM10 2H8v2h2V2ZM7 4H5v2h2V4ZM4 2H2v2h2V2Zm15 8h-2v2h2v-2Zm0 5h-2v2h2v-2Z"
                />
              </svg>
              Fresh
            </a>
            <h2
              class="text-gray-900 dark:text-white text-3xl font-extrabold mb-2"
            >
              Produk Terbaru
            </h2>
            <p
              class="text-sm md:text-lg font-normal text-gray-500 dark:text-gray-400 mb-4"
            >
              Produk terbaru dari The Originote adalah rangkaian perawatan kulit
              yang menggunakan bahan alami untuk memberikan kelembaban,
              perlindungan, dan penyegaran maksimal.
            </p>

            <div class="grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-8">
              <CardProduct></CardProduct>
              <CardProduct></CardProduct>
              <CardProduct></CardProduct>
              <CardProduct></CardProduct>
            </div>
          </div>
          <div
            class="bg-[#009a53] dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 md:p-12"
            style="
              background-image: url('https://assets.tokopedia.net/assets-tokopedia-lite/v2/zeus/kratos/b33421a4.svg');
              background-repeat: no-repeat;
              background-size: 60%;
              background-position: top right;
            "
          >
            <div
              class="bg-white text-black text-xs font-medium inline-flex items-center px-2.5 py-1.5 rounded-md dark:bg-gray-700 dark:text-purple-400 mb-2"
            >
              <svg
                class="w-5 h-5 mr-1.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="M18.435 7.546A2.32 2.32 0 0 1 17.7 5.77a3.354 3.354 0 0 0-3.47-3.47 2.322 2.322 0 0 1-1.776-.736 3.357 3.357 0 0 0-4.907 0 2.281 2.281 0 0 1-1.776.736 3.414 3.414 0 0 0-2.489.981 3.372 3.372 0 0 0-.982 2.49 2.319 2.319 0 0 1-.736 1.775 3.36 3.36 0 0 0 0 4.908A2.317 2.317 0 0 1 2.3 14.23a3.356 3.356 0 0 0 3.47 3.47 2.318 2.318 0 0 1 1.777.737 3.36 3.36 0 0 0 4.907 0 2.36 2.36 0 0 1 1.776-.737 3.356 3.356 0 0 0 3.469-3.47 2.319 2.319 0 0 1 .736-1.775 3.359 3.359 0 0 0 0-4.908ZM8.5 5.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm3 9.063a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm2.207-6.856-6 6a1 1 0 0 1-1.414-1.414l6-6a1 1 0 0 1 1.414 1.414Z"
                />
              </svg>
              Hanya di Tokopedia
            </div>
            <h2 class="text-white dark:text-white text-3xl font-extrabold mb-2">
              Promo Cashback
            </h2>
            <p
              class="text-sm md:text-lg font-normal text-white/80 dark:text-gray-400 mb-4"
            >
              Nikmati promo cashback eksklusif di Tokopedia untuk produk
              perawatan kulit The Originote yang alami, membantu mencerahkan,
              dan melembapkan kulit Anda.
            </p>

            <div class="grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-8">
              <CardProduct></CardProduct>
              <CardProduct></CardProduct>
              <CardProduct></CardProduct>
              <CardProduct></CardProduct>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

