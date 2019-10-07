const postcss = require("postcss");
const less = require("less");

const TransformPxvw = require("../../src");
const utils = require("../utils");

const readContent = utils.readContent.bind(this, "less");
const postcssInstance = postcss([TransformPxvw()]);

describe("LESS", () => {
  test("works with variables", async () => {
    const [lessContent, exampleContent] = await readContent(1);

    const content = await less.render(lessContent);
    const res = postcssInstance.process(content.css);

    expect(res.content).toBe(exampleContent);
  });
});
