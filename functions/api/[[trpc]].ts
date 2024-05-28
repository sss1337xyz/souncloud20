import {inferAsyncReturnType, initTRPC} from '@trpc/server';
import tRPCPlugin, {
    FetchCreateContextWithCloudflareEnvFnOptions as CloudflareWithEnv,
} from "cloudflare-pages-plugin-trpc";


export interface Env {}
const createContext = async ({req, env}: CloudflareWithEnv<Env>) => ({});
type Context = inferAsyncReturnType<typeof createContext>

export const t = initTRPC.context<Context>().create();

const publicProcedure = t.procedure;

export const appRouter = t.router({
    greeting: publicProcedure.query(() => 'hello tRPC v10!'),
    hello: publicProcedure.query(() => 'hello'),
});

export type AppRouter = typeof appRouter;

export const onRequest: PagesFunction<Env> = tRPCPlugin({
    router: appRouter,
    endpoint: "/api",
    createContext
});