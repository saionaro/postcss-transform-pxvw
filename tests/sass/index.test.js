const postcss = require("postcss");
const sass = require("node-sass");

const TransformPxvw = require("../../src");
const { promisify } = require("util");
const utils = require("../utils");

const renderSass = promisify(sass.render);
const readContent = utils.readContent.bind(this, "sass");
const postcssInstance = postcss([TransformPxvw()]);

describe("SASS", () => {
  test("works with variables", async () => {
    const [sassContent, exampleContent] = await readContent(1);

    const content = await renderSass({
      data: sassContent
    });
    const res = postcssInstance.process(content.css);

    expect(res.content).toBe(exampleContent);
  });
});
