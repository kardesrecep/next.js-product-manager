
import Link from "next/link";
import React from "react";



const DasboardLayout = ({ children}) => {
	return (
		<div>
            <ul>
                <Link href="/dashboard">Dashboard</Link>
            </ul>
            <ul>
                <Link href="/dashboard/products">Products</Link>
            </ul>
            <ul>
                <Link href="/dashboard/profile">Profile</Link>
            </ul>
			
			{children}
		</div>
	);
};

export default DasboardLayout;
