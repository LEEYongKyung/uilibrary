import React from "react"

const Placeholder = ({ label = "Demo" }) => (
  <div className="placeholder">
    <span>{label}</span>
  </div>
)

const CardBasic = () => (
  <div className="card">
    <div className="card__media" />
    <div className="card__body">
      <div className="card__title">Card title</div>
      <div className="card__text">Short description goes here.</div>
      <div className="card__actions">
        <button className="btn btn--primary">Action</button>
        <button className="btn btn--ghost">Secondary</button>
      </div>
    </div>
  </div>
)

export const registryCard = {
  id: "card",
  label: "Card",
  variants: [
    { id: "basic", title: "Basic Card", Demo: CardBasic },
    { id: "image", title: "Image Focus", Demo: () => <Placeholder label="Card Variant" /> },
    { id: "compact", title: "Compact", Demo: () => <Placeholder label="Compact" /> },
  ],
}
