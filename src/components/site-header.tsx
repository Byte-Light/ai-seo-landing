"use client";

import Link from "next/link";
import SiteLogo from "@/assets/logo.svg";
import { CodeXml, Feather, MenuIcon, Newspaper, Wallet2 } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";
import { ActionButton } from "@/components/action-button";

export default function SiteHeader() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <header className="py-4 border-b bg-gradient-to-r from-purple-900 to-gray-900 backdrop-blur-md sticky top-0 z-20">
            <div className="container max-w-7xl mx-auto px-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3">
                        <div className="border size-10 rounded-lg inline-flex items-center justify-center shadow-lg bg-gradient-to-r from-purple-500 to-pink-500">
                            <SiteLogo className="size-8 h-auto" />
                        </div>
                        <span className="text-xl font-semibold text-white">AI Startup</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex gap-6 items-center">
                        <Link
                            href="#"
                            className="text-white/80 hover:text-white transition font-medium"
                        >
                            Features
                        </Link>
                        <Link
                            href="#"
                            className="text-white/80 hover:text-white transition font-medium"
                        >
                            Developers
                        </Link>
                        <Link
                            href="#"
                            className="text-white/80 hover:text-white transition font-medium"
                        >
                            Pricing
                        </Link>
                        <Link
                            href="#"
                            className="text-white/80 hover:text-white transition font-medium"
                        >
                            Changelog
                        </Link>
                    </nav>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-4">
                        <ActionButton label="Join Waitlist" className="hidden md:block" />
                        {/* Mobile Menu Trigger */}
                        <Sheet open={isOpen} onOpenChange={setIsOpen}>
                            <SheetTrigger>
                                <MenuIcon className="size-9 text-white hover:text-white/80 transition md:hidden" />
                            </SheetTrigger>
                            {/* Mobile Navigation */}
                            <SheetContent side="top" className="p-6 bg-gradient-to-b from-gray-900 to-black">
                                <div className="flex items-center justify-between mb-6">
                                    <div className="flex items-center gap-3">
                                        <div className="border size-8 rounded-lg inline-flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500">
                                            <SiteLogo className="size-6 h-auto" />
                                        </div>
                                        <span className="text-white font-bold">AI Startup</span>
                                    </div>
                                    <button
                                        onClick={() => setIsOpen(false)}
                                        className="text-white hover:text-white/70 transition"
                                    >
                                        ✕
                                    </button>
                                </div>
                                <nav className="space-y-4">
                                    <Link
                                        href="#"
                                        className="flex items-center gap-3 text-white/80 hover:text-white transition font-medium"
                                    >
                                        <Feather className="size-6" />
                                        Features
                                    </Link>
                                    <Link
                                        href="#"
                                        className="flex items-center gap-3 text-white/80 hover:text-white transition font-medium"
                                    >
                                        <CodeXml className="size-6" />
                                        Developers
                                    </Link>
                                    <Link
                                        href="#"
                                        className="flex items-center gap-3 text-white/80 hover:text-white transition font-medium"
                                    >
                                        <Wallet2 className="size-6" />
                                        Pricing
                                    </Link>
                                    <Link
                                        href="#"
                                        className="flex items-center gap-3 text-white/80 hover:text-white transition font-medium"
                                    >
                                        <Newspaper className="size-6" />
                                        Changelog
                                    </Link>
                                </nav>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </header>
    );
}
