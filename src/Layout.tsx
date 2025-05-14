import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Marketing from "./components/Marketing";
import Country from "./components/Country";

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div>

			<Marketing />
			<Country />
			<Header />
			<main>{children}</main>
			<Footer />
		</div>
	);
};

export default Layout;
