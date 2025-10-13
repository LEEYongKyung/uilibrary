import React from "react"
import scene1Image from "../assets/images/Scene_1.png"

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

const Flip3D = () => (
  <div class="container_flip3d">
    <div className="card_flip3d">
      <div class="card_front_flip3d">
        <img decoding="async" src={scene1Image} alt="" />
      </div>
      <div class="card_back_flip3d">
        <h3>Card Back</h3>
        <p>This is back page of card</p>
        <p>Lorem, ipsum dolor sit met</p>
      </div>

    </div>
  </div>
)

const OverlayHover = () => (
  <div>
  <div class="overlay-cards-container">
    <div class="overlay-card card1"></div>
    <div class="overlay-card card2"></div>
    <div class="overlay-card card3"></div>
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
    { id: "flip_3d", title: "Flip3D", Demo: Flip3D },
    { id: "overlay_hover", title: "Overlay Hover", Demo: OverlayHover },
  ],
}
