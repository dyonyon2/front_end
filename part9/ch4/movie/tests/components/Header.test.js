import { shallowMount, mount } from '@vue/test-utils'
import router from '../../src/routes/index.js'
import store from '../../src/store/index.js'
import Header from '../../src/components/Header'

describe('components/Header.vue', () => {
    test('경로 정규표현식이 없는 경우 일치하지 않습니다', () => {
        // const wrapper = shallowMount(Header, {
        const wrapper = mount(Header, {
            global: {
                plugins: [
                    router,
                    store
                ]
            }
        })
        const regExp = undefined
        expect(wrapper.vm.isMatch(regExp)).toBe(false)
    })
})

