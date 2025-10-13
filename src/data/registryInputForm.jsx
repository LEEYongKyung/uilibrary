import React from "react"

const SimpleContactForm = () => (
  <form className="form-card">
    <label className="form-card__field">
      <span>Name</span>
      <input type="text" placeholder="Jane Doe" />
    </label>
    <label className="form-card__field">
      <span>Email</span>
      <input type="email" placeholder="jane@example.com" />
    </label>
    <label className="form-card__field">
      <span>Message</span>
      <textarea placeholder="How can we help?" rows={3} />
    </label>
    <button type="submit" className="btn btn--primary form-card__submit">
      Send message
    </button>
  </form>
)

const InlineFieldForm = () => (
  <form className="form-card form-card--inline">
    <div className="form-card__inline-row">
      <label className="form-card__field">
        <span>First name</span>
        <input type="text" placeholder="Jane" />
      </label>
      <label className="form-card__field">
        <span>Last name</span>
        <input type="text" placeholder="Doe" />
      </label>
    </div>
    <label className="form-card__field">
      <span>Company</span>
      <input type="text" placeholder="Acme Inc." />
    </label>
    <label className="form-card__checkbox">
      <input type="checkbox" defaultChecked />
      <span>Subscribe to newsletter</span>
    </label>
    <div className="form-card__actions">
      <button type="button" className="btn btn--ghost">Cancel</button>
      <button type="submit" className="btn btn--primary">Save</button>
    </div>
  </form>
)

const FloatingLabelForm = () => (
  <form className="form-card form-card--floating">
    <label className="form-card__field">
      <input type="email" placeholder=" " />
      <span>Email</span>
    </label>
    <label className="form-card__field">
      <input type="password" placeholder=" " />
      <span>Password</span>
    </label>
    <button type="submit" className="btn btn--primary form-card__submit">
      Log in
    </button>
  </form>
)

export const registryInputForm = {
  id: "input-form",
  label: "Input Form",
  variants: [
    { id: "contact", title: "Contact Form", notes: "Stacked fields with primary action.", Demo: SimpleContactForm },
    { id: "inline", title: "Inline Form", notes: "Two-column layout and mixed controls.", Demo: InlineFieldForm },
    { id: "floating", title: "Floating Labels", notes: "Floating placeholders with focus ring.", Demo: FloatingLabelForm },
  ],
}
