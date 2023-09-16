import { PROMOTIONS } from '../../app/shared/PROMOTIONS.js';

export const selectFeaturedPromotion = () => {
    // will return the first true it finds for featured promotion
    return PROMOTIONS.find((promotions) => promotions.featured);
}