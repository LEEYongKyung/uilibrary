import React from "react"

export function Cell({ title, children, notes }) {
  return (
    <article className="cell">
      <div className="cell__demo">
        {children}
      </div>
      <div className="cell__meta">
        <h3 className="cell__title">{title}</h3>
        {notes ? <p className="cell__notes">{notes}</p> : null}
      </div>
    </article>
  )
}
