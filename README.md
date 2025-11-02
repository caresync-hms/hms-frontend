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
