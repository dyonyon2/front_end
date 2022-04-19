import { mount } from '@vue/test-utils'
import Search from '../../src/components/Search'

describe('components/Search.vue', () => {
    let wrapper
    
    beforeEach(()=>{
        wrapper = mount(Search)
    })


    test('선택 가능한 연도의 개수가 일치합니다',() => {
        // const year = wrapper.vm.filters.find((filter)=>{
        //     return filter.name === 'year'
        // })
        const year = wrapper.vm.filters.find(filter=> filter.name === 'year')
        const yearLength = new Date().getFullYear() - 1985 + 1
        expect(year.items.length).toBe(yearLength)
    })
})