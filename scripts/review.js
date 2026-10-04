// Reads the resolved product name, rating, date, features, review text, and
// reviewer name from the query string sent by form.html, then renders a
// confirmation summary and tracks how many reviews have been submitted.

function getReviewCount() {
    const stored = localStorage.getItem("reviewCount");
    return stored ? parseInt(stored, 10) : 0;
}

function incrementReviewCount() {
    const newCount = getReviewCount() + 1;
    localStorage.setItem("reviewCount", newCount);
    return newCount;
}

function formatInstallDate(dateString) {
    if (!dateString) {
        return "Not provided";
    }
    const [year, month, day] = dateString.split("-");
    const date = new Date(Number(year), Number(month) - 1, Number(day));
    return date.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

function renderStars(ratingValue) {
    const filled = parseInt(ratingValue, 10) || 0;
    return "\u2605".repeat(filled) + "\u2606".repeat(5 - filled);
}

const params = new URLSearchParams(window.location.search);
const productId = params.get("productName");
const matchedProduct = products.find((product) => product.id === productId);

const summarySection = document.querySelector("#reviewSummary");
const noDataMessage = document.querySelector("#noDataMessage");

if (matchedProduct) {
    const rating = params.get("rating");
    const installDate = params.get("installDate");
    const features = params.getAll("feature");
    const review = params.get("review");
    const username = params.get("username");

    document.querySelector("#productNameOut").textContent = matchedProduct.name;
    document.querySelector("#ratingOut").textContent = renderStars(rating);
    document.querySelector("#dateOut").textContent = formatInstallDate(installDate);
    document.querySelector("#featuresOut").textContent = features.length ? features.join(", ") : "None selected";
    document.querySelector("#reviewOut").textContent = review && review.trim() ? review : "No written review provided.";
    document.querySelector("#usernameOut").textContent = username && username.trim() ? username : "Anonymous";

    const count = incrementReviewCount();
    document.querySelector("#reviewCount").textContent = count;
} else {
    summarySection.hidden = true;
    noDataMessage.hidden = false;
    document.querySelector("#reviewCount").textContent = getReviewCount();
}
