import React from 'react';
import SearchResultItem from './search_result_item';
import regionIdToString from '../../util/region_id_to_string';
import { connect } from 'react-redux';

const SearchResults = ({ stables, slots, region }) => {
    if (stables.constructor === Object && Object.entries(stables).length === 0) {
        return (
            <div className='no-results-container'>
                Sorry partner, looks like none of our stables in {regionIdToString(region)} have openings that accommodate that search request.
            </div>
        );
    } else {
        const searchResultItems = Object.values(stables).map((stable, i) => {
            return <SearchResultItem key={i} stable={stable} slots={slots[stable.id]} />;
        });
        return (
            <div className='search-results-container'>
                {searchResultItems}
            </div>
        );
    }
};

const mapStateToProps = ({ entities }, { region }) => {
    return {
        stables: entities.stables,
        slots: entities.slots,
        region
    };
};

export default connect(mapStateToProps)(SearchResults);