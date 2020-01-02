Mars Needs Project: Capstone Pitch

Rev. 2019-12-20

What Problem are You Solving?
From the Mars Society website (https://www.marssociety.org/about/):
The Mars Society is the world's largest and most influential space advocacy organization dedicated to the human exploration and settlement of the planet Mars. Established by Dr. Robert Zubrin and others in 1998, the group works to educate the public, the media and the government on the benefits of exploring Mars and creating a permanent human presence on the Red Planet.
In accordance with their stated goals above, the Mars Society would like to begin collecting ideas from individuals, businesses, and other interested organizations for products and services that might contribute to the survival and long-term success of a future Mars colony. They are in need of a tool that will enable them to receive, organize, and display this data.
As a non-profit organization of volunteers, the Society is looking for assistance with the creation of such a tool.

What is your Solution?
The basic solution is a web application that allows users to submit proposals for products or services (either extant or conceptual). Proposal data would be organized by various fields for sorting and categorization purposes. The application would also provide a means for administrative users to easily access and review the proposals.
Advanced features to consider for implementation include:

- Submission verification to keep the project free of spam data
- A method for administrative users to annotate and track proposals
- A way for users to log in to retrieve, update, and/or communicate with the Society about their previously-submitted proposals
- A Home Page dashboard for displaying non-sensitive project statistics to the public

What is your initial MVP?

- Public Users
  o Home Page
   Project Introduction
   Link to Mars Society website
   Link to Submission Page
   Login for Administrative Users; redirects to Review Page
  o Submission Page
   Proposal Name
   Proposal Category
   Proposal Details
   Submitter’s Contact Information
   Reroutes to Next Steps page on submission
  o Next Steps Page
   Displayed after submission
   Thanks user
   Provides a submission reference number
   What to expect from the Society regarding the submission
   How to contact the Society regarding the submission
   Information about how to join the Society
   Link to submit another proposal
   Link to Home Page
- Administrative Users
  o Review Page
   Dynamically-generated based on search & sorting criteria
   Summary information and links to Details Pages
   Logout button; redirects to Home Page
  o Details Page
   Pop-up page displaying the details of a specific submission

What is the Ratio of Front End / Back - End Complexity?
50% Front End, 50% Back End

What are the Tools, Technologies, and Skills Needed to Build this App?

- React
- Redux
- Mongo or PostgreSQL
- Express
- Component Library
- Heroku
- Gitlab/Gitlab Pages
