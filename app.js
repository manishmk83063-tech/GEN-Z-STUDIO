const WHATSAPP = "918306308351";

function wa(text) {
  window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`, "_blank");
}

function openEnquiry(type, item) {
  const modal = document.getElementById("enquiryModal");
  const itemInput = document.getElementById("enquiryItem");
  const typeInput = document.getElementById("enquiryType");
  if (!modal) return;
  if (typeInput) typeInput.value = type || "General Enquiry";
  if (itemInput) itemInput.value = item || "";
  modal.classList.remove("hidden");
  document.body.classList.add("modal-open");
  setTimeout(() => document.getElementById("enquiryName")?.focus(), 100);
}

function closeEnquiry() {
  document.getElementById("enquiryModal")?.classList.add("hidden");
  document.body.classList.remove("modal-open");
}

function submitEnquiry(e) {
  e.preventDefault();
  const name = document.getElementById("enquiryName")?.value.trim() || "";
  const phone = document.getElementById("enquiryPhone")?.value.trim() || "";
  const email = document.getElementById("enquiryEmail")?.value.trim() || "";
  const type = document.getElementById("enquiryType")?.value || "General Enquiry";
  const item = document.getElementById("enquiryItem")?.value.trim() || "";
  const message = document.getElementById("enquiryMessage")?.value.trim() || "";

  if (!name || !phone) {
    alert("Please enter your name and mobile number.");
    return;
  }

  const text =
`🔔 GEN Z STUDIO — NEW ENQUIRY

Name: ${name}
Mobile: ${phone}
Email: ${email || "Not provided"}
Enquiry Type: ${type}
Course / Service: ${item || "General Enquiry"}
Message: ${message || "No message"}

Website: GEN Z STUDIO`;

  wa(text);
  e.target.reset();
  closeEnquiry();
}


function submitAboutEnquiry(e) {
  e.preventDefault();
  const name = document.getElementById("aboutNameInput")?.value.trim() || "";
  const phone = document.getElementById("aboutPhoneInput")?.value.trim() || "";
  const email = document.getElementById("aboutEmailInput")?.value.trim() || "";
  const item = document.getElementById("aboutItemInput")?.value.trim() || "";
  const message = document.getElementById("aboutMessageInput")?.value.trim() || "";

  if (!name || !phone) {
    alert("Please enter your name and mobile number.");
    return;
  }

  const text =
`🔔 GEN Z STUDIO — NEW ENQUIRY

Name: ${name}
Mobile: ${phone}
Email: ${email || "Not provided"}
Course / Service: ${item || "General Enquiry"}
Message: ${message || "No message"}

Website: GEN Z STUDIO`;

  wa(text);
  e.target.reset();
}

function requestCourse(name) {
  openEnquiry("Course Enquiry", name);
}

function requestService(name) {
  openEnquiry("Service Enquiry", name);
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".menu")?.addEventListener("click", () =>
    document.querySelector(".navbar nav")?.classList.toggle("open")
  );

  document.querySelectorAll("nav a").forEach(a =>
    a.addEventListener("click", () =>
      document.querySelector(".navbar nav")?.classList.remove("open")
    )
  );

  document.querySelectorAll("[data-enquiry]").forEach(b => {
    b.addEventListener("click", () => openEnquiry("General Enquiry", b.dataset.enquiry || ""));
  });

  document.getElementById("enquiryForm")?.addEventListener("submit", submitEnquiry);
  document.getElementById("aboutEnquiryForm")?.addEventListener("submit", submitAboutEnquiry);
  document.getElementById("enquiryClose")?.addEventListener("click", closeEnquiry);
  document.getElementById("enquiryModal")?.addEventListener("click", e => {
    if (e.target.id === "enquiryModal") closeEnquiry();
  });

  document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeEnquiry();
  });
});
