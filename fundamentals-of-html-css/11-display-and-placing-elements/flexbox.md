# Flexbox

## justify-content

This CSS property aligns items **horizontally** and accepts the following values:

* `flex-start`: Items align to the left side of the container.
* `flex-end`: Items align to the right side of the container.
* `center`: Items align at the center of the container.
* `space-between`: Items display with equal spacing between them.
* `space-around`: Items display with equal spacing around them.

## align-items

This CSS property aligns items **vertically** and accepts the following values:

* `flex-start`: Items align to the top of the container.
* `flex-end`: Items align to the bottom of the container.
* `center`: Items align at the vertical center of the container.
* `baseline`: Items display at the baseline of the container.
* `stretch`: Items are stretched to fit the container. (default)

Aligns flex items along the cross axis.

## flex-direction

This CSS property defines the direction items are placed in the container, and accepts the following values:

* `row`: Items are placed the same as the text direction.
* `row-reverse`: Items are placed opposite to the text direction.
* `column`: Items are placed top to bottom.
* `column-reverse`: Items are placed bottom to top.

## combination

Help the frogs get to their own lilypads. Although they seem close, it will take both flex-direction and justify-content to get them there.

Notice that when you set the direction to a reversed row or column, start and end are also reversed.

```css
#pond {
	display: flex;
	flex-direction: row-reverse;
	justify-content: flex-end;
}
```

Help the frogs find their lilypads using flex-direction and justify-content.

Notice that when the flex direction is a column, justify-content changes to the vertical and align-items to the horizontal.

```css
#pond {
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
}
```

Help the frogs find their lilypads using flex-direction and justify-content.

Notice that when the flex direction is a column, justify-content changes to the vertical and align-items to the horizontal.

```css
#pond {
	display: flex;
	flex-direction: row-reverse;
	justify-content: center;
	align-items: flex-end;
}
```

## order property

Sometimes reversing the row or column order of a container is not enough. In these cases, we can apply the `order` property to individual items. By default, items have a value of 0, but we can use this property to also set it to a positive or negative integer value (-2, -1, 0, 1, 2).

Use the `order` property to reorder the frogs according to their lilypads.

```css
#pond {
	display: flex;
}

.yellow {
	order: 1;
}
```

## align-self

Another property you can apply to individual items is `align-self`. This property accepts the same values as `align-items` and its value for the specific item.

Aligns a flex item along the cross axis, overriding the `align-items` value.

`flex-start` `flex-end` `center` `baseline` `stretch`

```css
#pond {
	display: flex;
	align-items: flex-start;
}

.yellow {}
```