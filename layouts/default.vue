<template>
  <div>
    <nav>
      <NuxtLink to="/" class="bg-red-400 py-2 px-3 text-white">Home</NuxtLink> |
      <NuxtLink to="/about" class="bg-red-400 py-2 px-3 text-white"
        >About</NuxtLink
      >
    </nav>
    <slot></slot>
  </div>
</template>

