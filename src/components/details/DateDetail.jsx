import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

const DateDetail = ({ url, title, date, explanation, copyright }) => (
    <><figure >
        <figcaption>{title}</figcaption>
        <figcaption>{copyright}</figcaption>
        <img style={{
            height: '50%',
            width: '50%',
        }} src={url} />
        <figcaption>{date}</figcaption>
        <figcaption>{explanation}</figcaption>
    </figure>
        <Link to={'/'}>Back</Link></>
);
DateDetail.propTypes = {
    title: PropTypes.string,
    date: PropTypes.string,
    url: PropTypes.string,
    explanation: PropTypes.string,
    copyright: PropTypes.string,
};

export default DateDetail;
