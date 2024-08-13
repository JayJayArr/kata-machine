import LRU from "@code/LRU";

test("LRU", function () {
    const lru = new LRU<string, number>(3) as ILRU<string, number>;

    expect(lru.get("foo")).toEqual(undefined);
    lru.update("foo", 69);
    //foo
    expect(lru.get("foo")).toEqual(69);

    lru.update("bar", 420);
    // foo
    // bar
    expect(lru.get("bar")).toEqual(420);

    lru.update("baz", 1337);
    // foo
    // bar
    // baz
    expect(lru.get("baz")).toEqual(1337);

    lru.update("ball", 69420);
    // foo x
    // bar
    // baz
    // ball
    expect(lru.get("ball")).toEqual(69420);
    expect(lru.get("foo")).toEqual(undefined);
    expect(lru.get("bar")).toEqual(420);
    // baz
    // ball
    // bar
    lru.update("foo", 69);
    // this deletes baz
    expect(lru.get("bar")).toEqual(420);
    expect(lru.get("foo")).toEqual(69);

    // shouldn't of been deleted, but since bar was get'd, bar was added to the
    // front of the list, so baz became the end
    expect(lru.get("baz")).toEqual(undefined);
});
