# Healthcare Persona Cards

A modern, interactive website for exploring healthcare personas with animated card dealing effects and detailed persona profiles.

## Features

- **Five Personas**: Explore detailed profiles for:
  - Steve Lendal - Architect navigating family healthcare coverage
  - Leo and Maya Torres - Co-owners & Artisans seeking first-time health insurance
  - Emily Watson - UX Designer (laid off) looking for PPO coverage
  - Maria Rodriguez - Family Caregiver managing her mother's Alzheimer care
  - Tammy Caisco - Retired traveler navigating Medicare options

- **Interactive Cards**: Click on any persona card or button to view detailed information
- **Card Dealing Animation**: Cards animate onto the page with a deck-of-cards dealing effect on load
- **Persona Images**: Each persona includes a profile photo displayed on their card and in the modal
- **Detailed Profiles**: View comprehensive information including:
  - Demographics (age, education, status, occupation, location, tech literacy)
  - Bio
  - Core Needs
  - Frustrations
  - Personality traits
  - Preferred Brands
  - Payment preferences
  - Platform preferences
  - AI Fluency level with visual indicator

- **AI Fluency Scale**: Interactive visual scale showing AI fluency levels:
  - Avoidant
  - Casual
  - Comfortable
  - Explorer
  - Integrated

## Usage

Simply open `index.html` in your web browser. No build process or dependencies required.

Alternatively, you can run a local server:
```bash
python3 -m http.server 9696
```
Then navigate to `http://localhost:9696` in your browser.

## Personas

### Steve Lendal
- 47-year-old Architect
- Married with 2 kids
- Medium tech literacy
- AI Fluency: Explorer
- Focused on family healthcare coverage, especially for special needs child
- Location: West Lake Tahoe, CA

### Leo and Maya Torres
- 27-year-old married couple
- Co-owners & Artisans
- High tech literacy
- AI Fluency: Casual
- First-time business owners seeking health insurance
- Location: Gardena, CA

### Emily Watson
- 29-year-old UX Designer (laid off)
- Single
- High tech literacy
- AI Fluency: Casual
- Seeking PPO health insurance during employment gap
- Location: San Francisco, CA

### Maria Rodriguez
- 52-year-old Family Caregiver
- Married
- Low-Medium tech literacy
- AI Fluency: Avoidant
- Providing in-home care for mother with Alzheimer's
- Location: San Jose, California

### Tammy Caisco
- 65-year-old Retired
- Married
- High tech literacy
- AI Fluency: Casual
- Navigating Medicare while traveling in RV
- Location: Manteca, CA

## File Structure

```
healthcare-personas/
├── index.html          # Main HTML file
├── styles.css          # All styling and animations
├── script.js           # Persona data and interactivity
├── images/             # Persona profile photos
│   ├── lendal.png
│   ├── torres.png
│   ├── watson.png
│   ├── rodriquez.png
│   └── caisco.png
└── README.md           # This file
```

## Technologies

- HTML5
- CSS3 (with modern features like flexbox, grid, CSS animations, and keyframes)
- Vanilla JavaScript (no dependencies)
- Responsive design for various screen sizes

## Design Features

- **Card Dealing Animation**: Cards start stacked and animate onto the page with a staggered timing effect
- **Modal Popups**: Click any persona card to view their complete profile in a detailed modal
- **Visual AI Fluency Indicator**: Circular indicator shows the persona's AI fluency level on a scale
- **Responsive Grid Layout**: Persona cards automatically adjust to screen size
- **Smooth Transitions**: Hover effects and animations throughout the interface
