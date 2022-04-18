<template>
    <div class="about">
        <div class="photo">
            <!-- <img :src="image" :alt="name" /> -->
            <Loader 
                v-if="imageLoading"
                absolute />
            <div 
                class="img"
                :style="{backgroundImage: `url(https://avatars.githubusercontent.com/u/39684556?s=400&u=7b7aca1f65f8d9be18ea20c2db3d4b87cb2fab13&v=4)`}"
                > 
            </div>
        </div>
        <div class="name">
            {{name}}
        </div>
        <div>{{email}}</div>
        <!-- <div>{{blog}}</div>
        <div>{{git}}</div> -->
        <div>{{phone}}</div>

        <div class="button">
            <div 
                class="blog"
                @click="goBlog">
                blog
            </div>
            <div 
                class="git"
                @click="goGit">
                git
            </div>
        </div>
    </div>
</template>

<script> 
import {mapState} from 'vuex'
import Loader from "../components/Loader.vue"

export default {
    data(){
        return {
            imageLoading: true
        }
    },
    computed:{
        ...mapState('about', [
            'image',
            'name',
            'email',
            'blog',
            'git',
            'phone'
        ])
        // image() {
        //     return this.$store.state.about.image
        // },
        // name() {
        //     return this.$store.state.about.name
        // },
        // email() {
        //     return this.$store.state.about.email
        // },
        // blog() {
        //     return this.$store.state.about.blog
        // },
        // git() {
        //     return this.$store.state.about.git
        // },
        // phone() {
        //     return this.$store.state.about.phone
        // }
    },
    mounted() {
        this.init()
    },
    methods: {
        async init(){
            await this.$loadImage(this.image)
            this.imageLoading = false
        },
        goBlog(){
            window.open(this.$store.state.about.blog)
        },
        goGit(){
            window.open(this.$store.state.about.git)
        }
    },
}
</script>

<style lang="scss" scoped>
// @import "../scss/main";

    .about{
        text-align: center;
        position: relative;
        .photo{
            width: 300px;
            height: 300px;
            margin: 40px auto 20px;
            padding: 30px;
            border: 10px solid $gray-300;
            border-radius: 50%;
            box-sizing: border-box;
            background-color: $gray-200;
            position: relative;
            img{
                width: 100%;
            }
            .img{
                width: 100%;
                height: 100%;
                border-radius: 50%;
                background-position: center;
            }
        }
        .name{
            font-size: 40px;
            font-family: "Oswald", sans-serif;
            margin-bottom: 20px;
        }
        .button{
            position: relative;
            justify-content: center;
            display: flex;

            .blog{
                border: 2px solid $gray-300;
                border-radius: 10%;
                width: 50px;
                margin-right: 5px;
                cursor: pointer;
            }
            .git{
                border: 2px solid $gray-300;
                border-radius: 10%;
                width: 50px;
                cursor: pointer;
            }
        }
    }
</style>