- possibilites of implementing download feature
  - Extracting the object data of the user user edited template
  - And sending that to the server, maybe storing in the db
  - Then ssr the template and make it downloadable

### How to implement the HTML download feature 
- When i click on download btn 
  - the html page should be hosted 


  - Builder Page -> This is having an Download HTML option 
    - When clicked on this an SSR page should be served to the user,
      - For that the JSON data should be sent as Template page needs an Prop
      - How to send this ?


### Model / Schema Creation

1. the Template Json should be stored with respect to the user 
 - User 
  - Name 
  - Email 
  - Template Data 
  - Password or login will be possible by only next auth 
  - for session token ???
  