import React from "react"

const Placeholder = ({ label = "Demo" }) => (
  <div className="placeholder">
    <span>{label}</span>
  </div>
)

const LoaderSpinner = () => (
  <div className="spinner" aria-label="loading" />
)

const LoaderBars = () => (
  <div className="bars" aria-label="loading">
    <span /><span /><span />
  </div>
)

const LoaderRotate360 = () => (
  <div className="loader-rotate">
    <div className="loader-rotate__inner">
      <span>L</span>
      <span>O</span>
      <span>A</span>
      <span>D</span>
      <span>I</span>
      <span>N</span>
      <span>G</span>
    </div>
  </div>
)

export const registryLoader = {
  id: "loader",
  label: "Loader",
  variants: [
    { id: "spinner", title: "Spinner", Demo: LoaderSpinner },
    { id: "bars", title: "Bars", Demo: LoaderBars },
    { id: "custom", title: "Custom", Demo: () => <Placeholder label="Your Loader" /> },
    { id: "rotate360", title: "Rotate 360", Demo: LoaderRotate360 },
  ],
}
