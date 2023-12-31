---
title: "Accessibility"
layout: page
---
I copied [the WCAG compliance checklist of the A11Y Project](https://www.a11yproject.com/checklist/) down below on December 22, 2023 to help me improve the usability of this website.

### Content
- (Won't do) Use plain language and avoid figures of speech, idioms, and complicated metaphors. (I do my best to limit the amount of metaphors I use, but in some of my writing I do make use of figures of speech, idioms, and metaphors that may be considered complicated)
- [x] Make sure that `button`, `a`, and `label` element content is unique and descriptive.
- [x] Use left-aligned text for left-to-right (LTR) languages, and right-aligned text for right-to-left (RTL) languages.

### Global code
- [ ] Validate your HTML.
- [x] Provide a unique `title` for each page or view.
- [x] Ensure that viewport zoom is not disabled.
- [ ] Use landmark elements to indicate important content regions.
- [ ] Ensure a linear content flow.
- [ ] Avoid using the `autofocus` attribute.
- [ ] Allow extending session timeouts.
- [ ] Remove `title` attribute tooltips.

### Keyboard
- [ ] Make sure there is a visible focus style for interactive elements that are navigated to via keyboard input.
- [ ] Check to see that keyboard focus order matches the visual layout.
- [ ] Remove invisible focusable elements.

### Images
- [ ] Make sure that all `img` elements have an `alt` attribute.
- [ ] Make sure that decorative images use null `alt` (empty) attribute values.
- [ ] Provide a text alternative for complex images such as charts, graphs, and maps.
- [ ] For images containing text, make sure the alt description includes the image's text.

### Headings
- [ ] Use heading elements to introduce content.
- [ ] Use only one `h1` element per page or view.
- [ ] Heading elements should be written in a logical sequence.
- [ ] Don't skip heading levels.

### Lists
- [ ] Use list elements (`ol`, `ul`, and `dl` elements) for list content.

### Controls
- [ ] Use the `a` element for links.
- [ ] Ensure that links are recognizable as links.
- [ ] Ensure that controls have `:focus` states.
- [ ] Use the `button` element for buttons.
- [ ] Provide a skip link and make sure that it is visible when focused.
- [ ] Identify links that open in a new tab or window.

### Tables
- [ ] Use the `table` element to describe tabular data.
- [ ] Use the `th` element for table headers (with appropriate `scope` attributes).
- [ ] Use the `caption` element to provide a title for the table.

### Forms
- [ ] All inputs in a form are associated with a corresponding `label` element.
- [ ] Use `fieldset` and `legend` elements where appropriate.
- [ ] Inputs use `autocomplete` where appropriate.
- [ ] Make sure that form input errors are displayed in list above the form after submission.
- [ ] Associate input error messaging with the input it corresponds to.
- [ ] Make sure that error, warning, and success states are not visually communicated by just color.
- [ ] Make sure that media does not autoplay.
- [ ] Ensure that media controls use appropriate markup.
- [ ] Check to see that all media can be paused.

### Video
- [ ] Confirm the presence of captions.

### Audio
- [ ] Confirm that transcripts are available.

### Appearance
- [ ] Increase text size to 200%.
- [ ] Double-check that good proximity between content is maintained.
- [ ] Make sure color isn't the only way information is conveyed.
- [ ] Make sure instructions are not visual or audio-only.
- [ ] Use a simple, straightforward, and consistent layout.

### Animation
- [ ] Ensure animations are subtle and do not flash too much.
- [ ] Provide a mechanism to pause background video.
- [ ] Make sure all animation obeys the `prefers-reduced-motion` media query.

### Color contrast
- [ ] Check the contrast for all normal-sized text.
- [ ] Check the contrast for all large-sized text.
- [ ] Check the contrast for all icons.
- [ ] Check the contrast of borders for input elements (text input, radio buttons, checkboxes, etc.).
- [ ] Check text that overlaps images or video.
- [ ] Check custom `::selection` colors.

### Mobile and touch
- [ ] Check that the site can be rotated to any orientation.
- [ ] Remove horizontal scrolling.
- [ ] Ensure that button and link icons can be activated with ease.
- [ ] Ensure sufficient space between interactive items in order to provide a scroll area.