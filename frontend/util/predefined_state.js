export default (user) => {
    return {
        entities: {
            users: {
                [user.id]: user
            },
            stables: {

            },
            reservations: {

            },
            reviews: {

            }
        },
        ui: {
            modal: {},
            loader: false
        },
        errors: {
            session: [],
            reservations: []
        },
        session: {
            currentUserId: user.id,
            region: user.riding_location
        }
    };
};