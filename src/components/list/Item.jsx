import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Item = ({ url, title, date }) => (
    <Link to={`./date/${date}`}> <figure >
        <img style={{
            height: '50%',
            width: '50%',
        }} src={url} />
        <figcaption>{title}</figcaption>
        <figcaption>{date}</figcaption>
    </figure></Link>
);

Item.propTypes = {
    title: PropTypes.string,
    date: PropTypes.string,
    url: PropTypes.string,
};

export default Item;
