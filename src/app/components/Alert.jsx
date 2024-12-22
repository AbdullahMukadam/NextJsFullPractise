import { AlertCircle, CheckCircle } from 'lucide-react'

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"

export function AlertDestructive({ title, description, variant = "destructive" }) {
  const Icon = variant === "destructive" ? AlertCircle : CheckCircle;
  
  return (
    <Alert variant={variant} className="mb-2 w-[50%] animate-in">
      <Icon className="h-4 w-4" />
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>
        {description}
      </AlertDescription>
    </Alert>
  )
}