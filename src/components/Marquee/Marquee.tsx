"use client";
import React from 'react';
import styles from './Marquee.module.css';

interface MarqueeProps {
  className?: string;
}

export default function Marquee({ className = "" }: MarqueeProps) {
  return (
    <div className={`${styles.marqueeContainer} ${className}`}>
    </div>
  );
} 