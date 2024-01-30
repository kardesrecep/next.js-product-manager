import { roboto } from "@/utils/font.js";
import "./index.scss"


export const metadata = {
	title:{
		template: "%s | Cozzy Shop",
		default: "Cozzy Shop",
	}
};

export default function RootLayout({ children }) {
	return (
		<html lang="en"  className={`${roboto.variable} h-100`}>
			<body className="d-flex flex-column justify-content-between h-100">
				
     
				{children}
     
			
			</body>
		</html>
	);
}

