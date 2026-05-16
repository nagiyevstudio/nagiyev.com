# Phi

## AI-assisted finance tracker for everyday money operations

Phi is a personal finance tracker built around fast income and expense recording, category-based analysis, voice input, receipt recognition and AI-assisted data processing.

At first glance, it is a simple wallet app. Underneath, it is a structured AI system for turning messy financial inputs — voice notes, paper receipts and Azerbaijan’s electronic QR receipts — into clean categorized records.

**Tags:** Mobile App · AI System · Finance Tracker · Receipt Recognition · Voice Input · Azerbaijan QR Receipts

---

# What We Built

Phi is a mobile finance tracker for recording income, expenses and daily money movement across categories.

The product focuses on reducing manual input. A user can add operations manually, dictate them by voice, scan a paper receipt, or scan an electronic receipt QR code used in Azerbaijan’s ƏDV geri al system.

The result is a clean personal finance database where AI assists with parsing, categorization and data structuring without exposing sensitive information unnecessarily.

---

# Core System

## 1. Multi-input finance capture

Phi supports several ways to create financial records:

- manual income and expense entry
- voice-based operation input
- receipt image recognition
- electronic QR receipt scanning
- category-based expense tracking

The goal is simple: make financial logging faster than opening notes, remembering numbers and entering everything by hand.

---

## 2. AI-assisted receipt processing

Phi uses AI to transform receipts into structured records.

A receipt can be scanned, parsed and split into meaningful spending categories. Instead of treating the whole purchase as one line, the system can understand that one receipt may contain products, snacks, household goods or other expense types.

This turns receipts into usable financial data, not just archived images.

---

## 3. Azerbaijan QR receipt integration

Phi includes a locally relevant function for Azerbaijan: recognition of electronic receipts through QR codes connected to the ƏDV geri al ecosystem.

The user scans the QR code from a fiscal receipt, Phi retrieves the receipt data, processes it and prepares categorized expense records.

This makes the product more than a generic finance tracker. It adapts to a real local financial behavior that already exists in Azerbaijan.

---

# AI Architecture

Phi does not rely on a single AI call.

The system uses several AI contours, each responsible for a separate part of the pipeline:

- one layer extracts and parses raw receipt data
- another layer interprets items and categories
- the backend anonymizes sensitive data before sending anything to AI
- deterministic backend logic stores verified mappings
- future operations become cheaper and less AI-dependent over time

The system is designed so AI assists where it is useful, while the backend gradually learns stable category patterns.

---

# Backend Learning Logic

Phi is not only an AI wrapper.

When the user corrects or confirms categories, the backend can remember these mappings. Over time, repeated items and vendors can be categorized deterministically without asking AI again.

This creates a practical hybrid model:

- AI handles ambiguity
- backend stores stable knowledge
- repeated patterns become automatic
- cost per operation decreases with usage
- privacy exposure is reduced where possible

This approach shows how AI can be used as a processing layer, not as a permanent dependency for every small action.

---

# Key Screens / Visual Blocks

## Dashboard

A compact overview of income, expenses, balance and category distribution.

The dashboard gives the user a fast understanding of their current financial state without turning the app into a complex accounting system.

---

## Add Operation

Manual and voice-assisted entry for quick financial logging.

The interface is designed for everyday use: fast input, clear amount entry, category selection and minimal friction.

---

## Receipt Scanner

A camera-based flow for scanning paper receipts and extracting structured financial data.

This block demonstrates the AI pipeline visually: from messy receipt image to clean categorized expense entries.

---

## QR Receipt Recognition

A dedicated flow for scanning Azerbaijan electronic receipt QR codes.

This is the strongest local product feature: it connects common user behavior in Azerbaijan with automated personal finance tracking.

---

# Technical Depth

Phi combines product design, local financial workflows and AI-assisted automation.

Core technical components:

- mobile-first finance tracking interface
- voice-to-operation input flow
- receipt image recognition pipeline
- QR-code based electronic receipt retrieval
- multi-stage AI processing
- anonymization before AI interaction
- AI-assisted item categorization
- backend memory for deterministic category mapping
- category correction and learning loop
- structured expense database
- reduced AI usage over time through backend learning

The product is intentionally simple on the surface, but the system beneath it handles real-world messy input, local receipt infrastructure and privacy-aware AI processing.

---

# Why It Matters

Phi is a compact example of Give Studio’s approach to AI products.

The value is not in adding AI for decoration. The value is in using AI where it removes friction: reading receipts, understanding voice input, categorizing messy data and turning everyday financial behavior into structured records.

For Give Studio, Phi demonstrates three important capabilities:

- building useful AI-assisted consumer tools
- adapting products to local infrastructure and user habits
- designing backend systems where AI, privacy and deterministic logic work together

---

# Footer Meta

**Project by Give Studio**

Product strategy, UX/UI direction, AI workflow design and system architecture by Give Studio.

Part of Give Studio’s Digital Systems & AI product line.