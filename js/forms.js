(() => {
  const WHATSAPP_NUMBER = "260961689063"; // Public general contact line; confirm routing with Glamville before launch.
  const encode = text => encodeURIComponent(text);
  const openWhatsApp = message => {
    const url = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encode(message);
    window.open(url, "_blank", "noopener,noreferrer");
  };
  const bookingForm = document.getElementById("booking-form");
  if (bookingForm) bookingForm.addEventListener("submit", event => {
    event.preventDefault();
    if (!bookingForm.reportValidity()) return;
    const data = new FormData(bookingForm);
    const message = [
      "Hello Glamville team! I'd like to request an appointment.",
      "",
      "Name: " + data.get("name"),
      "Phone: " + data.get("phone"),
      "Preferred branch: " + data.get("branch"),
      "Service: " + data.get("service"),
      "Preferred date: " + data.get("date"),
      "Preferred time: " + data.get("time"),
      "Additional notes: " + (data.get("notes") || "None"),
      "",
      "Please confirm availability and current pricing. I understand this is a request, not a confirmed appointment."
    ].join("\n");
    const status = document.getElementById("form-status");
    if (status) status.textContent = "Opening WhatsApp. Review the message and press Send to submit your request.";
    openWhatsApp(message);
  });
  const contactForm = document.getElementById("contact-form");
  if (contactForm) contactForm.addEventListener("submit", event => {
    event.preventDefault();
    if (!contactForm.reportValidity()) return;
    const data = new FormData(contactForm);
    const message = [
      "Hello Glamville team, I have an enquiry.",
      "",
      "Name: " + data.get("name"),
      "Reply to: " + data.get("reply"),
      "Topic: " + data.get("topic"),
      "Message: " + data.get("message")
    ].join("\n");
    const status = document.getElementById("contact-status");
    if (status) status.textContent = "Opening WhatsApp. Review the message and press Send to submit your enquiry.";
    openWhatsApp(message);
  });
})();