# DeFiGuard AI - Liquidity Guardian

A sophisticated DeFi monitoring dashboard with real-time risk detection, whale tracking, and liquidity protection features.

## 🚀 Features

- **Real-time Monitoring**: Live transaction tracking and whale activity detection
- **LP Token Tracker**: Monitor liquidity positions and yield optimization
- **Staking Pools**: Track staking rewards with OpBNB integration
- **Risk Assessment**: AI-powered risk scoring and alerts
- **Mobile Responsive**: Optimized for all devices
- **Wallet Integration**: Connect and manage your crypto wallet

## 📁 Project Structure

```
defi/
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # All CSS styles
├── js/
│   └── main.js         # JavaScript functionality
└── README.md           # Project documentation
```

## 🛠️ Installation & Setup

1. **Clone or download** the project files to your local machine
2. **Open** `index.html` in your web browser
3. **No build process required** - it's a static web application

### Alternative Setup Methods:

#### Using Live Server (VS Code):
1. Install the "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

#### Using Python HTTP Server:
```bash
# Navigate to the project directory
cd defi

# Python 3
python -m http.server 8000

# Then open http://localhost:8000 in your browser
```

#### Using Node.js HTTP Server:
```bash
# Install http-server globally
npm install -g http-server

# Navigate to project directory and start server
cd defi
http-server

# Open the provided localhost URL in your browser
```

## 🎮 Usage

### Navigation
- Use the top navigation bar to switch between different pages
- **Dashboard**: Overview of system status and monitoring
- **Live Monitoring**: Real-time whale alerts and transaction tracking
- **LP Tracker**: Monitor your liquidity provider positions
- **Staking**: View and manage staking pools
- **Alerts**: Security notifications and system alerts
- **Analytics**: Performance metrics (coming soon)
- **Settings**: Configure protection parameters

### Wallet Connection
1. Click the "Connect Wallet" button in the top-right corner
2. The app will simulate wallet connection (demo mode)
3. Once connected, you'll see your wallet address displayed

### Features Overview

#### Dashboard
- System uptime and status
- Protected assets value
- Current risk level assessment
- Recent transaction monitoring
- Pool health status

#### Live Monitoring
- Real-time whale activity alerts
- Suspicious transaction pattern detection
- OpBNB network statistics
- Live event stream

#### LP Tracker
- Yield optimization recommendations
- LP token position tracking
- Lock status monitoring
- Harvest and manage rewards

#### Staking
- Multiple staking pool options
- APY tracking and optimization
- Gas fee savings with OpBNB
- Flexible and locked staking options

## 🎨 Customization

### Modifying Styles
Edit `css/styles.css` to customize:
- Color schemes and themes
- Layout and spacing
- Responsive breakpoints
- Animations and effects

### Adding Functionality
Extend `js/main.js` to add:
- New interactive features
- API integrations
- Additional wallet providers
- Custom analytics

### Content Updates
Modify `index.html` to:
- Add new pages or sections
- Update text content
- Integrate with external services
- Add new components

## 🔧 Technical Details

### Built With
- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with gradients, animations, and grid layouts
- **Vanilla JavaScript**: No external dependencies for core functionality
- **Responsive Design**: Mobile-first approach with CSS Grid and Flexbox

### Browser Compatibility
- Chrome 70+
- Firefox 65+
- Safari 12+
- Edge 79+

### Performance Features
- Optimized CSS with efficient selectors
- Minimal JavaScript bundle
- Lazy loading animations
- Responsive images and layouts

## 🚀 Deployment Options

### GitHub Pages (Recommended)
**This project is ready for GitHub Pages deployment!**

1. **Repository is already set up**: `https://github.com/bhavya1006/defi_guadian`
2. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Click on **Settings** tab
   - Scroll down to **Pages** section
   - Under **Source**, select **Deploy from a branch**
   - Choose **main** branch and **/ (root)** folder
   - Click **Save**
3. **Your site will be live at**: `https://bhavya1006.github.io/defi_guadian/`
4. **Deployment time**: Usually takes 2-10 minutes for the first deployment

**Live URL**: Once deployed, your DeFiGuard AI app will be accessible at:
`https://bhavya1006.github.io/defi_guadian/`

### Netlify
1. Drag and drop the `defi` folder to [Netlify](https://netlify.com)
2. Your site will be live instantly with a custom URL

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the project directory
3. Follow the prompts to deploy

## 🔮 Future Enhancements

- [ ] Real blockchain integration (Web3.js/Ethers.js)
- [ ] Chart.js integration for analytics
- [ ] Telegram bot notifications
- [ ] Multi-chain support (Ethereum, Polygon, BSC)
- [ ] Advanced filtering and search
- [ ] Portfolio tracking
- [ ] DeFi protocol integrations

## 📱 Mobile Features

- Touch-friendly navigation
- Responsive grid layouts
- Optimized mobile menu
- Gesture support for interactions
- Mobile wallet integration ready

## 🛡️ Security Features

- Client-side only (no server required)
- No sensitive data storage
- Secure wallet connection simulation
- Input validation and sanitization

## 📞 Support

For questions, suggestions, or issues:
1. Check the browser console for any error messages
2. Ensure all files are in the correct directory structure
3. Verify that JavaScript is enabled in your browser

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Happy DeFi monitoring! 🛡️**
