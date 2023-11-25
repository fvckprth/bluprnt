import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-xl md:text-2xl font-bold disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        blue: "bg-newblue/25 text-newblue",
        white: "bg-newgray/25 text-newgray",
        orange: "bg-neworange/25 text-neworange",
      },
      size: {
        default: "h-10 md:h-16 px-4 md:px-6 py-2 md:py-4 rounded-2xl md:rounded-3xl",
        withicon: "h-10 md:h-16 pl-3 md:pl-4 pr-4 md:pr-6 py-2 md:py-4 rounded-2xl md:rounded-3xl",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "blue",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
