import React, { useState, useEffect } from "react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xqadrjqg"; // your endpoint

function Toast({ show, type = "success", message, onClose }) {
  // small icon per type
  const icon =
    type === "success" ? "✅" : type === "error" ? "❌" : "⚠️";

  useEffect(() => {
    if (!show) return;
    const t = setTimeout(() => onClose(), 4200);
    return () => clearTimeout(t);
  }, [show, onClose]);

  return (
    // slide/fade from bottom: use transform & opacity transitions
    <div
      aria-live="polite"
      className={`fixed left-1/2 transform -translate-x-1/2 bottom-10 z-50 pointer-events-none transition-all duration-400 ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <div
        className={`pointer-events-auto max-w-md w-full mx-auto rounded-lg px-4 py-3 shadow-lg flex items-center gap-3 ${
          type === "success"
            ? "bg-green-900/90 ring-1 ring-green-500/30"
            : type === "error"
            ? "bg-red-900/90 ring-1 ring-red-400/25"
            : "bg-yellow-900/90 ring-1 ring-yellow-400/20"
        }`}
        role="status"
      >
        <div className="text-xl">{icon}</div>
        <div className="text-sm text-white/95">{message}</div>

        {/* close button */}
        <button
          onClick={onClose}
          className="ml-auto text-white/60 hover:text-white transition p-1 rounded"
          aria-label="Dismiss notification"
        >
          ✕
        </button>
      </div>
    </div>
  );
}

export default function Contact() {
  const [status, setStatus] = useState(null); // textual status shown inline
  const [loading, setLoading] = useState(false);

  // toast state
  const [toast, setToast] = useState({ show: false, type: "success", message: "" });

  function showToast(type, message) {
    setToast({ show: true, type, message });
  }
  function hideToast() {
    setToast((t) => ({ ...t, show: false }));
  }

  async function onSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const formData = new FormData(e.target);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("✅ Thanks — your message was sent! I will reply soon.");
        // show success toast
        showToast("success", "Message sent — thank you! I'll get back to you soon.");
        e.target.reset();
      } else {
        // Formspree error body sometimes contains errors key
        const errMsg = data.error || "Something went wrong — please try again.";
        setStatus(`⚠️ ${errMsg}`);
        showToast("error", errMsg);
      }
    } catch (err) {
      console.error(err);
      setStatus("❌ Network error — please try again later.");
      showToast("error", "Network error — please try again later.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="py-12">
      <div className="container mx-auto px-6 max-w-2xl">
        <h2 className="text-3xl font-bold mb-6 glow-contact text-center">Contact</h2>

        <form
          onSubmit={onSubmit}
          className="space-y-4 p-6 rounded-xl card-bg border border-white/6 shadow-neon-sm"
        >
          <input
            name="name"
            required
            placeholder="Your name"
            className="w-full p-3 rounded-md input-glow bg-transparent border border-white/6 focus:outline-none"
          />

          <input
            name="email"
            type="email"
            required
            placeholder="Email"
            className="w-full p-3 rounded-md input-glow bg-transparent border border-white/6 focus:outline-none"
          />

          <textarea
            name="message"
            rows="6"
            required
            placeholder="Message"
            className="w-full p-3 rounded-md input-glow bg-transparent border border-white/6 focus:outline-none"
          ></textarea>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-3 rounded-md button-neon hover:opacity-95 transition inline-flex items-center gap-2"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {/* inline status message */}
            {status && (
              <div
                className={`text-sm ${
                  status.startsWith("✅")
                    ? "text-green-400"
                    : status.startsWith("❌")
                    ? "text-red-400"
                    : "text-yellow-400"
                }`}
                role="status"
              >
                {status}
              </div>
            )}
          </div>

          <div className="mt-4 text-sm text-white/70 text-center">
            Or email me directly at{" "}
            <a
              className="underline hover:text-cyan-400"
              href="mailto:bhoomika2292004@gmail.com"
            >
              bhoomika2292004@gmail.com
            </a>
          </div>
        </form>
      </div>

      {/* Toast: bottom-center */}
      <Toast
        show={toast.show}
        type={toast.type}
        message={toast.message}
        onClose={hideToast}
      />
    </section>
  );
}
