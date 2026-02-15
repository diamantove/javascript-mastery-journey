const btn = document.getElementById("animateBtn");
const bibizVideo = document.getElementById("video");

const sleep = ms => new Promise(r => setTimeout(r, ms));
let currentRotation = 0;

btn.addEventListener("click", async () => {

    const response = await fetch("./src/description.json");
    const data = await response.json();

    let bibizCount = Object.keys(data).length;

    bibizVideo.style.transition = "all 4s ease-in-out";
    bibizVideo.style.borderRadius = "100%";

    bibizVideo.style.width = "50px";
    bibizVideo.style.height = "50px";

    await sleep(2000);

    currentRotation += 1080;
    bibizVideo.style.transform = `rotate(${currentRotation}deg)`;

    for (let i = 15; i--; i < 5) {
        var randomNumber = Math.floor(Math.random() * (bibizCount - 1) + 1);

        bibizVideo.src = `./src/bibiz/${randomNumber}.webm`;
        bibizVideo.load();
        bibizVideo.play();

        await sleep(i * 25);
    }

    bibizVideo.style.borderRadius = "0%";

    bibizVideo.style.width = "300px";
    bibizVideo.style.height = "300px";

    const label = document.getElementById("description");

    if (label === null) {
        const label = document.createElement("label");

        label.textContent = data[randomNumber];
        label.setAttribute("id", "description");
        label.setAttribute("class", "alert alert-primary");
        label.setAttribute("role", "alert");

        document.getElementById("container").appendChild(label);
    }
    else {
        label.textContent = data[randomNumber];
    }

})