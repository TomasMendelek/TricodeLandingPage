"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink, NavigationMenuTrigger, NavigationMenuContent } from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import Drawer from "./ui/drawerNavbar"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={cn("fixed w-full z-50 transition-all duration-300", isScrolled ? "bg-white shadow-md" : "bg-transparent")}>
      <div className="container max-w-7xl m-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <div className={cn("size-6 rounded", isScrolled ? "bg-yellow-400" : "bg-transparent")}>
            <Image src="/images/Tricode-logo-2.webp" alt="TricodeLogo" width={40} height={40} />
          </div>
          <span className="text-xl font-bold">Tricode</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-between flex-grow ml-8">
          <div className="flex-grow flex justify-center">
            <NavItems />
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="text-sm">Login</Button>
            <Button className={cn(isScrolled ? "bg-yellow-400 hover:bg-yellow-400/90 text-black" : "bg-black hover:bg-white text-white hover:text-black")}>Get Started</Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(true)}>
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <Drawer isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} isScrolled={isScrolled} />
    </header>
  )
}

const NavItems = ({ isMobile = false }) => (
  <NavigationMenu>
    <NavigationMenuList className={isMobile ? "flex-col items-start" : ""}>
      <NavigationMenuItem>
        <NavigationMenuTrigger className="bg-transparent">Docs</NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
            <li className="row-span-3">
              <NavigationMenuLink asChild>
                <a href="/" className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md">
                  <div className="mb-2 mt-4 text-lg font-medium">Feature Highlights</div>
                  <p className="text-sm leading-tight text-muted-foreground">Discover what makes our platform unique</p>
                </a>
              </NavigationMenuLink>
            </li>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuTrigger className="bg-transparent">Pricing</NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
            <li className="row-span-3">
              <NavigationMenuLink asChild>
                <a href="/" className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md">
                  <div className="mb-2 mt-4 text-lg font-medium">Our Solutions</div>
                  <p className="text-sm leading-tight text-muted-foreground">Find the perfect solution for your needs</p>
                </a>
              </NavigationMenuLink>
            </li>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <Link href="/blog" passHref>
          <NavigationMenuLink className={cn("group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground")}>Contact</NavigationMenuLink>
        </Link>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
)
