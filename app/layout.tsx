import "../global.css";
import { Inter } from "@next/font/google";
import LocalFont from "@next/font/local";
import { Metadata } from "next";
import { Analytics } from "./componentes/analytics";

export const metadata: Metadata = {
	title: {
		default: "SBM",
		template: "%s | SBM",
	},
	description: "Developer and student of bachelor's degree in information technologies",
	openGraph: {
		title: "SBM",
		description:
			"Developer and student of bachelor's degree in information technologies",
		url: "https://fsbm.vercel.app",
		siteName: "SBM",
		images: [
			{
				url: "/public/logo.png",
				width: 1920,
				height: 1080,
			},
		],
		locale: "en-US",
		type: "website",
	},
	icons: {
		icon: [
		  {
			url: 'favicon-light.ico',
			media: '(prefers-color-scheme: light)',
		  },
		  {
			url: 'favicon.ico',
			media: '(prefers-color-scheme: dark)',
		  },
		],
	  },
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
};
const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
});

const calSans = LocalFont({
	src: "../public/fonts/CalSans-SemiBold.ttf",
	variable: "--font-calsans",
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
			<head>
				<Analytics />
			</head>
			<body
				className={`bg-black ${
					process.env.NODE_ENV === "development" ? "debug-screens" : undefined
				}`}
			>
				{children}
			</body>
		</html>
	);
}
