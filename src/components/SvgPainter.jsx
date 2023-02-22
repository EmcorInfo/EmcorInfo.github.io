// src/components/SvgPainter.tsx
import * as React from "react"

/**
 * Paint for SVGs linear gradient. Used in /gatsby-ssr.js
 */
const SvgPainter = () => (
  <svg key="svg_painter" width="0" height="0">
    <linearGradient
      id="svg_painter"
      x1="12.8917"
      y1="7.57877"
      x2="12.8917"
      y2="21.9488"
      gradientUnits="userSpaceOnUse"
    >
      <stop stopColor="#B50009" />
      <stop offset="1" stopColor="#800006" />
    </linearGradient>
  </svg>
)

export default SvgPainter