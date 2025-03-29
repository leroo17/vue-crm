<template>
    <header class="header">
        <div class="container containerHeader">
            <Menu></Menu>
        </div>
    </header>
</template>

<script>
    import Menu from './Menu.vue'

    export default {
        components: {
            Menu
        }
    }
</script>

<style>
    .header {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #1090c2;
    }
</style>    