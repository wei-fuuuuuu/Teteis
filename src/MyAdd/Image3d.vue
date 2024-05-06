<script setup>
import {computed, ref} from 'vue';
import { useMouseInElement } from '@vueuse/core';

const target = ref(null)


const { elementX, elementY, isOutside, elementHeight, elementWidth} = 
  useMouseInElement(target);

const cardTransform = computed(() => {
  const MAX_ROTATION = 6

  const rX = (
    MAX_ROTATION / 2 - 
    (elementY.value / elementHeight.value) * MAX_ROTATION
  ).toFixed(2)

  const rY = ( 
    (elementX.value / elementHeight.value) * MAX_ROTATION - 
    MAX_ROTATION / 2
  ).toFixed(2)

  return `perspective(${elementWidth.value}px) rotateX(${rX}deg) rotateY(${rY}deg)`
})
</script>


<template>
    <div  ref="target" :style="{transform: cardTransform, transition: 'tarnsform 0.25s ease-out'}">
        <slot>
          no image
        </slot>
    </div>
</template>

