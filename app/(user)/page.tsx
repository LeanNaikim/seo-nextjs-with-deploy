"use client";
import { useRouter } from "next/navigation";
import { Carousel } from "flowbite-react";

// change this to null to see the error page
// const session = null
const session = "some session data";

export default function Home() {
	const router = useRouter();

	// error.tsx will be rendered if session is null
	if (!session) {
		throw new Error("Auth is required to access this resource");
	}

	return (
		<main>
			<div className="flex flex-col items-center justify-between p-8">
				<h1 className="text-6xl font-medium">Home Page</h1>
				{/* <button
					onClick={() => router.push("/enroll")}
					className="p-4 bg-blue-300 rounded-xl text-2xl font-medium mt-4 text-[#333]"
				>
					Enroll Now
				</button> */}
				
			</div>
			<div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
					<Carousel pauseOnHover>
						<img src="skincare1.jpg" alt="..." />
						<img src="skincare2.jpg" alt="..." />
						<img src="skincare3.webp" alt="..." />
					</Carousel>
                </div>
		</main>
	);
}
