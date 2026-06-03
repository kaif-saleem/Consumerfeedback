import React, { useState } from 'react';
import './App.css';

// ─── SVG Icons ────────────────────────────────────────────────────────────────
const SearchIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#6B6B6B" strokeWidth="2.5">
    <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
  </svg>
);
const FilterIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6B6B6B" strokeWidth="2">
    <line x1="4" y1="6" x2="20" y2="6"/><line x1="8" y1="12" x2="16" y2="12"/><line x1="11" y1="18" x2="13" y2="18"/>
  </svg>
);
const HomeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
    <polyline points="9 22 9 12 15 12 15 22"/>
  </svg>
);
const SearchNavIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
  </svg>
);
const HeartIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
  </svg>
);
const UserIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
    <circle cx="12" cy="7" r="4"/>
  </svg>
);
const CloseIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6B6B6B" strokeWidth="2.5">
    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);
const BackIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#171717" strokeWidth="2.5">
    <polyline points="15 18 9 12 15 6"/>
  </svg>
);
const ShieldIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1B8A4C" strokeWidth="2">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    <polyline points="9 12 11 14 15 10"/>
  </svg>
);
const TelegramIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#6B6B6B" strokeWidth="2">
    <line x1="22" y1="2" x2="11" y2="13"/>
    <polygon points="22 2 15 22 11 13 2 9 22 2"/>
  </svg>
);
const CheckIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1B8A4C" strokeWidth="2.5">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);
const ChevronRight = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#6B6B6B" strokeWidth="2">
    <polyline points="9 18 15 12 9 6"/>
  </svg>
);
const PhoneIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#D0021B" strokeWidth="2">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.24a2 2 0 0 1 1.99-2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.83a16 16 0 0 0 6.29 6.29l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);
const SiteVisitIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D0021B" strokeWidth="2">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
    <polyline points="9 22 9 12 15 12 15 22"/>
  </svg>
);
const PriceIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E8A01A" strokeWidth="2">
    <line x1="12" y1="1" x2="12" y2="23"/>
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
  </svg>
);
const DocIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1A6FE8" strokeWidth="2">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <polyline points="14 2 14 8 20 8"/>
    <line x1="16" y1="13" x2="8" y2="13"/>
    <line x1="16" y1="17" x2="8" y2="17"/>
    <polyline points="10 9 9 9 8 9"/>
  </svg>
);
const NegotiateIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9B51E0" strokeWidth="2">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
  </svg>
);
const OtherIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6B6B6B" strokeWidth="2">
    <circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/>
  </svg>
);
const WhatsAppIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

// ─── Property Image Placeholder ───────────────────────────────────────────────
const PropertyImage = ({ index }) => {
  const gradients = [
    'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
  ];
  return (
    <div style={{ width: '100%', height: '100%', background: gradients[index % gradients.length], opacity: 0.6 }} />
  );
};

// ─── Data ─────────────────────────────────────────────────────────────────────
const listings = [
  {
    id: 1,
    price: '₹2.04 Cr - ₹3.06 Cr',
    name: 'Sunil Apartment Home',
    meta: '2, 3, 4 BHK Apartment',
    location: 'Sector 21, Dwarka',
    seller: 'Rahul Sharma',
    sellerType: 'Owner',
    initials: 'RS',
  },
  {
    id: 2,
    price: '₹35.4 L - ₹1.15 Cr',
    name: 'Sikka Karnam Greens',
    meta: '1, 2, 3 BHK Apartment',
    location: 'Sector 143B, Noida Exp.',
    seller: 'Anita Builders',
    sellerType: 'Builder',
    initials: 'AB',
  },
  {
    id: 3,
    price: '₹1.2 Cr - ₹1.8 Cr',
    name: 'Green Valley Heights',
    meta: '2, 3 BHK Apartment',
    location: 'Gurgaon Sector 56',
    seller: 'Priya Realtors',
    sellerType: 'Broker',
    initials: 'PR',
  },
];

const reasons = [
  { id: 'site_visit', label: 'Schedule a site visit', icon: <SiteVisitIcon />, color: '#FFF0F0' },
  { id: 'price', label: 'Ask about price', icon: <PriceIcon />, color: '#FFFBF0' },
  { id: 'docs', label: 'Get property documents', icon: <DocIcon />, color: '#F0F4FF' },
  { id: 'negotiate', label: 'Negotiate terms', icon: <NegotiateIcon />, color: '#F8F0FF' },
  { id: 'other', label: 'Other reason', icon: <OtherIcon />, color: '#F5F5F5' },
];

// ─── Step Progress ─────────────────────────────────────────────────────────────
const StepDots = ({ step }) => (
  <div className="step-indicator">
    {[1, 2, 3].map(s => (
      <div
        key={s}
        className={`step-dot ${s === step ? 'active' : s < step ? 'done' : ''}`}
      />
    ))}
  </div>
);

// ─── Sheet: Step 1 — Feedback / Purpose ───────────────────────────────────────
const FeedbackStep1 = ({ listing, onClose, onNext }) => {
  const [selected, setSelected] = useState(null);

  const options = [
    {
      id: 'interested',
      label: 'I\'m genuinely interested',
      sublabel: 'I want to schedule a visit or enquire further',
      icon: <SiteVisitIcon />,
      iconBg: '#FFF0F0',
    },
    {
      id: 'price_check',
      label: 'Just checking the price',
      sublabel: 'Exploring options, not ready to commit',
      icon: <PriceIcon />,
      iconBg: '#FFFBF0',
    },
    {
      id: 'wrong_number',
      label: 'Called by mistake',
      sublabel: 'Didn\'t mean to contact this seller',
      icon: <OtherIcon />,
      iconBg: '#F5F5F5',
    },
  ];

  return (
    <div className="bottom-sheet">
      <div className="sheet-handle-row"><div className="sheet-handle" /></div>
      <StepDots step={1} />
      <div className="sheet-header" style={{ marginTop: 8 }}>
        <div className="sheet-header-row">
          <div />
          <div className="sheet-close-btn" onClick={onClose}><CloseIcon /></div>
        </div>
        <div className="sheet-title">How was your call?</div>
        <div className="sheet-property-ref">
          <span>For</span>
          <span className="ref-chip">{listing.name}</span>
          <span>·</span>
          <span className="ref-chip">{listing.meta}</span>
        </div>
      </div>

      <div className="info-banner">
        <div className="info-banner-icon"><ShieldIcon /></div>
        <div className="info-banner-text">
          Your response helps reduce unnecessary calls and improves seller quality.
        </div>
      </div>

      <div className="feedback-section">
        <div className="feedback-section-title">Why did you contact this seller?</div>
        {options.map(opt => (
          <div
            key={opt.id}
            className={`feedback-option ${selected === opt.id ? 'selected' : ''}`}
            onClick={() => setSelected(opt.id)}
          >
            <div className="feedback-option-radio">
              {selected === opt.id && <div className="feedback-option-radio-dot" />}
            </div>
            <div className="feedback-option-content">
              <div className="feedback-option-label">{opt.label}</div>
              <div className="feedback-option-sublabel">{opt.sublabel}</div>
            </div>
            <div className="feedback-option-icon" style={{ background: opt.iconBg }}>
              {opt.icon}
            </div>
          </div>
        ))}
      </div>

      <div className="sheet-disclaimer" style={{ marginTop: 8 }}>
        <TelegramIcon />
        <div className="sheet-disclaimer-text">
          Your response will be shared with the owner/broker to improve response quality.
        </div>
      </div>

      <div className="sheet-cta-row">
        <button className="btn-secondary" onClick={onClose}>Skip</button>
        <button
          className="btn-primary"
          style={{ opacity: selected ? 1 : 0.5 }}
          onClick={() => selected && onNext(selected)}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

// ─── Sheet: Step 2 — Date & Time ──────────────────────────────────────────────
const FeedbackStep2 = ({ listing, onClose, onBack, onNext }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const today = new Date();
  const dates = [0, 1, 2].map(offset => {
    const d = new Date(today);
    d.setDate(d.getDate() + offset);
    return {
      id: offset,
      day: d.toLocaleDateString('en-US', { weekday: 'short' }),
      date: d.getDate(),
      month: d.toLocaleDateString('en-US', { month: 'short' }),
    };
  });

  const times = [
    { id: 0, label: '10–12 AM', range: 'Morning' },
    { id: 1, label: '12–2 PM', range: 'Afternoon' },
    { id: 2, label: '4–6 PM', range: 'Evening' },
  ];

  return (
    <div className="bottom-sheet">
      <div className="sheet-handle-row"><div className="sheet-handle" /></div>
      <StepDots step={2} />
      <div className="sheet-header" style={{ marginTop: 8 }}>
        <div className="sheet-header-row">
          <div className="sheet-back-btn" onClick={onBack}><BackIcon /></div>
          <div className="sheet-close-btn" onClick={onClose}><CloseIcon /></div>
        </div>
        <div className="sheet-title">Schedule a site visit</div>
        <div className="sheet-property-ref">
          <span className="ref-chip">{listing.name}</span>
          <span>·</span>
          <span className="ref-chip">{listing.location}</span>
        </div>
      </div>

      <div className="datetime-section">
        <div className="datetime-section-label">Select your preferred date</div>
        <div className="datetime-pills">
          {dates.map(d => (
            <div
              key={d.id}
              className={`datetime-pill ${selectedDate === d.id ? 'selected' : ''}`}
              onClick={() => setSelectedDate(d.id)}
            >
              <div className="datetime-pill-day">{d.id === 0 ? 'Today' : d.day}</div>
              <div className="datetime-pill-date">{d.date}</div>
              <div className="datetime-pill-month">{d.month}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="sheet-divider" />

      <div className="datetime-section">
        <div className="datetime-section-label">Select your preferred time</div>
        <div className="datetime-pills">
          {times.map(t => (
            <div
              key={t.id}
              className={`datetime-pill ${selectedTime === t.id ? 'selected' : ''}`}
              onClick={() => setSelectedTime(t.id)}
            >
              <div className="datetime-pill-time">{t.label}</div>
              <div className="datetime-pill-range">{t.range}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="sheet-divider" />

      <div className="sheet-disclaimer">
        <TelegramIcon />
        <div className="sheet-disclaimer-text">
          Your preferred time will be shared with the owner/broker.
        </div>
      </div>

      <div className="sheet-cta-row">
        <button className="btn-secondary" onClick={onBack}>Back</button>
        <button
          className="btn-primary"
          style={{ opacity: (selectedDate !== null && selectedTime !== null) ? 1 : 0.5 }}
          onClick={() => (selectedDate !== null && selectedTime !== null) && onNext({ date: dates[selectedDate], time: times[selectedTime] })}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

// ─── Sheet: Step 3 — Purpose/Reason ───────────────────────────────────────────
const FeedbackStep3 = ({ listing, onClose, onBack, onSubmit }) => {
  return (
    <div className="bottom-sheet">
      <div className="sheet-handle-row"><div className="sheet-handle" /></div>
      <StepDots step={3} />
      <div className="sheet-header" style={{ marginTop: 8 }}>
        <div className="sheet-header-row">
          <div className="sheet-back-btn" onClick={onBack}><BackIcon /></div>
          <div className="sheet-close-btn" onClick={onClose}><CloseIcon /></div>
        </div>
        <div className="sheet-title">What's your purpose?</div>
        <div className="sheet-subtitle">Tell the seller more about your intention</div>
      </div>

      <div className="reason-list">
        {reasons.map(r => (
          <div key={r.id} className="reason-item" onClick={() => onSubmit(r.id)}>
            <div className="reason-icon-wrap" style={{ background: r.color }}>
              {r.icon}
            </div>
            <div className="reason-label">{r.label}</div>
            <div className="reason-chevron"><ChevronRight /></div>
          </div>
        ))}
      </div>

      <div className="sheet-divider" />
      <div className="sheet-disclaimer">
        <TelegramIcon />
        <div className="sheet-disclaimer-text">
          Your response will be shared with the owner/broker.
        </div>
      </div>
    </div>
  );
};

// ─── Sheet: Success ────────────────────────────────────────────────────────────
const SuccessSheet = ({ onClose }) => (
  <div className="bottom-sheet">
    <div className="sheet-handle-row"><div className="sheet-handle" /></div>
    <div className="success-state">
      <div className="success-icon">
        <CheckIcon />
      </div>
      <div className="success-title">Thank you for your feedback!</div>
      <div className="success-subtitle">
        Your response helps us connect you with the right sellers and improve the Housing.com experience.
      </div>
      <button className="success-cta" onClick={onClose}>Done</button>
    </div>
  </div>
);

// ─── Listing Card Component ────────────────────────────────────────────────────
const ListingCard = ({ listing, index, onContact }) => (
  <div className="listing-card">
    <div className="listing-img">
      <PropertyImage index={index} />
      <div className="listing-img-badge">
        <div className="rera-dot" />
        Verified
        <span style={{ marginLeft: 4, opacity: 0.5 }}>·</span>
        <span style={{ color: '#1B8A4C' }}>RERA</span>
      </div>
      <div className="listing-img-count">1/12</div>
      <div className="sponsored-badge">Sponsored</div>
    </div>
    <div className="listing-body">
      <div className="listing-price">{listing.price}</div>
      <div className="listing-name">{listing.name}</div>
      <div className="listing-meta">{listing.meta}</div>
      <div className="listing-location">
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#6B6B6B" strokeWidth="2.5">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
          <circle cx="12" cy="10" r="3"/>
        </svg>
        {listing.location}
      </div>
    </div>
    <div className="seller-row">
      <div className="seller-info">
        <div className="seller-avatar">{listing.initials}</div>
        <div>
          <div className="seller-name">{listing.seller}</div>
          <div className="seller-type">{listing.sellerType}</div>
        </div>
      </div>
      <div className="seller-actions">
        <div className="btn-shortlist">
          <HeartIcon />
        </div>
        <div className="btn-whatsapp">
          <WhatsAppIcon />
        </div>
        <button className="btn-contact" onClick={() => onContact(listing)}>
          Contact
        </button>
      </div>
    </div>
  </div>
);

// ─── Main App ─────────────────────────────────────────────────────────────────
export default function App() {
  const [sheetStep, setSheetStep] = useState(null); // null | 1 | 2 | 3 | 'success'
  const [activeListing, setActiveListing] = useState(null);

  const handleContact = (listing) => {
    setActiveListing(listing);
    setSheetStep(1);
  };

  const handleClose = () => {
    setSheetStep(null);
    setActiveListing(null);
  };

  const stepLabels = {
    1: 'Step 1 of 3 — Feedback',
    2: 'Step 2 of 3 — Schedule',
    3: 'Step 3 of 3 — Purpose',
    success: 'Complete',
  };

  return (
    <div className="prototype-wrapper">
      <div className="prototype-label">Housing.com · Consumer → Seller Feedback</div>
      {sheetStep && (
        <div className="step-label">{stepLabels[sheetStep]}</div>
      )}
      <div className="phone-shell">
        {/* Status Bar */}
        <div className="status-bar">
          <span className="status-time">9:41</span>
          <div className="status-icons">
            <svg width="15" height="11" viewBox="0 0 15 11" fill="#171717">
              <rect x="0" y="4" width="3" height="7" rx="1"/>
              <rect x="4" y="2" width="3" height="9" rx="1"/>
              <rect x="8" y="0" width="3" height="11" rx="1"/>
              <rect x="12" y="0" width="3" height="11" rx="1" opacity="0.3"/>
            </svg>
            <svg width="15" height="11" viewBox="0 0 24 24" fill="none" stroke="#171717" strokeWidth="2">
              <path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M5 12.55a11 11 0 0 1 14.08 0"/>
              <path d="M10.54 16a6 6 0 0 1 2.92 0"/><circle cx="12" cy="20" r="1"/>
            </svg>
            <svg width="25" height="11" viewBox="0 0 25 11">
              <rect x="0" y="1" width="21" height="9" rx="2" fill="none" stroke="#171717" strokeWidth="1.5"/>
              <rect x="2" y="3" width="15" height="5" rx="1" fill="#171717"/>
              <rect x="22" y="3.5" width="3" height="4" rx="1" fill="#171717" opacity="0.5"/>
            </svg>
          </div>
        </div>

        {/* SRP Topbar */}
        <div className="srp-topbar">
          <div className="srp-logo">housing</div>
          <div className="srp-search-bar">
            <SearchIcon />
            <span className="srp-search-text">Buy · Delhi-NCR · Flat, House...</span>
          </div>
          <div className="srp-filter-btn"><FilterIcon /></div>
        </div>

        {/* Filter Tags */}
        <div className="srp-tags">
          <div className="srp-tag active">Buy ▾</div>
          <div className="srp-tag">Delhi-NCR ▾</div>
          <div className="srp-tag">Budget ▾</div>
          <div className="srp-tag">BHK ▾</div>
          <div className="srp-tag">Ready to Move</div>
          <div className="srp-tag">Verified</div>
        </div>

        {/* Listings Scroll */}
        <div className="srp-scroll">
          <div style={{ padding: '4px 0 70px' }}>
            {listings.map((l, i) => (
              <ListingCard key={l.id} listing={l} index={i} onContact={handleContact} />
            ))}
          </div>
        </div>

        {/* Bottom Nav */}
        <div className="bottom-nav">
          {[
            { icon: <HomeIcon />, label: 'Home', active: false },
            { icon: <SearchNavIcon />, label: 'Search', active: true },
            { icon: <HeartIcon />, label: 'Saved', active: false },
            { icon: <UserIcon />, label: 'Profile', active: false },
          ].map((item, i) => (
            <div key={i} className={`nav-item ${item.active ? 'active' : ''}`}>
              <div style={{ color: item.active ? '#D0021B' : '#6B6B6B' }}>{item.icon}</div>
              <div className="nav-item-label">{item.label}</div>
              {item.active && <div className="nav-dot" />}
            </div>
          ))}
        </div>

        {/* Bottom Sheet Overlay */}
        {sheetStep && activeListing && (
          <div className="sheet-overlay" onClick={(e) => e.target === e.currentTarget && handleClose()}>
            {sheetStep === 1 && (
              <FeedbackStep1
                listing={activeListing}
                onClose={handleClose}
                onNext={() => setSheetStep(2)}
              />
            )}
            {sheetStep === 2 && (
              <FeedbackStep2
                listing={activeListing}
                onClose={handleClose}
                onBack={() => setSheetStep(1)}
                onNext={() => setSheetStep(3)}
              />
            )}
            {sheetStep === 3 && (
              <FeedbackStep3
                listing={activeListing}
                onClose={handleClose}
                onBack={() => setSheetStep(2)}
                onSubmit={() => setSheetStep('success')}
              />
            )}
            {sheetStep === 'success' && (
              <SuccessSheet onClose={handleClose} />
            )}
          </div>
        )}
      </div>
      <div className="prototype-label" style={{ fontSize: '11px', opacity: 0.4 }}>
        Tap "Contact" on any listing to start the flow
      </div>
    </div>
  );
}
