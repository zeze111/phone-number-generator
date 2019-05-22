import fetchMock from "fetch-mock";
import {
  generateNumbers,
  listNumbers,
  sortNumbers,
  clearNumbersStorage
} from "../actions";

const server = "http://localhost:3000";
const limit = 0;
const offset = 3;
const order = "desc";

describe("async api actions", () => {
  it("calls api to generate numbers", () => {
    fetchMock.mock(`${server}/telecomms`, 201, "post");

    return generateNumbers("4").then(() => {
      expect(fetchMock.called()).toBe(true);
    });
  });

  it("calls api to list all generated numbers", async () => {
    fetchMock.mock(`begin:${server}/telecomms/phone-numbers?limit`, 200, {
      limit: 3,
      offset: 0
    });

    return listNumbers(0, 3).then(() => {
      expect(fetchMock.called()).toBe(true);
    });
  });

  it("calls api to sort generated list of numbers", async () => {
    fetchMock.mock(
      `express:/telecomms/phone-numbers/sort/:order`,
      200,
      {
        limit: 3,
        offset: 0
      }
    );

    return sortNumbers("desc", 0, 3).then(() => {
      expect(fetchMock.called()).toBe(true);
    });
  });

  it("calls api to clear all generated list of numbers", async () => {
    fetchMock.mock(`${server}/telecomms/phone-numbers`, 200, "delete");

    return clearNumbersStorage().then(() => {
      expect(fetchMock.called()).toBe(true);
    });
  });
});
