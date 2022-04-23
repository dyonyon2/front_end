describe("expect test => test & it ", () => {
    test("adds 1 + 2 to equal 3", () => {
        expect(1 + 2).toBe(3);
    });

    it("adds 2 + 2 to equal 4", () => {
        expect(2 + 2).toBe(4);
    });

    // it("{age:39} to equal {age:39}", () => {
    //     expect({ age: 39 }).toBe({ age: 39 });
    // });

    // .toEqual
    it("{age:39} to equal {age:39}", () => {
        expect({ age: 39 }).toEqual({ age: 39 });
    });

    // .toHaveLength
    it(".toHaveLength", () => {
        expect("Hello").toHaveLength(5);
    });

    // .toHaveProperty
    it(".toHaveProperty", () => {
        expect({ age: 39 }).toHaveProperty("age");
        expect({ age: 39 }).toHaveProperty("age", 39);
    });

    // .toBeDefined
    it(".toBeDefined", () => {
        expect({ age: 39 }.age).toBeDefined();
        // expect({ age: 39 }.name).toBeDefined();
    });

    // .toBeFalsy
    it(".toBeFalsy", () => {
        expect(false).toBeFalsy();
        expect(0).toBeFalsy();
        expect("").toBeFalsy();
        expect(null).toBeFalsy();
        expect(undefined).toBeFalsy();
        expect(NaN).toBeFalsy();
    });

    // .toBeGreaterThan
    it(".toBeGreaterThan", () => {
        expect(10).toBeGreaterThan(9);
    });

    // .toBeGreaterThanOrEqual
    it(".toBeGreaterThanOrEqual", () => {
        expect(10).toBeGreaterThanOrEqual(10);
    });

    // .toBeInstanceOf
    it(".toBeInstanceOf", () => {
        class Foo {}
        expect(new Foo()).toBeInstanceOf(Foo);
    });
});
