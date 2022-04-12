<!-- 조건문과 반복문
<template>
    <li>{{name}}</li>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            default: ''
        }
    }
}
</script>

<style scoped lang="scss">
    h1{
        color: red !important;
    }
</style>
-->

<!-- Computed -->
<template>
    <!-- <section v-if="fruits.length > 0"> -->
    <section v-if="hasFruit">
        <h1>Fruits</h1>
    </section>
    <ul>
        <li 
            v-for="fruit in fruits" 
            :key="fruit">
            {{fruit}}
        </li>
    </ul>
    <section>
        <h1>Reverse Fruits</h1>
    </section>
    <ul>
        <li 
            v-for="fruit in reverseFruits" 
            :key="fruit">
            {{fruit}}
        </li>
    </ul>
</template>

<script>
export default {
    data(){
        return {
            fruits: [
                'Apple', 'Banana', 'Cherry'
            ]
        }
    },
    computed:{
        hasFruit() {
            return this.fruits.length > 0
        },
        reverseFruits() {
            return this.fruits.map(fruit => {
                return fruit.split('').reverse().join('')
            })
        }
    }
}
</script>