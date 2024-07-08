// components/ContactButton.jsx
'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"

export default function ContactButton() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('dhruvakumar2025@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Button 
      variant="default" 
      className="bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-600 hover:to-blue-900 text-white"
      onClick={copyEmail}
    >
      {copied ? 'Email Copied!' : 'Copy Email'}
    </Button>
  );
}