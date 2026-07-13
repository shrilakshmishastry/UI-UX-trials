const deleteButtons = document.getElementsByClassName("deleteBtn");

Array.from(deleteButtons).forEach((button) => {
  button.addEventListener("click", () => {
    const parentNode = button.parentNode;
    // parentNode.style.viewTransitionName = parentNode.id;
    if (!document.startViewTransition) {
      parentNode.style.display = "none";
      return;
    }
    document.startViewTransition(() => {
      button.parentNode.style.display = "none";
      //   parentNode.style.viewTransitionName = "";
    });
  });
});
