# 🗒️ Custom Notes – Frontend Mini Project

A simple note-taking app built with **Next.js** that lets users add and view notes, with all data stored in `localStorage`.

---

## 🚀 Live Demo

[Vercel Site Link](https://your-vercel-site.vercel.app) ## 📂 GitHub Repository

[GitHub Repo](https://github.com/your-username/custom-notes) ---

## 📦 Setup & Run

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/your-username/custom-notes](https://github.com/your-username/custom-notes) # Replace with your repo URL
    cd custom-notes
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    # yarn install
    # or
    # pnpm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    # or
    # yarn dev
    # or
    # pnpm dev
    ```
    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## 🎯 Features

* Add notes with a title and content.
* View all saved notes on a dedicated page.
* Home page displays the 4 most recently added notes.
* All note data is persisted in the browser’s `localStorage`.
* Simple navigation between Home, Add Note, and All Notes pages.
* Includes loading indicators ("Saving...") and basic error handling for storage operations.

---

## 🧠 "Why?" - Design Decisions

### 📥 Storage Strategy

* **Why `localStorage`?**
    * Constraint: No backend database allowed for this project.
    * Benefit: `localStorage` provides simple client-side persistence, allowing notes to remain available even after closing the browser tab or window.
* **Why key name `custom_notes_v1`?**
    * Namespacing: Avoids potential conflicts with other applications using `localStorage` on the same domain.
    * Versioning (`_v1`): Makes future data schema migrations easier if the structure of the stored notes needs to change.

### 🧱 Component Design

* **`AddNote` Component:** Manages the form state (controlled inputs for title and content) and handles the logic for saving a new note to `localStorage`.
* **`NotesList` Component:** Responsible for fetching all notes from `localStorage` and rendering them.
* **`Home` Page Component:** Fetches notes but displays only the 4 most recent ones, sorted by creation date.
* **`Nav` Component:** A shared layout component providing consistent navigation links across all pages (`/`, `/add`, `/notes`).

### ⚛️ State Management

* **Why `useState`?**
    * Sufficient for managing local component state, such as the values in the `AddNote` form inputs or the loading/error states. Simple and built into React.
* **Why `useEffect`?**
    * Essential for interacting with browser-specific APIs like `localStorage`. `localStorage` is only available on the client-side, so `useEffect` (with an empty dependency array `[]`) ensures the code runs only after the component has mounted in the browser. This is crucial in Next.js, which performs server-side rendering initially.

### 🎨 Styling

* **Why plain inline styles/basic CSS?**
    * Speed & Simplicity: For a small project with a tight scope (e.g., a 2-hour challenge), inline styles or simple CSS modules are quick to implement without the setup overhead of CSS-in-JS libraries or utility-class frameworks like Tailwind CSS.
    * Readability: Keeps styles co-located with the component logic for easy understanding in small components.

### 🔀 Navigation

* **Why simple `<Link>` components from `next/link`?**
    * Next.js handles routing automatically based on the file structure within the `app` directory.
    * The built-in `<Link>` component provides client-side navigation between pages without a full page reload, offering a smoother user experience. No need for external routing libraries.

### 💬 UX Decisions

* **Why show "Saving..." state?**
    * Feedback: Provides immediate visual confirmation to the user that their action (saving a note) has been registered and is being processed. Improves perceived performance.
* **Why show an error banner?**
    * Transparency & Debugging: Informs the user if something goes wrong (e.g., `localStorage` is full or access is denied). This is important for troubleshooting.

---

## 📁 File Structure

```
.
├── lib/
│   └── storage.js         # Utility functions for localStorage interactions (save, load)
├── components/
│   └── Nav.jsx            # Shared navigation bar component
├── app/
│   ├── layout.js          # Root layout (includes Nav)
│   ├── page.jsx           # Home page (shows recent notes)
│   ├── add/
│   │   └── page.jsx       # Page for adding new notes
│   └── notes/
│       └── page.jsx       # Page for viewing all notes
├── public/
│   └── ...                # Static assets
└── package.json
```

---

## 📄 Example Note Object

This is the structure of a single note object as stored in `localStorage`:

```json
{
  "id": "unique-timestamp-or-uuid", // Added for unique identification
  "title": "New Task",
  "content": "Finish the frontend assignment",
  "created": "2025-04-29T14:55:00.000Z" // ISO string format for easy sorting
}
```

---

## 🧪 Testing Instructions

1.  **Add Notes:** Navigate to the `/add` page and create several notes with different titles and content.
2.  **View All Notes:** Go to the `/notes` page. Verify that all the notes you added are displayed.
3.  **View Recent Notes:** Go to the Home page (`/`). Confirm that only the 4 most recently added notes are shown, ordered from newest to oldest.
4.  **Persistence:** Close the browser tab/window and reopen the application. Verify that your notes are still present on the `/notes` and `/` pages.
5.  **(Optional) Storage Inspection:** Open your browser's developer tools, go to the "Application" (or "Storage") tab, and inspect `localStorage`. You should see a key named `custom_notes_v1` containing your notes as a JSON string.

---

## 📜 License

MIT License - Free to use, modify, and distribute for evaluation or learning purposes. See the `LICENSE` file for more details (if included).
