"use client";
import Link from "next/link";
import {
	Navbar,
	NavbarBrand,
	NavbarCollapse,
	NavbarLink,
	NavbarToggle,
} from "flowbite-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { MenuList } from "./menu";

type MenuItem = {
	name: string;
	path: string;
	active: boolean;
};

export default function NavbarComponent() {
	const pathname = usePathname();
	const [menu, setMenu] = useState<MenuItem[]>(MenuList);
	console.log(pathname);

	// const updateMenu = (path: string) => {
	// 	const newMenu = menu.map((item) => {
	// 		if(path=== item.path){
	// 			return {
	// 				...item,
	// 				active: true
	// 			}
	// 		}else{
	// 			return {
	// 				...item,
	// 				active: false
	// 			}
	// 		}
	// 	})

	// 	setMenu(newMenu)
	// }

	return (
		<Navbar fluid rounded className="w-full">
			<NavbarBrand as={Link} href="https://flowbite-react.com">
				<img
					src="/next-logo.png"
					className="mr-3 h-6 sm:h-9"
					alt="Flowbite React Logo"
				/>
				<span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
					Flowbite React
				</span>
			</NavbarBrand>
			<NavbarToggle />
			<NavbarCollapse>
				{menu.map((item, index) => (
					<NavbarLink  
					key={index} 
					    as={Link} 
					    href={item.path} 
					    active={item.path === pathname}
						>
						{item.name}
					</NavbarLink>
				))}
			</NavbarCollapse>
		</Navbar>
	);
}
