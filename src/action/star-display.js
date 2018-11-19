export const SHOW_STAR_DISPLAY = 'SHOW_STAR_DISPLAY';
export const HIDE_STAR_DISPLAY = 'HIDE_STAR_DISPLAY';

export const showStarDisplay = (star) => ({
    type: SHOW_STAR_DISPLAY,
    star
});

export const hideGiphyDisplay = () => ({
    type: HIDE_STAR_DISPLAY,
});