# Consumer → Seller Feedback Prototype

Interactive React prototype of the Housing.com **Consumer to Seller Feedback** flow, based on the PDP Demand Figma file.

## Flow Overview

```
SRP (Listing Results)
  └─ [Tap "Contact"] ──► Step 1: How was your call? (3 radio options)
                              └─ [Continue] ──► Step 2: Schedule visit (date + time pills)
                                                    └─ [Continue] ──► Step 3: Purpose (reason list)
                                                                           └─ [Select reason] ──► Success ✓
```

## Screens

| Step | Screen | Figma Node |
|------|--------|------------|
| 0 | SRP — Search Results Page | `3203:7671` |
| 1 | Feedback bottom sheet — "How was your call?" | `3203:14910` |
| 2 | Date & time picker sheet | `3203:21977` / `3203:23112` |
| 3 | Purpose / reason selection | `3203:24128` |
| ✓ | Success confirmation | `3203:25138` |

## Running Locally

```bash
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000) — tap **Contact** on any listing to trigger the flow.

## Figma Source

[PDP — Demand · Consumer to Seller Feedback](https://www.figma.com/design/NU6ksSaeo8ATDjgcTWnhrc/PDP--Demand-?node-id=3121-10238)
