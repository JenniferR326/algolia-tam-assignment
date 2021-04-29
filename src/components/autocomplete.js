import algoliasearch from 'algoliasearch';
import instantsearch from 'instantsearch.js';

// Instant Search Widgets
import { hits, searchBox, configure, index } from 'instantsearch.js/es/widgets';

// Autocomplete Template
import autocompleteProductTemplate from '../templates/autocomplete-product';
import autocompleteQuerySuggestionTemplate from '../templates/autocomplete-query-suggestion';

/**
 * @class Autocomplete
 * @description Instant Search class to display content in the page's autocomplete
 */
class Autocomplete {
  /**
   * @constructor
   */
  constructor() {
    this._registerClient();
    this._registerWidgets();
    this._startSearch();
  }

  /**
   * @private
   * Handles creating the search client and creating an instance of instant search
   * @return {void}
   */
  _registerClient() {
    this._searchClient = algoliasearch(
      'M0L03UF7TB',
      'a40064f8f1e4b1d67e7f2e5db421fbd9'
    );

    this._searchInstance = instantsearch({
      indexName: 'TAM-Exercise',
      searchClient: this._searchClient,
    });
  }

  /**
   * @private
   * Adds widgets to the Algolia instant search instance
   * @return {void}
   */
  _registerWidgets() {
    this._searchInstance.addWidgets([
      searchBox({
        container: '#searchbox',
      }),
      index({
        indexName: 'TAM-Exercise',
      }).addWidgets([
        configure({
          hitsPerPage: 3,
        }),

        hits({
          container: '#autocomplete-hits',
          templates: { item: autocompleteProductTemplate },
        }),
      ]),

      index({
        indexName: 'TAM-Exercise_query_suggestions2',
      }).addWidgets([
        configure({
          hitsPerPage: 3,
        }),

        hits({
          container: '#autocomplete-suggestions',
          templates: {
            item: autocompleteQuerySuggestionTemplate,
          },
        }),
      ]),
    ]);
  }

  /**
   * @private
   * Starts instant search after widgets are registered
   * @return {void}
   */
  _startSearch() {
    this._searchInstance.start();
    // this._querySuggestionsInstance.start();
  }
}

export default Autocomplete;
