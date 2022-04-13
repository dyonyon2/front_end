<!-- 컴포지션 개요 -->
<!--
<template>
  <h1 @click="increase">
    {{count}} / {{doubleCount}}
  </h1>
  <h1>
    {{message}} / {{reversedMessage}}
  </h1>
</template>

<script>
export default {
  data(){
    return {
      message: 'Hello world!',
      count: 0
    }
  },
  computed: {
    doubleCount() {
      return this.count * 2
    },
    reversedMessage() {
      return this.message.split('').reverse().join('')
    }
  },
  methods: {
    increase(){
      this.count += 1
    }
  },
}
</script>
-->

<!-- 컴포지션 반응형 데이터 -->
<!--
<template>
  <div @click="increase">
    {{count}}
  </div>
</template>

<script>
import {ref} from 'vue'

export default {
  setup() { 
    let count = ref(0)
    function increase() {
      count.value += 1
    }

    return {
      count,
      increase
    }
  }
}
</script>
-->


<!-- 컴포지션 기본 옵션과 라이프 사이클 -->
<!--
<template>
  <h1 @click="increase">
    {{count}} / {{doubleCount}}
  </h1>
  <h1>
    {{message}} / {{reversedMessage}}
  </h1>
</template>

<script>
import {ref,computed,watch, onMounted} from 'vue'
export default {
  setup(){
    // data()에서 count 변수
    const count = ref(0)
    // computed에서 계산된 데이터 doubleCount
    const doubleCount = computed(()=>{
      return count.value *2
    })
    // methods에서 increase 함수
    function increase() {
      count.value += 1
    }


    // data()에서 message 변수
    const message = ref('Hello world!')
    // computed에서 계산된 데이터 reversedMessage
    const reversedMessage = computed(()=>{
      return message.value.split('').reverse().join('')
    })
    //watch에서 message의 변화를 주시
    watch(message, (newValue) => {
      console.log(newValue)
    })
    // methods에서 changeMessage() 함수
    function changeMessage() {
      message.value = 'Good?!'
    }
    //created에서 실행과 동일! setup이 created 직후에 실행되기 때문이다!
    console.log(message.value)

    //mounted에서 실행
    onMounted(()=>{
      console.log(count.value)
    })

    return {
      //count: count
      //message: message
      count,
      doubleCount,
      increase,
      message,
      changeMessage,
    }
  },
}
</script>
-->

<!-- 컴포넌트 props, context -->

<template>
  <MyBtn
    class="dyonyon"
    style="color:red"
    color="#ff0000"
    @hello="log">
    Apple
  </MyBtn>
</template>

<script>
import MyBtn from "./components/MyBtn"
export default {
  components:{
    MyBtn
  },
  methods: {
    log(){
      console.log('Hello world!')
    }
  },
}
</script>