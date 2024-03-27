import { Ukg } from "./index";

describe("ukg-typescript-sdk", () => {
    it("initialize client", async () => {
        const ukg = new Ukg({
            apiKey: "API_KEY",
        });
    });
});
