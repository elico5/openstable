export default (payload) => {
    return {
        entities: {
            users: {
                [payload.user.id]: payload.user
            },
            stables: {

            },
            reservations: {

            },
            reviews: {

            },
            favorites: payload.favorites
        },
        ui: {
            modal: {},
            loader: false
        },
        errors: {
            session: [],
            reservations: [],
            user: []
        },
        session: {
            currentUserId: payload.user.id,
            region: payload.user.riding_location
        }
    };
};