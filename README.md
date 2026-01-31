# Hospital Management System – Frontend

The Hospital Management System (HMS) is a web-based application designed to digitize and manage hospital operations such as patients, doctors, appointments, and user workflows. The goal of this project is to provide an efficient, user-friendly system that reduces manual work and improves data management in hospitals

## Frontend Overview
The frontend of the application is developed using React. It provides a clean and responsive user interface for managing hospital-related activities such as patient registration, appointment booking, and profile management. The frontend follows a modular and reusable component structure, making the code easy to understand and maintain.

Redux Toolkit with RTK Query is used for state management and API integration, ensuring smooth data fetching, caching, and error handling. Basic form validation and role-based UI access are implemented to improve user experience and security.

##  Key Features

- Responsive and user-friendly UI  
- Patient management  
- Appointment booking and tracking  
- Role-based access control  
- Secure API integration  
- Modular and scalable frontend architecture 

##  Roles Available in the Project

The Hospital Management System supports role-based access to ensure secure and controlled usage of the application. Each role has specific permissions based on responsibilities.

- **Admin**
  - Manages users and system configurations
  - Adds and manages doctors
  - Views and manages all patients and appointments
  - Add Blood Donor info
  - Has full access to the system

- **Receptionist**
  - Registers new patients details
  - Books and  cancels appointments
  - Views doctor availability and appointment schedules
  - Assists patients with basic system operations

- **Doctor**
  - Views assigned patient information
  - Manages appointments and availability
  - Updates medical notes

- **Patient**
  - Registers and manages personal profile
  - Books and views appointments
  - Views appointment history and medical details


# folder structure

```bash

src/
│
├── app/
│   ├── store.js               # Redux store configuration
│   └── rootReducer.js         # Combine slices if needed
│
├── features/                  # Each feature (module) gets its own folder
│   ├── patients/
│   │   ├── components/        # Feature-specific UI components
│   │   ├── pages/             # Feature-specific pages
│   │   ├── patientsSlice.js   # Local state logic (if needed)
│   │   └── patientsApi.js     # RTK Query API slice for patient endpoints
│   │
│   ├── doctors/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── doctorsSlice.js
│   │   └── doctorsApi.js
│   │
│   ├── auth/
│   │   ├── authSlice.js
│   │   └── authApi.js
│   │
│   └── index.js               # Optional: export all slices/api hooks
│
├── components/                # Reusable UI components (Button, Modal, etc.)
│
├── hooks/                     # Custom React hooks
│
├── utils/                     # Helper functions, constants
│
├── assets/                    # Images, icons, styles
│
└── main.jsx                   # App entry point

```
# Installation & Setup
## Clone the repository
git clone https://github.com/caresync-hms/hms-frontend.git
cd hms-frontend

## Install dependencies
npm install

## Run the application
npm run dev

## Live Demo (Temporary)

Access the deployed application here:  
🔗 [http://13.50.243.68](http://13.50.243.68)
