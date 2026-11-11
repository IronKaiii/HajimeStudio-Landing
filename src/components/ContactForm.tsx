import { useState, type FormEvent } from "react";

type Status = "idle" | "error" | "ready";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    setStatus("idle");
    setError("");

    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus("error");
      setError("Add your name, email, and a short project note.");
      return;
    }

    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    if (!emailOk) {
      setStatus("error");
      setError("Enter a valid email so we can reply.");
      return;
    }

    const subject = encodeURIComponent(`Project inquiry from ${name.trim()}`);
    const body = encodeURIComponent(
      `Name: ${name.trim()}\nEmail: ${email.trim()}\n\n${message.trim()}`,
    );

    // Placeholder inbox until the studio confirms a live address.
    window.location.href = `mailto:hello@hajimestudio?subject=${subject}&body=${body}`;
    setStatus("ready");
  };

  return (
    <form className="contact-form" onSubmit={onSubmit} noValidate>
      <div className="field">
        <label className="title-4" htmlFor="name">
          Name
        </label>
        <input
          id="name"
          name="name"
          className="field-input body-3"
          autoComplete="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div className="field">
        <label className="title-4" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          className="field-input body-3"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="field">
        <label className="title-4" htmlFor="message">
          Project note
        </label>
        <textarea
          id="message"
          name="message"
          className="field-input field-area body-3"
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </div>

      {status === "error" ? (
        <p className="form-error body-5" role="alert">
          {error}
        </p>
      ) : null}

      {status === "ready" ? (
        <p className="form-ok body-5" role="status">
          Opening your email app with a draft to hello@hajimestudio (placeholder inbox).
        </p>
      ) : null}

      <button type="submit" className="btn btn-primary button-md">
        Start a project
      </button>
      <p className="caption-2 form-note">
        Or email{" "}
        <a href="mailto:hello@hajimestudio">hello@hajimestudio</a> directly. This is a labeled
        placeholder until the live inbox is confirmed.
      </p>
    </form>
  );
}
