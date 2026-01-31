# Altmetric Badge for Research Papers 🍩

## 📖 Introduction

This is a **Tampermonkey/Userscripts** user script that automatically displays the **Altmetric Badge** (the colorful donut) on major academic publisher websites.

It is designed to help researchers quickly assess the social impact, news coverage, and policy citations of a paper without leaving the page.

### Why this script?
* **WebVPN Support:** Compatible with university proxy systems (e.g., `webvpn.zju.edu.cn`).
* **Dual Versions:** Offers a specific version optimized for mainland China (CN) and a global version.

## ✨ Features

* **Broad Support:** Works on ScienceDirect, Nature, Wiley, Springer, IEEE, Taylor & Francis, Oxford Academic, PNAS, AAAS/Science, and more.
* **Smart Toggle:** A floating button sits in the bottom-right corner. Click to load.
* **No Google Requests (CN Version):** The CN version uses an embedded SVG Base64 icon, ensuring 100% visibility even without access to Google services.

## 📥 Installation

First, make sure you have installed a script manager like **Tampermonkey** (Chrome/Edge/Firefox) or **Userscripts** (Safari).

Then, choose the version that fits your network environment:

| Version | Description | Install |
| :--- | :--- | :--- |
| **CN Version** (Recommended for China) | 🇨🇳 **Best for Mainland China**. Uses embedded SVG icons. No external requests to Google. Fast & Reliable. | [Install CN Version](./Altmetric-Badge-CN.user.js) |
| **Global Version** (Recommended for Global) | 🌍 **Best for Global Users**. Fetches high-quality favicons from Google services. | [Install Global Version](./Altmetric-Badge-Global.user.js) |

*(Click the link above and your script manager should ask to install it automatically)*

## 🤖 Credits & Acknowledgements

This project was developed with the assistance of **Google Gemini**.
Gemini acted as a technical co-pilot, contributing to:
* **Compatibility:** Creating the Base64 SVG solution for network independence.
* **Documentation:** Drafting the release notes and documentation.

## ⚖️ Disclaimer

1.  **Unofficial Tool:** This script is an independent open-source project and is **not** affiliated with Altmetric LLP.
2.  **Data Source:** All data is fetched directly from Altmetric's public embed API.
3.  **License:** MIT License.