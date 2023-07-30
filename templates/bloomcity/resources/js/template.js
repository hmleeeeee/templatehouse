/* ========== */
/* Temha */
(function () {
  // Body
  document.body.addEventListener("click", () => {
    document
      .querySelectorAll(".dropset")
      .forEach((element) => element.classList.remove("active"));
    document
      .querySelectorAll(".selectset")
      .forEach((element) => element.classList.remove("active"));
  });

  // Tabset
  const tabsetLink = document.querySelectorAll(".tabset-link");
  tabsetLink.forEach((buttonElement) => {
    const clickEventHandler = (event) => {
      event.stopPropagation();
      const button = event.target.closest(".tabset-link");
      const buttonGrandParent = button.closest(".tabset-list");
      const buttonParent = button.closest(".tabset-item");
      const buttonParentSiblings = getSiblings(buttonGrandParent, buttonParent);
      const buttonParentIndex = getIndex(buttonParent);
      const itemTabsetContainer = button
        .closest(".tabset")
        .querySelector(".tabset-container");
      buttonParentSiblings.forEach((siblingElement) => {
        siblingElement.querySelector(".tabset-link").classList.remove("active");
      });
      button.classList.add("active");
      if (itemTabsetContainer) {
        itemTabsetContainer
          .querySelectorAll(".tabset-cont")
          .forEach((contElement) => {
            const contElementIndex = getIndex(contElement);
            contElement.classList.remove("active");
            if (contElementIndex === buttonParentIndex) {
              contElement.classList.add("active");
            }
          });
      }
    };
    buttonElement.removeEventListener("click", clickEventHandler);
    buttonElement.addEventListener("click", clickEventHandler);
  });

  // Selectset
  const selectsetToggle = document.querySelectorAll(".selectset-toggle");
  const selectsetLink = document.querySelectorAll(".selectset-link");
  selectsetToggle.forEach((buttonElement) => {
    const clickEventHandler = (event) => {
      event.stopPropagation();
      const button = event.target.closest(".selectset-toggle");
      const buttonParent = button.closest(".selectset");
      buttonParent.classList.toggle("active");
    };
    buttonElement.removeEventListener("click", clickEventHandler);
    buttonElement.addEventListener("click", clickEventHandler);
  });
  selectsetLink.forEach((buttonElement) => {
    const clickEventHandler = (event) => {
      event.stopPropagation();
      const button = event.target.closest(".selectset-link");
      const buttonText = button.querySelector("span").innerHTML;
      const buttonGrandParent = button.closest(".selectset-list");
      const buttonParent = button.closest(".selectset-item");
      const buttonParentSiblings = getSiblings(buttonGrandParent, buttonParent);
      const buttonSelectsetToggle = button
        .closest(".selectset")
        .querySelector(".selectset-toggle");
      buttonParentSiblings.forEach((siblingElement) => {
        siblingElement.querySelector(".selectset-link").classList.remove("on");
      });
      button.classList.toggle("on");
      buttonSelectsetToggle.querySelector("span").innerHTML = buttonText;
    };
    buttonElement.removeEventListener("click", clickEventHandler);
    buttonElement.addEventListener("click", clickEventHandler);
  });

  // Dropset
  const dropsetToggle = document.querySelectorAll(".dropset-toggle");
  dropsetToggle.forEach((buttonElement) => {
    const clickEventHandler = (event) => {
      event.stopPropagation();
      const button = event.target.closest(".dropset-toggle");
      const buttonParent = button.closest(".dropset");
      buttonParent.classList.toggle("active");
    };
    buttonElement.removeEventListener("click", clickEventHandler);
    buttonElement.addEventListener("click", clickEventHandler);
  });

  // Accordset
  const accordsetButton = document.querySelectorAll(".accordset-button");
  accordsetButton.forEach((buttonElement) => {
    const clickEventHandler = (event) => {
      const button = event.target.closest(".accordset-button");
      const buttonGrandParent = button.closest(".accordset");
      const buttonParent = button.closest(".accordset-item");
      const buttonParentSiblings = getSiblings(buttonGrandParent, buttonParent);
      buttonParentSiblings.forEach((siblingElement) => {
        siblingElement.classList.remove("active");
      });
      buttonParent.classList.toggle("active");
    };
    buttonElement.removeEventListener("click", clickEventHandler);
    buttonElement.addEventListener("click", clickEventHandler);
  });

  // Toast
  const toastClose = document.querySelectorAll(".toastset-close");
  toastClose.forEach((buttonElement) => {
    const clickEventHandler = (event) => {
      const button = event.target.closest(".toastset-close");
      const buttonGrandParent = button.closest(".toastset");
      buttonGrandParent.remove();
    };
    buttonElement.removeEventListener("click", clickEventHandler);
    buttonElement.addEventListener("click", clickEventHandler);
  });

  // Tooltip
  const btnTooltipset = document.querySelectorAll(".btn-tooltipset");
  if (btnTooltipset) {
    btnTooltipset.forEach((element) => {
      const mouseroverEventHandler = () => {
        const data = element.dataset;
        const type = data.tooltipType;
        const color = data.tooltipColor;
        const place = data.tooltipPlace;
        const title = data.tooltipTitle;
        const text = data.tooltipText;
        const image = data.tooltipImage;
        const position = element.getBoundingClientRect();
        const width = position.width;
        const height = position.height;
        const startX = position.x;
        const startY = position.y;
        const midX = startX + width / 2;
        const midY = startY + height / 2;
        const endX = position.right;
        const endY = position.bottom;
        let html = "";
        if (type === "guide") {
          html += `<div class="tooltipset tooltipset-title tooltipset-arrow tooltipset-${color} tooltipset-${place}">`;
        }
        if (type === "tip") {
          html += `<div class="tooltipset tooltipset-arrow tooltipset-${color} tooltipset-${place}">`;
        }
        if (type === "name") {
          html += `<div class="tooltipset tooltipset-name tooltipset-${color} tooltipset-${place}">`;
        }
        if (type === "image") {
          html += `<div class="tooltipset tooltipset-name tooltipset-${color} tooltipset-${place}">`;
        }
        if (type === "bubble") {
          html += `<div class="tooltipset tooltipset-arrow tooltipset-${color} tooltipset-${place} tooltipset-dist">`;
        }
        if (type === "round") {
          html += `<div class="tooltipset tooltipset-arrow tooltipset-${color} tooltipset-${place} tooltipset-round">`;
        }
        html += `<div class="tooltipset-container">`;
        if (type === "image") {
          html += `<div class="tooltipset-group tooltipset-img-group">`;
          html += `<figure class="tooltipset-figure">`;
          html += `<img class="tooltipset-img" src="${image}" alt="${text}">`;
          html += `</figure>`;
        } else {
          html += `<div class="tooltipset-group">`;
        }
        if (type === "guide") {
          html += `<h2 class="tooltipset-tit">${title}</h2>`;
        }
        html += `<p class="tooltipset-text">${text}</p>`;
        html += `</div>`;
        html += `</div>`;
        html += `</div>`;
        const dom = new DOMParser().parseFromString(html, "text/html");
        document.body.append(dom.body.querySelector(".tooltipset"));
        const tooltipset = document.querySelector(".tooltipset");
        const tooltipsetClassList = [...tooltipset.classList];
        const tooltipsetStyle = tooltipset.style;
        if (tooltipsetClassList.includes("tooltipset-top")) {
          tooltipsetStyle.left = midX + "px";
          tooltipsetStyle.top = startY - 5 + "px";
          tooltipsetStyle.transform = "translate(-50%, calc(-100% - 10px))";
        } else if (tooltipsetClassList.includes("tooltipset-bottom")) {
          tooltipsetStyle.left = midX + "px";
          tooltipsetStyle.top = endY + 5 + "px";
          tooltipsetStyle.transform = "translate(-50%, 10px)";
        } else if (tooltipsetClassList.includes("tooltipset-left")) {
          tooltipsetStyle.left = startX - 5 + "px";
          tooltipsetStyle.top = midY + "px";
          tooltipsetStyle.transform = "translate(calc(-100% - 10px), -50%)";
        } else if (tooltipsetClassList.includes("tooltipset-right")) {
          tooltipsetStyle.left = endX + 5 + "px";
          tooltipsetStyle.top = midY + "px";
          tooltipsetStyle.transform = "translate(10px, -50%)";
        }
        document
          .querySelectorAll(".tooltipset")
          .forEach((element, index) => index !== 0 && element.remove());
      };
      const clickEventHandler = () =>
        document
          .querySelectorAll(".tooltipset")
          .forEach((element) => element.remove());
      element.removeEventListener("mouseover", mouseroverEventHandler);
      element.addEventListener("mouseover", mouseroverEventHandler);
      element.removeEventListener("click", clickEventHandler);
      element.addEventListener("click", clickEventHandler);
    });
  }
  const mouseoutEventHandler = () =>
    document
      .querySelectorAll(".tooltipset")
      .forEach((element) => element.remove());
  document.removeEventListener("mouseout", mouseoutEventHandler);
  document.addEventListener("mouseout", mouseoutEventHandler);

  // Function
  function getSiblings(parent, element) {
    return [...parent.children].filter((item) => item !== element);
  }
  function getIndex(element) {
    return [...element.parentNode.children].indexOf(element);
  }
})();
