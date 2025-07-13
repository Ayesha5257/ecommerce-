export function showToast(operation, id) {
    const toast = document.createElement("div");
    toast.classList.add("toast");
    if (operation === "add") {
        toast.textContent = `product with ID ${id} has been add.`;
    } else {
        toast.textContent = `product with ID ${id} has been remove.`;
    }
    document.body.appendChild(toast);
    setTimeout(() => {
        toast.remove();
    }, 2000);
}
