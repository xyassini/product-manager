# ProductManager

A simple example project

# Important Notes

This project uses [Nx](https://nx.dev) for build caching, this provides us with faster build times, especially in
development. To generate Angular services, components etc., run the nx command as following:
`npx nx g @nrwl/angular:<type>` instead of `ng g <type>`.

You can run `npm run start` to start a local development version of the application with Nx. For a production build,
use `npm run build`.

# Issues

I didn't want to make this project perfect from the beginning - it's an example project, and I think it's also good to
show off mistakes and implementation issues that are recognized and well explained. In the following, I explain some of
these issues.

## Performance bottlenecks

I wanted to implement things MVP style, so I didn't put too much emphasis on performance.

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

### Nested Lazy Loading

Specifically if you look at `ProductShowRoutingModule` and its sub-routes, I chose to lazy load the edit and delete
routes. This means if we click to edit a product in the list, we would lazily load the following modules:
`ProductShowModule -> ProductEditModule` - whereas we don't need to load the ProductShowModule in this case. I wouldn't
do this in a production application since it comes with (very slightly) reduced performance in some cases.

## Code Style

To save time I didn't watch my code style too much in certain cases, which is why I already see a lot of space for
improvement here

### Icons

I have used [HeroIcons](https://heroicons.dev/) for this project. They are very easy to use since I just need to click
on an icon to copy its SVG code - However, it comes with issues.

It makes the code look bulky, and it's not easy to see what svg code represents which icon. To fix this, I would choose
the following option:

Create an Angular library (for better shareability) with own module + component for each icon - this comes with multiple
advantages:

* It's easy to change icons globally
* Using the icons is much easier and saves time
* With each icon having its own module, tree-shaking is supported and comes with performance benefits
* With a library, the icons can be easily shared across projects

### CSS Classes in Templates

In this case, this is partly due to the fact that I'm using [tailwindcss](https://tailwindcss.com/) - though I could
create CSS component classes like I did with the buttons:

```scss
.btn {
  @apply transition font-medium px-4 py-2 rounded-md flex items-center shadow-sm;
  &.primary {
    @apply bg-primary-600 hover:bg-primary-500 text-white;
    &:disabled {
      @apply bg-primary-400 text-gray-200 cursor-default;
    }
  }

  &.secondary {
    @apply bg-secondary-200 hover:bg-secondary-300 text-black;
  }
}
```

However, to save time, I decided not to do this for now. In a real-world application I would've done this right away
since it makes the code much more readable and cleaner.

### Component Splitting

I could've spent more time splitting up components, for instance when we look at the `ProductListItemComponent` I
could've made the action buttons into their own component which takes a title as an input and uses `<ng-content>` to
project the icon into this component. I could've added even more functionality like setting the `flex-direction` with an
input variable, e.g.:

```typescript
type DirectionType = 'horizontal' | 'vertical';

@Input() direction: DirectionType = 'vertical';
```

```angular2html
<app-action-button direction='horizontal'></app-action-button>
```

would render the same button with icon and text, but horizontally aligned.

### Unit Tests - Repeating Code

There are some properties and methods that are repeated - to follow the DRY principle, for a real-world application, it
would help to create test utils and fixtures with commonly used methods, fixtures etc. - this would speed up the
development process and provide better maintainability

### Using a Class as a Model instead of an interface

Since I don't have any stores, I've decided to go with a class as a model in order to query data easily. However, this
comes with some backdraws, the biggest one might be **serializing**. To have access to the instance methods and
transformed/default properties to be applied, I have to make sure the instance is actually initialized. This can make
the code look bulky in some places, especially in arrays, where we would need to initialize every item
with `new Product({<values>})`
