---
title: "Phi"
division: "digital-systems-ai"
type: "case-study"
category: "AI System"
year: 2026
summary: "Phi is a personal finance tracker built around fast income and expense recording, category-based analysis, voice input, receipt recognition and AI-assisted data processing."
cover: "/images/projects/phi/cover.svg"
tags:
  - Mobile App
  - AI System
  - Finance Tracker
  - Receipt Recognition
  - Voice Input
  - Azerbaijan QR Receipts
featured: false
status: "Released"
platforms:
  - iOS
  - Android
role: "Product strategy, UX/UI direction, AI workflow design and system architecture"
company: "Nagiyev Studio"

hero_description: "A mobile finance tracker for recording income, expenses and daily money movement across categories. The product focuses on reducing manual input through voice, paper receipt scanning, and electronic QR receipt recognition."

positioning_statement: "At first glance, it is a simple wallet app. Underneath, it is a structured AI system for turning messy financial inputs — voice notes, paper receipts and Azerbaijan’s electronic QR receipts — into clean categorized records."

core_systems:
  - title: "Multi-input finance capture"
    description: "Phi supports several ways to create financial records to make logging faster than entering everything by hand."
    items:
      - "Manual income and expense entry"
      - "Voice-based operation input"
      - "Receipt image recognition"
      - "Electronic QR receipt scanning"
      - "Category-based expense tracking"
  - title: "AI-assisted receipt processing"
    description: "Phi uses AI to transform receipts into structured records, not just archived images."
    items:
      - "Scan and parse raw receipt data"
      - "Split purchases into meaningful categories"
      - "Understand distinct expense types (e.g., snacks, household)"
  - title: "Azerbaijan QR receipt integration"
    description: "A locally relevant function for Azerbaijan: recognition of electronic receipts through QR codes connected to the ƏDV geri al ecosystem."
    items:
      - "Scan fiscal receipt QR code"
      - "Retrieve receipt data automatically"
      - "Process and prepare categorized records"
      - "Adapt to real local financial behavior"

screenshots:
  - image: "/images/projects/phi/dashboard.svg"
    caption: "A compact overview of income, expenses, balance and category distribution. Recommended size: 1200x800px"
  - image: "/images/projects/phi/add-operation.svg"
    caption: "Manual and voice-assisted entry for quick financial logging. Recommended size: 1200x800px"
  - image: "/images/projects/phi/receipt-scanner.svg"
    caption: "A camera-based flow for scanning paper receipts and extracting structured financial data. Recommended size: 1200x800px"
  - image: "/images/projects/phi/qr-recognition.svg"
    caption: "A dedicated flow for scanning Azerbaijan electronic receipt QR codes. Recommended size: 1200x800px"

technical_layers:
  - "Mobile-first finance tracking interface"
  - "Voice-to-operation input flow"
  - "Receipt image recognition pipeline"
  - "QR-code based electronic receipt retrieval"
  - "Multi-stage AI processing"
  - "Anonymization before AI interaction"
  - "AI-assisted item categorization"
  - "Backend memory for deterministic category mapping"
  - "Category correction and learning loop"
  - "Structured expense database"
  - "Reduced AI usage over time through backend learning"

architecture_image: "/images/projects/phi/architecture.svg"

ai_description: "Phi does not rely on a single AI call. The system uses several AI contours, each responsible for a separate part of the pipeline. AI handles ambiguity, while the backend stores stable knowledge."
ai_features:
  - "One layer extracts and parses raw receipt data"
  - "Another layer interprets items and categories"
  - "Backend anonymizes sensitive data before sending anything to AI"
  - "Deterministic backend logic stores verified mappings"
  - "Future operations become cheaper and less AI-dependent over time"

design_description: "The interface is designed for everyday use: fast input, clear amount entry, category selection and minimal friction. The product is intentionally simple on the surface while managing complex AI tasks underneath."
design_image: "/images/projects/phi/design.svg"
design_principles:
  - "Compact dashboard overview"
  - "Minimal friction for daily use"
  - "Fast voice and manual input"
  - "Clear amount and category selection"
  - "Simple surface over complex AI system"

value_delivered:
  - "Building useful AI-assisted consumer tools"
  - "Adapting products to local infrastructure and user habits"
  - "Designing backend systems where AI, privacy and deterministic logic work together"
  - "Cost per operation decreases with usage"
  - "Privacy exposure is reduced where possible"

studio_role_summary: "Product strategy, UX/UI direction, AI workflow design and system architecture by Nagiyev Studio. Part of Nagiyev Studio’s Digital Systems & AI product line."
studio_areas:
  - "Product strategy"
  - "UX/UI direction"
  - "AI workflow design"
  - "System architecture"

cta_text: "View more Digital Systems & AI projects"
cta_link: "/digital-systems-ai/"
---

Phi is a personal finance tracker built around fast income and expense recording, category-based analysis, voice input, receipt recognition and AI-assisted data processing.

The product focuses on reducing manual input. A user can add operations manually, dictate them by voice, scan a paper receipt, or scan an electronic receipt QR code used in Azerbaijan’s ƏDV geri al system.

The result is a clean personal finance database where AI assists with parsing, categorization and data structuring without exposing sensitive information unnecessarily.

When the user corrects or confirms categories, the backend remembers these mappings. Over time, repeated items and vendors can be categorized deterministically without asking AI again. This creates a practical hybrid model where AI handles ambiguity, while repeated patterns become automatic, reducing both costs and privacy exposure.

The value is not in adding AI for decoration. The value is in using AI where it removes friction: reading receipts, understanding voice input, categorizing messy data and turning everyday financial behavior into structured records.
