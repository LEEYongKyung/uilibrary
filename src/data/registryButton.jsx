import React from "react"

const ButtonPrimary = () => (
  <button className="btn btn--primary">Primary</button>
)

const ButtonGhost = () => (
  <button className="btn btn--ghost">Ghost</button>
)

const ButtonLink = () => (
  <a className="btn btn--link" href="#">Link</a>
)

export const registryButton = {
  id: "button",
  label: "Button",
  variants: [
    { id: "primary", title: "Primary", Demo: ButtonPrimary },
    { id: "ghost", title: "Ghost", Demo: ButtonGhost },
    { id: "link", title: "Link", Demo: ButtonLink },
  ],
}
