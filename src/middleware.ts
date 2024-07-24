import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import routes, { getPrivateRoutes } from '@/lib/routes';
import cookieManager from "@/lib/cookies";

const privateRoutes : Array<string> = getPrivateRoutes();

export async function middleware(request: NextRequest) {
    const token : string | undefined = cookieManager.get('auth-token');
    const orgId : string | undefined = cookieManager.get('organisationId');
    const hasSession : boolean = Boolean(token && orgId) || false;

    const currentPath = request.nextUrl.pathname;
    if (!hasSession && privateRoutes.includes(currentPath)) {
        return NextResponse.redirect(new URL(routes.login.path, request.url));
    }
    if (hasSession && currentPath.startsWith(routes.login.path)) {
        return NextResponse.redirect(new URL(routes.dashboard.path, request.url));
    }

    return NextResponse.next();
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
