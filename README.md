# OpenStable

[Live Site](https://open-stable.herokuapp.com/)

OpenStable is a full stack web application modeled after OpenTable through which users can search, create reservations at, and review stables across vanished America. OpenStable uses **Ruby on Rails** and **PostgreSQL** for its backend, as well as **React** and **Redux** for its frontend. The majority of the application was developed in a span of ten days.

<p align='center'><img src='./app/assets/images/openstable.gif' width='500'></p>

## Features
- User Authentication
    - Passwords authenticated and protected via BCrypt hashing functionality
    - Certain application features restricted to logged-in users
    - Demo account to test application without registration of an account
    - Changeable account information (email, password, name(s), etc.)
- Search
    - Users are provided with validated stable availablities based on input search parameters via complex SQL query accounting for varying opening and closing times, stay durations, overlapping reservations, and capacities at differing locations
    - Search results provide details (name, rating, location, etc.) for multiple stables
- Reservations
    - Users can reserve and confirm reservations based on a stable's availabilities
    - Reservation functionality restricted to logged-in users
- Ratings and Reviews
    - Users can review stables and provide numerical ratings in multiple categories
    - Rating functionality restricted to logged-in users who have a previous unreviewed reservation
- Favorites
    - Users can designate certain stables as favorites from the user's reservations page or the stable's page
    - Favorite functionality restricted to logged-in users

## Implementation

While full code is available in the repository, some of OpenStable's central features are highlighted with code snippets in the below two sections.

### Search

The search feature is central to OpenStable's functionality. Accessible from the application's main page, it allows users to search for openings at stables based on region, date, time, and party size. It features a custom React Router route that leverages regex to match and parse the pathname before executing the appropriate AJAX request to query the database and populate the frontend with search results.

```javascript
const Search = ({ component: Component, path, valid }) => {
    return (<Route path={path} render={(props) => (
        valid ? (<Component {...props} />) : (<Redirect to='/' />)
    )}/>);
};

const mapStateToSearchProps = (state, { location }) => {
    const re = new RegExp(/^region=(\d)\+date=(\d{4}-\d{2}-\d{2})\+time=(\d{2}:\d{2})\+partysize=(\d{1,2})$/);
    const query = location.pathname.slice(8);
    const match = re.exec(query);
    if (match) {
        const [region, date, time, size] = [parseInt(match[1]), match[2], match[3], parseInt(match[4])];
        const [today, now] = [getTodayStringDate(), getNowStringTime()];
        if (
            (region >= 0 && region <= 5) &&
            (time >= '00:00' && time <= '23:59') &&
            (date > today || (date === today && time >= now)) &&
            (size >= 1 && size <= 20)
        ) { 
            return { valid: true };
        }
    } 
    return { valid: false }
};

export const SearchRoute = withRouter(connect(mapStateToSearchProps)(Search));
```

With the custom route, users can not only visit the search page normally via mouse navigation, but also via manipulation of the URL. If a user types an invalid query to the search route, it will not be matched by regex, and the route issues a redirect to the home page instead of firing off a request to the backend.

### Modals

Another major detail of OpenStable is the use of modals for multiple features of the application; registration, login, reservation confirmation, review creation, and region changing are all implemented via the same modal component. A functional React component was developed that leverages Redux actions to render a modal with interchangeable foreground content while maintaining DRY code. The modal component always exists in the application's virtual DOM, but whether it renders content is entirely dependent on the Redux state. Redux actions are used to populate the modal's state with the component to render (and optional accompanying data), or to clear the modal out from the application's current render.

```javascript
const Modal = ({ modal, turnOffModal }) => {
    if (modal.constructor === Object && Object.entries(modal).length === 0) return null;
    let modal_component;
    switch (modal.type) {
        case LOGIN_FORM_FLAG:
            modal_component = <LoginForm />;
            break;
        case SIGN_UP_FORM_FLAG:
            modal_component = <SignUpForm />;
            break;
        case RESERVATION_CONFIRMATION_FLAG:
            modal_component = <ReservationConfirmationForm info={modal.info} />;
            break;
        case REGION_CHANGE_FLAG:
            modal_component = <RegionChangeForm />;
            break;
        case REVIEW_FORM_FLAG:
            modal_component = <ReviewForm info={modal.info} />;
            break;
        default:
            return null;
    }
    return (
        <div className='modal-background' onClick={turnOffModal}>
            <div className='modal-close'>{String.fromCharCode(10005)}</div>
            <div className='modal-foreground' onClick={e => e.stopPropagation()}>
                { modal_component }
            </div>
        </div>
    );
};

const mapStateToProps = ({ ui }) => {
    return { modal: ui.modal };
};

const mapDispatchToProps = dispatch => {
    return { turnOffModal: () => dispatch(turnOffModal()) };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
```

## Key Technologies
- **Ruby on Rails** was used as the backend application framework
- **PostgreSQL** was used as the database
- **AWS** and **Active Storage** were used for cloud storage of non-static assets
- **React** and **Redux** were used for frontend manipulation and state management

## Future Endeavors
- Incorporate Google Maps API and multiple markers into search
- Optimized scroll for reservations page and search results
- Further seed production database
- Update stable descriptions to be historically accurate