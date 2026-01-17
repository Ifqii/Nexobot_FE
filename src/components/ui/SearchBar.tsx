import React from 'react'
import { Input } from './Input'


interface SearchBarProps {
  placeholder?: string;
  className?: string;
  variant?: 'primary' | 'secondary' | 'default' | 'custom';
}

const SearchBar = ({ placeholder, className, variant = "primary" }: SearchBarProps) => {
  return (
    <div>
        <Input placeholder={placeholder || "Search..."} variant={variant} className={className} />
    </div>
  )
}

export {SearchBar}