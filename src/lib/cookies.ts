import { cookies } from "next/headers";

class CookieManager {
	private config: any;

	constructor() {
		this.config = {
			maxAge: 60 * 60 * 24 * 7, // 1 week
			path: "/",
			domain: process.env.HOST ?? "localhost",
			httpOnly: true,
			secure: process.env.NODE_ENV === "production",
		};
	}

	get(key: string): string | undefined {
		return cookies().get(key)?.value;
	}

	getAll(): Record<string, string | undefined> {
		const allCookies = cookies().getAll();
		const cookieObject: Record<string, string | undefined> = {};
		allCookies.forEach((cookie) => {
			cookieObject[cookie.name] = cookie.value;
		});
		return cookieObject;
	}

	set(key: string, value: string): void {
		cookies().set({
			name: key,
			value,
			...this.config,
		});
	}

	delete(key: string): void {
		cookies().set({
			name: key,
			value: "",
			...this.config,
			maxAge: -1, // Immediately expire the cookie
		});
	}

	has(key: string): boolean {
		return cookies().has(key);
	}

	clearAll(): void {
		const allCookies = cookies().getAll();
		allCookies.forEach((cookie) => {
			cookies().set({
				name: cookie.name,
				value: "",
				...this.config,
				maxAge: -1, // Immediately expire the cookie
			});
		});
	}
}

const cookieManager = new CookieManager();
export default cookieManager;
