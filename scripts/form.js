// Populate the "Product Name" select options from the shared products data.
// A callback is used to decouple option creation from how each option gets
// attached to the DOM (demonstrates the callback function pattern).
function createProductOption(product) {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    return option;
}

function populateProductOptions(productList, appendOption) {
    productList.forEach((product) => {
        appendOption(createProductOption(product));
    });
}

const productSelect = document.querySelector("#productName");

if (productSelect) {
    populateProductOptions(products, (option) => productSelect.appendChild(option));
}

// Prevent users from picking an installation date in the future.
const installDateInput = document.querySelector("#installDate");

if (installDateInput) {
    installDateInput.setAttribute("max", new Date().toISOString().split("T")[0]);
}
