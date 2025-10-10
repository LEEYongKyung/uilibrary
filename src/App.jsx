import React, { useEffect, useMemo, useState } from "react"
import { Sidebar } from "./components/Sidebar.jsx"
import { Gallery } from "./components/Gallery.jsx"
import { registryButton } from "./data/registryButton.jsx"
import { registryLoader } from "./data/registryLoader.jsx"
import { registryCard } from "./data/registryCard.jsx"

export default function App() {
  const items = [registryButton, registryLoader, registryCard]
  const [activeId, setActiveId] = useState(() => (location.hash?.slice(1) || items[0]?.id))

  // keep URL hash in sync with selection
  useEffect(() => {
    const onHash = () => setActiveId(location.hash?.slice(1) || items[0]?.id)
    window.addEventListener("hashchange", onHash)
    return () => window.removeEventListener("hashchange", onHash)
  }, [items])

  const active = useMemo(() => items.find(i => i.id === activeId) || items[0], [items, activeId])

  const handleSelect = (id) => {
    if (!id) return
    if (id !== activeId) {
      location.hash = id
      setActiveId(id)
    }
  }

  return (
    <div className="app">
      <Sidebar items={items} activeId={active?.id} onSelect={handleSelect} />
      <main className="main">
        <header className="main__header">
          <h1 className="main__title">{active?.label}</h1>
          <p className="main__desc">Variants for <code>{active?.id}</code>. Replace the demo content with your own code in the files under <code>src/data</code>.</p>
        </header>

        <Gallery component={active} />
      </main>
    </div>
  )
}
