'use client';
import CardProduct from "@/components/card/CardProduct";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const ENDPOINT = "https://fakestoreapi.com/products/";

export default function Service() {
	const [products, setProducts] = useState([]);
	const router = useRouter();

	useEffect(() => {
		fetch(ENDPOINT)
			.then((res) => res.json())
			.then((data) => setProducts(data));
	}, []);

	return (
		<>
      <h1 className="text-4xl m-8 font-semibold text-center">Product</h1>
      <main className="h-screen mx-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
			{products.map((products: any, index) => (
				<CardProduct
                    onClick={() => router.push(`/service/${products.id}`)}
					key={index}
					title={products.title}
					image={products.image}
					price={products.price}
				/>
			))}
	   </main>
    </>
	);
}
