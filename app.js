// Interactive Demo Script
const featureElements = document.querySelectorAll('.feature');
const demoInfo = document.querySelector('.demo-info p');

featureElements.forEach((feature) => {
    feature.addEventListener('mouseover', () => {
        if (feature.querySelector('h3').innerText === "Solar Efficiency") {
            demoInfo.innerText = "Explore how Backy's solar panel helps you charge your devices on the go.";
        } else if (feature.querySelector('h3').innerText === "Long Battery Life") {
            demoInfo.innerText = "Learn how Backy's long-lasting battery ensures you stay powered up.";
        } else if (feature.querySelector('h3').innerText === "Durability") {
            demoInfo.innerText = "Find out how Backy withstands the elements and keeps your devices safe.";
        }
    });

    feature.addEventListener('mouseout', () => {
        demoInfo.innerText = "Hover over the features above to learn more about each one!";
    });
});
