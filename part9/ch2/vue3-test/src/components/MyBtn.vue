<!-- 컴포넌트 -->
<!--
<template>
    <div class="btn"
    :style="{backgroundColor: color}"
    :class="{large:large}">
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        color: {
            type: String,
            default: 'gray'
        },
        large: {
            type: Boolean,
            default: false
        },
        text: {
            type: String,
            default: ''
        }
    }
}
</script>

<style scoped lang="scss">
    .btn{
        display: inline-block;
        margin: 4px;
        padding: 6px 12px;
        border-radius: 4px;
        background-color: gray;
        color: white;
        cursor: pointer;
        &.large{
            font-size: 20px;
            padding: 10px 20px;
        }
    }
</style>
-->


<!-- 컴포넌트 - 속성 상속 -->
<!--
<template>
    <div class="btn">
        <slot></slot>
    </div>
</template>
<script>
export default {
    
}
</script>

<style scoped lang="scss">
    .btn{
        display: inline-block;
        margin: 4px;
        padding: 6px 12px;
        border-radius: 4px;
        background-color: gray;
        color: white;
        cursor: pointer;
    }
</style>
-->

<!--
<template>
    <div class="btn">
        <slot></slot>
    </div>
</template>
<script>
export default {
    inheritAttrs: false
}
</script>

<style scoped lang="scss">
    .btn{
        display: inline-block;
        margin: 4px;
        padding: 6px 12px;
        border-radius: 4px;
        background-color: gray;
        color: white;
        cursor: pointer;
    }
</style>
-->
<!--
<template>
    <div class="btn">
        <slot></slot>
    </div>
    <h1 
        :class="$attrs.class">
    </h1>
</template>
<script>
export default {
    inheritAttrs: false,
    created() {
        console.log(this.$attrs)
    }
}
</script>

<style scoped lang="scss">
    .btn{
        display: inline-block;
        margin: 4px;
        padding: 6px 12px;
        border-radius: 4px;
        background-color: gray;
        color: white;
        cursor: pointer;
    }
</style>
-->
<!--
<template>
    <div class="btn">
        <slot></slot>
    </div>
    <h1 
        v-bind="$attrs">
    </h1>
</template>
<script>
export default {
    inheritAttrs: false,
    created() {
        console.log(this.$attrs)
    }
}
</script>

<style scoped lang="scss">
    .btn{
        display: inline-block;
        margin: 4px;
        padding: 6px 12px;
        border-radius: 4px;
        background-color: gray;
        color: white;
        cursor: pointer;
    }
</style>
-->


<!-- Emit -->
<!--
<template>
    <div class="btn" @dblclick="$emit('dyonyon')">
        <slot></slot>
    </div>
    <h1 @click="$emit('dyonyon',$event)">ABC</h1>
    <input type="text" v-model="msg">
</template>

<script>
export default {
    emits: [
        'dyonyon',
        'changeMsg'
    ],
    data() {
        return {
            msg: ''
        }
    },
    watch: {
        msg() {
            this.$emit('changeMsg', this.msg)
        }
    }
}
</script>

<style scoped lang="scss">
    .btn{
        display: inline-block;
        margin: 4px;
        padding: 6px 12px;
        border-radius: 4px;
        background-color: gray;
        color: white;
        cursor: pointer;
    }
</style>
-->


<!-- Slot -->
<!--
<template>
    <div class="btn" @dblclick="$emit('dyonyon')">
        <slot>Apple</slot>
    </div>
</template>

<style scoped lang="scss">
    .btn{
        display: inline-block;
        margin: 4px;
        padding: 6px 12px;
        border-radius: 4px;
        background-color: gray;
        color: white;
        cursor: pointer;
    }
</style>
-->

<template>
    <div class="btn" @dblclick="$emit('dyonyon')">
        <slot name="icon"></slot>
        <slot name="text"></slot>
    </div>
</template>

<style scoped lang="scss">
    .btn{
        display: inline-block;
        margin: 4px;
        padding: 6px 12px;
        border-radius: 4px;
        background-color: gray;
        color: white;
        cursor: pointer;
    }
</style>