import {createTRPCProxyClient, httpBatchLink} from '@trpc/react-query';

import type { AppRouter } from '../../../functions/api/[[trpc]]';

export const api = createTRPCProxyClient<AppRouter>({
    links: [
        httpBatchLink({
            url: '/api',
        }),
    ],
});