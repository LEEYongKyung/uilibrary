import React from "react"

export function Sidebar({ items, activeId, onSelect }) {
  return (
    <aside className="sidebar" role="navigation" aria-label="Component list">
      <div className="sidebar__brand">UI Reference</div>
      <ul className="sidebar__list">
        {items.map((it) => (
          <li key={it.id}>
            <button
              className={["sidebar__item", it.id === activeId ? "is-active" : ""].join(" ")}
              onClick={() => onSelect(it.id)}
              aria-current={it.id === activeId ? "page" : undefined}
            >
              <span className="sidebar__dot" aria-hidden />
              <span>{it.label}</span>
            </button>
          </li>
        ))}
      </ul>
      <div className="sidebar__footer">
        <a className="sidebar__link" href="https://react.dev/" target="_blank" rel="noreferrer">React Docs</a>
        <a className="sidebar__link" href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noreferrer">CSS Docs</a>
      </div>
    </aside>
  )
}
