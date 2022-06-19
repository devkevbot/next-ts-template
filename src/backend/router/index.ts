import superjson from "superjson";
import {anotherRouter} from "./another";
import {createRouter} from "./context";

export const appRouter = createRouter()
  .transformer(superjson)
  .merge("another.", anotherRouter);

export type AppRouter = typeof appRouter;
