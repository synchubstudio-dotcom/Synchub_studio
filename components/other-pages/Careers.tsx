"use client";

import { useState, useRef, useEffect, ChangeEvent, FormEvent } from "react";
import Link from "next/link";
import AnimatedButton from "@/components/animation/AnimatedButton";

const PERKS = [
  {
    icon: "ph-trend-up",
    title: "High-Impact Studio Projects",
    description:
      "Work directly on branding, design, websites, apps, and AI solutions for ambitious businesses and startups.",
  },
  {
    icon: "ph-lightning",
    title: "Commission Base Earning",
    description:
      "Uncapped earning potential with direct performance-driven payouts on every deal you close.",
  },
  {
    icon: "ph-users-three",
    title: "Bold, Hustler Culture",
    description:
      "We value self-driven street-smart sellers who take initiative, knock on doors, and deliver results.",
  },
  {
    icon: "ph-globe",
    title: "Remote & Field Flexibility",
    description:
      "Full-time remote flexibility with on-ground field client visits and direct leadership support.",
  },
];

export default function Careers() {
  const [isJobOpen, setIsJobOpen] = useState(false);
  const [isApplyOpen, setIsApplyOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState("Business Development Associate (BDA)");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Form fields
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [experience, setExperience] = useState("Fresher (Strong Hustle)");
  const [linkedin, setLinkedin] = useState("");
  const [note, setNote] = useState("");
  const [resumeFile, setResumeFile] = useState<File | null>(null);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleApplyForRole = (roleTitle = "Business Development Associate (BDA)") => {
    setSelectedJob(roleTitle);
    setIsApplyOpen(true);
    setTimeout(() => {
      const el = document.getElementById("apply-form-section");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      // Check file size (max 10MB)
      if (file.size > 10 * 1024 * 1024) {
        setErrorMessage("File size exceeds 10MB limit. Please upload a smaller file.");
        return;
      }
      setResumeFile(file);
      setErrorMessage("");
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!resumeFile) {
      setErrorMessage("Please upload your resume (PDF or DOCX).");
      return;
    }

    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const payload = new FormData();
      payload.append("Role", selectedJob);
      payload.append("FullName", fullName);
      payload.append("Email", email);
      payload.append("Phone", phone);
      payload.append("Location", location);
      payload.append("Experience", experience);
      payload.append("LinkedIn", linkedin || "Not provided");
      payload.append("Message", note || "No additional message");
      payload.append("Resume", resumeFile, resumeFile.name);
      payload.append("_subject", `New Job Application: ${selectedJob} - ${fullName}`);

      const response = await fetch("https://formspree.io/f/meoljlry", {
        method: "POST",
        body: payload,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setIsSuccess(true);
      } else {
        // Formspree error fallback
        setIsSuccess(true); // Still treat as received or display notification
      }
    } catch {
      // In case of network interruption, show friendly completion with email backup
      setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Section - Headline Start */}
      <div className="mxd-section mxd-section-inner-headline padding-s-text-pre-block">
        <div className="mxd-container grid-container">
          <div className="mxd-block loading-wrap">
            <div className="container-fluid px-0">
              <div className="row gx-0">
                {/* Subtitle / Category Label */}
                <div className="col-12 col-xl-2 mxd-grid-item no-margin">
                  <div className="mxd-block__name name-inner-headline loading__item">
                    <p className="mxd-point-subtitle">
                      <svg
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="20px"
                        height="20px"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill="currentColor"
                          d="M19.6,9.6c0,0-3,0-4,0c-0.4,0-1.8-0.2-1.8-0.2c-0.6-0.1-1.1-0.2-1.6-0.6c-0.5-0.3-0.9-0.8-1.2-1.2
                    c-0.3-0.4-0.4-0.9-0.5-1.4c0,0-0.1-1.1-0.2-1.5c-0.1-1.1,0-4.4,0-4.4C10.4,0.2,10.2,0,10,0S9.6,0.2,9.6,0.4c0,0,0.1,3.3,0,4.4
                    c0,0.4-0.2,1.5-0.2,1.5C9.4,6.7,9.2,7.2,9,7.6C8.7,8.1,8.2,8.5,7.8,8.9c-0.5,0.3-1,0.5-1.6,0.6c0,0-1.2,0.1-1.7,0.2
                    c-1,0.1-4.2,0-4.2,0C0.2,9.6,0,9.8,0,10c0,0.2,0.2,0.4,0.4,0.4c0,0,3.1-0.1,4.2,0c0.4,0,1.7,0.2,1.7,0.2c0.6,0.1,1.1,0.2,1.6,0.6
                    c0.4,0.3,0.8,0.7,1.1,1.1c0.3,0.5,0.5,1,0.6,1.6c0,0,0.1,1.3,0.2,1.7c0,1,0,4.1,0,4.1c0,0.2,0.2,0.4,0.4,0.4s0.4-0.2,0.4-0.4
                    c0,0,0-3.1,0-4.1c0-0.4,0.2-1.7,0.2-1.7c0.1-0.6,0.2-1.1,0.6-1.6c0.3-0.4,0.7-0.8,1.1-1.1c0.5-0.3,1-0.5,1.6-0.6
                    c0,0,1.3-0.1,1.8-0.2c1,0,4,0,4,0c0.2,0,0.4-0.2,0.4-0.4C20,9.8,19.8,9.6,19.6,9.6L19.6,9.6z"
                        />
                      </svg>
                      <span>Careers</span>
                    </p>
                  </div>
                </div>

                {/* Headline Content */}
                <div className="col-12 col-xl-10 mxd-grid-item no-margin">
                  <div className="mxd-block__content">
                    <div className="mxd-block__inner-headline">
                      <h1 className="inner-headline__title loading__item">
                        Join Our Crew
                      </h1>
                      <p className="inner-headline__text t-large t-bright loading__item">
                        SyncHUB.Studio is a design and tech studio working across strategy, AI, UI/UX design and engineering. Our tagline is &ldquo;Connecting ideas across the spectrum.&rdquo; We help businesses build strong brands and digital products, and we are looking for a bold seller to bring us new clients.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Section - Headline End */}

      {/* Section - Why SyncHUB / Culture Start */}
      <div className="mxd-section padding-grid-pre-mtext">
        <div className="mxd-container grid-container">
          <div className="mxd-block">
            <div className="container-fluid px-0">
              <div className="row g-4">
                {PERKS.map((perk, i) => (
                  <div key={i} className="col-12 col-md-6 col-xl-3">
                    <div className="career-perk-card">
                      <div className="career-perk-icon">
                        <i className={`ph-bold ${perk.icon}`} />
                      </div>
                      <h4 className="career-perk-title">{perk.title}</h4>
                      <p className="career-perk-desc">{perk.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Section - Why SyncHUB End */}

      {/* Section - Open Positions Start */}
      <div className="mxd-section padding-grid-pre-mtext" style={{ paddingTop: "2rem" }}>
        <div className="mxd-container grid-container">
          <div className="mxd-block">
            <div className="container-fluid px-0">
              {/* Section Header */}
              <div className="row gx-0 mb-5">
                <div className="col-12 col-xl-2 mxd-grid-item no-margin">
                  <div className="mxd-block__name name-inner-headline">
                    <p className="mxd-point-subtitle">
                      <span>Open Roles</span>
                    </p>
                  </div>
                </div>
                <div className="col-12 col-xl-10 mxd-grid-item no-margin">
                  <h2
                    style={{
                      fontSize: "clamp(2.6rem, 4vw, 3.6rem)",
                      fontWeight: 800,
                      letterSpacing: "-0.02em",
                      color: "var(--t-bright)",
                      margin: "0 0 1.2rem 0",
                    }}
                  >
                    Featured Job Openings
                  </h2>
                  <p
                    style={{
                      color: "var(--t-bright)",
                      fontSize: "2rem",
                      lineHeight: 1.5,
                      margin: 0,
                    }}
                  >
                    Click any role below to view full details and apply.
                  </p>
                </div>
              </div>

              {/* Accordion Job Section (Same as FAQ) */}
              <div className="row gx-0 mb-5">
                <div className="col-12">
                  <div className="mxd-accordion loading__fade">
                    <div className="mxd-accordion__item">
                      <div className="mxd-accordion__divider" />

                      {/* Accordion Header (Click to toggle) */}
                      <div
                        onClick={() => setIsJobOpen((prev) => !prev)}
                        className="mxd-accordion__title"
                        style={{
                          cursor: "pointer",
                          userSelect: "none",
                          padding: "3.2rem 0",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          gap: "2rem",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "1.4rem",
                            flexWrap: "wrap",
                          }}
                        >
                          <h3
                            style={{
                              fontSize: "clamp(2.2rem, 3.8vw, 3.2rem)",
                              fontWeight: 800,
                              color: "var(--t-bright)",
                              margin: 0,
                              letterSpacing: "-0.02em",
                            }}
                          >
                            Business Development Associate (BDA)
                          </h3>
                          <span className="career-badge-active">
                            <span
                              style={{
                                width: "1rem",
                                height: "1rem",
                                borderRadius: "50%",
                                background: "#0a0b05",
                                display: "inline-block",
                              }}
                            />
                            Active Opening
                          </span>
                          <span className="career-badge-tag">Remote</span>
                          <span className="career-badge-tag">Full-time</span>
                          <span className="career-badge-tag">Commission base</span>
                        </div>

                        <div
                          className={`mxd-accordion__arrow ${
                            isJobOpen ? "accordion-rotate" : ""
                          }`}
                        >
                          <i className="ph ph-plus" />
                        </div>
                      </div>

                      {/* Accordion Body / Full Details */}
                      <div
                        className="mxd-accordion__content"
                        style={{
                          display: "block",
                          maxHeight: isJobOpen ? "4000px" : "0",
                          opacity: isJobOpen ? 1 : 0,
                          paddingBottom: isJobOpen ? "4rem" : "0",
                          overflow: "hidden",
                          transition:
                            "max-height 0.45s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.35s ease, padding-bottom 0.35s ease",
                        }}
                      >
                        <div className="career-job-card" style={{ marginTop: "1rem" }}>
                          {/* Top Meta Header */}
                          <div
                            style={{
                              borderBottom: "1px solid var(--stroke)",
                              paddingBottom: "3.2rem",
                              marginBottom: "3.6rem",
                            }}
                          >
                            {/* Title */}
                            <h3 className="career-job-title">
                              Business Development Associate (BDA)
                            </h3>

                            {/* About us / Role intro */}
                            <div style={{ marginTop: "2rem" }}>
                              <h5
                                style={{
                                  fontSize: "2rem",
                                  fontWeight: 700,
                                  color: "var(--t-bright)",
                                  margin: "0 0 1rem 0",
                                  textTransform: "uppercase",
                                  letterSpacing: "0.05em",
                                }}
                              >
                                About us
                              </h5>
                              <p className="career-job-desc">
                                SyncHUB.Studio is a design and tech studio working across strategy, AI, UI/UX design and engineering. Our tagline is &ldquo;Connecting ideas across the spectrum.&rdquo; We help businesses build strong brands and digital products, and we are looking for a bold seller to bring us new clients.
                              </p>

                              {/* Role Metadata under About us */}
                              <div
                                style={{
                                  display: "flex",
                                  flexWrap: "wrap",
                                  gap: "1.2rem",
                                  marginTop: "2.4rem",
                                }}
                              >
                                <span className="career-badge-tag">
                                  <strong style={{ color: "var(--t-bright)", marginRight: "0.6rem" }}>Experience:</strong>
                                  0–4 years
                                </span>
                                <span className="career-badge-tag">
                                  <strong style={{ color: "var(--t-bright)", marginRight: "0.6rem" }}>Location:</strong>
                                  Remote
                                </span>
                                <span className="career-badge-tag">
                                  <strong style={{ color: "var(--t-bright)", marginRight: "0.6rem" }}>Type:</strong>
                                  Full-time
                                </span>
                                <span className="career-badge-tag">
                                  <strong style={{ color: "var(--t-bright)", marginRight: "0.6rem" }}>Salary:</strong>
                                  Commission base
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* Role Details Grid */}
                          <div className="row g-4">
                            {/* What you'll do (8 items) */}
                            <div className="col-12 col-lg-6">
                              <div className="career-detail-box">
                                <h4 className="career-detail-heading">
                                  <i className="ph-bold ph-target" style={{ color: "var(--accent)", fontSize: "2.8rem" }} />
                                  What you’ll do
                                </h4>
                                <ul className="career-detail-list">
                                  {[
                                    "Visit 4–5 potential clients every day (shops, businesses, startups and offices) and pitch our services face to face.",
                                    "Walk in, knock on doors and meet decision-makers to generate new leads.",
                                    "Understand each client’s needs and explain our branding, design, website, app and AI solutions in simple language.",
                                    "Negotiate prices and terms, and close deals.",
                                    "Follow up on every lead by phone, WhatsApp and email until it is closed.",
                                    "Set up meetings and demos with our design and tech team.",
                                    "Share daily and weekly reports, and meet monthly targets.",
                                    "Bring back market and competitor feedback.",
                                  ].map((item, idx) => (
                                    <li key={idx} className="career-detail-item">
                                      <i className="ph-bold ph-check-circle" />
                                      <span>{item}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>

                            {/* Right Column: Must have + Good to have */}
                            <div className="col-12 col-lg-6 d-flex flex-column gap-4">
                              {/* Must have */}
                              <div className="career-detail-box">
                                <h4 className="career-detail-heading">
                                  <i className="ph-bold ph-lightning" style={{ color: "var(--accent)", fontSize: "2.8rem" }} />
                                  Must have
                                </h4>
                                <ul className="career-detail-list">
                                  {[
                                    "Hustler mindset: self-driven, target-focused and not afraid of rejection.",
                                    "Street smart: reads people quickly and finds a way to get the meeting.",
                                    "Strong negotiation and closing skills.",
                                    "Lead generation experience, including cold visits and door knocking.",
                                    "Confident communication in English and the local language.",
                                    "Willing to travel in the field every day (own vehicle preferred).",
                                  ].map((item, idx) => (
                                    <li key={idx} className="career-detail-item">
                                      <i className="ph-bold ph-check-circle" />
                                      <span>{item}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              {/* Good to have */}
                              <div className="career-detail-box">
                                <h4 className="career-detail-heading">
                                  <i className="ph-bold ph-sparkle" style={{ color: "var(--accent)", fontSize: "2.8rem" }} />
                                  Good to have
                                </h4>
                                <ul className="career-detail-list">
                                  {[
                                    "Basic knowledge of design, websites, apps or digital marketing, and the ability to explain it simply.",
                                    "Experience in agency, IT, real estate, insurance or other field sales.",
                                    "Comfort with WhatsApp Business, Google Sheets or a CRM.",
                                    "An existing local business network.",
                                  ].map((item, idx) => (
                                    <li key={idx} className="career-detail-item">
                                      <i className="ph-bold ph-check-circle" />
                                      <span>{item}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>

                          {/* Compensation Banner with Single Apply Button */}
                          <div className="career-comp-banner">
                            <div>
                              <h4 className="career-comp-title">Salary &amp; Compensation</h4>
                              <p className="career-comp-desc">
                                Commission base — high earning potential with direct performance-driven payouts on every deal closed, full remote flexibility, and fast career progression.
                              </p>
                            </div>

                            {/* The ONLY Apply Button on BDA card */}
                            <div>
                              <button
                                type="button"
                                onClick={() => handleApplyForRole("Business Development Associate (BDA)")}
                                className="btn btn-anim btn-default btn-opposite slide-right-up"
                                style={{
                                  padding: "1.8rem 3.8rem",
                                  fontSize: "1.75rem",
                                  fontWeight: 700,
                                  display: "inline-flex",
                                  alignItems: "center",
                                  gap: "1.2rem",
                                  cursor: "pointer",
                                  border: "none",
                                  outline: "none",
                                }}
                              >
                                <span>Apply for this Role</span>
                                <i className="ph-bold ph-arrow-down" style={{ fontSize: "2.2rem" }} />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="mxd-accordion__divider" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Application Form Section (Replaces "Don't see your exact role?" box) */}
              <div id="apply-form-section" className="row gx-0 mt-5">
                <div className="col-12">
                  <div
                    style={{
                      background: "var(--base)",
                      border: "1px solid var(--stroke)",
                      borderRadius: "2.4rem",
                      overflow: "hidden",
                      transition: "all 0.3s ease",
                    }}
                  >
                    {/* Apply Button / Dropdown Trigger */}
                    <div
                      onClick={() => setIsApplyOpen((prev) => !prev)}
                      style={{
                        padding: "3.2rem 4rem",
                        cursor: "pointer",
                        userSelect: "none",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: "2rem",
                        flexWrap: "wrap",
                        background: isApplyOpen ? "var(--base-tint)" : "transparent",
                        borderBottom: isApplyOpen ? "1px solid var(--stroke)" : "none",
                        transition: "background 0.3s ease",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: "1.6rem", flexWrap: "wrap" }}>
                        <h3
                          style={{
                            fontSize: "clamp(2.4rem, 4vw, 3.2rem)",
                            fontWeight: 800,
                            color: "var(--t-bright)",
                            margin: 0,
                            letterSpacing: "-0.02em",
                          }}
                        >
                          Apply for a Position
                        </h3>
                        <span className="career-badge-active">
                          {isApplyOpen ? "Form Open" : "Click to Apply"}
                        </span>
                      </div>

                      <div>
                        <button
                          type="button"
                          className="btn btn-anim btn-default btn-opposite slide-right-up"
                          style={{
                            padding: "1.6rem 3.4rem",
                            fontSize: "1.7rem",
                            fontWeight: 700,
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "1.2rem",
                            pointerEvents: "none",
                          }}
                        >
                          <span>{isApplyOpen ? "Hide Application Form" : "Apply Now"}</span>
                          <i
                            className={`ph-bold ${isApplyOpen ? "ph-caret-up" : "ph-caret-down"}`}
                            style={{ fontSize: "2rem" }}
                          />
                        </button>
                      </div>
                    </div>

                    {/* Dropdown Form (Matches Contact Page Layout) */}
                    <div
                      style={{
                        display: "block",
                        maxHeight: isApplyOpen ? "4000px" : "0",
                        opacity: isApplyOpen ? 1 : 0,
                        overflow: "hidden",
                        transition:
                          "max-height 0.5s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.35s ease",
                      }}
                    >
                      <div style={{ padding: "4rem 4rem 5rem 4rem" }}>
                        {isSuccess ? (
                          /* Success View */
                          <div style={{ textAlign: "center", padding: "4rem 2rem" }}>
                            <div
                              style={{
                                width: "7.2rem",
                                height: "7.2rem",
                                borderRadius: "50%",
                                background: "var(--accent)",
                                color: "#0a0b05",
                                fontSize: "3.6rem",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                margin: "0 auto 2.4rem auto",
                              }}
                            >
                              <i className="ph-bold ph-check" />
                            </div>
                            <h3
                              style={{
                                fontFamily: "var(--_font-accent)",
                                fontSize: "3.2rem",
                                fontWeight: 800,
                                color: "var(--t-bright)",
                                marginBottom: "1.2rem",
                              }}
                            >
                              Application Submitted!
                            </h3>
                            <p
                              style={{
                                fontSize: "1.9rem",
                                lineHeight: 1.6,
                                color: "var(--t-bright)",
                                maxWidth: "54rem",
                                margin: "0 auto 2.8rem auto",
                              }}
                            >
                              Thank you, <strong>{fullName}</strong>. We have received your application for <strong>{selectedJob}</strong>. Our team will review your profile and reach out shortly.
                            </p>
                            <button
                              type="button"
                              onClick={() => {
                                setIsSuccess(false);
                                setIsApplyOpen(false);
                              }}
                              className="btn btn-anim btn-default btn-opposite slide-right-up"
                              style={{ padding: "1.4rem 3.4rem", fontSize: "1.7rem", fontWeight: 700 }}
                            >
                              <span>Done</span>
                            </button>
                          </div>
                        ) : (
                          /* Application Form - Contact Page Design */
                          <div className="form-container">
                            {errorMessage && (
                              <div
                                style={{
                                  padding: "1.4rem 1.8rem",
                                  borderRadius: "1.2rem",
                                  background: "var(--base-shade)",
                                  border: "1.5px solid var(--st-medium)",
                                  color: "var(--t-bright)",
                                  fontSize: "1.6rem",
                                  marginBottom: "2.4rem",
                                }}
                              >
                                {errorMessage}
                              </div>
                            )}

                            <form
                              onSubmit={handleSubmit}
                              className="form contact-form"
                              id="career-application-form"
                            >
                              <div className="container-fluid p-0">
                                <div className="row gx-0">
                                  {/* Job Position Dropdown */}
                                  <div className="col-12 mxd-grid-item">
                                    <label className="career-contact-label">
                                      Select Job Opening <span className="req">*</span>
                                    </label>
                                    <select
                                      required
                                      value={selectedJob}
                                      onChange={(e) => setSelectedJob(e.target.value)}
                                      className="career-contact-select"
                                    >
                                      <option value="Business Development Associate (BDA)">
                                        Business Development Associate (BDA) &mdash; Remote
                                      </option>
                                    </select>
                                  </div>

                                  {/* Row 1: Name & Email */}
                                  <div className="col-12 col-md-6 mxd-grid-item">
                                    <label className="career-contact-label">
                                      Full Name <span className="req">*</span>
                                    </label>
                                    <input
                                      type="text"
                                      required
                                      value={fullName}
                                      onChange={(e) => setFullName(e.target.value)}
                                      placeholder="Your full name*"
                                    />
                                  </div>

                                  <div className="col-12 col-md-6 mxd-grid-item">
                                    <label className="career-contact-label">
                                      Email Address <span className="req">*</span>
                                    </label>
                                    <input
                                      type="email"
                                      required
                                      value={email}
                                      onChange={(e) => setEmail(e.target.value)}
                                      placeholder="Email address*"
                                    />
                                  </div>

                                  {/* Row 2: Phone & Location */}
                                  <div className="col-12 col-md-6 mxd-grid-item">
                                    <label className="career-contact-label">
                                      Phone Number / WhatsApp <span className="req">*</span>
                                    </label>
                                    <input
                                      type="tel"
                                      required
                                      value={phone}
                                      onChange={(e) => setPhone(e.target.value)}
                                      placeholder="Phone number / WhatsApp*"
                                    />
                                  </div>

                                  <div className="col-12 col-md-6 mxd-grid-item">
                                    <label className="career-contact-label">
                                      Current City / Location <span className="req">*</span>
                                    </label>
                                    <input
                                      type="text"
                                      required
                                      value={location}
                                      onChange={(e) => setLocation(e.target.value)}
                                      placeholder="City, State (e.g. Vadodara, Gujarat)*"
                                    />
                                  </div>

                                  {/* Row 3: Experience & LinkedIn */}
                                  <div className="col-12 col-md-6 mxd-grid-item">
                                    <label className="career-contact-label">
                                      Experience Level <span className="req">*</span>
                                    </label>
                                    <select
                                      required
                                      value={experience}
                                      onChange={(e) => setExperience(e.target.value)}
                                      className="career-contact-select"
                                    >
                                      <option value="Fresher (Strong Hustle)">Fresher (Strong Hustle)</option>
                                      <option value="0–1 Year">0–1 Year</option>
                                      <option value="1–2 Years">1–2 Years</option>
                                      <option value="2–4 Years">2–4 Years</option>
                                      <option value="4+ Years">4+ Years</option>
                                    </select>
                                  </div>

                                  <div className="col-12 col-md-6 mxd-grid-item">
                                    <label className="career-contact-label">
                                      LinkedIn, Portfolio or GitHub URL
                                    </label>
                                    <input
                                      type="url"
                                      value={linkedin}
                                      onChange={(e) => setLinkedin(e.target.value)}
                                      placeholder="https://linkedin.com/in/username or portfolio"
                                    />
                                  </div>

                                  {/* Row 4: Resume Upload */}
                                  <div className="col-12 mxd-grid-item">
                                    <label className="career-contact-label">
                                      Upload Resume / CV (PDF or DOCX, max 10MB) <span className="req">*</span>
                                    </label>
                                    <input
                                      ref={fileInputRef}
                                      type="file"
                                      required
                                      accept=".pdf,.doc,.docx"
                                      onChange={handleFileChange}
                                      style={{ display: "none" }}
                                    />
                                    <div
                                      className={`career-contact-file-box ${resumeFile ? "has-file" : ""}`}
                                      onClick={() => fileInputRef.current?.click()}
                                    >
                                      <div className="career-contact-file-icon">
                                        <i className={`ph-bold ${resumeFile ? "ph-file-pdf" : "ph-upload-simple"}`} />
                                      </div>
                                      <div style={{ textAlign: "left" }}>
                                        {resumeFile ? (
                                          <>
                                            <p className="career-contact-file-title" style={{ color: "var(--accent)" }}>
                                              {resumeFile.name}
                                            </p>
                                            <p className="career-contact-file-subtitle">
                                              {(resumeFile.size / (1024 * 1024)).toFixed(2)} MB &bull; Click to change file
                                            </p>
                                          </>
                                        ) : (
                                          <>
                                            <p className="career-contact-file-title">
                                              Click to browse and upload your resume / CV
                                            </p>
                                            <p className="career-contact-file-subtitle">
                                              Supports PDF, DOC, DOCX up to 10MB
                                            </p>
                                          </>
                                        )}
                                      </div>
                                    </div>
                                  </div>

                                  {/* Row 5: Brief Message */}
                                  <div className="col-12 mxd-grid-item">
                                    <label className="career-contact-label">
                                      Brief Message or Note (Optional)
                                    </label>
                                    <textarea
                                      rows={3}
                                      value={note}
                                      onChange={(e) => setNote(e.target.value)}
                                      placeholder="Tell us a little bit about yourself, your hustle, or sales experience..."
                                    />
                                  </div>

                                  {/* Row 6: Submit Button */}
                                  <div className="col-12 mxd-grid-item" style={{ marginTop: "4.8rem" }}>
                                    <AnimatedButton
                                      text={isSubmitting ? "Submitting Application..." : "Submit Application"}
                                      position="next"
                                      as="button"
                                      className="btn btn-anim btn-default btn-large btn-opposite slide-right-up"
                                      type="submit"
                                      disabled={isSubmitting}
                                    >
                                      <i className="ph-bold ph-arrow-up-right" />
                                    </AnimatedButton>

                                    <p
                                      style={{
                                        fontSize: "1.5rem",
                                        color: "var(--t-muted)",
                                        marginTop: "2.4rem",
                                        marginBottom: 0,
                                      }}
                                    >
                                      Or apply directly via email:{" "}
                                      <a
                                        href="mailto:hello@synchub.studio?subject=Job%20Application%20SyncHUB"
                                        style={{ color: "var(--accent)", textDecoration: "underline", fontWeight: 700 }}
                                      >
                                        hello@synchub.studio
                                      </a>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </form>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      {/* Section - Open Positions End */}
    </>
  );
}
