    let heartCount = 0;
    let coinCount = 100;
    let copyCount = 0;

    const heartCountEl = document.getElementById("heartCount");
    const coinCountEl = document.getElementById("coinCount");
    const copyCountEl = document.getElementById("copyCount");
    const historyList = document.getElementById("historyList");
    const clearHistory = document.getElementById("clearHistory");

    // Heart functionality
    document.querySelectorAll(".heartBtn").forEach(btn => {
      btn.addEventListener("click", () => {
        heartCount++;
        heartCountEl.textContent = heartCount;
      });
    });

    // Copy functionality
    document.querySelectorAll(".copyBtn").forEach(btn => {
      btn.addEventListener("click", (e) => {
        const number = e.target.closest(".bg-white").querySelector("p.text-2xl").textContent;
        navigator.clipboard.writeText(number);
        copyCount++;
        copyCountEl.textContent = copyCount;
        alert("Number copied: " + number);
      });
    });

    
    // Call functionality with time
  document.querySelectorAll(".callBtn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const service = e.target.dataset.service;
      const number = e.target.dataset.number;

      if (coinCount < 20) {
        alert("Not enough coins to make a call!");
        return;
      }

      coinCount -= 20;
      coinCountEl.textContent = coinCount;

      // Get current time
      const now = new Date();
      let hours = now.getHours();
      const minutes = now.getMinutes().toString().padStart(2, "0");
      const seconds = now.getSeconds().toString().padStart(2, "0");
      const ampm = hours >= 12 ? "PM" : "AM";
      hours = hours % 12 || 12; // convert to 12-hour format
      const timeStr = `${hours}:${minutes}:${seconds} ${ampm}`;

      alert(`Calling ${service} at ${number}`);

      const li = document.createElement("li");
      li.innerHTML = `<strong>${service}</strong> - ${number} <br>
                      <span class="text-xs text-gray-500">${timeStr}</span>`;
      historyList.appendChild(li);
    });
  });

    // Clear history
    clearHistory.addEventListener("click", () => {
      historyList.innerHTML = "";
    });
  
