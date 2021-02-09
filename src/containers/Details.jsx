import React, { useState, useEffect } from 'react';
import { findSingleDate } from '../services/fetches'
import DateDetail from '../components/details/DateDetail'
import { useParams } from 'react-router-dom';
const Details = () => {

    const [date, setDate] = useState([]);
    const [loading, setLoading] = useState(true);
    const { day } = useParams();

    useEffect(() => {
        findSingleDate(day).then((newDate) => {
            setDate(newDate);
            setLoading(false);
        });
    }, []);

    return (

        <> { loading ?
            <div>Loading...</div>
            : <div data-testid="date"><DateDetail
                {...date} /></div>}
        </>
    );
};
export default Details;
