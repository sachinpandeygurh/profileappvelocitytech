# Worker Profile App

This project is a React Native application designed to display worker profiles with a tab navigation system. It includes features such as a header section with a search bar and icon carousel, category filtering, and a grid layout to showcase worker profiles. The app is designed to be responsive and works on both Android and iOS devices.

## Table of Contents

- [Setup](#setup)
- [Features](#features)
- [Data Structure](#data-structure)
- [Styling](#styling)
- [Testing](#testing)
- [Optimization](#optimization)
- [Deployment](#deployment)

## Setup

1. **Initialize Project:**
   - Start by initializing a new React Native project.
   - Ensure your environment is set up for React Native development on both Android and iOS.

## Features

1. **Tab Navigation:**
   - **Welcome Tab:** This tab contains a simple "Welcome" text.
   - **Categories Tab:** This tab lists different worker categories using icons.

2. **Header Section:**
   - The header includes a search bar and a carousel (slider) for worker category icons.
   - The search functionality filters workers based on the text entered.

3. **Grid Layout for Worker Profiles:**
   - Workers are displayed in a grid layout using a `FlatList`.
   - Each profile shows the worker's image, name, and country flag.

4. **Worker Categories:**
   - Worker categories are represented by icons in the header.
   - Categories include roles such as Astrologer, Assistant, Makeup Artist, Mehndi Artist, Photographer, etc.

5. **Icon Click Events:**
   - Each icon in the header has an `onPress` event.
   - Clicking an icon filters and displays workers related to the selected category.

## Data Structure

- **Worker Profiles:**
  - Stored in a JSON file with fields such as `id`, `name`, `country`, `profileImage`, etc.

- **Categories:**
  - Each category has an `id`, `Worker_Role`, and `icon`.

## Styling

- Applied styles using `StyleSheet` to match the provided UI design.
- Ensured the design is responsive across different screen sizes.

## Testing

- The application has been tested on both Android and iOS devices.
- Verified smooth navigation between tabs and accurate filtering of workers based on categories.

## Optimization

- The app has been optimized for performance, focusing on quick loading of worker profiles and responsive grid layout.

## Deployment

- The app has been deployed on Vercel.
- You can access the deployed app [here](#).
