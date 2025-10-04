declare global {
	interface Window {
		gtag: (...args: unknown[]) => void;
	}
}

declare interface SeoType {
	title: string;
	description?: string;
}
