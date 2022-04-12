<!--
<template>
    <div>
        {{msg}}   
    </div>
</template>

<script>
export default {
    props:{
        msg:{
            type: String,
            default: ''
        }
    }
}
</script>
-->
<!--
<template>
    <div>
        Child:  {{msg}}   
    </div>
</template>

<script>
export default {
    inject: ['msg']
}
</script>
-->

<template>
    <div>
        Child:  {{msg.value}}   
    </div>
</template>

<script>
export default {
    inject: ['msg']
}
</script>