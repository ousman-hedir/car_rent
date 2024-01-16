import React from "react";
import Image from "next/image";
import Link from "next/link";

function Footer() {
	return (
		<footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100">
			<div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
				<div className="flex flex-col justify-start items-start gap-6">
					<Link href="/" passHref>
						<Image
							src="/logo.svg"
							alt="logo png"
							width={118}
							height={18}
							className="object-contain"
						/>
					</Link>
					<p className="text-sm">
						we are best car rent in ethiopia 
					</p>
				</div>
				<div className="flex flex-col gap-2">
					<h3 className="font-semibold text-lg mb-2">Explore</h3>
					<ul className="flex flex-col gap-2">
						<li>
							<Link href="/cars">Cars</Link>
						</li>
						<li>
							<Link href="/about">About Us</Link>
						</li>
						<li>
							<Link href="/contact">Contact</Link>
						</li>
						<li>
							<Link href="/locations">Locations</Link>
						</li>
					</ul>
				</div>
				<div className="flex flex-col gap-2">
					<h3 className="font-semibold text-lg mb-2">Resources</h3>
					<ul className="flex flex-col gap-2">
						<li>
							<Link href="/">FAQs</Link>
						</li>
						<li>
							<Link href="/">Terms of Service</Link>
						</li>
						<li>
							<Link href="/">Privacy Policy</Link>
						</li>
						<li>
							<Link href="/">Blog</Link>
						</li>
					</ul>
				</div>
				<div className="flex flex-col gap-2">
					<h3 className="font-semibold text-lg mb-2">Connect</h3>
					<ul className="flex flex-col gap-2">
						<li>
							<Link href="mailto:info@example.com">Email</Link>
						</li>
						<li>
							<Link href="/">Phone</Link>
						</li>
						<Link href="/" passHref>
							Facebook
						</Link>
						<Link href="/" passHref>
							Twitter
						</Link>
						<Link href="/" passHref>
							Instagram
						</Link>
						
					</ul>
				</div>
				<div className="flex flex-col gap-2">
					<h3 className="font-semibold text-lg mb-2">Services</h3>
					<ul className="flex flex-col gap-2">
						<li>
							<Link href="/">Online Booking</Link>
						</li>
						<li>
							<Link href="/">Insurance Options</Link>
						</li>
						<li>
							<Link href="/">Customer Support</Link>
						</li>
					</ul>
				</div>
			</div>
			<div className="text-center py-5 bg-gray-200">
				<p className="text-sm">
					 {new Date().getFullYear()} Habesha Car Rental App. All rights
					reserved.
				</p>
				<p className="text-sm">Registered address or legal information.</p>
			</div>
		</footer>
	);
}

export default Footer;
