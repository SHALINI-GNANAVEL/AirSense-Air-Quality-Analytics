# 🌿 AirSense – Air Quality Prediction & Environmental Analytics

AirSense is a machine learning-based web application that analyzes air pollution measurements and predicts the corresponding air quality category.

The application provides an interactive dashboard where users can enter pollutant values and receive an air quality prediction along with the model's confidence score.

## 🚀 Live Demo

[Open AirSense Live Demo](https://airsense-air-quality-analytics.onrender.com)

## 💻 GitHub Repository

[View Source Code](https://github.com/SHALINI-GNANAVEL/AirSense-Air-Quality-Analytics)

---

## 📌 Project Overview

Air pollution is influenced by multiple pollutants such as particulate matter, nitrogen dioxide, sulfur dioxide, carbon monoxide, and ozone.

AirSense uses a **Random Forest Classification model** to analyze multiple pollutant measurements and classify air quality into four categories:

- 🟢 Good
- 🟡 Moderate
- 🟠 Unhealthy
- 🔴 Hazardous

The machine learning model is integrated with a Flask web application to provide predictions through an interactive dashboard.

---

## ✨ Features

- 🌫️ Air quality prediction
- 🤖 Random Forest machine learning model
- 📊 Prediction confidence score
- 🧪 Six pollutant inputs
- 📋 Prediction history
- 🗑️ Clear prediction history
- 📱 Responsive web interface
- 🌐 Live web deployment
- 💻 Interactive dashboard
- 📚 Pollutant information section

---

## 🧪 Pollutants Monitored

| Pollutant | Description |
|-----------|-------------|
| PM2.5 | Fine particulate matter |
| PM10 | Particulate matter with larger airborne particles |
| NO₂ | Nitrogen dioxide |
| SO₂ | Sulfur dioxide |
| CO | Carbon monoxide |
| O₃ | Ground-level ozone |

---

## 🤖 Machine Learning

### Algorithm

**Random Forest Classifier**

The model uses the following input features:

```text
PM2.5
PM10
NO2
SO2
CO
O3