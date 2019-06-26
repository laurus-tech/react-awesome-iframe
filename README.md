# React IFrame

React IFrame Components. Adding Loading

# Installation

<code> npm install react-iframe</code>

_or_

<code>yarn add react-iframe</code>

# Usage - Sample

```jsx
import React from "react";
import IFrame from "react-iframe";

const iframeProps = {
    title: "your nick title",
    src: "http://your url",
    width: "100%",
    height: "100%"
};

const Example = () => <IFrame {...iframeProps} />;

export default Example;
```

# Properties

<table>
<thead>
<tr>
<th>Attribute</th>
<th>Desc</th>
<th>Type</th>
<th>Default Value</th>
</tr>
</thead>
<tbody>
<tr>
<td>loading</td>
<td>need show iframe loading</td>
<td>boolean</td>
<td>true</td>
</tr>

<tr>
<td>loadingType</td>
<td>loading Types can Choose: balls, bars, bubbles, cubes, cylon, spin, spinningBubbles,spokes, blank</td>
<td>string</td>
<td>spin</td>
</tr>

<tr>
<td>onLoad</td>
<td>onLoad Function, after Load, you can do something</td>
<td>function(e)</td>
<td></td>
</tr>

</tbody>
</table>

<i>Tips: You can also use default Props</i>

# Default Properties

**allow** - _Specifies a feature policy for the iframe_.

**allowfullscreen** - _allow iframe fullscreen_.

**src** - _string_ if set, overrides _url_.

**scrolling** - _string_ not set if if not provided (deprecated in HTML5).

**frameBorder** - _number_ default to "0" (deprecated in HTML5).

**longdesc** - _A URL of a long description of the frame's content. Due to widespread misuse, this is not helpful for non-visual browsers_. )

**height** - _string_ (1px > any number above 0, or 1% to 100%)

**width** - _string_ (1px > any number above 0, or 1% to 100%)

**sandbox** - add optional sandbox values ("allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-top-navigation")

**other props** - _iframe can support's props_

# License

MIT
