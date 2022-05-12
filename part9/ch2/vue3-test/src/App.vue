<!--     조건문과 반복문
<template>
  <h1 @click="increase">{{count}}</h1>
  <div v-if="count >4">
    4보다 큽니다!
  </div>
  <ul>
    <li v-for="fruit in fruits" :key="fruit" :name="fruit">
      {{fruit}}
    </li>
    <Fruit v-for="fruit in fruits" :key="fruit" :name="fruit">
      {{fruit}}
    </Fruit>
  </ul>
</template>

<script>
import Fruit from './components/Fruit.vue'

export default {
  components: {
    // Fruit:Fruit
    Fruit
  },


  data() {
    return {
      count: 0,
      fruits: ['Apple', 'Banana', 'Cherry']
    }
  },
  methods: {
    increase(){
      this.count += 1
    }
  }
}
</script>

<style scoped lang="scss">
  h1{
    font-size: 50px;
    color: royalblue;
  }
  ul{
    li{
      font-size: 40px;
    }
  }
</style>
-->

<!-- 인스턴트와 라이프 사이클
<template>
  <h1>{{count}}</h1>
</template>

<script>
export default {
  data(){
    return{
      count: 2
    }
  },
  beforeCreate(){
    console.log('Before Create!', this.count)
  },
  created() {
    console.log('Created!', this.count)
  },
  beforeMount() {
    console.log('Before Mount!')
    console.log(document.querySelector('h1'))
  },
  mounted(){
    console.log('Mounted!')
    console.log(document.querySelector('h1'))
  }
}
</script>
-->

<!-- 보간법 -->
<!-- 문자열
<template>
  <h1 @click="add">{{msg}}</h1>
  <h1 v-once @click="add">{{msg}}</h1>
</template>

<script>
export default {
  data(){
    return{
      msg:'Hello world!'
    }
  },
  methods:{
    add(){
      this.msg += '!'
    }
  }
}
</script>
-->

<!-- 원시 HTML
<template>
  <h1 v-once @click="add">{{msg}}</h1>
  <h1 v-html="msg"></h1>
</template>

<script>
export default {
  data(){
    return{
      msg:'<div style="color: red;">Hello!!</div>'
    }
  },
  methods:{
    add(){
      this.msg += '!'
    }
  }
}
</script>
-->

<!-- 원시 HTML 약어 사용
<template>
  <h1 
  :[attr]="'active'"
  @[event]="add">
    {{msg}}
  </h1>
</template>

<script>
export default {
  data(){
    return{
      msg:'active',
      attr:'class',
      event: 'click'
    }
  },
  methods:{
    add(){
      this.msg += '!'
    }
  }
}
</script>

<style lang="css">
  .active{
    color:royalblue;
  }
</style>
-->

<!-- Computed -->
<!--
<template>
  <Fruits/>
</template>

<script>
import Fruits from './components/Fruit.vue'
export default {
  components: {
    Fruits
  }
}
</script>
-->

<!--
<template>
  <h1>{{msg.split('').reverse().join('')}}</h1>
  <h1>{{msg.split('').reverse().join('')}}</h1>
  <h1>{{msg.split('').reverse().join('')}}</h1>
  <h1>{{reverseMessage()}}</h1>
  <h1>{{reverseMessage()}}</h1>
  <h1>{{reverseMessage()}}</h1>
  <h1>{{reversedMessage}}</h1>
  <h1>{{reversedMessage}}</h1>
  <h1>{{reversedMessage}}</h1>
</template>

<script>

export default {
  data(){
    return {
      msg: 'Hello Computed!'
    }
  },
  methods: {
    reverseMessage(){
      return this.msg.split('').reverse().join('')
    }
  },
  computed: {
    reversedMessage(){
      return this.msg.split('').reverse().join('')
    }
  }
}
</script>
-->

<!-- Getter, Setter -->
<!--
<template>
  <button @click="add">
    Add
  </button>
  <h1>{{reversedMessage}}</h1>
</template>

<script>

export default {
  data(){
    return {
      // Getter, Setter
      msg: 'Hello Computed!'
    }
  },
  methods: {
    add() {
      this.reversedMessage += '!?'
    }
  },
  computed: {
    // Getter
    // reversedMessage(){
    //   return this.msg.split('').reverse().join('')
    // }

    // Getter, Setter
    reversedMessage:{
      get() {
        return this.msg.split('').reverse().join('')
      },
      set(value) {
        console.log(value)
        this.msg = value
      }
    }

  }
}
</script>
-->

<!-- Watch -->
<!--
<template>
    <div>
        <h1 @click="changeMessage">{{ msg }}</h1>
        <h1>{{ reversedMessage }}</h1>
    </div>
</template>

<script>
export default {
    data() {
        return {
            msg: "Hello?",
        };
    },
    computed: {
        reversedMessage() {
            return this.msg.split("").reverse().join("");
        },
    },
    watch: {
        msg(newValue) {
            console.log("msg:", this.msg);
            console.log("msg:", newValue);
        },
        reversedMessage(test) {
            console.log("reversedMessage:", this.reversedMessage);
            console.log("reversedMessage:", test);
        },
    },
    methods: {
        changeMessage() {
            this.msg = "Good!";
        },
    },
};
</script>
-->

<!-- 클래스와 스타일 바인딩 -->
<!--
<template>
  <h1 
    v-bind:class="{active: isActive}"
    @click="activate">
    Hello?!({{isActive}})
  </h1>
</template>

<script>
export default {
  data(){
    return{
      isActive: false
    }
  },
  methods:{
    activate() {
      this.isActive = true
    }
  }
}
</script>

<style lang="scss">
  .active{
    color: red;
    font-weight: bold;
  }
</style>
-->
<!--
<template>
  <h1
    :style="{
      color,
      fontSize
    }"
    @click="changeStyle">
    Hello?!
  </h1>
</template>

<script>
export default {
  data(){
    return {
      color:'orange',
      fontSize: '30px'
    }
  },
  methods: {
    changeStyle(){
      this.color = 'red'
      this.fontSize = '50px'
    }
  },
}
</script>
-->

<!--
<template>
  <h1
    :style="[fontStyle, backgroundStyle]"
    @click="changeStyle">
    Hello?!
  </h1>
</template>

<script>
export default {
  data(){
    return {
      fontStyle: {
        color:'orange',
        fontSize: '30px'
      },
      backgroundStyle: {
        backgroundColor:'black'
      }
    }
  },
  methods: {
    changeStyle(){
      this.fontStyle.color = 'red'
      this.fontStyle.fontSize = '50px'
    }
  },
}
</script>
-->

<!-- 조건부 렌더링 -->
<!--
<template>
  <button
    @click="handler">
    click me!
  </button>
  <h1 v-show="isShow">
    Hello?!
  </h1>
</template>

<script>
export default {
  data(){
    return{
      isShow: false,
      count: 0
    }
  },
  methods: {
    handler() {
      this.count += 1
      this.isShow = !this.isShow
    }
  },
}
</script>
-->

<!-- 리스트 렌더링 -->
<!--
<template>
  <ul>
    <li
      v-for="(f, i) in fruits"
      :key="f">
      {{f}}--{{i+1}}
    </li>
  </ul>
</template>

<script>
export default {
  data(){
    return{
      fruits: ['Apple', 'Banana', 'Cherry']
    }
  }
}
</script>
-->

<!--
<template>
  <ul>
    <li
      v-for="f in newFruits"
      :key="f.id">
      {{f.name}}
    </li>
  </ul>
</template>

<script>
export default {
  data(){
    return{
      fruits: ['Apple', 'Banana', 'Cherry']
    }
  },
  computed: {
    newFruits(){
      return this.fruits.map((fruit, index) => {
        return{
          id: index,
          name: fruit
        }
      })
    }
  }
}
</script>
-->

<!--
<template>
  <ul>
    <li
      v-for="f in newFruits"
      :key="f.id">
      {{f.name}}--{{f.id}}
    </li>
  </ul>
</template>

<script>
import shortid from 'shortid'
export default {
  data(){
    return{
      fruits: ['Apple', 'Banana', 'Cherry']
    }
  },
  computed: {
    newFruits(){
      return this.fruits.map(fruit => ({
        id: shortid.generate(),
        name: fruit
      }))
    }
  }
}
</script>
-->

<!--
<template>
  <button @click="handler">
    Click me!
  </button>
  <ul>
    <li
      v-for="{id, name} in newFruits"
      :key="id">
      {{name}}--{{id}}
    </li>
  </ul>
</template>

<script>
import shortid from 'shortid'
export default {
  data(){
    return{
      fruits: ['Apple', 'Banana', 'Cherry']
    }
  },
  computed: {
    newFruits(){
      return this.fruits.map(fruit => ({
        id: shortid.generate(),
        name: fruit
      }))
    }
  },
  methods: {
    handler(){
      this.fruits.push('Orange')
    }
  }
}
</script>
-->

<!-- 이벤트 핸들링 -->
<!--
<template>
  <button @click="handler">
    Click me!
  </button>
</template>

<script>
export default {
  methods: {
    handler(event){
      console.log(event)
      console.log(event.target)
      console.log(event.target.textContent)
    }
  }
}
</script>
-->

<!--
<template>
  <button @click="handler">
    Click 1
  </button>
  <button @click="handler('hi',$event)">
    Click 2
  </button>
	<button @click="handler('what')">
    Click 3
  </button>
</template>

<script>
export default {
  methods: {
    handler(msg, event){
      console.log(msg)
      console.log(event)
    }
  }
}
</script>
-->

<!--
<template>
  <button @click="handlerA(), handlerB()">
    Click me!
  </button>
</template>

<script>
export default {
  methods: {
    handlerA(){
      console.log('A')
    },
    handlerB(){
      console.log('B')
    }
  }
}
</script>
-->

<!-- 이벤트 수식어 -->
<!--
<template>
  <a
    href="https://naver.com"
    target="_blank"
    @click="handler">
    NAVER    
  </a>
</template>

<script>
export default {
  methods: {
    handler(event){
      event.preventDefault()
      console.log("ABC!")
    }
  }
}
</script>
-->
<!--
<template>
  <a
    href="https://naver.com"
    target="_blank"
    @click.prevent="handler">
    NAVER    
  </a>
</template>

<script>
export default {
  methods: {
    handler(){
      console.log("ABC!")
    }
  }
}
</script>
-->
<!--
<template>
  <a
    href="https://naver.com"
    target="_blank"
    @click.prevent.once="handler">
    NAVER    
  </a>
</template>

<script>
export default {
  methods: {
    handler(){
      console.log("ABC!")
    }
  }
}
</script>
-->
<!--
<template>
  <div
    class="parent"
    @click="handlerA">
    <div
      class="child"
      @click.stop="handlerB"></div>
  </div>
</template>

<script>
export default {
  methods: {
    handlerA(){
      console.log('A')
    },
    handlerB(event){
      // event.stopPropagation()
      console.log('B')
    }
  },
}
</script>

<style scoped lang="scss">
  .parent{
    width: 200px;
    height: 100px;
    background-color: royalblue;
    margin: 10px;
    padding: 10px;
    .child{
      width: 100px;
      height: 100px;
      background-color: orange;
    }
  }
</style>
-->
<!--
<template>
  <div
    class="parent"
    @click.capture="handlerA">
    <div
      class="child"
      @click="handlerB"></div>
  </div>
</template>

<script>
export default {
  methods: {
    handlerA(){
      console.log('A')
    },
    handlerB(event){
      // event.stopPropagation()
      console.log('B')
    }
  },
}
</script>

<style scoped lang="scss">
  .parent{
    width: 200px;
    height: 100px;
    background-color: royalblue;
    margin: 10px;
    padding: 10px;
    .child{
      width: 100px;
      height: 100px;
      background-color: orange;
    }
  }
</style>
-->

<!--
<template>
  <div
    class="parent"
    @click="handlerA">
    <div
      class="child"></div>
  </div>
</template>

<script>
export default {
  methods: {
    handlerA(event){
      console.log(event.target)
      console.log(event.currentTarget)
      console.log('A')
    },
    handlerB(event){
      // event.stopPropagation()
      console.log('B')
    }
  },
}
</script>

<style scoped lang="scss">
  .parent{
    width: 200px;
    height: 100px;
    background-color: royalblue;
    margin: 10px;
    padding: 10px;
    .child{
      width: 100px;
      height: 100px;
      background-color: orange;
    }
  }
</style>
-->

<!--
<template>
  <div
    class="parent"
    @wheel.passive="handlerA">
    <div
      class="child"></div>
  </div>
</template>

<script>
export default {
  methods: {
    handlerA(event){
      for(let i = 0 ; i < 10000 ; i += 1)
      console.log(event.target)
    }
  }
}
</script>

<style scoped lang="scss">
  .parent{
    width: 200px;
    height: 100px;
    background-color: royalblue;
    margin: 10px;
    padding: 10px;
    overflow: auto;
    .child{
      width: 100px;
      height: 2000px;
      background-color: orange;
    }
  }
</style>
-->

<!-- 키 수식어 -->
<!--
<template>
  <input
    type="text"
    @keydown="handler" />
</template>

<script>
export default {
  methods: {
    handler(event){
      console.log(event)
      if(event.key === 'Enter'){
        console.log('Enter!!')
      }
    }
  },
}
</script>
-->
<!--
<template>
  <input
    type="text"
    @keydown.enter="handler" />
</template>

<script>
export default {
  methods: {
    handler(){
      console.log('Enter!!')
    }
  },
}
</script>
-->

<!--
<template>
  <input
    type="text"
    @keydown.a="handler" />
</template>

<script>
export default {
  methods: {
    handler(){
      console.log('Enter!!')
    }
  },
}
</script>
-->

<!--
<template>
  <input
    type="text"
    @keydown.ctrl.a="handler" />
</template>

<script>
export default {
  methods: {
    handler(){
      console.log('Enter!!')
    }
  },
}
</script>
-->

<!-- 폼 입력 바인딩 -->
<!--
<template>
  <h1>{{msg}}</h1>
  <input type="text" v-bind:value="msg" />
  <input type="text" :value="msg" />
</template>

<script>
export default {
  data(){
    return {
      msg: 'Hello world!'
    }
  }
}
</script>
-->

<!--
<template>
  <h1>{{msg}}</h1>
  <input type="text" v-bind:value="msg" />
  <input type="text" :value="msg" @input="handler" />
</template>

<script>
export default {
  data(){
    return {
      msg: 'Hello world!'
    }
  },
  methods: {
    handler(event){
      console.log(event.target.value)
      this.msg = event.target.value
    }
  },
}
</script>
-->
<!--
<template>
    <h1>{{ msg }}</h1>
    <input type="text" v-bind:value="msg" />
    <input type="text" :value="msg" @input="msg = $event.target.value" />
</template>

<script>
export default {
    data() {
        return {
            msg: "Hello world!",
        };
    },
};
</script>
-->

<!--
<template>
  <h1>{{msg}}</h1>
  <input type="text" v-model="msg" />
  <h1>{{checked}}</h1>
  <input type="checkbox" v-model="checked" />
</template>

<script>
export default {
  data(){
    return {
      msg: 'Hello world!',
      checked: false
    }
  }
}
</script>
-->

<!-- v-model 수식어 -->
<!--
<template>
  <h1>{{msg}}</h1>
  <input type="text" :value="msg" @change="msg = $event.target.value" />
</template>

<script>
export default {
  data(){
    return {
      msg: 'Hello world!'
    }
  }
}
</script>
-->
<!--
<template>
  <h1>{{msg}}</h1>
  <input type="text" v-model.number="msg" />
</template>

<script>
export default {
  data(){
    return {
      msg: 1234
    }
  },
  watch: {
    msg() {
      console.log(typeof this.msg)
    }
  }
}
</script>
-->
<!--
<template>
  <h1>{{msg}}</h1>
  <input type="text" v-model="msg" />
</template>

<script>
export default {
  data(){
    return {
      msg: 'Hello world'
    }
  },
  watch: {
    msg() {
      console.log(this.msg.trim())
    }
  }
}
</script>
-->

<!--
<template>
  <h1>{{msg}}</h1>
  <input type="text" v-model.trim="msg" />
</template>

<script>
export default {
  data(){
    return {
      msg: 'Hello world'
    }
  },
  watch: {
    msg() {
      console.log(this.msg)
    }
  }
}
</script>
-->

<!-- 컴포넌트 -->

<!--
<template>
  <MyBtn text="Banana" />
  <MyBtn color="royalblue" text="Apple"/>
  <MyBtn color="#f0f" text="orange"/>
  <MyBtn :color="color" text="pineapple"/>
  <MyBtn large color="red" text="ABC"/>
</template>

<script>
import MyBtn from './components/MyBtn'

export default {
  components: {
    MyBtn
  },
  data(){
    return{
      color: '#000'
    }
  }
}
</script>
-->
<!--
<template>
  <MyBtn> Banana </MyBtn>
  <MyBtn color="royalblue">
    <span style="color: red;">Apple</span>
  </MyBtn>
  <MyBtn color="#f0f">orange</MyBtn>
  <MyBtn :color="color">pineapple</MyBtn>
  <MyBtn large color="red">ABC</MyBtn>
</template>

<script>
import MyBtn from './components/MyBtn'

export default {
  components: {
    MyBtn
  },
  data(){
    return{
      color: '#000'
    }
  }
}
</script>
-->

<!-- 컴포넌트 - 속성 상속 -->
<!--
<template>
  <MyBtn 
    class="dyonyon"
    style="color: red;">
    Banana
  </MyBtn>
</template>

<script>
import MyBtn from "./components/MyBtn.vue"
export default {
  components:{
    MyBtn
  }
}
</script>
-->

<!-- Emit -->
<!--
<template>
  <MyBtn @dyonyon="log" @change-msg="logMsg">
    Banana
  </MyBtn>
</template>

<script>
import MyBtn from "./components/MyBtn.vue"
export default {
  components:{
    MyBtn
  },
  methods: {
    log(event){
      console.log('Click!')
      console.log(event)
    },
    logMsg(msg) {
      console.log(msg)
    }
  }
}
</script>
-->

<!-- Slot -->
<!--
<template>
  <MyBtn>
    Banana
  </MyBtn>
</template>

<script>
import MyBtn from "./components/MyBtn.vue"
export default {
  components:{
    MyBtn
  }
}
</script>
-->

<!--
<template>
  <MyBtn>
    <template v-slot:text>    
      <span>Banana</span>
    </template>
    <template v-slot:icon>  
      <span>(B)</span>
    </template>
  </MyBtn>
</template>

<script>
import MyBtn from "./components/MyBtn.vue"
export default {
  components:{
    MyBtn
  }
}
</script>
-->

<!--
<template>
  <MyBtn>
    <template #text>    
      <span>Banana</span>
    </template>
    <template #icon>  
      <span>(B)</span>
    </template>
  </MyBtn>
</template>

<script>
import MyBtn from "./components/MyBtn.vue"
export default {
  components:{
    MyBtn
  }
}
</script>
-->

<!-- 컴포넌트 - Provide, Inject -->
<!--
<template>
  <Parent :msg="message" />
</template>

<script>
import Parent from "./components/Parent"
export default {
  components:{
    Parent
  },
  data(){
    return {
      message: "Hello world!"
    }
  }
}
</script>
-->
<!--
<template>
  <Parent />
</template>

<script>
import Parent from "./components/Parent"
export default {
  components:{
    Parent
  },
  data(){
    return {
      message: "Hello world!"
    }
  },
  provide(){
    return{
      msg:this.message
    }
  }
}
</script>
-->
<!--
<template>
  <button @click="message='Good?'">Click!</button>
  <h1>App : {{message}} </h1>
  <Parent />
</template>

<script>
import Parent from "./components/Parent"
export default {
  components:{
    Parent
  },
  data(){
    return {
      message: "Hello world!"
    }
  },
  provide(){
    return{
      msg:this.message
    }
  }
}
</script>
-->
<!--
<template>
  <button @click="message='Good?'">Click!</button>
  <h1>App : {{message}} </h1>
  <Parent />
</template>

<script>
import Parent from "./components/Parent"
import {computed} from 'vue'

export default {
  components:{
    Parent
  },
  data(){
    return {
      message: "Hello world!"
    }
  },
  provide(){
    return{
      msg:computed(()=>{
        return this.message
      })
    }
  }
}
</script>
-->

<!-- Refs -->
<!--
<template>
  <h1 id="hello" ref="refhello">
    Hello world!
  </h1>
</template>

<script>
export default {
  created(){
    console.log(this.$refs.refhello)
  },
  mounted() {
    const h1El = document.querySelector('#hello')
    console.log(h1El.textContent)

    console.log(this.$refs.refhello)
    console.log(this.$refs.refhello.textContent)
  }
}
</script>
-->

<!--
<template>
  <Hello ref="hello" />
</template>

<script>
import Hello from "./components/Hello.vue"

export default {
  components: {
    Hello
  },
  created(){
    console.log(this.$refs.hello)
  },
  mounted() {
    console.log(this.$refs.hello)
    console.log(this.$refs.hello.$el)
    console.log(this.$refs.hello.$refs.good)
  }
}
</script>
-->
