import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { headers } from "next/headers";

import cookieManager from "@/lib/cookies";
import routes, { getPrivateRoutes } from '@/lib/routes';

const privateRoutes : Array<string> = getPrivateRoutes();

export async function middleware(request: NextRequest) {
    const token : string | undefined = cookieManager.get('authToken');
    const orgId : string | undefined = cookieManager.get('orgId');
    const hasSession : boolean = Boolean(token && orgId) || false;

    const headersList = getPageInfoInHeaders(request, headers());

    const currentPath = request.nextUrl.pathname;
    if (!hasSession && privateRoutes.includes(currentPath)) {
        const destination = new URL(routes.login.path, request.url);
        return NextResponse.redirect(destination);
    }
    if (hasSession && currentPath.startsWith(routes.login.path)) {
        const destination = new URL(routes.dashboard.path, request.url);
        return NextResponse.redirect(destination);
    }

    return NextResponse.next({
        request: {
            headers: headersList,
        }
    });
}

function getPageInfoInHeaders(request: NextRequest, headersList: any) : any {
    const newHeaders = new Headers(headersList);
    newHeaders.set('x-next-protocol', request.nextUrl.protocol);
    newHeaders.set('x-next-pathname', request.nextUrl.pathname);
    newHeaders.set('x-next-host', request.nextUrl.host);
    newHeaders.set('x-next-search', request.nextUrl.search);
    newHeaders.set('x-next-ip', request.ip || '');
    newHeaders.set('x-next-domain', process.env.DOMAIN || '');
    newHeaders.set('x-next-platform', process.env.PLATFORM || '');
    newHeaders.set('x-next-env', process.env.NODE_ENV || '');
    return newHeaders;
}

/*
* Match all request paths except for the ones starting with:
* - api (API routes)
* - _next/static (static files)
* - _next/image (image optimization files)
* - favicon.ico (favicon file)
* - $ for homepage
*/
export const config = {
    // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png|$).*)'],
};
