// Switch statement which replaces cookie names as passed.
export default {
    cookieNamer: function(cookieName) {
    switch (cookieName) {
        case 'smores':
            return 'Smores'
        case 'shortbread':
            return 'Shortbread'
        case 'peanut_butter_sandwich':
            return 'Peanut Butter Sandwich'
        case 'thanks_a_lot':
            return 'Thanks a Lot'
        case 'lemonades':
            return 'Lemonades'
        case 'peanut_butter_patties':
            return 'Peanut Butter Patties'
        case 'caramel_chocolate_chip':
        case 'gluten_free':
            return 'Gluten Free'
        case 'samoas':
        case 'caramel_delights':
            return 'Caramel Delights'
        case 'thin_mint': 
            return 'Thin Mints'
        default: 
            return 'Mystery Cookies'
    }
}
}