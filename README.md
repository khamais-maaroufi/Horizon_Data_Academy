# Horizon_data_academy
Horizon data Academy is web site meant for answering the needs of an education center to help both student and teachers to access online services that helps them during their dedication to Horizon Data Academy the learning center of Horizon data enterprise.
the project is already in progress
i'm working on the authentification system for users,
i built a data base on mongo db atlas and i successfully linked it to our server application,
now users are able to signup, login and logout
i add a csrf verification token so the post/get request cannot be falsified
user's dashboard is protected from an external access using protected routes that verify the user current state
we add a verification page so instructor can add himself with entering the right Token and click sumbit then he will be redirected 
to the protected instructor page and 'create course' will appear for him in the conditional navigation bar.
both "instructor" and "create course" pages are now protected and cannot be accessibal only for user with role="instructor".
...
