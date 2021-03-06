const {assert} = require("chai");
const utils = require("lib/utils");

describe("toRGBString", () => {
  it("should convert R, G, B values to a css string", () => {
    assert.equal(utils.toRGBString(12, 20, 30), "rgb(12, 20, 30)");
  });
  it("should convert R, G, B, A values to a css string", () => {
    assert.equal(utils.toRGBString(12, 20, 30, 0.2), "rgba(12, 20, 30, 0.2)");
  });
});

describe("getBlackOrWhite", () => {
  it("should return black for a light color", () => {
    assert.equal(utils.getBlackOrWhite(230, 210, 210), "black");
  });
  it("should return white for a dark color", () => {
    assert.equal(utils.getBlackOrWhite(40, 44, 52), "white");
  });
});

describe("prettyUrl()", () => {
  it("should strip out leading http:// or https://", () => {
    assert.equal(utils.prettyUrl("http://mozilla.org/"), "mozilla.org/");
    assert.equal(utils.prettyUrl("https://mozilla.org/"), "mozilla.org/");
  });

  it("should strip out leading 'www.' subdomains", () => {
    assert.equal(utils.prettyUrl("https://www.mozilla.org/"), "mozilla.org/");
  });

  it("should ignore non http[s] protocols", () => {
    let url = "gopher://github.com/mozilla/";
    assert.equal(utils.prettyUrl(url), url);
  });
});
