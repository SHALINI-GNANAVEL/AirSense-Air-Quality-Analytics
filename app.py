from flask import Flask, render_template, request, jsonify
import pandas as pd
import joblib

app = Flask(__name__)

# Load trained model
model = joblib.load("air_quality_model.pkl")
encoder = joblib.load("label_encoder.pkl")


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/predict", methods=["POST"])
def predict():
    data = request.get_json()

    values = pd.DataFrame([{
        "PM2.5": float(data["pm25"]),
        "PM10": float(data["pm10"]),
        "NO2": float(data["no2"]),
        "SO2": float(data["so2"]),
        "CO": float(data["co"]),
        "O3": float(data["o3"])
    }])

    prediction = model.predict(values)[0]
    category = encoder.inverse_transform([prediction])[0]

    probabilities = model.predict_proba(values)[0]
    confidence = max(probabilities) * 100

    return jsonify({
        "category": category,
        "confidence": round(confidence, 2)
    })


if __name__ == "__main__":
    app.run(debug=True)