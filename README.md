<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

<p align="center">
  A backend application for managing doctor appointments, built with <a href="http://nestjs.com" target="_blank">NestJS</a>.
</p>

---

## **Description**

This application provides a complete backend system for managing doctor appointments.  
It supports adding available time slots, booking appointments, notifying stakeholders, and enabling doctors to manage their schedules.  
The project demonstrates multiple architectural patterns across modules and supports inter-module communication via **direct calls (facades)** and **events**.

---

## **Core Features**

### ✅ 1. Time Slot Management
- Doctors can add available time slots to the system.
- Slots are validated to avoid overlaps or conflicts.
- Implemented in **Layered Architecture** for simplicity and maintainability.

---

### ✅ 2. Appointment Booking
- Patients can book an appointment in an available time slot.
- Once booked, the slot becomes unavailable for others.
- Booking validations include:
  - The time slot must exist and be free.
  - Patient cannot double-book overlapping times.
- Implemented in **Clean Architecture** for strict separation of concerns and testability.

---

### ✅ 3. Confirmation Module
- After booking, a confirmation process triggers:
  - **Notification intent** for patient and doctor.
- Notifications are **event-driven**, but the actual notification logic (e.g., email/SMS) is **not implemented yet**.
- This module also follows **Layered Architecture**.

---

### ✅ 4. Doctor’s Management Module
- Doctors can:
  - **View upcoming appointments** in their schedule.
  - **Cancel an appointment** (only if it hasn’t started yet).
  - **Mark an appointment as completed** (only after the scheduled time passes).
- Each action enforces domain-specific **validation rules**.
- Implemented in **Hexagonal Architecture** for adaptability and clean domain logic.

---

## **Architecture Overview**

The application is composed of 4 modules with different architectural styles:

| Module          | Architecture       |
|-----------------|--------------------|
| Time Slot       | Layered           |
| Booking         | Clean             |
| Confirmation    | Layered           |
| Management      | Hexagonal         |

### **Inter-Module Communication**
- **Direct Calls / Facades** for synchronous operations.
- **Domain Events** for asynchronous interactions (e.g., confirmation after booking).

---

## **Project Setup**

```bash
# Install dependencies
npm install
