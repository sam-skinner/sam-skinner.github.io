fetch("data.json")
  .then(res => res.json())
  .then(data => {
    data.forEach(elem => {
      const bar = document.querySelector(`#${elem.day} .bar`);
      bar.style.height = 0.15 * elem.amount + "rem";

      const tooltip = document.querySelector(`#${elem.day} .tooltip`);
      tooltip.textContent = "$" + elem.amount;
    });

    const currDay = document.querySelector(
      `.bar:nth-child(${new Date().getDay() + 1})`
    );
    const today = new Date()
      .toLocaleDateString("en-US", { weekday: "long" })
      .slice(0, 3)
      .toLowerCase();
    document.querySelector(`#${today} .bar`).setAttribute("data-max", "true");
  });
