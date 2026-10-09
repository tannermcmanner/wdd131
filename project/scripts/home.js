// Parkourpedia — Home Page
// Builds the three independent "Parkour Highlights" accordion
// groups (Famous Locations, Renowned Teams, Notable Athletes)
// from data arrays, then wires up independent open/close
// behavior for every dropdown card.

const locationHighlights = [
    {
        name: 'Manpower Gap — Évry, France',
        file: 'manpower-gap.jpg',
        width: 640,
        height: 360,
        alt: 'A traceur frozen mid-air while jumping the Manpower Gap between two rooftops in Évry, France.'
    },
    {
        name: 'BFI IMAX — London, England',
        file: 'bfi-imax.jpg',
        width: 476,
        height: 268,
        alt: 'The curved concrete facade of the BFI IMAX in London, a well-known freerunning training spot.'
    },
    {
        name: 'La Dame du Lac — Lisses, France',
        file: 'dame-du-lac.jpg',
        width: 1280,
        height: 720,
        alt: 'The angular concrete structure known as La Dame du Lac in Lisses, France.'
    },
    {
        name: 'Oia Rooftops — Santorini, Greece',
        file: 'santorini.jpg',
        width: 960,
        height: 540,
        alt: 'Traceurs balancing on a whitewashed bell tower above the rooftops of Oia, Santorini.'
    }
];

const teamHighlights = [
    {
        name: 'Yamakasi',
        file: 'yamakasi.jpg',
        width: 321,
        height: 376,
        alt: 'Members of Yamakasi, the founding group credited with popularizing parkour.'
    },
    {
        name: 'Storror',
        file: 'storror.jpg',
        width: 960,
        height: 540,
        alt: 'The Storror team posing together at height during one of their urban exploration projects.'
    },
    {
        name: 'Farang',
        file: 'farang.jpg',
        width: 1080,
        height: 608,
        alt: 'A member of Farang performing a freerunning move in an urban environment.'
    },
    {
        name: 'Tempest',
        file: 'tempest.jpg',
        width: 855,
        height: 481,
        alt: 'The Tempest Freerunning team demonstrating a group movement line.'
    }
];

const athleteHighlights = [
    {
        name: 'David Belle',
        file: 'david-belle-home.jpg',
        width: 1342,
        height: 755,
        alt: 'David Belle, widely regarded as the founder of parkour, mid-movement on an urban structure.'
    },
    {
        name: 'Pasha the Boss',
        file: 'pasha-the-boss.jpg',
        width: 480,
        height: 270,
        alt: 'Pasha the Boss performing a parkour vault.'
    },
    {
        name: 'Jesse La Flair',
        file: 'jesse-la-flair.jpg',
        width: 1000,
        height: 563,
        alt: 'Jesse La Flair executing an aerial freerunning trick.'
    },
    {
        name: 'Bob Reese',
        file: 'bob-reese.jpg',
        width: 500,
        height: 281,
        alt: 'Bob Reese mid-flip during a freerunning performance.'
    },
    {
        name: 'Calen Chan',
        file: 'calen-chan.jpg',
        width: 1280,
        height: 720,
        alt: 'Calen Chan performing a precision move between two structures.'
    },
    {
        name: 'Dom Tomato',
        file: 'dom-tomato.jpg',
        width: 3000,
        height: 1688,
        alt: 'Dom Tomato training on an outdoor parkour course.'
    },
    {
        name: 'Alexander "Blue Shorts" Titarenko',
        file: 'alexander-titarenko.jpg',
        width: 2832,
        height: 1593,
        alt: 'Alexander "Blue Shorts" Titarenko performing a signature freerunning trick.'
    },
    {
        name: 'Elis Torhall',
        file: 'elis-torhall.jpg',
        width: 950,
        height: 534,
        alt: 'Elis Torhall balancing during a freerunning routine.'
    },
    {
        name: 'Sydney Olson',
        file: 'sydney-olson.jpg',
        width: 1120,
        height: 630,
        alt: 'Sydney Olson performing a parkour vault over an obstacle.'
    }
];

// Builds the markup for one accordion group from an array of
// highlight objects and injects it into the target container.
function renderAccordionGroup(containerId, items) {
    const container = document.getElementById(containerId);

    if (!container) {
        return;
    }

    const cardsMarkup = items.map((item, index) => {
        const panelId = `${containerId}-panel-${index}`;

        return `
            <li class="accordion-item">
                <button type="button" class="accordion-toggle" aria-expanded="false" aria-controls="${panelId}">
                    <span class="accordion-title">${item.name}</span>
                    <span class="accordion-icon" aria-hidden="true">&#9662;</span>
                </button>
                <div class="accordion-panel" id="${panelId}" hidden>
                    <img src="../images/${item.file}" alt="${item.alt}" width="${item.width}" height="${item.height}" loading="lazy">
                </div>
            </li>
        `;
    });

    container.innerHTML = cardsMarkup.join('');
}

// Wires every dropdown card so opening or closing it never
// affects the state of any other card.
function initAccordionToggles() {
    const toggles = document.querySelectorAll('.accordion-toggle');

    toggles.forEach((toggle) => {
        toggle.addEventListener('click', () => {
            const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
            const panel = document.getElementById(toggle.getAttribute('aria-controls'));

            toggle.setAttribute('aria-expanded', String(!isExpanded));

            if (panel) {
                panel.hidden = isExpanded;
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderAccordionGroup('locations-list', locationHighlights);
    renderAccordionGroup('teams-list', teamHighlights);
    renderAccordionGroup('athletes-list', athleteHighlights);
    initAccordionToggles();
});
