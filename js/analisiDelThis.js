var assert = require('assert');

const foo = {
    a: 2,
    normalFunction: function() { return this.a },
    arrowFunction: () => { return this.a },
    executor: (fn) => fn(),
    arrowFunctionDefinedInFunctionContext: function () {
        return this.executor(() => this.a);
    },
    prop1: null,
};

describe('fooTests', function () {
    it('must return 2', function () {
        assert.equal(foo.normalFunction(), 2)
    })
    it('must return undefined', function () {
        assert.equal(foo.arrowFunction(), undefined)
    })
    it('must return 2', function () {
        assert.equal(foo.arrowFunctionDefinedInFunctionContext(), 2)
    })
    it('must return 2', function () {
        const a = 2;
        foo.prop1 = () => a;
        foo.prop1.bind({a: 3});
        assert.equal(foo.prop1(), 2);
    })
});
