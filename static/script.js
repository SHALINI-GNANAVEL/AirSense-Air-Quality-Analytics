function predictAirQuality() {

    const pm25 = document.getElementById("pm25").value;
    const pm10 = document.getElementById("pm10").value;
    const no2 = document.getElementById("no2").value;
    const so2 = document.getElementById("so2").value;
    const co = document.getElementById("co").value;
    const o3 = document.getElementById("o3").value;

    if (!pm25 || !pm10 || !no2 || !so2 || !co || !o3) {
        alert("Please enter all pollution values.");
        return;
    }

    const button = document.querySelector(".prediction-card button");

    button.innerText = "Analyzing...";
    button.disabled = true;

    fetch("/predict", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({

            pm25: parseFloat(pm25),
            pm10: parseFloat(pm10),
            no2: parseFloat(no2),
            so2: parseFloat(so2),
            co: parseFloat(co),
            o3: parseFloat(o3)

        })

    })

    .then(response => {

        if (!response.ok) {
            throw new Error("Server error");
        }

        return response.json();

    })

    .then(data => {

        const categoryElement =
            document.getElementById("category");

        const confidenceElement =
            document.getElementById("confidence");


        // Display result

        categoryElement.innerText =
            data.category;

        confidenceElement.innerText =
            data.confidence + "%";


        // Change category color

        if (data.category === "Good") {

            categoryElement.style.color =
                "#4ade80";

        }

        else if (data.category === "Moderate") {

            categoryElement.style.color =
                "#facc15";

        }

        else if (data.category === "Unhealthy") {

            categoryElement.style.color =
                "#fb923c";

        }

        else if (data.category === "Hazardous") {

            categoryElement.style.color =
                "#f87171";

        }


        // Add prediction to history

        addToHistory(
            pm25,
            pm10,
            data.category,
            data.confidence
        );


        button.innerText =
            "Predict Again";

        button.disabled = false;

    })

    .catch(error => {

        console.error(error);

        alert(
            "Unable to predict air quality. Please try again."
        );

        button.innerText =
            "Predict Air Quality";

        button.disabled = false;

    });

}


/* ADD TO HISTORY */

function addToHistory(
    pm25,
    pm10,
    category,
    confidence
) {

    const table =
        document.getElementById("historyTable");


    // Remove empty message

    if (
        table.innerText.includes(
            "No predictions yet"
        )
    ) {

        table.innerHTML = "";

    }


    // Create row

    const row =
        document.createElement("tr");


    row.innerHTML = `

        <td>${pm25}</td>

        <td>${pm10}</td>

        <td>${category}</td>

        <td>${confidence}%</td>

    `;


    // Put newest prediction first

    table.prepend(row);

}


/* CLEAR HISTORY */

function clearHistory() {

    const table =
        document.getElementById("historyTable");


    table.innerHTML = `

        <tr>

            <td colspan="4">
                No predictions yet
            </td>

        </tr>

    `;

}