<template>
    <label class="label_app">
        <slot></slot>
    </label>
</template>

<script>
    export default {
        name: 'LabelApp',
        props: {
            value: [String, Number]
        }
    }
</script>

<style>
    .label_app {
        display: flex;
        align-items: center;
        gap: 10px;
    }
</style>    