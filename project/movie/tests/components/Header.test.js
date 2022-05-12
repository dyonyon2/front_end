import { shallowMount, mount } from '@vue/test-utils'
import router from '../../src/routes/index.js'
import store from '../../src/store/index.js'
import Header from '../../src/components/Header'

describe('components/Header.vue', () => {
    // let wrapper = shallowMount(Header, {
    let wrapper
    beforeEach(async()=>{
        window.scrollTo = jest.fn()
        router.push('/movie/tt1234567')
        await router.isReady()
        wrapper = mount(Header, {
            global: {
                plugins: [
                    router,
                    store
                ]
            }
        })
    })

    test('경로 정규표현식이 없는 경우 일치하지 않습니다', () => {
        const regExp = undefined
        expect(wrapper.vm.isMatch(regExp)).toBe(false)
    })

    test('경로 정규표현식과 일치해아 합니다', () => {
        const regExp = /^\/movie/
        expect(wrapper.vm.isMatch(regExp)).toBe(true)
    })

    test('경로 정규표현식과 일치하지 않아야 합니다', () => {
        const regExp = /^\/dyonyon/
        expect(wrapper.vm.isMatch(regExp)).toBe(false)
    })
})

 