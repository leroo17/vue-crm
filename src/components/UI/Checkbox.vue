<template>
    <label class="checkbox-wrapper">
      <input
        class="inputCheckbox"
        type="checkbox"
        v-bind="$attrs"
        :checked="modelValue"
        @change="$emit('update:modelValue', $event.target.checked)"
        hidden
      />
      <slot name="icon"></slot>
      <slot name="text"></slot>
    </label>
  </template>
  
  <script>
  export default {
    name: 'InputCheckbox',
    inheritAttrs: false,
    props: {
      modelValue: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      clickFn: (event) => {
        console.log(event.target);
        
      }
    }
  }
  </script>
  
  <style scoped>
  .checkbox-wrapper {
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    user-select: none;
  }
  
  .inputImages {
    width: 24px;
    height: 24px;
    fill: currentColor;
    color: #f54510;
    display: inline-block;
    vertical-align: middle;
    --svg-icon-color: #f54510;
    fill: #f54510 !important;

  }


  svg path {
    fill: inherit;
    stroke: inherit;
    stroke-width: inherit;
    transform: inherit;
    --svg-icon-color: #f54510;
  }

  </style>