import React from "react"

const GlowHeadline = () => (
  <div className="text-effect text-effect--glow">
    Aurora Gradient
  </div>
)

const NeonTitle = () => (
  <div className="text-effect text-effect--neon">
    Neon Pulse
  </div>
)

const OutlineStack = () => {
  const label = "Layered Echo"
  return (
    <div className="text-effect text-effect--outline" data-text={label}>
      {label}
    </div>
  )
}

export const registryTextEffect = {
  id: "text-effect",
  label: "Text Effect",
  variants: [
    { id: "glow-headline", title: "Glow Headline", notes: "Gradient-filled lettering with a soft glow.", Demo: GlowHeadline },
    { id: "neon-title", title: "Neon Title", notes: "Animated neon stroke with subtle pulse.", Demo: NeonTitle },
    { id: "outline-stack", title: "Outline Stack", notes: "Stacked offsets create a faux 3D outline.", Demo: OutlineStack },
  ],
}
