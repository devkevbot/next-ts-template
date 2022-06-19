import * as trpc from "@trpc/server";
import * as trpcNext from "@trpc/server/adapters/next";

// The app's context - is generated for each incoming request
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function createContext(opts?: trpcNext.CreateNextContextOptions) {
  return {
    hello: "world",
  };
}
type Context = trpc.inferAsyncReturnType<typeof createContext>;

// Helper function to create a router with your app's context
export function createRouter() {
  return trpc.router<Context>();
}
