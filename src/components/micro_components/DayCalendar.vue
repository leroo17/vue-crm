<template>
    <div class="calendar_inner">
        <h2>Апрель 2025</h2>
        <div class="calendar">
            <div class="calendar_month">
                <DayItem v-for="day in days" :day="day" :key="day.id" @setDayComplete="$emit('setDayComplete', day)"></DayItem>
            </div>
        </div>
    </div>
</template>

<script>

    import DayItem from './DayItem.vue';

    export default {
        props: {
            days: {
                type: Array,
                required: true
            }
        },
        components: {
            DayItem
        }
    }

</script>

<style>

    .calendar_inner {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .calendar_month {
        display: grid;
        grid-template-rows: repeat(5, 50px);
        grid-template-columns: repeat(7, 100px);
    }
</style>    