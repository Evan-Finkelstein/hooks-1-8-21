import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item'


const AllDates = ({ allDates }) => (
    <ul >
        {allDates.map(date => (
            <li key={date.date} style={{ margin: '50px' }}>
                < Item {...date} />
            </li>
        ))};
    </ul>

);
AllDates.propTypes = {

    allDates: PropTypes.array,

};
export default AllDates;
