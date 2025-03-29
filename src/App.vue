<template>
    <Header></Header>
    <Main></Main>
</template>

<script >
    import Header from './components/Header.vue';
    import Main from './components/Main.vue';

    export default {
        components: {
            Header, Main
        }
    }
</script>

<style>

    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Montserrat', sans-serif;
        font-size: 16px;
        font-weight: 300;
        color: #000;
        background-image: url(../src/images/bc2.jpg);
        background-size: cover;
        background-repeat: no-repeat;
    }

    .container {
        width: 1440px;
        min-height: inherit;
        margin: 0 auto;
        padding: 20px;
        background-color: #fff;
    }

    .containerHeader {
        background-color: transparent;
    }
    
</style>