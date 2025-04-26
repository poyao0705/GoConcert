"use client";
import { Sidebar } from "@/components/ui/sidebar";
import { SidebarBody } from "@/components/ui/sidebar";
import { SidebarLink } from "@/components/ui/sidebar";
// import { Logo } from "@/components/ui/sidebar";
// import { LogoIcon } from "@/components/ui/sidebar";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { IconApi, IconArrowLeft, IconBrandTabler, IconChecklist, IconMessagePlus, IconRotate, IconSettings, IconUserBolt } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

export function SidebarLayout({
    className,
    children,
  }: {
    className?: string;
    children: React.ReactNode;
  }) {
    const primaryLinks = [
      {
        label: "Dashboard",
        href: "#",
        icon: (
          <IconBrandTabler className="h-5 w-5 flex-shrink-0 text-neutral-700 dark:text-neutral-200" />
        ),
      },
      {
        label: "Profile",
        href: "#",
        icon: (
          <IconUserBolt className="h-5 w-5 flex-shrink-0 text-neutral-700 dark:text-neutral-200" />
        ),
      },
      {
        label: "Settings",
        href: "#",
        icon: (
          <IconSettings className="h-5 w-5 flex-shrink-0 text-neutral-700 dark:text-neutral-200" />
        ),
      },
      {
        label: "Logout",
        href: "#",
        icon: (
          <IconArrowLeft className="h-5 w-5 flex-shrink-0 text-neutral-700 dark:text-neutral-200" />
        ),
      },
    ];
    const secondaryLinks = [
      {
        label: "Documentation",
        href: "#",
        icon: (
          <IconChecklist className="h-5 w-5 flex-shrink-0 text-neutral-700 dark:text-neutral-200" />
        ),
      },
      {
        label: "API reference",
        href: "#",
        icon: (
          <IconApi className="h-5 w-5 flex-shrink-0 text-neutral-700 dark:text-neutral-200" />
        ),
      },
      {
        label: "Support",
        href: "#",
        icon: (
          <IconMessagePlus className="h-5 w-5 flex-shrink-0 text-neutral-700 dark:text-neutral-200" />
        ),
      },
      {
        label: "Sponser",
        href: "#",
        icon: (
          <IconRotate className="h-5 w-5 flex-shrink-0 text-neutral-700 dark:text-neutral-200" />
        ),
      },
    ];
    const [open, setOpen] = useState(true);
    return (
      <div
        className={cn(
          "mx-auto flex w-full flex-1 flex-col overflow-hidden rounded-md border border-neutral-200 bg-gray-100 md:flex-row dark:border-neutral-700 dark:bg-neutral-800",
          className,
        )}
      >
        <Sidebar open={open} setOpen={setOpen}>
          <SidebarBody className="justify-between gap-10">
            <div className="flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
              {open ? <Logo /> : <LogoIcon />}
              <div className="mt-8 flex flex-col">
                {primaryLinks.map((link, idx) => (
                  <SidebarLink key={idx} link={link} />
                ))}
              </div>
              <div className="mt-4">
                <div className="h-px w-full bg-neutral-200 dark:bg-neutral-700"></div>
                <div className="h-px w-full bg-white dark:bg-neutral-900"></div>
              </div>
              <div className="mt-4 flex flex-col">
                {secondaryLinks.map((link, idx) => (
                  <SidebarLink key={idx} link={link} />
                ))}
              </div>
            </div>
            <div>
              <SidebarLink
                link={{
                  label: "Manu Arora",
                  href: "#",
                  icon: (
                    <Image
                      src="https://assets.aceternity.com/manu.png"
                      className={cn(
                        "h-7 w-7 flex-shrink-0 rounded-full",
                        open ? "h-7 w-7" : "h-5 w-5",
                      )}
                      width={50}
                      height={50}
                      alt="Avatar"
                    />
                  ),
                }}
              />
            </div>
          </SidebarBody>
        </Sidebar>
        {children}
      </div>
    );
  }
export const Logo = () => {
    return (
        <Link
            href="#"
            className="relative z-20 flex items-center space-x-2 px-2 py-1 text-sm font-normal text-black"
        >
            <div className="h-5 w-6 flex-shrink-0 rounded-bl-sm rounded-br-lg rounded-tl-lg rounded-tr-sm bg-black dark:bg-white" />
            <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="whitespace-pre font-medium text-black dark:text-white"
            >
                Acet Labs
            </motion.span>
        </Link>
    );
};
export const LogoIcon = () => {
    return (
        <Link
            href="#"
            className="relative z-20 flex items-center space-x-2 px-2 py-1 text-sm font-normal text-black"
        >
            <div className="h-5 w-6 flex-shrink-0 rounded-bl-sm rounded-br-lg rounded-tl-lg rounded-tr-sm bg-black dark:bg-white" />
        </Link>
    );
};