"use client"

import { useEffect, useState } from "react"
import { TypingTextProops } from "@/lib/proops"

const TypingText = ({
    text,
    speed = 200,
    deletingSpeed = 250,
    delayAfterDelete = 1500,
    delayAfterType = 1500,
    className
}: TypingTextProops) => {
    const [displayedText, setDisplayedText] = useState("")
    const [isDeleting, setIsDeleting] = useState(false)


     useEffect(() => {
    let timeout: NodeJS.Timeout


    if (!isDeleting && displayedText.length < text.length) {
      timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length + 1))
      }, speed)
    }

    else if (!isDeleting && displayedText.length === text.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true)
      }, delayAfterType)
    }

    else if (isDeleting && displayedText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length - 1))
      }, deletingSpeed)
    }

    else if (isDeleting && displayedText.length === 0) {
      timeout = setTimeout(() => {
        setIsDeleting(false)
      }, delayAfterDelete)
    }

    return () => clearTimeout(timeout)
  }, [
    displayedText,
    isDeleting,
    text,
    speed,
    deletingSpeed,
    delayAfterType,
    delayAfterDelete
  ])

    return(
        <span className={className}>
            {displayedText}
            <span className="animate-pulse">|</span>
        </span>
    )
}

export default TypingText