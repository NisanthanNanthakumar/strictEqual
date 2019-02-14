const strictEqual = require("../index");

describe("strictEqual", () => {
  it("equal", () => {
    const obj1 = { a: [2, 3], b: [4] };
    const obj2 = { a: [2, 3], b: [4] };
    expect(strictEqual(obj1, obj2)).toBe(true);
  });

  it("not equal", () => {
    const obj1 = { x: 5, y: [6] };
    const obj2 = { x: 5, y: 6 };
    expect(strictEqual(obj1, obj2)).toBe(false);
  });

  it("nested nulls", () => {
    expect(strictEqual([null, null, null], [null, null, null])).toBe(true);
  });

  it("strict equality", () => {
    expect(strictEqual([{ a: 3 }, { b: 4 }], [{ a: "3" }, { b: "4" }])).toBe(
      false
    );
  });

  it("non-objects", () => {
    expect(strictEqual(3, 3)).toBe(true);
    expect(strictEqual("beep", "beep")).toBe(true);
    expect(strictEqual("3", 3)).toBe(false);
    expect(strictEqual("3", [3])).toBe(false);
  });

  it("arguments class", () => {
    expect(
      strictEqual(
        (function() {
          return arguments;
        })(1, 2, 3),
        (function() {
          return arguments;
        })(1, 2, 3)
      )
    ).toBe(true);
    expect(
      strictEqual(
        (function() {
          return arguments;
        })(1, 2, 3),
        [1, 2, 3]
      )
    ).toBe(false);
  });

  it("Object.keys", () => {
    expect(strictEqual(Object.keys({ a: 1, b: 2 }), ["a", "b"])).toBe(true);
  });

  it("dates", () => {
    var d0 = new Date(1387585278000);
    var d1 = new Date("Fri Dec 20 2013 16:21:18 GMT-0800 (PST)");
    expect(strictEqual(d0, d1)).toBe(true);
  });

  it("buffers", () => {
    expect(strictEqual(Buffer("xyz"), Buffer("xyz"))).toBe(true);
  });

  it("booleans and arrays", () => {
    expect(strictEqual(true, [])).toBe(false);
  });

  it("null == undefined", () => {
    expect(strictEqual(null, undefined)).toBe(false);
  });
});
