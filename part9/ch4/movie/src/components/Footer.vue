<template>
    <footer>
        <Logo />
        <a href="https://github.com/jychoi9712">
            (c){{new Date().getFullYear()}} jychoi9712
        </a>
    </footer>
</template>

<script>
import Logo from "./Logo.vue"
export default {
    components:{
        Logo
    }
}
</script>

<style lang="scss" scoped>
    footer{
        padding: 70px 0;
        text-align: center;
        opacity: .3;
        .logo{
            display: block;
            margin-bottom: 40px;
        }
    }
</style>