---
copies:
  - title: Facebook
    url: https://www.facebook.com/jgarber623/posts/10152595315532343
  - title: Twitter
    url: https://twitter.com/jgarber/status/567697084288352256
  - title: Viget Advance
    url: http://viget.com/advance/using-github-on-multidisciplinary-teams
date: 2015-02-17 09:41:34 -0500
excerpt: GitHub’s not just for developers. Here are some ideas for getting the entire team involved.
tags:
  - design
  - development
  - github
  - process
title: Using GitHub on Multidisciplinary Teams
---

We use [GitHub](https://github.com/) for file versioning and code reviews on almost every project at [Viget](http://viget.com/). With less frequency, we use GitHub Issues to assign tasks and address bugs. With even less frequency, we use Milestones and Wikis for setting deadlines and documenting projects, respectively. In most cases, we lean heavily on GitHub's primary offering while ignoring the power of its myriad other features.

What if we used more of GitHub's features? What if we involved more members of a project team outside of developers? What would that look like?

I've got a couple of ideas. Now, I haven't been able to put all of these ideas into practice, so they may or may not be feasible. In this post, I'll trade out some of these ideas, attempting to wring even more value out of an already indisposable tool.

## Wikis

Every project accumulates a great deal of documentation: statements of work, project charters, timelines, etc. These documents are often spread across a number of services like Google Docs, Basecamp, or Dropbox. Why not aggregate those documents—or links to those documents—in a central place? That's one great use of a project wiki.

Additional uses for project wikis include:

- **Project Management:** The entire team could use a project wiki to organize work into sprints (with Milestones), keeping that information in an easily-editable central location.
- **Feature Definition:** An Information Architect or User Experience Designer could use a wiki to document a website's features, maintain a content or page inventory, and link to sketches or wireframes.
- **Visual Design Documentation:** Links to [style tiles](http://styletil.es) or mood boards, font choices and sizing, and other design-related documentation could easily be captured on a project wiki. GitHub's not great at handling large binary files like Photoshop mockups, so including links to these resources on wiki pages would be a good approach.
- **Development Documentation:** We make good use of project-specific `README.md` files. This document's great for holding information relevant to getting the website up and running for local development. There's typically more information that's worth documenting, though: usage of third-party code libraries, project-specific coding conventions, browser optimization list, etc.

_What_ ends up in a project wiki will vary greatly depending on the nature of the project, of course. Regardless of the type of project, odds are the team would benefit from a central repository of information. GitHub's Wikis are great for this!

## Issues

As GitHub is primarily for code, we tend to treat it as being for developers only. I'd like to see this change. Issues could easily be created for User Experience or Visual Designers. A User Experience Designer may be assigned an Issue that requests conceptualizing, developing wireframes for, and documenting a feature. A related Issue assigned to a Visual Designer may request a Photoshop mockup of the feature (or a simple sketch may be more appropriate). From there, developers may be assigned Issues to implement the feature.

Make use of Labels and Milestones for tasking and scheduling. While labels will vary from project to project, I've found GitHub's defaults "bug," "enhancement," "feature," and "question" quite useful. Additionally, discipline-specific labels may be helpful for easily determining the current "state" of a feature (e.g. a visual designer is currently working on the feature's look and feel).

Feel free to lean heavily on project-specific nomenclature when coming up with labels for Issues. Similarly, an agreed-upon Issue naming convention makes scanning a repository's Issues page _much nicer_.

Be sure to keep Issues actionable, even if the Issue is an open question. Add the "Question" label and reference teammates by their GitHub user name in the Issue's comment to ensure that the right eyes see the question.

With this sort of rigorous, cross-disciplinary approach to using Issues, you create a searchable database of project work. Super useful and _much_ easier than trying to track down documents, task details, and assets spread across a number of services.

## Pull Requests

Pull Requests are an excellent way to spot-check code, allowing developers to comment on the quality of the code under review. For back-end code, and increasingly for front-end JavaScript code, it's expected that the PR'ed code is thoroughly tested and that those tests pass. Whether or not the code works as advertised generally falls outside the scope of review.

This is where I find front-end code-specific Pull Requests lacking. It's fairly easy for a front-end developer to look at some HTML, CSS, and JavaScript and roughly determine whether or not it's well-written code. What _doesn't_ happen at this point in the process is any sort of in-browser QA. In my experience, manual QA typically gets off-loaded onto the project manager, adding Yet Another Responsibility to an already busy team member. Even worse, manual testing may be carried out hastily at the end of a project timeline. I'd like to have everyone on the project team participating in Pull Requests throughout the course of the project.

I envision a system where code branches are automatically deployed to subdomains on a testing server (e.g. `my-great-feature-branch.example.com`) accessible to all team members. This would require a little bit of developer configuration, but I believe it's within the realm of possibility. Having feature branches up and running on a server gives everyone—UX, visual design, etc.—the opportunity to review a Pull Request.

Getting holistic feedback from the entire team would help to quickly root out implementation problems and uncover potential design flaws. This approach has the added benefit of keeping everyone on the team involved throughout the course of the project.

---

GitHub's feature set may not be "enterprise" (I think that's a good thing), so it may not be appropriate for every project or every team. But if you dive in, you'll quickly see that GitHub's project management, documentation, and tasking features are _much_ more full-featured than they appear.

I hope you've found the ideas in this post interesting and I'd like to hear how you and your project teams are using GitHub.