const menuItems = document.querySelectorAll(".menu-item");
const assetItems = document.querySelectorAll(".asset-item");

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    menuItems.forEach((entry) => entry.classList.remove("is-active"));
    item.classList.add("is-active");
  });
});

assetItems.forEach((asset) => {
  asset.addEventListener("click", () => {
    selectAsset(asset);
  });

  asset.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      selectAsset(asset);
    }
  });
});

function selectAsset(selected) {
  assetItems.forEach((entry) => entry.classList.remove("is-selected"));
  selected.classList.add("is-selected");

  const title = selected.querySelector("strong")?.textContent ?? "";
  const detailsCard = document.querySelector(".details-card .details-title");
  if (detailsCard) {
    detailsCard.textContent = title;
  }
}
