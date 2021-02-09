import React, { useState, useEffect } from "react";
import { findDates } from '../services/fetches';
import AllDates from '../components/list/AllDates';
const List = () => {

    const [allDates, setDates] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        findDates().then((newDates) => {
            setDates(newDates);
            setLoading(false);
        });
    }, []);

    return (
        <div data-testid="dates"> { loading ?
            <div  > Loading...</div>
            : <div><AllDates

                allDates={allDates} /></div>
        }
        </div>
    );
};
export default List;
