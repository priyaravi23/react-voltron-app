export const getState = () => {
    try {
        return JSON.parse(localStorage.getItem('stars')) || [];
    } catch (err) {
        return undefined;
    }
};

export const setState = (state) => {
    try {
        localStorage.setItem('stars', JSON.stringify([...state.stars.stars]))
    } catch (err) {
        console.log('Could not save the app state.');
    }
};