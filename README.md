# 🎓 EduTrip - Educational Travel Planner

A beautiful, modern web application for planning educational trips across India. Built with React and designed for schools, colleges, and educational institutions.

![EduTrip Banner](https://img.shields.io/badge/EduTrip-Educational%20Travel-667eea?style=for-the-badge)
![React](https://img.shields.io/badge/React-18.2.0-61dafb?style=for-the-badge&logo=react)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

## ✨ Features

### 🎨 Modern UI/UX
- **Interactive Hero Section** with dropdown menus and floating cards
- **Netflix-style Infinite Carousels** for bus services and additional services
- **Professional Trip Modals** with detailed information
- **Toast Notifications** for user feedback
- **Collapsible Sidebar** with Miro-inspired design
- **Responsive Design** for all devices

### 🚌 Services
- **Trip Categories**: Nature, History, Culture, Science, Adventure, Beach, Wildlife
- **Bus Services**: Luxury coaches, semi-sleepers, mini buses, and more
- **Additional Services**: Hotels, guides, meals, tickets, insurance, photography

### 📍 Destinations
- **28+ States Covered** across India
- **500+ Destinations** from mountains to beaches
- **Famous Places**: Taj Mahal, Jaipur, Kerala Backwaters, Uttarakhand Hills, and more

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/YOUR_USERNAME/edutrip.git
cd edutrip
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm start
```

4. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## 🌐 Deployment

### Deploy to Netlify (Recommended)

#### Quick Deploy (Drag & Drop)
1. Run `npm run build`
2. Go to [Netlify Drop](https://app.netlify.com/drop)
3. Drag the `build` folder
4. Done! 🎉

#### Continuous Deployment (Git)
1. Push to GitHub
2. Connect repository in Netlify
3. Automatic deployments on every push

See [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) for detailed instructions.

## 🏗️ Project Structure

```
EduTrip/
├── public/                 # Static files
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── components/        # React components
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Sidebar.jsx
│   │   ├── TripCard.jsx
│   │   ├── TripModal.jsx
│   │   ├── ConfirmationModal.jsx
│   │   ├── Toast.jsx
│   │   ├── BusServices.jsx
│   │   ├── OtherServices.jsx
│   │   └── InfiniteCarousel.jsx
│   ├── pages/             # Page components
│   │   ├── HomePage.jsx
│   │   ├── TripsPage.jsx
│   │   ├── DestinationsPage.jsx
│   │   └── AboutPage.jsx
│   ├── hooks/             # Custom React hooks
│   │   ├── useTrips.jsx
│   │   ├── useModal.jsx
│   │   ├── useNavigation.jsx
│   │   ├── useToast.jsx
│   │   └── useClickOutside.jsx
│   ├── utils/             # Utility functions
│   │   ├── index.js
│   │   └── eventBus.jsx
│   ├── constants/         # App constants
│   │   └── index.js
│   ├── data/              # JSON data
│   │   ├── trips.json
│   │   ├── destinations.json
│   │   ├── busServices.json
│   │   └── otherServices.json
│   ├── styles/            # Global styles
│   │   ├── index.css
│   │   └── App.css
│   ├── App.jsx            # Main App component
│   └── index.js           # Entry point
├── .gitignore
├── .gitattributes
├── netlify.toml           # Netlify configuration
├── package.json
├── DEPLOYMENT_GUIDE.md
└── README.md
```

## 🎨 Tech Stack

- **Frontend Framework**: React 18.2.0
- **Styling**: CSS3 with custom properties
- **Icons**: Font Awesome
- **Build Tool**: Create React App
- **Deployment**: Netlify
- **Version Control**: Git

## 🛠️ Development

### Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App (one-way operation)

### Code Style

- **Component Structure**: Functional components with hooks
- **File Extensions**: `.jsx` for React components, `.js` for utilities
- **Naming Convention**: PascalCase for components, camelCase for functions
- **Design Principles**: SOLID principles followed throughout

## 🎯 Key Features Explained

### Interactive Dropdowns
Hover or click on "Explore Trips" and "View Destinations" buttons to see categorized options.

### Infinite Carousels
Netflix-style auto-scrolling carousels for bus services and additional services. Pause on hover.

### Click-Outside Behavior
All modals, dropdowns, and sidebars close automatically when clicking outside or pressing ESC.

### Toast Notifications
Beautiful toast notifications for booking confirmations and user actions.

### Responsive Sidebar
Collapsible sidebar with icon-only mode. Automatically adjusts content margin.

## 🌟 Highlights

- ✅ **100% Responsive** - Works on mobile, tablet, and desktop
- ✅ **Modern Animations** - Smooth transitions and effects
- ✅ **Accessible** - Keyboard navigation support
- ✅ **Fast Loading** - Optimized performance
- ✅ **SEO Friendly** - Proper meta tags and structure
- ✅ **Production Ready** - Tested and deployment-ready

## 📸 Screenshots

### Home Page
Beautiful hero section with interactive elements and statistics.

### Trips Page
Filterable trip cards with categories and detailed modals.

### Services
Infinite scrolling carousels showcasing bus services and additional offerings.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Author

**EduTrip Team**

## 🙏 Acknowledgments

- Font Awesome for icons
- React community for amazing tools
- Netlify for hosting platform
- All contributors and testers

## 📧 Contact

For queries and support:
- 📧 Email: info@edutrip.com
- 📞 Phone: +91 (555) 123-4567

---

Made with ❤️ for educational institutions across India

**⭐ Star this repo if you found it helpful!**
