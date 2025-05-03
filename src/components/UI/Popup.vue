<template>
    <div class="popupInner" v-if="showPopup" @click="hidePopup" v-bind="$attrs">
        <div class="Popup" @click.stop>
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Popup',
        inheritAttrs: false,
        props: {
            showPopup: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            hidePopup() {
                this.$emit('update:showPopup', false)
            }
        }
    }
</script>

<style>
    .popupInner {
        position: fixed;
        background-color: #0000008a;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .Popup {
        background-color: #fff;
        border-radius: 20px;
        width: 80%;
        min-width: 400px;
        height: 80%;
        min-height: 400px;
        opacity: 100%;
        padding: 20px;
        z-index: 5;
    }
</style>