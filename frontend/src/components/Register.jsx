import React, { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function Register() {
  const formRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.intersectionRatio > 0.1)
      },
      {
        root: null,
        threshold: [0.1],
      }
    )

    if (formRef.current) {
      observer.observe(formRef.current)
    }

    return () => {
      if (formRef.current) {
        observer.unobserve(formRef.current)
      }
    }
  }, [])

  return (
    <div className="py-16 w-full md:px-16 space-y-6 font-body flex flex-col justify-center items-center">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-2xl md:text-4xl font-bold text-center text-white font-title"
      >
        Register Now
      </motion.h1>
      <motion.div
        ref={formRef}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 100 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="w-full flex justify-center items-center"
      >
        <Card className="w-full rounded-2xl max-w-5xl bg-gray-900/10 backdrop-blur-md border-cyan-700">
          <CardContent className="grid gap-6 p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="space-y-2"
              >
                <Label htmlFor="name" className="text-gray-200">
                  Name
                </Label>
                <Input
                  id="name"
                  placeholder="Enter name of all team members"
                  className="bg-gray-700/50 border-gray-600 text-gray-200 placeholder:text-gray-400 outline-none"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-2"
              >
                <Label htmlFor="email" className="text-gray-200">
                  Email
                </Label>
                <Input
                  id="email"
                  placeholder="Enter your email"
                  type="email"
                  className="bg-gray-700/50 border-gray-600 text-gray-200 placeholder:text-gray-400 outline-none"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="space-y-2"
              >
                <Label htmlFor="whatsapp" className="text-gray-200">
                  WhatsApp No. (don't include country code)
                </Label>
                <Input
                  id="whatsapp"
                  placeholder="Your WhatsApp contact number"
                  className="bg-gray-700/50 border-gray-600 text-gray-200 placeholder:text-gray-400 outline-none"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="space-y-2"
              >
                <Label htmlFor="college" className="text-gray-200">
                  College Name
                </Label>
                <Input
                  id="college"
                  placeholder="Your college name"
                  className="bg-gray-700/50 border-gray-600 text-gray-200 placeholder:text-gray-400 outline-none"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="space-y-2"
              >
                <Label htmlFor="year" className="text-gray-200">
                  Year of Study
                </Label>
                <Select>
                  <SelectTrigger className="bg-gray-700/50 border-gray-600 text-gray-200">
                    <SelectValue placeholder="Select year" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">First Year</SelectItem>
                    <SelectItem value="2">Second Year</SelectItem>
                    <SelectItem value="3">Third Year</SelectItem>
                    <SelectItem value="4">Fourth Year</SelectItem>
                  </SelectContent>
                </Select>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="space-y-2"
              >
                <Label className="text-gray-200">Select Events</Label>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="codeduet" />
                    <label
                      htmlFor="codeduet"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-200"
                    >
                      CodeDuet (₹150/team)
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="codecrush" />
                    <label
                      htmlFor="codecrush"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-200"
                    >
                      CodeCrush (₹60)
                    </label>
                  </div>
                </div>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="space-y-2"
            >
              <Label htmlFor="transaction" className="text-gray-200">
                Transaction Id
              </Label>
              <Input
                id="transaction"
                placeholder="Enter transaction ID"
                className="bg-gray-700/50 border-gray-600 text-gray-200 placeholder:text-gray-400 outline-none"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.5 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex justify-center"
            >
              <Button className="w-fit px-10 bg-cyan-700 hover:bg-cyan-800 text-white">
                Submit
              </Button>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}