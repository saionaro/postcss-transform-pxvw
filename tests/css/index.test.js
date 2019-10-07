const postcss = require("postcss");

const TransformPxvw = require("../../src");
const utils = require("../utils");

const readContent = utils.readContent.bind(this, "css");
const postcssInstance = postcss([TransformPxvw()]);

describe("CSS", () => {
  test("just one value", async () => {
    const [content, exampleContent] = await readContent(1);
    const res = postcssInstance.process(content);

    expect(res.content).toBe(exampleContent);
  });

  test("with pageWidth param", async () => {
    const [content, exampleContent] = await readContent(2);
    const res = postcssInstance.process(content);

    expect(res.content).toBe(exampleContent);
  });

  test("digitsCount option", async () => {
    const postcssInstance = postcss([
      TransformPxvw({
        digitsCount: 1
      })
    ]);

    const [content, exampleContent] = await readContent(3);
    const res = postcssInstance.process(content);

    expect(res.content).toBe(exampleContent);
  });

  test("defaultPageWidth option", async () => {
    const postcssInstance = postcss([
      TransformPxvw({
        defaultPageWidth: 768
      })
    ]);

    const [content, exampleContent] = await readContent(4);
    const res = postcssInstance.process(content);

    expect(res.content).toBe(exampleContent);
  });

  test("multiple pxvw in single rule", async () => {
    const [content, exampleContent] = await readContent(5);
    const res = postcssInstance.process(content);

    expect(res.content).toBe(exampleContent);
  });
});
