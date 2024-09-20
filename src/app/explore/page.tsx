"use client";

import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Sidebar } from "@/components/Sidebar";
import { Recommendation } from "@/components/Recommendations";

export default function Explore() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="flex flex-1 overflow-hidden">
                <Sidebar />
                <Recommendation />
            </div>
            <Footer />
        </div>
    )
}