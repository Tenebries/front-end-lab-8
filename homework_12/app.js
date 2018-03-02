let rootNode = document.getElementById(`root`);

createElement = (name, className, text) => {
    let element = document.createElement(name);

    if (className) {
        element.className = className;
    }
    if (text) {
        element.textContent = text;
    }

    return element;
};

let container = createElement(`div`);
rootNode.appendChild(container);

let headline = createElement(`h1`, ``, `Most popular tanks`);
container.appendChild(headline);

let tanksContainer = createElement(`div`, `tanksContainer`);
container.appendChild(tanksContainer);

displayTanks = () => {
    for (let key in tanks) {
        let tankElement = createElement(`a`);
        tankElement.setAttribute(`href`, (`#` + tanks[key].model.replace(/ /gi, `_`).toLowerCase()));
        tanksContainer.appendChild(tankElement);

        let tankContainer = createElement(`div`, `boardTanks`);
        tankContainer.setAttribute(`title`, `Click to details`);
        tankElement.appendChild(tankContainer);

        let tankImage = createElement(`img`, `boardImg`);
        tankImage.setAttribute(`src`, tanks[key].preview);
        tankImage.setAttribute(`title`, tanks[key].model);
        tankContainer.appendChild(tankImage);

        let tankInfo = createElement(`div`, `boardDiv`);
        tankContainer.appendChild(tankInfo);

        let countryImage = createElement(`img`, `boardElement`);
        countryImage.setAttribute(`src`, tanks[key].country_image);
        countryImage.setAttribute(`title`, tanks[key].country);
        tankInfo.appendChild(countryImage);

        let tankLevel = createElement(`span`, `boardElement`, tanks[key].level);
        tankInfo.appendChild(tankLevel);

        const trimmingTitles = (string, stringLength) => {
            const truncationString = string.substring(0, stringLength);
            return string.length > stringLength ? `${truncationString}...` : string;
        };

        let tankModel = createElement(`span`, `boardElement`, trimmingTitles(tanks[key].model.toUpperCase()), 14);
        tankInfo.appendChild(tankModel);
    }
};

const tanksContainerDetails = createElement(`div`);

detailsNode = () => {
    tanksContainerDetails.childNodes[0] ? tanksContainerDetails.removeChild(tanksContainerDetails.childNodes[0]) : null;
    const model = location.hash.slice(1);
    const tank = tanks.find((item) => item.model.replace(/ /gi, `_`).toLowerCase() === model ? item : null);

    const containerDetails = createElement(`div`);
    tanksContainerDetails.appendChild(containerDetails);

    const headlineDetails = createElement(`div`, `description`);
    containerDetails.appendChild(headlineDetails);

    const countryImageDetails = createElement(`img`);
    countryImageDetails.setAttribute(`src`, tank.country_image);
    countryImageDetails.setAttribute(`title`, tank.country);
    headlineDetails.appendChild(countryImageDetails);

    const titleDetails = createElement(`h1`, ``, `${tank.model.toUpperCase()} (level ${tank.level})`);
    headlineDetails.appendChild(titleDetails);

    const contentDetails = createElement(`div`, `container-grid`);
    containerDetails.appendChild(contentDetails);

    const tankImageDetails = createElement(`div`);
    contentDetails.appendChild(tankImageDetails);

    const tankPreviewDetails = createElement(`h2`, ``, `Preview`);
    tankImageDetails.appendChild(tankPreviewDetails);

    const imageTank = createElement(`img`);
    imageTank.setAttribute(`src`, tank.preview);
    tankImageDetails.appendChild(imageTank);

    const backToList = createElement(`a`, `backToList`, `Back to list view`);
    backToList.setAttribute(`href`, ``);
    tankImageDetails.appendChild(backToList);

    const tableDetails = createElement(`table`);

    const caption = createElement(`caption`, ``, `Characteristic`);
    tableDetails.appendChild(caption);

    for (let key in tank.details) {
        const tr = createElement(`tr`);
        tableDetails.appendChild(tr);

        const tdKey = createElement(`td`, ``, key.replace(/_/gi, " "));
        tr.appendChild(tdKey);

        const tdValue = createElement(`td`, ``,tank.details[key]);
        tr.appendChild(tdValue);
    }

    contentDetails.appendChild(tableDetails);
    rootNode.replaceChild(tanksContainerDetails, container);
};

!location.hash ? displayTanks(tanks) : detailsNode();

window.addEventListener('hashchange', () => {
        if (location.hash) {
            detailsNode();
        } else {
            !tanksContainer.childNodes[0] ? displayTanks(tanks) : false;
            rootNode.replaceChild(container, tanksContainerDetails);
        }
    }
);