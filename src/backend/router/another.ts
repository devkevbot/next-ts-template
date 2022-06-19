import {createRouter} from "./context";

export const anotherRouter = createRouter().query("get", {
  async resolve() {
    return {
      hello: "world",
    };
  },
});
