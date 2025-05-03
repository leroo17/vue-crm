<template>
    <h3>{{ category }}</h3>
    <div class="inputInnerDiv">
        <div v-for="option in options" :key="option.id">
            <LabelApp v-if="option.type === 'select'" :for="'select-' + option.id" >{{ option.name }}
                <SelectApp :for="'select-' + option.id"></SelectApp>
            </LabelApp>
            <InputCheckbox v-if="option.type === 'checkbox'">
                <template #icon>
                    <img class="inputImages" :src="getIconPath(option.icon)">
                </template>
                <template #text>{{ option.name }}</template>
            </InputCheckbox>
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            options: { 
              type: Array,
              required: true
            },
            category: {
                type: String,
                required: true
            }
        },
        methods: {
            getIconPath(iconName) {
            const icons = require.context('@/assets/icons', false, /\.svg$/);
            try {
            return icons(`./${iconName}.svg`);
            } catch (error) {
            console.error(`Иконка "${iconName}" не найдена`, error);
            return ''; // можно вернуть иконку-заглушку
            }
        }
        }
    }
</script>
<style>

</style>