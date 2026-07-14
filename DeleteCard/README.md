# Delete Card

A small UI experiment: a row of cards, each with a delete button that removes the card with a smooth animation using the browser's [View Transitions API](https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API).

## Files

- `DeleteCard.html` — markup for four cards (`#card1`–`#card4`), each with a delete button (SVG trash icon).
- `DeleteCard.css` — card layout/styling and the exit animation, including a custom bounce easing curve (`--bounce-easing`) applied to the transition.
- `DeleteCard.js` — click handler wired to every `.deleteBtn` that hides its parent card, wrapped in `document.startViewTransition` so the removal animates.

## What it does

- Cards are laid out in a flex row (`.container`), each styled with its own background color and rounded corners.
- Clicking a card's delete button removes that card from view.
- If the browser supports the View Transitions API, the removal is animated (fade + upward translate via the `remove-card` keyframes) instead of disappearing instantly.
- Falls back to a plain `display: none` in browsers that don't support `document.startViewTransition`.

## Try it

Open `DeleteCard.html` in a browser that supports the View Transitions API (e.g. a recent Chrome) to see the animated delete effect.
