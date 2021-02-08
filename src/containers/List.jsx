import React, { useState, useEffect } from "react";
import { findDates } from '../services/fetches'
import AllDates from '../components/list/AllDates'
const List = () => {

    const [allDates, setDates] = useState([]);


    useEffect(() => {
        findDates().then((newDates) => setDates(newDates));
        console.log(allDates)
    }, []);

    return (
        <>
            <AllDates
                allDates={allDates} />
        </>
    );
};
export default List;
