<template>
    <!-- Remove & use example component! -->
    <div>
        <HelloWorld :msg="message" @click="handler" />
        <HelloWorld msg="Good" />
    </div>
</template>

<script>
import HelloWorld from "~/components/HelloWorld";

export default {
    components: {
        HelloWorld,
    },
    data() {
        return {
            message: "Hello Vue!",
        };
    },
    methods: {
        handler() {
            console.log(this.message);
            this.message += "!";
        },
    },
};
</script>
