function enhanceText() {
    const input = document.getElementById("textInput").value;

    if (!input) {
        alert("Please enter a prompt");
        return;
    }

    // Fake enhanced text (demo purpose)
    const enhanced = "High quality, detailed image of: " + input + ", 4k, realistic, cinematic lighting";

    document.getElementById("outputText").innerText = enhanced;
}

function generateImage() {
    const text = document.getElementById("outputText").innerText;

    if (!text) {
        alert("Enhance text first");
        return;
    }

    // Free image API (no key needed)
    const imageUrl = `https://source.unsplash.com/400x300/?${text}`;

    document.getElementById("outputImage").src = imageUrl;
}

function analyzeImage() {
    const fileInput = document.getElementById("imageInput");

    if (fileInput.files.length === 0) {
        alert("Upload an image first");
        return;
    }

    // Fake analysis (demo)
    document.getElementById("analysisResult").innerText =
        "Detected: Object, Nature, Outdoor scene. Style: Realistic. Caption: A beautiful uploaded image.";
}