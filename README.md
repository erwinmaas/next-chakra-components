# Component Library Next JS with Chakra UI

## Header component

```javascript
<Header brandName="Your brandname" />
```

## Hero component

With the following properties:

```javascript
Hero.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  freeText: PropTypes.string,
  image: PropTypes.string,
  ctaText: PropTypes.string,
  ctaLink: PropTypes.string,
}
```

Boils down to:

```javascript
<Hero
  title="codeFish"
  subtitle="Better. Lean. Responsive. Fast."
  freeText="Innovative online partner for fast deployment of bright ideas, edgy technologies and disruptive solutions."
  image="https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  ctaText="Learn more"
/>
```

## Blogpost Overview

```javascript
<BlogOverview />
```
