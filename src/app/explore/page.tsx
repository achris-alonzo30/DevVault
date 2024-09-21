"use client";

import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Sidebar } from "@/components/Sidebar";

import { BrowserTab } from "@/components/BrowserTab";

export default function Explore() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="flex flex-1 overflow-hidden">
                {/* <Sidebar /> */}
                <BrowserTab />
            </div>
            <Footer />
        </div>
    )
}