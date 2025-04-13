<template>
    <div class="day" :class="{ isCompleted: day.isCompleted === true }" @click="$emit('setDayComplete', day)">
        <p> {{ day.date }} </p>
    </div>
</template>

<script>
    export default {
        props: {
            day: { 
              type: Object,
              required: true  
            }
        }
    }
</script>

<style>
    .day {
        width: 100px;
        height: 50px;
        border: 1px solid #fff;
        background-color: #1090c2;
        color: #fff;
        padding: 10px;
        font-size: 12px;
        cursor: pointer;
        border-radius: 10px;
        user-select: none;
    }

    .day.isCompleted {
        background-color: #4caf50;
    }

</style>    