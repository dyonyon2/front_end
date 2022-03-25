"use strict";
// class => object
// {mark:'male', jade:'male'}
// {chloe:'female', alex:'male', anna:'female'}
class Students {
    constructor() {
        this.mark = 'male';
    }
}
const a_class = new Students();
a_class.mark = 'male';
a_class.jade = 'female';
const b_class = new Students();
b_class.chloe = 'female';
b_class.alex = 'male';
b_class.anna = 'female';
