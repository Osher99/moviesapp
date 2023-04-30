import { APIURL, SEARCHAPI } from '../../config/urls';

export async function getMovies() {
    try {
        const res = await fetch(APIURL);
        return await res.json();
    } catch (err) {
        return console.log(err);
    }
}

export async function getSearchMovies(searchVal) {
    try {
        const searchUrl = SEARCHAPI+searchVal;
        const res = await fetch(searchUrl);
        return await res.json();
    } catch (err) {
        return console.log(err);
    }
}
