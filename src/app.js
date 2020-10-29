/* global instantsearch algoliasearch */

const searchClient = algoliasearch(
  'AQYDDE4SJF',
  '03ecc464b82e3bb73a2f1383d9888173'
);

const subIndex = instantsearch({
  indexName: 'suggestions',
  searchClient,
});

subIndex.addWidgets([
  instantsearch.widgets.configure({
    hitsPerPage: 6,
  }),
  instantsearch.widgets.hits({
    container: '#hits-instant-search-price-desc',
    templates: {
      item:
        '{{#helpers.highlight}}{ "attribute": "query" }{{/helpers.highlight}}',
    },
  }),
]);

const mainIndex = instantsearch({
  indexName: 'instant_search',
  searchClient,
  searchFunction(helper) {
    subIndex.helper.setQuery(helper.state.query).search();
    helper.search();
  },
});

mainIndex.addWidgets([
  instantsearch.widgets.configure({
    hitsPerPage: 6,
  }),
  instantsearch.widgets.searchBox({
    container: '#searchbox',
  }),
  instantsearch.widgets.hits({
    container: '#hits-instant-search',
    templates: {
      item:
        '{{#helpers.highlight}}{ "attribute": "name" }{{/helpers.highlight}}',
    },
  }),
]);

subIndex.start();
mainIndex.start();
