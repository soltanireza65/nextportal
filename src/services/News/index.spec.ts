import { NewsApi } from "./index";
describe("Published News EndPoint", () => {
  it("200 test", async () => {
    const result = await NewsApi.GetPublishedNews();
    expect(result.status).toEqual(1);
  });
});
