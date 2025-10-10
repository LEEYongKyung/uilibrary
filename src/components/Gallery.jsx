import React from "react"
import { Cell } from "./Cell.jsx"

export function Gallery({ component }) {
  if (!component) return null
  const { variants = [] } = component

  return (
    <section className="gallery">
      <div className="grid">
        {variants.map((v) => (
          <Cell key={v.id} title={v.title} notes={v.notes}>
            <v.Demo />
          </Cell>
        ))}
      </div>
    </section>
  )
}
