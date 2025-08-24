import React from "react";
import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import Icon from "@/components/Icon";
import icons from "@/lib/icons/icons";
import Button from "@/components/Button/Button";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
    title: "Danial Momenpour",
    description: "front-end developer",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={`${inter.variable} antialiased`}
        >

        <div className={"w-full h-16 p-4 flex items-center justify-between bg-light-0 dark:bg-dark-0 tablet-min:hidden"}>
            <span className={"text-3xl font-bold leading-9 text-light-900 dark:text-dark-900 tracking-2"}>
                {"<DM />"}
            </span>

            <Button
                size={"md"}
                type={"secondary"}
            >
                <Icon
                    icon={icons.menu}
                    className={"size-6 text-gray-600 dark:text-dark-600"}
                />
            </Button>
        </div>

        {children}
        </body>
        </html>
    );
}
