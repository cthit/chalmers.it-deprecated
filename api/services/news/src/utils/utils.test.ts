import * as assert from "assert";
import { to, findImageUrls } from "./utils";

describe("Testing the 'to' method", () => {
    it("Should return 'Success'", async () => {
        const [_, res] = await to(
            new Promise((resolve, _) => {
                resolve("Success");
            })
        );
        assert.equal(res, "Success");
    });
    it("Should return error", async () => {
        const error = new Error("Error");
        const [err] = await to(
            new Promise((_, reject) => {
                reject(error);
            })
        );
        assert.equal(err, error);
    });
});

describe("Testing the 'findImageUrls' frunction", () => {
    it("Should return one image url", () => {
        var urls = findImageUrls(
            "Lorem ipsum dolor sit amet, consectetur" +
                "![alt-text](https://cth.it)" +
                "Lorem ipsum dolor sit amet, consectetur"
        );
        assert.deepEqual(urls, ["https://cth.it"]);
    });
    it("Should return two image urls", () => {
        var urls = findImageUrls(
            "Lorem ipsum dolor sit amet, consectetur" +
                "![alt-text](https://cth.it)" +
                "Lorem ipsum dolor sit amet, consectetur" +
                "![alt-text](https://chalmers.it)"
        );
        assert.deepEqual(urls, ["https://cth.it", "https://chalmers.it"]);
    });
    it("Should return nothing without error", () => {
        assert.deepEqual([], findImageUrls(null));
    });
});
