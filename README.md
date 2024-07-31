# Bojo's DnD Web Application

This project is a React application that displays character cards with various attributes, hit points, and equipment.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/character-card-project.git
    ```
2. Navigate to the project directory:
    ```sh
    cd character-card-project
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```

## Usage

1. Start the development server:
    ```sh
    npm run dev
    ```
2. Open your browser and navigate to `http://localhost:5157`.

## Components

### CharacterCard

The `CharacterCard` component displays the following information about a character:
- Name
- Level
- Hit Points
- Image
- Attributes (Strength, Dexterity, Constitution, Intelligence, Wisdom, Charisma)
- Equipment

#### Props

- `character` (object): The character data to display.
