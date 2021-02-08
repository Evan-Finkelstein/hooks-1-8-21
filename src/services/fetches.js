
export const findDates = () => {
    return fetch('https://api.nasa.gov/planetary/apod?api_key=iyym6p4hKcGIB2QoorAXpyxlPWBsGx6f70UiNadn&start_date=2021-01-01')
        .then((res) => res.json())
};

export const findSingleDate = (date) => {
    return fetch(`https://api.nasa.gov/planetary/apod?api_key=iyym6p4hKcGIB2QoorAXpyxlPWBsGx6f70UiNadn&date=${date}`)
        .then((res) => res.json())
};
