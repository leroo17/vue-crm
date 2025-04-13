<template>
    <p>Dashboard</p>
    <DayCalendar :days="days" @setDayComplete="setDayComplete"></DayCalendar>
</template>

<script>

    import DayCalendar from '@/components/micro_components/DayCalendar.vue';

    export default {
        components: { DayCalendar },
        data() {
            return {
                days: [],
                lastDayId: Number(localStorage.getItem('lastDayId')) || 0,
            };
        },
        mounted() {
            const savedDays = localStorage.getItem('days');
            if (savedDays) {
                this.days = JSON.parse(savedDays);
            } else {
                this.days = [
                    { id: 0, date: '2025-04-10', isCompleted: false },
                    { id: 1, date: '2025-04-11', isCompleted: false },
                    { id: 2, date: '2025-04-12', isCompleted: false }
                ];
                this.saveDays();
            }

            // if (!this.lastDayId) {
            //     this.lastDayId = this.days.length ? Math.max(...this.days.map(t => t.id)) : 0;
            //     localStorage.setItem('lastDayId', this.lastDayId);
            // }
        },
        methods: {
            saveDays() {
                localStorage.setItem('days', JSON.stringify(this.days));
            },
            setDayComplete(day) {
                day.isCompleted = day.isCompleted === false ? true : false;
                console.log('Wow!');
            }
        }
    }
</script>

<style>

</style>    