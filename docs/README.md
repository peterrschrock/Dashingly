# dashingly

[Dashingly](https://dashing-ly.heroku.com/login)

<!-- TODO did I actually use react-d3? -->
dashingly uses React.js, Redux, react-d3, Ruby on Rails, and Postgresql to create a chart making application based on Chartio.

## Features: Minimum Viable Product
- Production README
- Hosted on Heroku
- User Authentication: Users can create accounts, login to existing accounts, or use a guest account
- Upload data in JSON, TSV, or CSV
- Visualize the data using charts
- Save charts for later sessions
- Share charts with others on the site
- If Time: Add dashboards

## Planning Documents
* [View Wireframes](./wireframes)
* [React Components](./component-hierarchy.md)
* [Sample State](./sample-state.md)
* [DB schema](./schema.md)
* [API endpoints](./api-endpoints.md)

## Implementation Timeline
### Phase 0: User Authentication, Rails API Backend (2 days)
- Features
  + Create Account
  + Sign In
  + Sign In as Guest
- Styling

### Phase 1: Charts (3 days)
- Features
+ Create, update, delete, and persist charts
- Styling

### Phase 2: Uploading Data (2 day)
- Features
  + Upload CSV, TSV, or JSON
  + Persist to database
- Styling

### Phase 3: Share Charts (2 days)
- Features
  + Share charts with other users
  + See charts shared with you
- Styling

### Phase 3.5: Polish, Polish, Polish


### Phase 4 Bonus: Dashboards (? days)
- Add charts to dashboard
- Share dashboards
- View many charts at once
