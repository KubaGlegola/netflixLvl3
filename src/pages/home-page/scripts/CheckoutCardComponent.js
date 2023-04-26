export const CheckoutCardComponent = () => {
  let isLoading = false;
  const checkoutCardComponent = document.querySelector(
    ".checkout-card-component"
  );
  const confirmButton = checkoutCardComponent.querySelector(".button--primary");
  const cancelButton =
    checkoutCardComponent.querySelector(".button--secondary");

  confirmButton.addEventListener("click", () => {
    if (isLoading) {
      return;
    }
    confirmButton.setAttribute("data-loading", "1");
    isLoading = true;
    cancelButton.setAttribute("disabled", "disabled");
  });
};
