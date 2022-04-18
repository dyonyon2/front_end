import {mount} from '@vue/test-utils'
import Parent from './Parent'

test('Mount', () => {
    const wrapper = mount(Parent)
    expect(wrapper.html()).not.toBe('')
})


// import {shallowMount} from '@vue/test-utils/dist/vue-test-utils.cjs'
// import Parent from './Parent.vue'

// test('Mount', () => {
//     // const wrapper = shallowMount(Parent)
//     expect(wrapper.html()).toBe('')
// })

