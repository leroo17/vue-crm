<template>
    <input :value="value" type="text" class="input_app" @input="updateInput">
        <slot></slot>
    </input>
</template>

<script>
    export default {
        name: 'InputApp',
        props: {
            value: [String, Number]
        },
        methods: {
            updateInput(event) {
                this.$emit('update:value', event.target.value)
            }
        }
    }
</script>

<style>
    .input_app {
        padding: 5px;
        outline: none;
    }
</style>    