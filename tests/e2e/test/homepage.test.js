const timeout = 100000;

beforeAll(async () => {
    await page.goto(URL, { waitUntil: "domcontentloaded" });
});

describe("Test title and header of the homepage", () => {
    test("Title of the page", async () => {
        const title = await page.title();

        expect(title).toBe("Become a better developer - Sabe.io");
    }, timeout);

    test("Header of the page", async () => {
        const h1Handle = await page.$("h1");
        const html = await page.evaluate(h1Handle => h1Handle.innerHTML, h1Handle);

        expect(html).toBe("Become a better developer");
    }, timeout);
}); 