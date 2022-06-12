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
* `stretch`: Items are stretched to fit the container.

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
	flex-direction: row-reverse;
	justify-content: center;
	align-items: flex-end;
}
```