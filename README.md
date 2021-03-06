# WorkLogger

Simple clock-in/clock-out web app MVP.
Available at https://worklogger-gw.herokuapp.com/

### Approach

Rather than trying to implement as many vanilla-Rails CRUD features as I had time for, I focused my time on implementing React + Redux + React Router. I chose this approach in order to shake off some of the frontend rust built up over the past year.

Frontend features
* Entirely SPA
* Functional style React+Redux
* Routing is delegated to the frontend
* Monospace layout for those who miss typewriters

Backend features
* Roles system (unused)
* Devise sessions/registrations handled via API (JSON) controllers

### Next steps

Features
* Edit existing work logs: if the user is not Admin, the changes would be written to work_log.pending_edits until the user's supervisor reviews and approves the changes.
* Review pending edits (for supervisors and admins)
* Edit profile
* Select supervisor from list of supervisors when registering, and in profile edit page
* Reports - visualise a single employee's work history or an entire team's
* Audit trails

Frontend
* Implement typescript, flow, or other type safety
* Show times in local zone
* Fix js console warnings regarding controlled vs uncontrolled form inputs
* Fix related bug where text is left in <input> tags after clearing the value from state 
* Jest tests for all components, reducers, and actions. All JS objects in the project are unit-testable.
* Paginate + restyle work log history
* Current time & current work time should be dynamically rendered (tick as you watch)
* Better UI feedback (button loading states, loading transition effects)
* Prevent new clock-in and redirect to edit page if an existing work_log hasn't been completed yet
* Auto clock-in on login / clock-out on logout (user-configurable setting)
* Cleaner CSS structure (extract reused layout attributes to shareable objects)
* Better CSS framework (SCSS / PostCSS)
* Standardize the post-action UI message system

Backend
* Proper state machine and audit trail for work logs and their edits using the `aasm` + `paper_trail` gems.
* Reenable CSRF protection and get Devise working over the API without leaving this security hole open.
* Most of the Ruby in the repo was autogenerated. Add tests for anything that was handwritten, especially tests for the devise controllers.
* Devise was actually way too heavyweight here - most of it is unused. Try a simpler implementation of bcrypt instead.

Development & Deployment
* Run unit tests & Rubocop as post-commit / pre-deploy step
* Set up proper Rubocop config (right now scans everything including js and autogenerated rails files)
* Set up eslint stage for js code style
* Implement and run a small suite of phantom browser tests covering critical paths, as a post-commit / pre-deploy step. 

### Using this repo locally

After cloning, all you have to do is create the db and seed the initial data.
```
rake db:create
rake db:migrate
rake db:seed
rails s
```

Then, in a different process, to build the js and watch for changes:
```
./bin/webpack-dev-server
```

The app will be available at localhost:3000.
