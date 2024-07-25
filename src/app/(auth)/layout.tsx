import React, { memo } from 'react';
import { headers } from 'next/headers';

import RequestManager from '@/lib/request';
import StoreProvider from '@/app/StoreProvider';

type Props = {
    children: React.ReactNode,
}

const Layout = async ({ children } : Props) => {
    const loginData = await RequestManager.get("/api/v1/login/getLoggedInDetails");

    const headersList = headers();
    const newHeaders = new Headers(headersList);
    const pageInfo : PageInfo = {
        protocol: newHeaders.get('x-next-protocol') || '',
        path: newHeaders.get('x-next-pathname') || '',
        query: newHeaders.get('x-next-search') || '',
        host:  newHeaders.get('x-forwarded-host') || '',
        ip: newHeaders.get('X-Forwarded-For') || '',
        env: newHeaders.get('x-next-env') || '',
        domain: newHeaders.get('x-next-domain') || '',
        platform: newHeaders.get('x-next-platform') || '',
        namespace: newHeaders.get('namespace') || '',
    };
    return (
        <StoreProvider loginData={loginData} pageInfo={pageInfo}>
            <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
                <div className="w-full flex-none md:w-64">
                    {/* <SideNav /> */}
                </div>
                <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
            </div>
        </StoreProvider>
    )
}

export default memo(Layout);
