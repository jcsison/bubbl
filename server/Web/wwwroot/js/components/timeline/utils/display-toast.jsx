import React from 'react'
import { toast } from 'react-semantic-toasts'

export const displayToast = (title, description, type) => {
  toast({
    title: title,
    description: <p>{description}</p>,
    type: type,
    time: 5000
  })
}
