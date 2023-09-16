import { CAMPSITES } from '../../app/shared/CAMPSITES.js';

// return all campsites
export const selectAllCampsites = () => {
    return CAMPSITES;
};

// find the selected campsite 
export const selectCampsiteById = (id) => {
    return CAMPSITES.find((campsite) => campsite.id === parseInt(id));
}

export const selectFeaturedCampsite = () => {
    return CAMPSITES.find((campsite) => campsite.featured);
}