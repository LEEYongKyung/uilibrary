import React, { useEffect, useState } from "react"

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
    <span /><span /><span /><span />
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

const SkeletonLoader = ()  =>  {

  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 10000)
    return () => clearTimeout(timer)
  }, [])

  if (isLoaded) {
    return (
      <div className="real-card">
        <h3>Real Title Content</h3>
        <p>This is the actual content that has been loaded.</p>
        <p>Additional information here.</p>
      </div>
    )
  }

  return (
  <div className="skeleton-loader-container">
    <div className="skeleton-card">
      <div className="skeleton-image">
        <div className="skeleton-content">
          <div className="skeleton-title"></div>
          <div className="skeleton-text"></div>
          <div className="skeleton-text-short"></div>
        </div>
      </div>
    </div>

    <div className="skeleton-card">
      <div className="skeleton-image">
        <div className="skeleton-content">
          <div className="skeleton-title"></div>
          <div className="skeleton-text"></div>
          <div className="skeleton-text-short"></div>
        </div>
      </div>
    </div>

  </div>
  )
}

export const registryLoader = {
  id: "loader",
  label: "Loader",
  variants: [
    { id: "spinner", title: "Spinner", Demo: LoaderSpinner },
    { id: "bars", title: "Bars", Demo: LoaderBars },
    { id: "custom", title: "Custom", Demo: () => <Placeholder label="Your Loader" /> },
    { id: "rotate360", title: "Rotate 360", Demo: LoaderRotate360 },
    { id: "skeletonLoader", title: "Skeleton Loader", Demo: SkeletonLoader },

  ],
}
