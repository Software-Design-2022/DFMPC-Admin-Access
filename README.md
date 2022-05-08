# DFMPC-Admin-Access

## DFMPC-Student-Placement-Admin-Site
## Project Description
Admin Website - A website which will need to allow an admin user to manage database records.**

## Functional Requirements
- Login page - the admin website should be able to accept an admin user email and corresponding password.
- Homepage - the Homepage allows the admin to navigate to the users and protocols pages.
- The users page should allow the admin to add new users.
- The protocols page should allow the admin to add new protocols.
- The admin user should be able to sign out from any of the pages in the website.

## Non-Functional Requirements
- The website is easy to use and efficient
- The website is user friendly
- The website is secure
- The website is reliable
- The website is easy to maintain
- The website is easy to extend
- The website is easy to access
- The website is easy to upgrade
- The website is easy to customize
- The website is scalable


![Database Diagram1](https://user-images.githubusercontent.com/67168444/166154133-3302cf58-27c5-4b1d-84d0-2a1786d8fac2.png)
The above image shows the structure of our database which is hosted on firebase. The connections between the tables are shown by lines. The admins and protocols tables are their own separate entities and have no relations with any of the other tables.
#### The Rules:
- Each user may only be referenced as a student once.
- A group may have more than one student, however each student must only be assigned to one group
- Each course can only belong to one program. A program may have many courses.
- Each course can belong to more than one specialty. A specialty may have more than one course.
- More than one student may be allocated to a specialty, however the number of students allocated to a specialty may not exceed the number of available slots for that specialty.
- A hospital may have more than one specialty. A specialty may be offered at more than one hospital.
- A student may only be assigned one specialty at a time.
