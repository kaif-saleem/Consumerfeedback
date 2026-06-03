import React, { useState } from 'react';
import './App.css';

// ── Figma Asset URLs ──────────────────────────────────────────────────────────
const PROP_IMG = "https://www.figma.com/api/mcp/asset/2ef96f72-71b3-4337-b6ed-261c58aa5bfd";
const LOC_ICON = "https://www.figma.com/api/mcp/asset/e80cc327-5106-4e8e-af82-15416a56d054";
const TELEGRAM  = "https://www.figma.com/api/mcp/asset/7ad47e85-3701-469d-9c9a-595608725006";

// ── Inline SVGs ───────────────────────────────────────────────────────────────
const X = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#767676" strokeWidth="2.5">
    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);
const Back = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="2.5">
    <polyline points="15 18 9 12 15 6"/>
  </svg>
);
const ChevR = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#656565" strokeWidth="2">
    <polyline points="9 18 15 12 9 6"/>
  </svg>
);
const Heart = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#656565" strokeWidth="2">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
  </svg>
);
const Search = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#767676" strokeWidth="2.5">
    <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
  </svg>
);
const HomeIco = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
    <polyline points="9 22 9 12 15 12 15 22"/>
  </svg>
);
const SearchIco = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
  </svg>
);
const HeartIco = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
  </svg>
);
const UserIco = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
    <circle cx="12" cy="7" r="4"/>
  </svg>
);
const CheckCircle = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#5e23dc" strokeWidth="2.5">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);
const LocPin = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#656565" strokeWidth="2">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

// ── Data ──────────────────────────────────────────────────────────────────────
const ENQUIRIES = [
  { id: 1, bhk: '4BHK', loc: 'Sector 33, Sohna, Gurgaon', seller: 'Yashsvir Singh . Owner' },
  { id: 2, bhk: '3BHK', loc: 'DLF Phase 5, Gurugram', seller: 'Neha Kapoor . Broker' },
  { id: 3, bhk: '2BHK', loc: 'Indira Colony, Faridabad', seller: 'Rajesh Kumar . Owner' },
];

const LISTINGS = [
  { id: 1, price: '₹2.04 Cr - ₹3.06 Cr', name: 'Sunil Apartment Home', meta: '2, 3, 4 BHK Apartment', loc: 'Sector 33, Sohna, Gurgaon', seller: 'Yashsvir Singh', type: 'Owner', init: 'YS', grad: 'g1' },
  { id: 2, price: '₹35.4 L - ₹1.15 Cr', name: 'Sikka Karnam Greens', meta: '1, 2, 3 BHK Apartment', loc: 'Sector 143B, Noida Exp.', seller: 'Neha Kapoor', type: 'Broker', init: 'NK', grad: 'g2' },
  { id: 3, price: '₹1.2 Cr - ₹1.8 Cr', name: 'Green Valley Heights', meta: '2, 3 BHK Apartment', loc: 'Gurgaon Sector 56', seller: 'Rajesh Kumar', type: 'Owner', init: 'RK', grad: 'g3' },
];

const NOT_INTERESTED_REASONS = [
  'Found another property',
  'Property was out of budget',
  "Location doesn't work",
  'Property details not suitable',
  'Seller/Broker Issue',
  'Others',
];

// ── Property Mini Card (reused across sheets) ─────────────────────────────────
const PropMini = ({ enquiry }) => (
  <div className="prop-mini">
    <div className="prop-thumb">
      <img src={PROP_IMG} alt={enquiry.bhk} style={{width:'100%',height:'100%',objectFit:'cover'}} />
    </div>
    <div className="prop-info">
      <div className="prop-bhk">{enquiry.bhk}</div>
      <div className="prop-loc">
        <img src={LOC_ICON} alt="" style={{width:14,height:14}} />
        {enquiry.loc}
      </div>
      <div className="prop-seller">{enquiry.seller}</div>
    </div>
  </div>
);

// ── Sheet 1: My Enquiries ─────────────────────────────────────────────────────
const EnquiriesSheet = ({ onClose, onSelect }) => (
  <div className="sheet">
    <div className="sheet-nav">
      <div />
      <div className="icon-btn" onClick={onClose}><X /></div>
    </div>
    <div>
      <div className="sheet-title">My Enquiries</div>
      <div className="sheet-subtitle" style={{marginTop:4}}>Review each enquiry and let the sellers know what works for you</div>
    </div>
    <div>
      {ENQUIRIES.map(e => (
        <div key={e.id} className="enquiry-item" onClick={() => onSelect(e)}>
          <div className="prop-thumb" style={{width:80,height:64}}>
            <img src={PROP_IMG} alt={e.bhk} style={{width:'100%',height:'100%',objectFit:'cover'}} />
          </div>
          <div className="prop-info">
            <div className="prop-bhk">{e.bhk}</div>
            <div className="prop-loc">
              <img src={LOC_ICON} alt="" style={{width:13,height:13}} />
              {e.loc}
            </div>
            <div className="prop-seller">{e.seller}</div>
          </div>
          <ChevR />
        </div>
      ))}
    </div>
  </div>
);

// ── Sheet 2: Are you still Interested? ───────────────────────────────────────
const InterestSheet = ({ enquiry, onBack, onClose, onNotInterested, onSchedule }) => {
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);

  const dates = [
    { id: 0, main: 'Weekdays', sub: 'Mon-Fri' },
    { id: 1, main: 'Weekend', sub: 'Sat-Sun' },
    { id: 2, main: 'Anyday', sub: 'Flexible' },
  ];
  const times = [
    { id: 0, main: 'Morning', sub: '9 - 12 PM' },
    { id: 1, main: 'Afternoon', sub: '12 - 4 PM' },
    { id: 2, main: 'Evening', sub: '6 - 9 PM' },
  ];

  const canSchedule = date !== null && time !== null;

  return (
    <div className="sheet">
      <div className="sheet-nav">
        <div className="icon-btn" onClick={onBack}><Back /></div>
        <div className="icon-btn" onClick={onClose}><X /></div>
      </div>
      <div>
        <div className="sheet-title">Are you still Interested?</div>
        <div className="sheet-subtitle" style={{marginTop:4}}>Let us know your interest</div>
      </div>
      <PropMini enquiry={enquiry} />

      {/* Date */}
      <div>
        <div className="pills-label">Select your preferred date</div>
        <div className="pills-row">
          {dates.map(d => (
            <button key={d.id} className={`pill ${date === d.id ? 'selected' : ''}`} onClick={() => setDate(d.id)}>
              <span className="pill-main">{d.main}</span>
              <span className="pill-sub">{d.sub}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Time */}
      <div>
        <div className="pills-label">Select your preferred time</div>
        <div className="pills-row">
          {times.map(t => (
            <button key={t.id} className={`pill ${time === t.id ? 'selected' : ''}`} onClick={() => setTime(t.id)}>
              <span className="pill-main">{t.main}</span>
              <span className="pill-sub">{t.sub}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="divider" />

      <div className="disclaimer">
        <img src={TELEGRAM} alt="" style={{width:14,height:14,flexShrink:0}} />
        <span className="disclaimer-text">Your response will be shared with the owner/broker</span>
      </div>

      <div className="btn-row">
        <button className="btn-secondary-sheet" onClick={onNotInterested}>Not Interested</button>
        <button
          className="btn-primary-sheet"
          disabled={!canSchedule}
          onClick={() => canSchedule && onSchedule()}
        >
          Schedule Call
        </button>
      </div>
    </div>
  );
};

// ── Sheet 3: Why not interested? ─────────────────────────────────────────────
const NotInterestedSheet = ({ enquiry, onBack, onClose, onSubmit }) => {
  const [selected, setSelected] = useState(null);
  const [othersText, setOthersText] = useState('');

  return (
    <div className="sheet">
      <div className="sheet-nav">
        <div className="icon-btn" onClick={onBack}><Back /></div>
        <div className="icon-btn" onClick={onClose}><X /></div>
      </div>
      <div>
        <div className="sheet-title">Why are you not interested?</div>
        <div className="sheet-subtitle" style={{marginTop:4}}>Let us know your interest</div>
      </div>
      <PropMini enquiry={enquiry} />

      <div>
        {NOT_INTERESTED_REASONS.map(r => (
          <div key={r}>
            <div className="reason-item" onClick={() => setSelected(r)}>
              <span className="reason-label">{r}</span>
              <div className={`radio-circle ${selected === r ? 'checked' : ''}`}>
                {selected === r && <div className="radio-inner" />}
              </div>
            </div>
            {r === 'Others' && selected === 'Others' && (
              <textarea
                className="others-textarea"
                placeholder="Tell us more (optional)"
                value={othersText}
                onChange={e => setOthersText(e.target.value)}
              />
            )}
          </div>
        ))}
      </div>

      <div className="divider" />

      <div className="disclaimer">
        <img src={TELEGRAM} alt="" style={{width:14,height:14,flexShrink:0}} />
        <span className="disclaimer-text">Your response will be shared with the owner/broker</span>
      </div>

      <button
        className="btn-primary-full"
        style={{ opacity: selected ? 1 : 0.5 }}
        onClick={() => selected && onSubmit()}
      >
        Submit Response
      </button>
    </div>
  );
};

// ── Success Sheet ─────────────────────────────────────────────────────────────
const SuccessSheet = ({ onClose }) => (
  <div className="sheet">
    <div className="success-sheet">
      <div className="success-icon"><CheckCircle /></div>
      <div className="success-title">Response Submitted!</div>
      <div className="success-sub">
        Thank you for letting the seller know. Your feedback helps improve the Housing.com experience.
      </div>
      <button className="btn-primary-full" onClick={onClose}>Done</button>
    </div>
  </div>
);

// ── Listing Card ──────────────────────────────────────────────────────────────
const Card = ({ listing, onContact }) => (
  <div className="card">
    <div className="card-img">
      <div className={`card-img-bg ${listing.grad}`} />
      <div className="img-badge"><div className="dot" />Verified <span style={{opacity:.4}}>·</span> <span style={{color:'#1B8A4C'}}>RERA</span></div>
      <div className="img-count">1 / 12</div>
    </div>
    <div className="card-body">
      <div className="card-price">{listing.price}</div>
      <div className="card-name">{listing.name}</div>
      <div className="card-meta">{listing.meta}</div>
      <div className="card-loc"><LocPin />{listing.loc}</div>
    </div>
    <div className="seller-row">
      <div className="seller-left">
        <div className="avatar">{listing.init}</div>
        <div>
          <div className="seller-name">{listing.seller}</div>
          <div className="seller-type">{listing.type}</div>
        </div>
      </div>
      <div className="seller-actions">
        <div className="btn-icon"><Heart /></div>
        <button className="btn-contact" onClick={() => onContact(listing)}>Contact</button>
      </div>
    </div>
  </div>
);

// ── Main App ──────────────────────────────────────────────────────────────────
export default function App() {
  // sheet: null | 'enquiries' | 'interest' | 'not-interested' | 'success'
  const [sheet, setSheet] = useState(null);
  const [activeEnquiry, setActiveEnquiry] = useState(null);

  const close = () => { setSheet(null); setActiveEnquiry(null); };
  const openEnquiries = () => setSheet('enquiries');
  const selectEnquiry = (e) => { setActiveEnquiry(e); setSheet('interest'); };

  return (
    <div className="wrapper">
      <div className="label-outer">Housing.com · Consumer → Seller Feedback</div>

      <div className="phone">
        {/* Status Bar */}
        <div className="status-bar">
          <span className="status-time">9:41</span>
          <div className="status-icons">
            {/* Signal */}
            <svg width="15" height="11" viewBox="0 0 15 11" fill="#222">
              <rect x="0" y="4" width="3" height="7" rx="1"/>
              <rect x="4" y="2" width="3" height="9" rx="1"/>
              <rect x="8" y="0" width="3" height="11" rx="1"/>
              <rect x="12" y="0" width="3" height="11" rx="1" opacity="0.3"/>
            </svg>
            {/* WiFi */}
            <svg width="15" height="11" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="2">
              <path d="M1.42 9a16 16 0 0 1 21.16 0"/>
              <path d="M5 12.55a11 11 0 0 1 14.08 0"/>
              <path d="M10.54 16a6 6 0 0 1 2.92 0"/>
              <circle cx="12" cy="20" r="1"/>
            </svg>
            {/* Battery */}
            <svg width="25" height="11" viewBox="0 0 25 11">
              <rect x="0" y="1" width="21" height="9" rx="2" fill="none" stroke="#222" strokeWidth="1.5"/>
              <rect x="2" y="3" width="15" height="5" rx="1" fill="#222"/>
              <rect x="22" y="3.5" width="3" height="4" rx="1" fill="#222" opacity="0.4"/>
            </svg>
          </div>
        </div>

        {/* SRP Header */}
        <div className="srp-header">
          <span className="srp-logo">housing</span>
          <div className="srp-search">
            <Search />
            <span>Buy · Delhi-NCR · Flat, House...</span>
          </div>
        </div>

        {/* Filter Chips */}
        <div className="filter-row">
          {['Buy ▾','Delhi-NCR ▾','Budget ▾','BHK ▾','Ready to Move','Verified','New Launch'].map((c,i) => (
            <button key={c} className={`chip ${i===0?'active':''}`}>{c}</button>
          ))}
        </div>

        {/* Listings */}
        <div className="srp-body">
          {/* My Enquiries Banner */}
          <div
            style={{
              background: 'linear-gradient(135deg, #f1ebff 0%, #e8dcfc 100%)',
              borderRadius: 12, padding: '12px 16px', marginBottom: 10,
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              cursor: 'pointer', border: '1px solid #d4b8f8'
            }}
            onClick={openEnquiries}
          >
            <div>
              <div style={{fontSize:13,fontWeight:500,color:'#5e23dc'}}>My Enquiries</div>
              <div style={{fontSize:11,color:'#656565',marginTop:2}}>Review 3 pending enquiries</div>
            </div>
            <div style={{
              background:'#5e23dc',color:'white',fontSize:11,fontWeight:500,
              padding:'6px 12px',borderRadius:6
            }}>Review</div>
          </div>

          {LISTINGS.map(l => (
            <Card key={l.id} listing={l} onContact={() => openEnquiries()} />
          ))}
        </div>

        {/* Bottom Nav */}
        <div className="bottom-nav">
          {[
            {icon:<HomeIco/>,label:'Home',active:false},
            {icon:<SearchIco/>,label:'Search',active:true},
            {icon:<HeartIco/>,label:'Saved',active:false},
            {icon:<UserIco/>,label:'Profile',active:false},
          ].map((item,i) => (
            <div key={i} className={`nav-item ${item.active?'active':''}`}>
              <div style={{color:item.active?'#5e23dc':'#656565'}}>{item.icon}</div>
              <span className="nav-label">{item.label}</span>
              {item.active && <div style={{width:18,height:3,background:'#5e23dc',borderRadius:2}} />}
            </div>
          ))}
        </div>

        {/* ── Sheets ── */}
        {sheet && (
          <div className="overlay" onClick={e => e.target===e.currentTarget && close()}>
            {sheet === 'enquiries' && (
              <EnquiriesSheet
                onClose={close}
                onSelect={selectEnquiry}
              />
            )}
            {sheet === 'interest' && activeEnquiry && (
              <InterestSheet
                enquiry={activeEnquiry}
                onBack={() => setSheet('enquiries')}
                onClose={close}
                onNotInterested={() => setSheet('not-interested')}
                onSchedule={() => setSheet('success')}
              />
            )}
            {sheet === 'not-interested' && activeEnquiry && (
              <NotInterestedSheet
                enquiry={activeEnquiry}
                onBack={() => setSheet('interest')}
                onClose={close}
                onSubmit={() => setSheet('success')}
              />
            )}
            {sheet === 'success' && (
              <SuccessSheet onClose={close} />
            )}
          </div>
        )}
      </div>

      <div className="label-outer" style={{fontSize:10,opacity:0.3}}>
        Tap "Review" or "Contact" to start the flow
      </div>
    </div>
  );
}
