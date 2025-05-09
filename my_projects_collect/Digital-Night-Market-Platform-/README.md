<div align="center">

# Digital Night Market Platform 🌃

[English](#english) | [中文](README_zh.md)

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![WeChat Mini Program](https://img.shields.io/badge/WeChat-Mini%20Program-brightgreen)](WeChat%20Mini%20Program)
[![Web Platform](https://img.shields.io/badge/Web-Platform-orange)](Web)
[![Merchant Device](https://img.shields.io/badge/Merchant-Device-yellow)](UI-design-for-boothowners-master)

*A comprehensive digital solution revolutionizing traditional night markets* 🌙

[Features](#features) • [Architecture](#architecture) • [Getting Started](#getting-started) • [Documentation](#documentation) • [Contributing](#contributing)

</div>

## Features

### 🎯 Core Components

| Component | Description |
|-----------|-------------|
| 📱 WeChat Mini Program | Consumer-facing mobile application for browsing and ordering |
| 💻 Web Platform | Merchant management dashboard with analytics and inventory control |
| 🖥️ Merchant Device | Raspberry Pi-based touchscreen device for real-time order processing |

### 🚀 Key Features

- **Multi-Platform Integration**
  - Seamless synchronization across all platforms
  - Real-time data updates
  - Unified user experience

- **Smart Business Solutions**
  - AI-powered merchant matching
  - Dynamic pricing optimization
  - Real-time traffic management

- **Cultural Innovation**
  - Digital achievement system
  - Virtual community features
  - Local culture integration

## Architecture

```mermaid
graph TD
    A[WeChat Mini Program] --> D[Data Center]
    B[Web Platform] --> D
    C[Merchant Device] --> D
    D --> E[Business Logic]
    E --> F[Analytics Engine]
    E --> G[Payment System]
    E --> H[Social Features]
```

### 🏗️ Technical Stack

| Layer | Technologies |
|-------|--------------|
| Frontend | Vue.js, WeChat Mini Program |
| Backend | Node.js, Python |
| Database | Distributed Database |
| Device | Raspberry Pi, PyQt5 |

## Getting Started

### Prerequisites

```bash
# Node.js environment
node -v >= 14.0.0

# Python environment
python -v >= 3.8.0

# Package managers
npm install
pip install -r requirements.txt
```

### Installation

1. Clone the repository
```bash
git clone https://github.com/your-org/digital-night-market.git
cd digital-night-market
```

2. Set up each component:

```bash
# Web Platform
cd Web
npm install
npm run serve

# Mini Program
cd WeChat\ Mini\ Program
# Open with WeChat DevTools

# Merchant Device
cd UI-design-for-boothowners-master
pip install -r requirements.txt
python main.py
```

## Documentation

- [Platform Vision](Docs/platform_vision.md)
- [Web Platform Guide](Web/README_Web.md)
- [Mini Program Guide](WeChat%20Mini%20Program/README_WeChat_Mini_Program.md)
- [Merchant Device Manual](UI-design-for-boothowners-master/README_booth_device.md)

## Contributing

We welcome contributions! Please read our [Contributing Guidelines](CONTRIBUTING.md) before submitting a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

- Project Manager: [name@example.com](mailto:name@example.com)
- Technical Support: [support@example.com](mailto:support@example.com)

---

<div align="center">

Made with ❤️ by Digital Night Market Team

</div>
