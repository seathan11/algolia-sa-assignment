
import { configure, hits, searchBox, index } from 'instantsearch.js/es/widgets';

import {
  connectHits,
  connectRefinementList,
} from 'instantsearch.js/es/connectors';

let appID = 'AQYDDE4SJF';
let apiKey = '03ecc464b82e3bb73a2f1383d9888173';

const search = instantsearch({
  indexName: 'instant_search',
  searchClient: algoliasearch(appID, apiKey),
});

// Customize UI of the Query Suggestion Hits
const renderQSHits = ({ widgetParams, hits }, isFirstRender) => {
  const container = document.querySelector(widgetParams.container);

  container.innerHTML = `<ul>
    ${hits
      .map(
        (item) => `
        <li>${instantsearch.highlight({ hit: item, attribute: 'query' })}</li>
      `
      )
      .join('')}
  </ul>`;
};

const QSHits = connectHits(renderQSHits);

// Customize UI of the category column


// Add the widgets
search.addWidgets([
  searchBox({
    container: '#search-box',
    placeholder: 'Search for products',
    showReset: true,
    showSubmit: true,
    showLoadingIndicator: true,
  }),
  index({
    indexName: 'instant_search',
    indexId: 'products',
  }).addWidgets([
    configure({
      hitsPerPage: 3,
    }),
    hits({
      container: '#products',
      templates: {
        empty: 'No results',
        item: `
              <div class="item">
                  <figure class="hit-image-container"><div class="hit-image-container-box"><img class="hit-image" src="{{image}}" alt=""></div></figure>
                  <p class="hit-category">&#8203;​</p>
                  <div class="item-content">
                      <p class="brand hit-tag">{{{_highlightResult.brand.value}}}</p>
                      <p class="name">{{{_highlightResult.name.value}}}</p>
                      <div class="hit-description">{{{price}}}<b class="hit-currency">€</b></div>
                  </div>
              </div>
              <br>`,
      },
    }),
  ]),
  index({
    indexName: 'suggestions',
  }).addWidgets([
    configure({
      hitsPerPage: 16,
    }),
    QSHits({
      container: '#suggestions',
    }),
  ]),
]);

search.start();

// Display and hide box on focus/blur
search.on('render', () => {
  const federatedResults = document.querySelector(
    '.federated-results-container'
  );
  const searchBox = document.querySelector('.ais-SearchBox-wrapper');

  searchBox.querySelector('input').addEventListener('focus', () => {
    federatedResults.style.display = 'grid';
    searchBox.classList.add('is-open');
  });
  window.addEventListener('click', () => {
    federatedResults.style.display = 'none';
  });
  searchBox.addEventListener('click', (e) => {
    e.stopPropagation();
  });
  federatedResults.addEventListener('click', (e) => {
    e.stopPropagation();
  });
});
