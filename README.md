# ProductManager

A simple example project

# Important Notes

This project uses [Nx](https://nx.dev) for build caching, this provides us with faster build times, especially in development.
To generate Angular services, components etc., run the nx command as following:
`npx nx g @nrwl/angular:<type>` instead of `ng g <type>`.

You can run `npm run start` to start a local development version of the application with Nx.
For a production build, use `npm run build`.

# Issues

I didn't want to make this project perfect from the beginning - it's an example project and I think it's also good to
show off mistakes and implementation issues that are recognized and well explained. In the following, I explain some of
these issues.

## Performance bottlenecks

I wanted to implement things MVP style, so I didn't put an emphasis on performance, code style and best practices too much.

### Using getter methods in templates

```angular2html
{{product.capitalizedCategories}}
```

`capitalizedCategories` is a getter method in the `Product` class that looks like this:

```typescript
class Product {
  // returns the categories array as capitalized strings
  get capitalizedCategories(): string[] {
    return this.categories.map(category => capitalizeFirstLetter(category));
  }
}
```

Since this getter method transforms our categories by mapping them to a new value returned by
the `capitalizeFirstLetter` method. Considering Angular's ChangeDetection cycles, which run on even on mouse moves, this
can become a pretty heavy computation. Of course the effects can be downplayed by using `ChangeDetectionStrategy.OnPush`
, but if we have buttons, inputs etc. which trigger change detection, the getter method will still get called
unnecessarily often
