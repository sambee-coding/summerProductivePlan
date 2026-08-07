/**
 * Afro Salon & Spa - Interactive Engine
 * Location: Bulbula, Addis Ababa 1000
 * Phone: +251 95 321 2223 / 095 321 2223
 */

// Services Data Store
const SERVICES_DATA = [
  {
    id: "knotless-braids",
    category: "hair",
    title: "Signature Knotless Braids",
    subtitle: "HAIR ARTISTRY",
    description: "Tension-free, featherlight protective styling tailored to your aesthetic. Long-lasting with neat parting and scalp care.",
    priceETB: 1800,
    duration: "120 min",
    image: "assets/images/hair.png",
    badge: "Most Requested",
    features: ["Zero Scalp Tension", "Organic Oil Finish", "Custom Lengths Available"]
  },
  {
    id: "couture-styling",
    category: "hair",
    title: "Couture Styling & Silk Press",
    subtitle: "HAIR ARTISTRY",
    description: "High-gloss silk press, blowouts, and protective natural hair hydration using gentle thermal shields.",
    priceETB: 1200,
    duration: "60 min",
    image: "assets/images/hair.png",
    badge: "Luxury Gloss",
    features: ["Heat Protectant Shield", "Split-end Trimming", "Bouncy Finish"]
  },
  {
    id: "hair-extensions",
    category: "hair",
    title: "Weaves & Extension Installation",
    subtitle: "HAIR ARTISTRY",
    description: "Flawless weave placement, microlinks, and ponytail styling with seamless natural blend.",
    priceETB: 2200,
    duration: "150 min",
    image: "assets/images/hair.png",
    badge: "Volume & Glam",
    features: ["Seamless Blend", "Scalp Conditioning", "Styling Included"]
  },
  {
    id: "hot-stone-massage",
    category: "spa",
    title: "Embered Earth Hot Stone Ritual",
    subtitle: "SPA & WELLNESS",
    description: "Warm Ethiopian basalt volcanic stones combined with botanical herbal oils to melt deep muscle knots.",
    priceETB: 2500,
    duration: "75 min",
    image: "assets/images/spa.png",
    badge: "Deep Relaxation",
    features: ["Warm Basalt Stones", "Aromatherapy Oils", "Tension Melting"]
  },
  {
    id: "aromatherapy-massage",
    category: "spa",
    title: "Forest Canopy Swedish Massage",
    subtitle: "SPA & WELLNESS",
    description: "Full body gentle to medium pressure Swedish massage using cold-pressed essential oils to restore inner calm.",
    priceETB: 2000,
    duration: "60 min",
    image: "assets/images/spa.png",
    badge: "Stress Relief",
    features: ["Custom Essential Oils", "Pressure Customization", "Relaxation Tea"]
  },
  {
    id: "head-scalp-spa",
    category: "spa",
    title: "Organic Herbal Scalp & Head Spa",
    subtitle: "SPA & WELLNESS",
    description: "Botanical scalp detox, warm herbal rinse, deep pressure massage, and stimulating root serum.",
    priceETB: 1400,
    duration: "45 min",
    image: "assets/images/spa.png",
    badge: "Scalp Renewal",
    features: ["Herbal Rinse Bath", "Acupressure Points", "Root Rejuvenation"]
  },
  {
    id: "gel-manicure",
    category: "nails",
    title: "Russian Gel Manicure & Art",
    subtitle: "NAILS LOUNGE",
    description: "Precision dry cuticle cleaning, nail reinforcement, chip-resistant gel polish, and custom nail art accents.",
    priceETB: 900,
    duration: "40 min",
    image: "assets/images/nails.png",
    badge: "Long Lasting",
    features: ["Precision Cuticle Care", "3+ Week Longevity", "Non-Toxic Gel"]
  },
  {
    id: "deluxe-pedicure",
    category: "nails",
    title: "Herbal Pedicure & Foot Reflexology",
    subtitle: "NAILS LOUNGE",
    description: "Epsom salt soak, organic scrub exfoliation, callus smoothing, and soothing pressure point foot massage.",
    priceETB: 1100,
    duration: "45 min",
    image: "assets/images/nails.png",
    badge: "Organic Foot Spa",
    features: ["Herbal Foot Soak", "Callus Smoothing", "Reflex Foot Massage"]
  },
  {
    id: "pale-jade-facial",
    category: "face",
    title: "Pale Jade Radiance Facial",
    subtitle: "FACE & BROWS",
    description: "Deep pore ultrasonic cleanse, antioxidant hydration mask, jade roller sculpting, and glowing sun protection.",
    priceETB: 1600,
    duration: "50 min",
    image: "assets/images/facial.png",
    badge: "Signature Glow",
    features: ["Jade Roller Sculpting", "Pore Cleansing", "Radiance Serum"]
  },
  {
    id: "brows-threading",
    category: "face",
    title: "Eyebrow Beautification & Threading",
    subtitle: "FACE & BROWS",
    description: "Precise organic cotton hair threading, arch shaping, and eyebrow tinting to frame your facial beauty.",
    priceETB: 650,
    duration: "30 min",
    image: "assets/images/facial.png",
    badge: "Precision Arch",
    features: ["Organic Cotton Thread", "Custom Arch Mapping", "Soothing Aloe Gel"]
  },
  {
    id: "hair-waxing",
    category: "face",
    title: "Full Glow Organic Body Waxing",
    subtitle: "FACE & BROWS",
    description: "Gentle organic honey wax for smooth, radiant skin with minimal irritation and long-lasting smoothness.",
    priceETB: 1400,
    duration: "45 min",
    image: "assets/images/facial.png",
    badge: "Silky Smooth",
    features: ["Gentle Honey Wax", "Post-Wax Soothing Balm", "Slow Regrowth"]
  }
];

// Exchange rate approx for USD display
const ETB_TO_USD_RATE = 0.0083; // approx 120 ETB = 1 USD

// Application State
const AppState = {
  currentCategory: "all",
  currency: "ETB",
  theme: "light",
  selectedTime: "07:30 AM",
  soundActive: false
};

// DOM Content Loaded Handler
document.addEventListener("DOMContentLoaded", () => {
  renderServices(SERVICES_DATA);
  setupCategoryTabs();
  setupBookingEngine();
  setupPamperBuilder();
  setupTransformationSlider();
  setupHoursStatus();
  setupAudioChime();
  setupThemeToggle();
  setupCurrencyToggle();
  setupModals();
  setupCopyAddress();
});

/* ==========================================================================
   1. RENDER SERVICES GRID
   ========================================================================== */
function renderServices(services) {
  const container = document.getElementById("services-container");
  if (!container) return;

  container.innerHTML = "";

  services.forEach(service => {
    const card = document.createElement("article");
    card.className = "service-card";
    card.dataset.id = service.id;
    card.dataset.category = service.category;

    const displayPrice = AppState.currency === "ETB" 
      ? `${service.priceETB.toLocaleString()} ETB` 
      : `$${(service.priceETB * ETB_TO_USD_RATE).toFixed(2)} USD`;

    card.innerHTML = `
      <div class="service-card-image">
        <img src="${service.image}" alt="${service.title}" loading="lazy">
        <span class="service-badge">${service.badge}</span>
        <span class="service-duration"><i class="fa-regular fa-clock"></i> ${service.duration}</span>
      </div>
      <div class="service-card-body">
        <span class="service-category-label">${service.subtitle}</span>
        <h3 class="service-card-title">${service.title}</h3>
        <p class="service-card-desc">${service.description}</p>
        <ul class="service-features-list">
          ${service.features.map(f => `<li><i class="fa-solid fa-check"></i> ${f}</li>`).join("")}
        </ul>
        <div class="service-card-footer">
          <div class="service-price-box">
            <span class="price-subtext">Estimated Rate</span>
            <span class="price-amount">${displayPrice}</span>
          </div>
          <button class="btn-book-service" data-id="${service.id}">
            <span>Book Visit</span>
            <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    `;

    container.appendChild(card);
  });

  // Bind click on "Book Visit" inside service cards
  container.querySelectorAll(".btn-book-service").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const serviceId = e.currentTarget.dataset.id;
      selectServiceInBooking(serviceId);
      const bookingSection = document.getElementById("booking");
      if (bookingSection) {
        bookingSection.scrollIntoView({ behavior: "smooth" });
      }
      showToast(`Selected "${SERVICES_DATA.find(s => s.id === serviceId)?.title}" in booking concierge.`);
    });
  });
}

function setupCategoryTabs() {
  const tabs = document.querySelectorAll("#service-category-tabs .tab-btn");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      const category = tab.dataset.category;
      AppState.currentCategory = category;

      if (category === "all") {
        renderServices(SERVICES_DATA);
      } else {
        const filtered = SERVICES_DATA.filter(s => s.category === category);
        renderServices(filtered);
      }
    });
  });
}

/* ==========================================================================
   2. BOOKING ENGINE & CONCIERGE
   ========================================================================== */
function setupBookingEngine() {
  const serviceSelect = document.getElementById("booking-primary-service");
  const dateInput = document.getElementById("booking-date");
  const specialistRadios = document.querySelectorAll("input[name='specialist']");
  const timeSlotBtns = document.querySelectorAll(".time-slot-btn");
  const addonCheckboxes = document.querySelectorAll(".addon-checkbox");
  const clientNameInput = document.getElementById("client-name");
  const clientPhoneInput = document.getElementById("client-phone");
  const clientNotesInput = document.getElementById("client-notes");
  
  const whatsappBtn = document.getElementById("btn-confirm-whatsapp");
  const directSlipBtn = document.getElementById("btn-confirm-direct");

  // Set default date to tomorrow
  if (dateInput) {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    dateInput.value = tomorrow.toISOString().split("T")[0];
    dateInput.min = new Date().toISOString().split("T")[0];
  }

  // Time slot selection
  timeSlotBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      timeSlotBtns.forEach(b => b.classList.remove("selected"));
      btn.classList.add("selected");
      AppState.selectedTime = btn.dataset.time;
      updateBookingSummary();
    });
  });

  // Listen to form changes
  serviceSelect?.addEventListener("change", updateBookingSummary);
  dateInput?.addEventListener("change", updateBookingSummary);
  specialistRadios.forEach(r => r.addEventListener("change", updateBookingSummary));
  addonCheckboxes.forEach(cb => cb.addEventListener("change", updateBookingSummary));

  // WhatsApp Action
  whatsappBtn?.addEventListener("click", () => {
    const name = clientNameInput?.value.trim() || "Valued Client";
    const phone = clientPhoneInput?.value.trim() || "Not provided";
    const serviceName = serviceSelect?.options[serviceSelect.selectedIndex]?.text || "Salon Treatment";
    const specialist = document.querySelector("input[name='specialist']:checked")?.value || "First Available";
    const date = dateInput?.value || "Upcoming date";
    const time = AppState.selectedTime;
    const notes = clientNotesInput?.value.trim() || "None";
    
    const totalAmount = document.getElementById("summary-total-amount")?.textContent || "1,800 ETB";

    const msg = `*Afro Salon & Spa - Reservation Request*\n\n` +
      `🌿 *Client:* ${name}\n` +
      `📞 *Phone:* ${phone}\n` +
      `💇‍♀️ *Service:* ${serviceName}\n` +
      `✨ *Specialist:* ${specialist}\n` +
      `📅 *Date & Time:* ${date} at ${time}\n` +
      `💰 *Estimated Total:* ${totalAmount}\n` +
      `📝 *Notes:* ${notes}\n\n` +
      `_Location: Bulbula, Addis Ababa 1000 (WQXM+CW3)_`;

    const encodedMsg = encodeURIComponent(msg);
    const whatsappUrl = `https://wa.me/251953212223?text=${encodedMsg}`;
    window.open(whatsappUrl, "_blank");

    showToast("Opening WhatsApp with your booking details!");
  });

  // Direct Booking Slip Generation
  directSlipBtn?.addEventListener("click", () => {
    const name = clientNameInput?.value.trim() || "Valued Guest";
    const phone = clientPhoneInput?.value.trim() || "095 321 2223";
    const serviceName = serviceSelect?.options[serviceSelect.selectedIndex]?.text || "Salon & Spa Service";
    const specialist = document.querySelector("input[name='specialist']:checked")?.value || "First Available Artist";
    const date = dateInput?.value || "Tomorrow";
    const time = AppState.selectedTime;
    const totalAmount = document.getElementById("summary-total-amount")?.textContent || "1,800 ETB";
    const refCode = "AFRO-" + Math.floor(100000 + Math.random() * 900000);

    const slipBox = document.getElementById("slip-details-box");
    if (slipBox) {
      slipBox.innerHTML = `
        <div style="display: flex; justify-content: space-between; border-bottom: 1px dashed var(--border-subtle); padding-bottom: 0.5rem; margin-bottom: 0.8rem;">
          <span style="font-weight: 700; color: var(--forest-canopy);">Booking Ref:</span>
          <span style="font-family: monospace; font-weight: 700; color: var(--embered-earth);">${refCode}</span>
        </div>
        <div style="font-size: 0.85rem; display: flex; flex-direction: column; gap: 0.35rem;">
          <p><strong>Guest:</strong> ${name} (${phone})</p>
          <p><strong>Treatment:</strong> ${serviceName}</p>
          <p><strong>Specialist:</strong> ${specialist}</p>
          <p><strong>Appointment:</strong> ${date} at ${time}</p>
          <p><strong>Total Due at Salon:</strong> <span style="font-weight: 700; color: var(--forest-canopy);">${totalAmount}</span></p>
          <p style="font-size: 0.76rem; color: var(--text-muted); margin-top: 0.4rem;"><strong>Location:</strong> Bulbula, Addis Ababa 1000 · Phone: 095 321 2223</p>
        </div>
      `;
    }

    const slipModal = document.getElementById("booking-slip-modal");
    slipModal?.classList.add("active");
  });

  updateBookingSummary();
}

function selectServiceInBooking(serviceId) {
  const serviceSelect = document.getElementById("booking-primary-service");
  if (!serviceSelect) return;

  for (let i = 0; i < serviceSelect.options.length; i++) {
    if (serviceSelect.options[i].value === serviceId) {
      serviceSelect.selectedIndex = i;
      break;
    }
  }
  updateBookingSummary();
}

function updateBookingSummary() {
  const serviceSelect = document.getElementById("booking-primary-service");
  const selectedOption = serviceSelect?.options[serviceSelect.selectedIndex];
  if (!selectedOption) return;

  const basePriceETB = parseInt(selectedOption.dataset.priceEtb || "1800", 10);
  const duration = selectedOption.dataset.duration || "90 min";
  const serviceTitle = selectedOption.text.split("(")[0].trim();

  // Specialist
  const specialist = document.querySelector("input[name='specialist']:checked")?.value || "First Available Artist";
  
  // Date & Time
  const dateVal = document.getElementById("booking-date")?.value || "Upcoming";
  const timeVal = AppState.selectedTime;

  // Add-ons
  const checkedAddons = document.querySelectorAll(".addon-checkbox:checked");
  let addonsTotalETB = 0;
  const addonNames = [];

  checkedAddons.forEach(cb => {
    const price = parseInt(cb.dataset.priceEtb || "0", 10);
    addonsTotalETB += price;
    addonNames.push(cb.dataset.name);
  });

  const totalETB = basePriceETB + addonsTotalETB;
  const totalUSD = (totalETB * ETB_TO_USD_RATE).toFixed(2);

  // Update UI Elements
  document.getElementById("summary-treatment-name").textContent = serviceTitle;
  document.getElementById("summary-specialist-name").textContent = specialist.split("(")[0].trim();
  document.getElementById("summary-datetime-val").textContent = `${dateVal} · ${timeVal}`;
  document.getElementById("summary-duration-val").textContent = duration;
  document.getElementById("summary-addons-list").textContent = addonNames.length > 0 ? addonNames.join(", ") : "None";
  
  document.getElementById("summary-total-amount").textContent = AppState.currency === "ETB" 
    ? `${totalETB.toLocaleString()} ETB` 
    : `$${totalUSD} USD`;

  document.getElementById("summary-usd-equivalent").textContent = AppState.currency === "ETB"
    ? `Approx. $${totalUSD} USD`
    : `Approx. ${totalETB.toLocaleString()} ETB`;
}

/* ==========================================================================
   3. CUSTOM PAMPER DAY BUILDER (15% BUNDLE DISCOUNT)
   ========================================================================== */
function setupPamperBuilder() {
  const items = document.querySelectorAll(".builder-toggle-item");
  const bookPkgBtn = document.getElementById("btn-book-custom-package");

  items.forEach(item => {
    const checkbox = item.querySelector("input[type='checkbox']");
    item.addEventListener("click", (e) => {
      if (e.target.tagName !== "INPUT") {
        checkbox.checked = !checkbox.checked;
      }
      if (checkbox.checked) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
      calculatePamperPackage();
    });
  });

  bookPkgBtn?.addEventListener("click", () => {
    const activeItems = document.querySelectorAll(".builder-toggle-item.active");
    if (activeItems.length === 0) {
      showToast("Please select at least 1 treatment to build your custom package.");
      return;
    }

    const bookingSection = document.getElementById("booking");
    bookingSection?.scrollIntoView({ behavior: "smooth" });
    showToast("Custom pamper package transferred to booking concierge!");
  });

  calculatePamperPackage();
}

function calculatePamperPackage() {
  const activeItems = document.querySelectorAll(".builder-toggle-item.active");
  let subtotalETB = 0;

  activeItems.forEach(item => {
    const price = parseInt(item.dataset.price || "0", 10);
    subtotalETB += price;
  });

  const count = activeItems.length;
  const isDiscountEligible = count >= 2;
  const discountRate = isDiscountEligible ? 0.15 : 0;
  const discountETB = Math.round(subtotalETB * discountRate);
  const finalPriceETB = subtotalETB - discountETB;

  const originalPriceEl = document.getElementById("builder-original-price");
  const discountedPriceEl = document.getElementById("builder-discounted-price");
  const saveBadgeEl = document.getElementById("builder-save-badge");
  const discountStatusEl = document.getElementById("discount-status-text");

  if (isDiscountEligible) {
    originalPriceEl.style.display = "inline";
    originalPriceEl.textContent = `${subtotalETB.toLocaleString()} ETB`;
    discountedPriceEl.textContent = `${finalPriceETB.toLocaleString()} ETB`;
    saveBadgeEl.style.display = "inline-block";
    saveBadgeEl.textContent = `You Save ${discountETB.toLocaleString()} ETB (15% Off)`;
    discountStatusEl.textContent = "15% Combo VIP Applied!";
  } else {
    originalPriceEl.style.display = "none";
    discountedPriceEl.textContent = `${subtotalETB.toLocaleString()} ETB`;
    saveBadgeEl.style.display = "none";
    discountStatusEl.textContent = "Select 2+ for 15% Off";
  }
}

/* ==========================================================================
   4. BEFORE & AFTER TRANSFORMATION SLIDER
   ========================================================================== */
function setupTransformationSlider() {
  const container = document.getElementById("transformation-slider");
  const mask = document.getElementById("slider-before-mask");
  const handle = document.getElementById("slider-drag-handle");
  if (!container || !mask || !handle) return;

  let isDragging = false;

  const setSliderPosition = (x) => {
    const rect = container.getBoundingClientRect();
    let posX = x - rect.left;
    if (posX < 0) posX = 0;
    if (posX > rect.width) posX = rect.width;

    const percentage = (posX / rect.width) * 100;
    mask.style.width = `${percentage}%`;
    handle.style.left = `${percentage}%`;
  };

  const onStart = (e) => {
    isDragging = true;
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    setSliderPosition(clientX);
  };

  const onMove = (e) => {
    if (!isDragging) return;
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    setSliderPosition(clientX);
  };

  const onEnd = () => {
    isDragging = false;
  };

  container.addEventListener("mousedown", onStart);
  window.addEventListener("mousemove", onMove);
  window.addEventListener("mouseup", onEnd);

  container.addEventListener("touchstart", onStart, { passive: true });
  window.addEventListener("touchmove", onMove, { passive: true });
  window.addEventListener("touchend", onEnd);
}

/* ==========================================================================
   5. REAL-TIME SALON OPENING HOURS
   ========================================================================== */
function setupHoursStatus() {
  const badgeEl = document.getElementById("hours-status-text");
  if (!badgeEl) return;

  // Ethiopian Local Time (UTC+3)
  const now = new Date();
  const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
  const eatDate = new Date(utc + (3600000 * 3));
  const currentHour = eatDate.getHours();

  if (currentHour >= 7 && currentHour < 21) {
    badgeEl.textContent = "Open Now · Closes 9:00 PM · Bulbula, Addis Ababa";
  } else {
    badgeEl.textContent = "Closed · Opens 7:00 AM Daily · Bulbula, Addis Ababa";
  }
}

/* ==========================================================================
   6. AMBIENT SPA CHIME AUDIO (WEB AUDIO API SYNTHESIZER)
   ========================================================================== */
function setupAudioChime() {
  const audioBtn = document.getElementById("spa-audio-btn");
  const audioIcon = document.getElementById("audio-icon");
  let audioCtx = null;

  audioBtn?.addEventListener("click", () => {
    try {
      if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      }

      if (audioCtx.state === "suspended") {
        audioCtx.resume();
      }

      // Play soft healing 432Hz / 528Hz peaceful chime cord
      const freqs = [432, 540, 648];
      freqs.forEach((freq, idx) => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();

        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, audioCtx.currentTime);

        gain.gain.setValueAtTime(0.01, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.12 / (idx + 1), audioCtx.currentTime + 0.3);
        gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 3.5);

        osc.connect(gain);
        gain.connect(audioCtx.destination);

        osc.start(audioCtx.currentTime + idx * 0.1);
        osc.stop(audioCtx.currentTime + 3.8);
      });

      showToast("🌿 Playing calming Pale Jade botanical chime.");
    } catch (err) {
      console.log("Audio not allowed yet:", err);
    }
  });
}

/* ==========================================================================
   7. THEME & CURRENCY TOGGLE
   ========================================================================== */
function setupThemeToggle() {
  const themeBtn = document.getElementById("theme-toggle-btn");
  const themeIcon = document.getElementById("theme-icon");

  themeBtn?.addEventListener("click", () => {
    const isDark = document.body.dataset.theme === "dark";
    if (isDark) {
      document.body.removeAttribute("data-theme");
      themeIcon.className = "fa-solid fa-moon";
      AppState.theme = "light";
    } else {
      document.body.dataset.theme = "dark";
      themeIcon.className = "fa-solid fa-sun";
      AppState.theme = "dark";
    }
  });
}

function setupCurrencyToggle() {
  const currBtn = document.getElementById("currency-toggle-btn");
  const currLabel = document.getElementById("currency-label");

  currBtn?.addEventListener("click", () => {
    if (AppState.currency === "ETB") {
      AppState.currency = "USD";
      currLabel.textContent = "USD $";
    } else {
      AppState.currency = "ETB";
      currLabel.textContent = "ETB";
    }

    // Re-render services & summary
    if (AppState.currentCategory === "all") {
      renderServices(SERVICES_DATA);
    } else {
      renderServices(SERVICES_DATA.filter(s => s.category === AppState.currentCategory));
    }
    updateBookingSummary();
    showToast(`Currency switched to ${AppState.currency}`);
  });
}

/* ==========================================================================
   8. MODALS & TOASTS
   ========================================================================== */
function setupModals() {
  const reviewModal = document.getElementById("review-modal");
  const openReviewBtn = document.getElementById("btn-open-review-modal");
  const closeReviewBtn = document.getElementById("btn-close-review-modal");
  const submitReviewBtn = document.getElementById("btn-submit-review");
  const starPicker = document.getElementById("modal-star-picker");

  const slipModal = document.getElementById("booking-slip-modal");
  const closeSlipBtn = document.getElementById("btn-close-slip-modal");
  const printSlipBtn = document.getElementById("btn-print-slip");

  openReviewBtn?.addEventListener("click", () => {
    reviewModal?.classList.add("active");
  });

  closeReviewBtn?.addEventListener("click", () => {
    reviewModal?.classList.remove("active");
  });

  closeSlipBtn?.addEventListener("click", () => {
    slipModal?.classList.remove("active");
  });

  printSlipBtn?.addEventListener("click", () => {
    window.print();
  });

  // Star Picker
  starPicker?.querySelectorAll(".fa-star").forEach((star, idx) => {
    star.addEventListener("click", () => {
      const allStars = starPicker.querySelectorAll(".fa-star");
      allStars.forEach((s, i) => {
        if (i <= idx) {
          s.style.color = "#f59e0b";
        } else {
          s.style.color = "var(--border-subtle)";
        }
      });
    });
  });

  submitReviewBtn?.addEventListener("click", () => {
    const name = document.getElementById("review-client-name")?.value.trim() || "Happy Guest";
    reviewModal?.classList.remove("active");
    showToast(`Thank you, ${name}! Your review has been submitted.`);
  });
}

function setupCopyAddress() {
  const copyBtn = document.getElementById("btn-copy-address");
  copyBtn?.addEventListener("click", () => {
    navigator.clipboard.writeText("WQXM+CW3, Addis Ababa 1000").then(() => {
      showToast("Plus Code copied to clipboard: WQXM+CW3, Addis Ababa");
    });
  });
}

function showToast(msg) {
  const toast = document.getElementById("global-toast");
  const toastText = document.getElementById("toast-text");
  if (!toast || !toastText) return;

  toastText.textContent = msg;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3500);
}
