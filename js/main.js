// DeFiGuard AI - Main JavaScript File

// Page Navigation
function showPage(pageId) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    
    // Show selected page
    document.getElementById(pageId).classList.add('active');
    
    // Update nav links
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => link.classList.remove('active'));
    event.target.classList.add('active');
}

// Toggle Switch Functionality
function toggleSwitch(element) {
    element.classList.toggle('active');
}

// Mobile Navigation
function toggleMobileNav() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('mobile-open');
}

// Wallet Connection Management
let isWalletConnected = false;

function toggleWallet() {
    const walletBtn = document.getElementById('walletBtn');
    const walletIcon = document.getElementById('walletIcon');
    const walletText = document.getElementById('walletText');
    
    if (!isWalletConnected) {
        // Simulate wallet connection
        setTimeout(() => {
            isWalletConnected = true;
            walletBtn.classList.add('connected');
            walletIcon.textContent = '✅';
            walletText.innerHTML = '<span class="wallet-address">0x1234...5678</span>';
            
            // Show connection success alert
            showWalletAlert('Wallet Connected Successfully!', 'success');
        }, 1000);
        
        // Show connecting state
        walletIcon.textContent = '⏳';
        walletText.textContent = 'Connecting...';
        
    } else {
        // Disconnect wallet
        isWalletConnected = false;
        walletBtn.classList.remove('connected');
        walletIcon.textContent = '🔗';
        walletText.textContent = 'Connect Wallet';
        showWalletAlert('Wallet Disconnected', 'info');
    }
}

// Show wallet alerts
function showWalletAlert(message, type) {
    const alert = document.createElement('div');
    alert.className = `wallet-alert alert-${type}`;
    alert.textContent = message;
    alert.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? 'rgba(34, 197, 94, 0.9)' : 'rgba(59, 130, 246, 0.9)'};
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        z-index: 1001;
        font-weight: bold;
        animation: slideIn 0.3s ease-out;
    `;
    
    document.body.appendChild(alert);
    
    setTimeout(() => {
        alert.style.animation = 'slideOut 0.3s ease-in forwards';
        setTimeout(() => alert.remove(), 300);
    }, 3000);
}

// Real-time Data Updates
function updateRealTimeData() {
    // Update risk scores
    const riskValue = document.querySelector('.status-value');
    if (riskValue && riskValue.textContent.includes('/100')) {
        const currentRisk = parseInt(riskValue.textContent);
        const newRisk = Math.max(15, Math.min(95, currentRisk + (Math.random() - 0.5) * 10));
        riskValue.textContent = Math.round(newRisk) + '/100';
        
        // Update risk badge based on new value
        const riskBadge = riskValue.closest('.status-card').querySelector('.status-badge');
        if (newRisk < 30) {
            riskBadge.className = 'status-badge status-safe';
            riskBadge.textContent = 'LOW';
        } else if (newRisk < 70) {
            riskBadge.className = 'status-badge status-warning';
            riskBadge.textContent = 'MEDIUM';
        } else {
            riskBadge.className = 'status-badge status-critical';
            riskBadge.textContent = 'HIGH';
        }
    }
    
    // Update transaction amounts
    updateTransactionAmounts();
    
    // Update protected assets
    updateProtectedAssets();
}

// Update transaction amounts in monitoring
function updateTransactionAmounts() {
    const transactionAmounts = document.querySelectorAll('.transaction-amount');
    transactionAmounts.forEach(amount => {
        if (amount.textContent.includes('$')) {
            const currentAmount = parseFloat(amount.textContent.replace(/[$,]/g, ''));
            if (!isNaN(currentAmount)) {
                const variation = (Math.random() - 0.5) * 0.1; // ±10% variation
                const newAmount = currentAmount * (1 + variation);
                const formatted = new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'USD',
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0
                }).format(newAmount);
                amount.textContent = amount.textContent.replace(/\$[\d,]+/, formatted);
            }
        }
    });
}

// Update protected assets value
function updateProtectedAssets() {
    const protectedAssetsCard = document.querySelector('.status-card .status-title');
    if (protectedAssetsCard && protectedAssetsCard.textContent === 'Protected Assets') {
        const valueElement = protectedAssetsCard.closest('.status-card').querySelector('.status-value');
        const currentValue = parseFloat(valueElement.textContent.replace(/[$M]/g, ''));
        const variation = (Math.random() - 0.5) * 0.02; // ±2% variation
        const newValue = currentValue * (1 + variation);
        valueElement.textContent = `$${newValue.toFixed(1)}M`;
    }
}

// Simulate live transaction feed
function simulateLiveTransactions() {
    const liveEventStream = document.querySelector('#monitoring .monitoring-card h3');
    if (liveEventStream && liveEventStream.textContent.includes('Live Event Stream')) {
        const container = liveEventStream.closest('.monitoring-card');
        const transactionItems = container.querySelectorAll('.transaction-item');
        
        // Update timestamps
        transactionItems.forEach((item, index) => {
            const amountElement = item.querySelector('.transaction-amount');
            if (amountElement.textContent.includes('sec ago')) {
                const seconds = Math.floor(Math.random() * 60) + 1;
                amountElement.textContent = amountElement.textContent.replace(/\d+ sec ago/, `${seconds} sec ago`);
            }
        });
    }
}

// Pool APY fluctuation
function updatePoolAPYs() {
    const apyElements = document.querySelectorAll('.pool-apy');
    apyElements.forEach(apy => {
        if (apy.textContent.includes('% APY')) {
            const currentAPY = parseFloat(apy.textContent.replace('% APY', ''));
            const variation = (Math.random() - 0.5) * 0.1; // ±10% variation
            const newAPY = Math.max(0.1, currentAPY * (1 + variation));
            apy.textContent = `${newAPY.toFixed(1)}% APY`;
        }
    });
}

// Whale alert simulation
function simulateWhaleAlert() {
    if (Math.random() < 0.1) { // 10% chance every update
        const whaleAlert = document.querySelector('.whale-alert');
        if (whaleAlert) {
            const amounts = ['$2.1M', '$1.8M', '$3.4M', '$950K', '$1.2M'];
            const randomAmount = amounts[Math.floor(Math.random() * amounts.length)];
            const amountElement = whaleAlert.querySelector('.whale-amount');
            if (amountElement) {
                amountElement.textContent = randomAmount;
                
                // Animate the alert
                whaleAlert.style.animation = 'none';
                setTimeout(() => {
                    whaleAlert.style.animation = 'alertPulse 2s infinite';
                }, 100);
            }
        }
    }
}

// Network stats updates for OpBNB
function updateNetworkStats() {
    const gasPrice = document.querySelector('#monitoring .transaction-hash');
    if (gasPrice && gasPrice.textContent === 'Gas Price') {
        const amountElement = gasPrice.closest('.transaction-item').querySelector('.transaction-amount');
        const baseFee = 0.001;
        const variation = (Math.random() - 0.5) * 0.0002; // Small variation
        const newFee = Math.max(0.0005, baseFee + variation);
        amountElement.textContent = `${newFee.toFixed(4)} Gwei (Ultra Low)`;
    }
}

// Initialize application
function initializeApp() {
    console.log('DeFiGuard AI - Liquidity Guardian Initialized');
    
    // Add alert styles for dynamic alerts
    if (!document.getElementById('alert-styles')) {
        const alertStyles = document.createElement('style');
        alertStyles.id = 'alert-styles';
        alertStyles.textContent = `
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            @keyframes slideOut {
                from { transform: translateX(0); opacity: 1; }
                to { transform: translateX(100%); opacity: 0; }
            }
        `;
        document.head.appendChild(alertStyles);
    }
    
    // Start real-time updates
    setInterval(() => {
        updateRealTimeData();
        simulateLiveTransactions();
        updatePoolAPYs();
        simulateWhaleAlert();
        updateNetworkStats();
    }, 5000);
    
    // More frequent updates for live monitoring
    setInterval(() => {
        if (document.getElementById('monitoring').classList.contains('active')) {
            simulateLiveTransactions();
        }
    }, 2000);
}

// Event Listeners
document.addEventListener('DOMContentLoaded', initializeApp);

// Handle escape key to close mobile nav
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        const mobileNav = document.querySelector('.nav-links.mobile-open');
        if (mobileNav) {
            mobileNav.classList.remove('mobile-open');
        }
    }
});

// Handle click outside mobile nav to close it
document.addEventListener('click', (event) => {
    const mobileNav = document.querySelector('.nav-links.mobile-open');
    const mobileToggle = document.querySelector('.mobile-nav-toggle');
    
    if (mobileNav && !mobileNav.contains(event.target) && !mobileToggle.contains(event.target)) {
        mobileNav.classList.remove('mobile-open');
    }
});

// Smooth scrolling for any internal links (if added in future)
document.addEventListener('click', (event) => {
    if (event.target.tagName === 'A' && event.target.getAttribute('href')?.startsWith('#')) {
        event.preventDefault();
        const targetId = event.target.getAttribute('href').slice(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
});

// Performance monitoring
function logPerformance() {
    if (performance.timing) {
        const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
        console.log(`Page load time: ${loadTime}ms`);
    }
}

// Call performance monitoring after page load
window.addEventListener('load', logPerformance);

// Export functions for potential use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        showPage,
        toggleSwitch,
        toggleMobileNav,
        toggleWallet,
        showWalletAlert,
        updateRealTimeData
    };
}
