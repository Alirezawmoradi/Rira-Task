# Sticky Note Application
## Overview

A fully customizable and interactive sticky note board application built with Next.js, React, Zustand, and Tailwind CSS. The app allows users to create, edit, and manage sticky notes with deadlines, color customizations, and drag-and-drop functionality.


## Table of Contents
1. **Features**
2. **Tech Stack**
3. **Installation**
4. **Usage**
5. **State Management**
6. **License**

## Features

- Create, edit, and delete sticky notes.
- Customize note colors with a built-in color picker.
- Set deadlines for notes using a date picker.
- Visual indication when a note's deadline has passed (disables the note and changes color).
- Drag and drop functionality to rearrange notes on the board.
- Auto-save changes to localStorage using zustand state management.

## Tech Stack
- **Framework :** Next.js (React-based)
- **State Management :** Zustand
- **Styling :** Tailwind CSS
- **Date Picker :** react-multi-date-picker
- **Drag-and-Drop :** React DnD

## Installation

To run this project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Alirezawmoradi/Rira-Task.git

2. Install dependencies:

   ```bash
   npm install

3. Start the application:

   ```bash
   npm run dev
   
4. Open http://localhost:3000 in your browser to see the app in action.

## Usage

1. **Creating a New Note :**
  - Click the "Add New Note" button to create a new sticky note.
   A new note will appear with a random background color.
2. **Editing Notes :**
  - Click the "Edit" icon on the note to start editing the note text.
  Hit "Enter" to save or click outside the note to save automatically.
3. **Setting a Deadline :**
  - Click the "Edit" icon on the note to start editing the note text.
  Hit "Enter" to save or click outside the note to save automatically.
4. **Setting a Deadline :**
  - Use the date picker to assign a deadline to the note.
    The note will change color and become disabled once the deadline has passed.
5. **Drag and Drop :**
  - Reorganize notes by dragging and dropping them into different positions on the board.

## State Management
I utilize Zustand for global state management. All the actions for adding, updating, deleting, and reordering notes are stored in a centralized store.

## License
This project is open-source and available under the [MIT license](https://opensource.org/licenses/MIT).


