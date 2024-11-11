"use client"

import { Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export default function Pricing() {
  return (
    <div className="w-full px-4 py-8">
          <div className="text-sm font-light text-yellow-500 w-fit m-auto px-2 bg-yellow-50 mt-8">Precios</div>
          <div className="text-4xl font-bold text-neutral-900 text-center py-5">Elegí Tu plan</div>
      <div className="mx-auto mb-10 flex max-w-xs items-center justify-center gap-4">
        <Label htmlFor="billing">Mes</Label>
        <Switch id="billing" />
        <Label htmlFor="billing">Años</Label>
      </div>
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-3">
        <Card className="relative flex flex-col">
          <CardContent className="flex-1 p-6">
            <div className="text-xl font-semibold text-muted-foreground">BASIC</div>
            <div className="mt-4 flex items-baseline text-6xl font-bold">
              $19
              <span className="ml-1 text-xl font-medium text-muted-foreground">/ month</span>
            </div>
            <p className="mt-1 text-sm text-muted-foreground">billed monthly</p>
            <ul className="mt-6 space-y-4">
              {["1 User", "5GB Storage", "Basic Support", "Limited API Access", "Standard Analytics"].map((feature) => (
                <li key={feature} className="flex text-sm">
                  <Check className="mr-2 h-5 w-5 text-yellow-400" />
                  {feature}
                </li>
              ))}
            </ul>
            <Button className="mt-8 w-full bg-yellow-400 hover:bg-yellow-500 text-black">Subscribe</Button>
            <p className="mt-4 text-center text-sm text-muted-foreground">Perfect for individuals and small projects</p>
          </CardContent>
        </Card>
        <Card className="relative flex flex-col border-2 border-yellow-400">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full  bg-yellow-400 px-3 py-1 text-sm font-semibold">
            Popular
          </div>
          <CardContent className="flex-1 p-6">
            <div className="text-xl font-semibold text-muted-foreground">PRO</div>
            <div className="mt-4 flex items-baseline text-6xl font-bold">
              $49
              <span className="ml-1 text-xl font-medium text-muted-foreground">/ month</span>
            </div>
            <p className="mt-1 text-sm text-muted-foreground">billed monthly</p>
            <ul className="mt-6 space-y-4">
              {["5 Users", "50GB Storage", "Priority Support", "Full API Access", "Advanced Analytics"].map((feature) => (
                <li key={feature} className="flex text-sm">
                  <Check className="mr-2 h-5 w-5 text-yellow-400" />
                  {feature}
                </li>
              ))}
            </ul>
            <Button className="mt-8 w-full bg-yellow-400 hover:bg-yellow-500 text-black">Subscribe</Button>
            <p className="mt-4 text-center text-sm text-muted-foreground">Ideal for growing businesses and teams</p>
          </CardContent>
        </Card>
        <Card className="relative flex flex-col">
          <CardContent className="flex-1 p-6">
            <div className="text-xl font-semibold text-muted-foreground">ENTERPRISE</div>
            <div className="mt-4 flex items-baseline text-6xl font-bold">
              $99
              <span className="ml-1 text-xl font-medium text-muted-foreground">/ month</span>
            </div>
            <p className="mt-1 text-sm text-muted-foreground">billed monthly</p>
            <ul className="mt-6 space-y-4">
              {[
                "Unlimited Users",
                "500GB Storage",
                "24/7 Premium Support",
                "Custom Integrations",
                "AI-Powered Insights",
              ].map((feature) => (
                <li key={feature} className="flex text-sm">
                  <Check className="mr-2 h-5 w-5 text-yellow-400" />
                  {feature}
                </li>
              ))}
            </ul>
            <Button className="mt-8 w-full bg-yellow-400 text-black hover:bg-yellow-500">Subscribe</Button>
            <p className="mt-4 text-center text-sm text-muted-foreground">For large-scale operations and high-volume users</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}