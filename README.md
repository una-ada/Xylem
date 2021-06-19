# Xylem

A simple micro-blogging site, developed to meet the requirements for
[GA SEI-R][4] project 2 ([MEN][13] stack [CRUD][12] application).

## Getting Started

_Work in progress!_

<!-- TODO: Write out tutorial for deployed app. -->

<!-- TODO: Add screenshots with annotations to explain the UI. -->

<!-- TODO: Write out tutorial for local installation. -->

## Solutions

_Work in progress!_

<!-- TODO: Describe "technologies used" (Mongo, Node, HTML, CSS, &c.). -->

<!-- TODO: Write out "CONTRIBUTING" guide, covering styles and methods. -->

<!-- TODO: Write out explanation of repository structure. -->

## Planning and Development

### User Stories &rarr; [Trello Board][3]

This board describes features from a user's perspective, what the user might 
want to do (and sometimes why). Each card follows a general format of "AAU (As 
A User), I want to &lt;action&gt;, because &lt;reason&gt;" and falls into one 
of three categories:
 -  **Ice Box**, for user stories that may be added in the future, but are not 
    required for [minimum viable product][8] (MVP).
 -  **Current/MVP**, for user stories that _are_ required for MVP and need to
    be implemented before presenting the project.
 -  **Completed**, for user stories that have been successfully implemented.

### Features &rarr; [GitHub Project][14]

Where the Trello board is focused on user stories, this [Kanban][15]-style 
project board is dedicated to features. Each feature is given an "enhancement" 
issue on the repo and attached to the relevant cards on Trello using the 
[GitHub Power-Up][16]. These issues are also automatically added to the project 
board under "To do" until a pull request is made to close them.

### Entity Relationship Diagram (ERD) &rarr; [Lucid Document][1]

This entity relationship diagram (or [entity-relationship model][9]) was 
created with the [ERD template][5] on [Lucidchart][6], which uses [crow's foot 
notation][7] for cardinality. This is the initial pass on modeling the database 
for Xylem, outlining the most important models for basic functionality of the 
project: User, Post, Comment (_embedded_), Like (_embedded_), and Follow; 
additionally, there are two ice box models that will be necessary for future 
updates: Image and Notification.

### Wireframe &rarr; [Adobe XD Design Review][2]

This wireframe was done in [Adobe XD][11], initially using the [Wires][10] 
wireframe kit. It outlines the user interface (UI) for the landing page, users, 
and posts, as well as basic user experience (UX) via a flow prototype.

## Next Steps

_Work in progress!_

<!-- TODO: Write out planned updates. -->

<!-- TODO: Link to open issues for planned features. -->

[1]:  https://lucid.app/lucidchart/62a36a47-96ac-4762-8948-601caa338a2e/view
[2]:  https://xd.adobe.com/view/ab09d4da-ca19-40d8-8613-9f7ef9647524-fe5a
[3]:  https://trello.com/b/pjzGxOWG
[4]:  https://generalassemb.ly/education/software-engineering-immersive/seattle
[5]:  https://www.lucidchart.com/pages/templates/erd/lucidchart-erd-crows-foot
[6]:  https://lucid.app/
[7]:  https://vertabelo.com/blog/crow-s-foot-notation/
[8]:  https://en.wikipedia.org/wiki/Minimum_viable_product
[9]:  https://en.wikipedia.org/wiki/Entity%E2%80%93relationship_model
[10]: https://www.behance.net/gallery/55462459/Wires-wireframe-kits-for-Adobe-XD
[11]: https://www.adobe.com/products/xd.html
[12]: https://en.wikipedia.org/wiki/Create,_read,_update_and_delete
[13]: https://en.wikipedia.org/wiki/MEAN_(solution_stack)
[14]: https://github.com/users/una-ada/projects/3
[15]: https://en.wikipedia.org/wiki/Kanban_(development)
[16]: https://trello.com/power-ups/55a5d916446f517774210004/github
