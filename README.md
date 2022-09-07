# Frontend Mentor - Manage landing page solution

This is a solution to the [Manage landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/manage-landing-page-SLXqC6P5). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

<!-- **Note: Delete this note and update the table of contents based on what sections you keep.** -->

## Overview

### The challenge

Users will be able to:

- View website on all display
- See hover state on all interactive element
- See all testimonials in a horizontal slider
- user will receive an error message when the newsletter sign up `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly

### Screenshot

![](screenshots\Screenshot-desktop.png)
![](screenshots\Screenshot-mobile.png)

### Links

- Solution URL: (https://your-solution-url.com)
- Live Site URL: (https://manage-landing-page-y.netfix.app)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [vite](https://vitejs.dev) - A development tool
- [vanilla.js] plain javascript

### What I learned

- I learned how to improve accesibility for those thar uses screen reader

- I learned how to use count

```css
.numbered-items {
  counter-reset: count;
}

.numbered-items li {
  counter-increment: count;
}

.numbered-items div::before {
  content: "0" counter(count);
  display: flex;
  align-items: center;
  background-color: var(--clr-accent-400);
  color: var(--clr-neutral-100);
  font-weight: var(--fw-bold);
  padding: 0 var(--size-500);
  border-radius: 100vw;
  grid-row: 1 / 2;
  grid-column: 1 / 2;
}
```

### Useful resources

- [Swiper](https://www.swiperjs.com) - This is what i used for the slider. I really liked the simplicity and the easy usage
- [kevin powell](https://www.youtube.com/kevin-powell) - This is an amazing youtube channel and i have learned alot from the channel and i coded along with him on this project.

## Author

<!-- - Website - [Add your name here](https://www.your-site.com) -->

- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@y_ysf_a](https://twitter.com/_ysf_a)

## Acknowledgments

@kevinjpowell did this project in his series on his youtube channel and I coded along with him. Through this series i have improve in my css.
