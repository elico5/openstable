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
            modal: {}
        },
        errors: {
            session: []
        },
        session: {
            currentUserId: user.id
        }
    };
};