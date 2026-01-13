<script setup lang="ts">
const {
  color = '#747474',
  size = '100px',
  thickness = '42',
} = defineProps<{
  size?: string;
  color?: string;
  thickness?: string;
}>();
</script>

<template>
  <svg
    class="svg_loading"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    preserveAspectRatio="xMidYMid"
    :width="size"
    :height="size"
    style="shape-rendering: auto; display: block; background: transparent"
  >
    <g data-idx="1">
      <path
        stroke="3"
        :fill="color"
        :d="`M10 50A40 40 0 0 0 90 50A40 ${thickness} 0 0 1 10 50`"
        data-idx="2"
        transform="matrix(0.18737521932731516,0.9822884134418163,-0.9822884134418163,0.18737521932731516,90.72794811916688,-7.670556857783893)"
      ></path>
      <g data-idx="4"></g>
    </g>
  </svg>
</template>

<style lang="css" scoped>
.svg_loading {
  animation: svgLoading 1s linear infinite;
}

@keyframes svgLoading {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
