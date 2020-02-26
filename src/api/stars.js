export const fetchStar = async () => {
    const res = await fetch('https://starscape.voltron-eng.com/failing-stars');
    const data = await res.json();
    return data;
};