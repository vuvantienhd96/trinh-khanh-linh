# 💖 Valentine's/Galentine's Day Interactive Template

[![License: MIT](https://img.shields.io/badge/License-MIT-pink.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-18.x-blue.svg)](https://reactjs.org/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.x-purple.svg)](https://www.framer.com/motion/)

A cute, customizable, and interactive website template to ask someone special to be your Valentine or Galentine! Features animated hearts, an adorable peeking cat, a personalized memory slideshow, and a playful proposal page where the "No" button runs away when clicked.

---

## Live Demo

**[View Live Site](https://be-my-galentine.netlify.app/)**

## Features

-  **Adorable peeking cat** that appears on every page
-  **Animated heartbeat background** with floating hearts
-  **Customizable memory slideshow** with photos and personal messages
-  **Interactive "No" button** that moves around the screen when clicked
-  **Confetti celebration** on acceptance
-  **Fully responsive** design for mobile and desktop
-  **Smooth animations** powered by Framer Motion
-  **Easy to customize** - change text, images, and colors

---

## Quick Start

### Prerequisites

- **Node.js**  - [Download here](https://nodejs.org/)
- **npm** package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR-USERNAME/galentines-valentines-template.git
   cd galentines-valentines-template
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   
   [http://localhost:5173](http://localhost:5173)

---

## Project Structure

```
galentines-valentines-template/
├── public/
│   └── peeking-cat.png         
├── src/
│   ├── components/
│   │   ├── Welcome.jsx        
│   │   ├── Memories.jsx        
│   │   ├── Ask.jsx      
│   │   └── Success.jsx         
│   ├── App.jsx                
│   ├── App.css             
│   ├── index.css                
│   └── main.jsx               
├── package.json
└── README.md
```

---

## Customization Guide

### 1. **Update Memory Slideshow**

Edit the `memoriesData` array in `src/components/Memories.jsx`:

```javascript
const memoriesData = [
  {
    id: 1,
    text: "Your first memory text here...",
    img: "https://your-image-url.com/photo1.jpg"
  },
  {
    id: 2,
    text: "Your second memory text here...",
    img: "https://your-image-url.com/photo2.jpg"
  },
  // Add more memories...
];
```

### 2. **Change Valentine's ↔ Galentine's**

In `src/components/Ask.jsx`, update line 63:

**For Valentine's Day:**
```javascript
<h1 style={{ marginBottom: '20px' }}>Will you be my Valentine? 💕</h1>
```

**For Galentine's Day:**
```javascript
<h1 style={{ marginBottom: '20px' }}>Will you be my Galentine? 🌹</h1>
```

### 3. **Add Your Image**

1. Add your images to the `public/` folder
2. Name them: `memory1.jpg`, `memory2.jpg`, etc.
3. Update paths in `Memories.jsx`:
```javascript
   img: "/memory1.jpg"
```

**Free image resources:**
- [Freepik](https://www.freepik.com)
- [Flaticon](https://www.flaticon.com)
- [Pngtree](https://pngtree.com)


### 4. **Customize GIFs**

**Crying Cat (Ask page)** - Line 51 in `Ask.jsx`:
```javascript
src="https://media1.tenor.com/m/vTD78ehLKFMAAAAd/sad-cat.gif"
```

**Kissing Cat (Success page)** - Line 24 in `Success.jsx`:
```javascript
src="https://media1.tenor.com/m/hzHq0f829b4AAAAd/cat-kiss.gif"
```

Find GIFs on:
- [Tenor](https://tenor.com)
- [Giphy](https://giphy.com)

### 5. **Change Button Text**

**"No" button variations** in `Ask.jsx` (lines 9-11):
```javascript
const noTexts = [
  "Are you sure?", 
  "Please?", 
  "Don't do this!", 
  "I'll cry...", 
  "Click Yes!", 
  "Try again!"
];
```
Add your own funny/cute messages!
---

## Deployment

1. **Build your project**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Go to [Netlify](https://www.netlify.com/)
   - Sign up/Login with GitHub
   - Click "Add new site" → "Import an existing project"
   - Choose your GitHub repository
   - Build settings:
     - **Build command:** `npm run build`
     - **Publish directory:** `dist`
   - Click "Deploy site"

Your site will be live in 1-2 minutes! 🎉

---


## Usage Ideas

This template is perfect for:
- 💕 **Valentine's Day** proposals
- 💖 **Galentine's Day** celebrations with best friends
- 🌹 **Anniversary** surprises
- 💝 **Birthday** greetings
- 🎂 **Special occasions** to show appreciation
- 💌 **Long-distance** relationship gestures

---

## Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## Show Your Support

If you like this template, please give it a ⭐️ on GitHub!

---

## 📧 Contact

**Sandhya Shiwakoti**
- GitHub: [@sandhyashiwakoti](https://github.com/sandhyashiwakoti)
- Project Link: [https://github.com/sandhyashiwakoti/galentines-valentines-template](https://github.com/sandhyashiwakoti/galentines-valentines-template)

---

<div align="center">

**Made with 💖 and lots of ☕**

*Give someone a reason to smile today!* 🌹

</div>
