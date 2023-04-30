export const setVoteAverageClass = (vote: number) => {
    if (vote >= 8) {
        return "green";
    } else if (vote >= 6) {
        return "orange";
    } else if (vote === 0) {
        return "na";
    } 
    else {
        return "red";
    }
};
