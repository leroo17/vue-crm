<template>
    <popup></popup>
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
                    { id: 0, date: '2025-04-01', dayOfWeek: 'tuesday', isCompleted: false },
                    { id: 1, date: '2025-04-02', dayOfWeek: 'wednesday', isCompleted: false },
                    { id: 2, date: '2025-04-03', dayOfWeek: 'thursday', isCompleted: false },
                    { id: 3, date: '2025-04-04', dayOfWeek: 'friday', isCompleted: false },
                    { id: 4, date: '2025-04-05', dayOfWeek: 'saturday', isCompleted: false },
                    { id: 5, date: '2025-04-06', dayOfWeek: 'sunday', isCompleted: false },
                    { id: 6, date: '2025-04-07', dayOfWeek: 'monday', isCompleted: false },
                    { id: 7, date: '2025-04-08', dayOfWeek: 'tuesday', isCompleted: false },
                    { id: 8, date: '2025-04-09', dayOfWeek: 'wednesday', isCompleted: false },
                    { id: 9, date: '2025-04-10', dayOfWeek: 'thursday', isCompleted: false },
                    { id: 10, date: '2025-04-11', dayOfWeek: 'friday', isCompleted: false },
                    { id: 11, date: '2025-04-12', dayOfWeek: 'saturday', isCompleted: false },
                    { id: 12, date: '2025-04-13', dayOfWeek: 'sunday', isCompleted: false },
                    { id: 13, date: '2025-04-14', dayOfWeek: 'monday', isCompleted: false },
                    { id: 14, date: '2025-04-15', dayOfWeek: 'tuesday', isCompleted: false },
                    { id: 15, date: '2025-04-16', dayOfWeek: 'wednesday', isCompleted: false },
                    { id: 16, date: '2025-04-17', dayOfWeek: 'thursday', isCompleted: false },
                    { id: 17, date: '2025-04-18', dayOfWeek: 'friday', isCompleted: false },
                    { id: 18, date: '2025-04-19', dayOfWeek: 'saturday', isCompleted: false },
                    { id: 19, date: '2025-04-20', dayOfWeek: 'sunday', isCompleted: false },
                    { id: 20, date: '2025-04-21', dayOfWeek: 'monday', isCompleted: false },
                    { id: 21, date: '2025-04-22', dayOfWeek: 'tuesday', isCompleted: false },
                    { id: 22, date: '2025-04-23', dayOfWeek: 'wednesday', isCompleted: false },
                    { id: 23, date: '2025-04-24', dayOfWeek: 'thursday', isCompleted: false },
                    { id: 24, date: '2025-04-25', dayOfWeek: 'friday', isCompleted: false },
                    { id: 25, date: '2025-04-26', dayOfWeek: 'saturday', isCompleted: false },
                    { id: 26, date: '2025-04-27', dayOfWeek: 'sunday', isCompleted: false },
                    { id: 27, date: '2025-04-28', dayOfWeek: 'monday', isCompleted: true },
                    { id: 28, date: '2025-04-29', dayOfWeek: 'tuesday', isCompleted: false },
                    { id: 29, date: '2025-04-30', dayOfWeek: 'wednesday', isCompleted: false }
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
                this.saveDays();
                console.log('Wow!');
            }
        }
    }
</script>

<style>

</style>    