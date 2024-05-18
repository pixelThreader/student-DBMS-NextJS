import "bootstrap/dist/css/bootstrap.css"
import { Inter } from "next/font/google";
import BootstrapClient from "./bootstrapClint";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Student DBMS",
	description: "A simple CRUD application in NEXT.js",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				{children}
				<BootstrapClient />
			</body>
		</html>
	);
}
