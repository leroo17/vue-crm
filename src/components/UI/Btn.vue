<template>
    <button class="task_btn">
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: 'task_btn'
    }
</script>

<style>
    .task_btn {
        height: 20px;
        width: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: transparent;
        border: 1px solid #fff;
        cursor: pointer;
        border-radius: 5px;
        position: relative;
    }
</style>    