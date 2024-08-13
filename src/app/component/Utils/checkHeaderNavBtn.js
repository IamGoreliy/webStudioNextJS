export const checkHeaderNavBtn = (nameLink) => {
    if (nameLink === 'Home') {
        return '/';
    }
    return `/${nameLink}`;
}