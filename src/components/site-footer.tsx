import X from "@/assets/social-x.svg";
import Instagram from "@/assets/social-instagram.svg";
import Youtube from "@/assets/social-youtube.svg";
import SiteLogo from "@/assets/logo.svg";
import Link from "next/link";

export default function SiteFooter() {
    return (
        <footer className="bg-gradient-to-b from-gray-900 to-black py-10 md:py-16 text-white">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-col md:flex-row md:justify-between items-center md:items-start gap-8">
                    {/* Branding */}
                    <div className="flex flex-col items-center md:items-start gap-4">
                        <div className="flex items-center gap-3">
                            <div className="border size-10 rounded-lg inline-flex items-center justify-center">
                                <SiteLogo className="size-8 h-auto" />
                            </div>
                            <span className="text-lg font-semibold tracking-tight">
                                AI SEO Landing Page
                            </span>
                        </div>
                        <p className="text-sm text-center md:text-left text-gray-400">
                            Revolutionizing SEO with cutting-edge AI tools and insights.
                        </p>
                    </div>

                    {/* Navigation */}
                    <nav>
                        <ul className="flex flex-col md:flex-row gap-4 text-sm">
                            <li>
                                <Link href="/features" className="hover:underline">
                                    Features
                                </Link>
                            </li>
                            <li>
                                <Link href="/pricing" className="hover:underline">
                                    Pricing
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="hover:underline">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:underline">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    {/* Social Media */}
                    <div className="flex flex-col items-center md:items-end gap-4">
                        <span className="text-sm text-gray-400">Follow Us</span>
                        <ul className="flex gap-4 text-white">
                            <li className="hover:opacity-80 transition-opacity cursor-pointer">
                                <X className="w-6 h-6" />
                            </li>
                            <li className="hover:opacity-80 transition-opacity cursor-pointer">
                                <Instagram className="w-6 h-6" />
                            </li>
                            <li className="hover:opacity-80 transition-opacity cursor-pointer">
                                <Youtube className="w-6 h-6" />
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-700 mt-8"></div>

                {/* Copyright */}
                <div className="mt-6 text-sm text-center text-gray-400">
                    ©️ {new Date().getFullYear()} Bytelight, All rights reserved. Built by{" "}
                    <a
                        href="https://github.com/Byte-Light"
                        target="_blank"
                        rel="noreferrer"
                        className="font-medium underline underline-offset-4 hover:text-gray-200"
                    >
                        Bytelight
                    </a>
                    .
                </div>
            </div>
        </footer>
    );
}
