import { Roboto, Montserrat } from "next/font/google";
import StyledComponentsRegistry from "../lib/registry";
import { Viewport } from "next";
import Header from "@/ui/core/header";
import { Footer } from "@/ui/core";

const roboto = Roboto({
	subsets: ["latin"],
	display: "swap",
	variable: "--roboto",
	weight: ["300", "400", "500", "700"],
});

const montserrat = Montserrat({
	subsets: ["latin"],
	display: "swap",
	variable: "--montserrat",
	weight: ["400", "500", "600", "700", "800"],
});

export async function generateMetadata() {
	return {
		metadataBase: new URL("https://www.fiap.com.br/"),
		title: {
			default: "Fiap",
		},

		description: "A melhor faculdade de tecnologia",
		robots: "/robots.txt",

		openGraph: {
			type: "website",
			title: `Fiap`,
			description: "A melhor faculdade de tecnologia",
			siteName: "Fiap",
			locale: "pt_BR",
			url: "https://www.fiap.com.br/",
			countryName: "Brasil",

			images: [
				{
					url: "/cover.jpg",
					secureUrl: "/cover.jpg",
					alt: "Open Graph Visual Image",
					type: "jpg",
				},
			],
		},

		twitter: {
			title: `Fiap`,
			description: "A melhor faculdade de tecnologia",
			card: "summary_large_image",
			creator: "@amandalapa",

			images: [
				{
					url: "/cover.jpg",
					secureUrl: "/cover.jpg",
					alt: "Open Graph Visual Image",
					type: "jpg",
				},
			],
		},

		icons: [
			{
				rel: "apple-touch-icon",
				url: "/apple-touch-icon.png",
			},
			{
				rel: "icon",
				type: "image/png",
				sizes: "32x32",
				url: "/favicon-32x32.png",
			},
			{
				rel: "icon",
				type: "image/png",
				sizes: "16x16",
				url: "/favicon-16x16.png",
			},
			{
				rel: "icon",
				url: "/favicon.ico",
			},
		],

		authors: [
			{
				name: "Amanda Lapa",
				url: "https://amandalapa.io/",
			},
		],
		appleWebApp: true,
	};
}

export const viewport: Viewport = {
	themeColor: "#000000",
	colorScheme: "normal",
	width: "device-width",
	initialScale: 1,
	maximumScale: 1,
};

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="pt-br">
			<body className={`${roboto.variable} ${montserrat.variable}`}>
				<StyledComponentsRegistry>
					<Header />
					{children}
					<Footer />
				</StyledComponentsRegistry>
			</body>
		</html>
	);
}
