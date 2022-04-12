<!--
<template>
    <Child :msg="msg" />    
</template>

<script>
import Child from "./Child"
export default {
    components: {
        Child
    },
    props: {
        msg: {
            type: String,
            default: ''
        }
    }
}
</script>
-->
<template>
    <Child />    
</template>

<script>
import Child from "./Child"
export default {
    components: {
        Child
    }
}
</script>