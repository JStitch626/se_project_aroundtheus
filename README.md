# Project 4: Around The U.S. interactive

## Description

Updated 11/24/2023

This project continues where Project 3 finished. In this sprint, I incorporate interactive features using JavaScript. I learned how to access nodes in the DOM tree using querySelector() and querySelectorAll(), define variables, and declare and call functions to make the buttons usable.

By clicking the "Edit" button, the end user can now manipulate the name and description on the page.
When the modal opens, the form contains the information currently displayed on the page, which can then be changed. When the end user clicks the "Save" button, the new information replaces the previous name and description.

## Project features

- Semantic HTML5
- Flexbox
- Positioning
- BEM blocks
- Grid
- CSS media queries
- Figma layout
- JavaScript
- Updating the README.md file
- Using git branch
- Deploying the project to Github Pages

**Github Pages Link** [Around the U.S.](https://jstitch626.github.io/se_project_aroundtheus/) (Work in progress)

## Code Corrections

- modal.css
  - line 24, `.modal__container` remove fixed height to allow input expansion or deletions
  - line 57, `.modal__heading` remove fixed height; text elements do not need fixed height
  - line 91 `@media screen and (max-width: 630px)` for `.modal__container` - same reason as above

-index.html

- line 61 add `type` to button element
- line 62 change `<p>` to `<h2>`
- line 69 change modifiers from boolean to key-value type

  - for both inputs name and description, changed modifier to `.form__input_text_modifier-value`

  ## Code Enhancements

  - created separate functions for `profileAutoFillIn` and `fillProfileForm` and called the functions in the `addEventListener`

---

### Project 3: Around The U.S.

This project exhibits a webpage with an adaptive design. Incorporating lessons from the previous two sprints and introducing Figma as an additional tool, I built a website that adapts to different screen sizes:

- 1280px desktop
- 800px tablet
- 320px mobile phone

Unlike the previous sprints that were divided into stages with briefs, we received only a general overview and the Figma design and had to create everything from scratch.

### Project features

- Semantic HTML5
- Flexbox
- Positioning
- BEM blocks
- Grid
- CSS media queries
- Figma layout
- Composing a README.md file
- Using git branch
- Deploying the project to Github Pages

**Github Pages Link** [Around the U.S.](https://jstitch626.github.io/se_project_aroundtheus/) (Work in progress)

### Code corrections

- card.css - line 42 change opacity from 0.6 to 0.5 according to Figma design
- page.css - line 36 remove redundant css rule
- profile.css - assign border styles of '1px solid' to `profile__edit-button` selector as shown in Figma design
- index.html - line 23-24 remove extraneous containers
- button style - add `cursor: pointer` declaration to each button so that a hand appears over the hovered button
- index.html - line 41 `.cards__list` must be listed by itself because BEM does not allow `class="block block__element"`

### Code enhancements

- accessibility - add `aria-label` attribute to buttons, making interactive elements more accessible for end users who use screen readers

### Future goals

- Learn how to use auto-fit to make a more responsive layout.

---

### Original README.md from TripleTen

_Below you will find the overview provided by TripleTen, including a link to the Figma design and a resource to optimize image sizes for faster loading times._

#### Overview

- Intro
- Figma
- Images

**Intro**

This project is made so all the elements are displayed correctly on popular screen sizes. We recommend investing more time in completing this project, since it's more difficult than previous ones.

**Figma**

- [Link to the project on Figma](https://www.figma.com/file/ii4xxsJ0ghevUOcssTlHZv/Sprint-3%3A-Around-the-US?node-id=0%3A1)

**Images**

The way you'll do this at work is by exporting images directly from Figma — we recommend doing that to practice more. Don't forget to optimize them [here](https://tinypng.com/), so your project loads faster.

Good luck and have fun!
