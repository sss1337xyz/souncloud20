import { fetchRequestHandler } from '@trpc/server/adapters/fetch';

import { appRouter } from './api/[[trpc]]';
export default {
    async fetch(request: Request): Promise<Response> {
        return fetchRequestHandler({
            endpoint: '/api',
            req: request,
            router: appRouter,
            createContext: () => ({}),
        });
    },
};