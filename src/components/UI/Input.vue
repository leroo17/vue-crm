<template>
    <input :value="modelValue" class="input_app" @input="updateInput"></input>
</template>

<script>
    export default {
        name: 'input_app',
        props: {
            modelValue: [String, Number]
        },
        methods: {
            updateInput(event) {
                this.$emit('update:modelValue', event.target.value)
            }
        }
    }
</script>

<style>
    .input_app {
        padding: 5px;
        max-width: 40%;
        outline: none;
    }
</style>    