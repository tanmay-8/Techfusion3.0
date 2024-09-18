"'use client'"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function RegistrationForm() {
  return (
    (<div
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cyan-900 to-slate-900 ">
      <Card
        className="w-full max-w-4xl bg-cyan-900/30 backdrop-blur-md border-cyan-700">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center text-cyan-100">Registration</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-cyan-100">Name</Label>
              <Input
                id="name"
                placeholder="Enter name of all team members"
                className="bg-cyan-800/50 border-cyan-700 text-cyan-100 placeholder:text-cyan-400" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-cyan-100">Email</Label>
              <Input
                id="email"
                placeholder="Enter your email"
                type="email"
                className="bg-cyan-800/50 border-cyan-700 text-cyan-100 placeholder:text-cyan-400" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="whatsapp" className="text-cyan-100">WhatsApp No. (don't include country code)</Label>
              <Input
                id="whatsapp"
                placeholder="Your WhatsApp contact number"
                className="bg-cyan-800/50 border-cyan-700 text-cyan-100 placeholder:text-cyan-400" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="college" className="text-cyan-100">College Name</Label>
              <Input
                id="college"
                placeholder="Your college name"
                className="bg-cyan-800/50 border-cyan-700 text-cyan-100 placeholder:text-cyan-400" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="year" className="text-cyan-100">Year of Study</Label>
              <Select>
                <SelectTrigger className="bg-cyan-800/50 border-cyan-700 text-cyan-100">
                  <SelectValue placeholder="Select year" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">First Year</SelectItem>
                  <SelectItem value="2">Second Year</SelectItem>
                  <SelectItem value="3">Third Year</SelectItem>
                  <SelectItem value="4">Fourth Year</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label className="text-cyan-100">Select Events</Label>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="codeduet" />
                  <label
                    htmlFor="codeduet"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-cyan-100">
                    CodeDuet (₹150/team)
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="codecrush" />
                  <label
                    htmlFor="codecrush"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-cyan-100">
                    CodeCrush (₹60)
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="transaction" className="text-cyan-100">Transaction Id</Label>
            <Input
              id="transaction"
              placeholder="Enter transaction ID"
              className="bg-cyan-800/50 border-cyan-700 text-cyan-100 placeholder:text-cyan-400" />
          </div>
          <Button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white">Submit</Button>
        </CardContent>
      </Card>
    </div>)
  );
}