# React Awesome IFrame

React Awesome IFrame Components. Adding Loading Options and loadFunc, you can do something when load iframe

# Installation

<code> npm install react-awesome-iframe</code>

_or_

<code>yarn add react-awesome-iframe</code>

# Usage - Sample

```jsx
import React from "react";
import IFrame from "react-iframe";

const iframeProps = {
    loading: true,
    loadingText: "加载中",
    width: "100%",
    height: window.innerHeight - 30,
    src: "https://xxx",
    loadFunc: function() {
        alert("already loaded, now you can do something.");
    }
};

const Example = () => <IFrame {...iframeProps} />;

export default Example;
```
### 效果图如下
<img src="https://raw.githubusercontent.com/laurus-tech/react-awesome-iframe/master/public/images/loadFunc.png" alt='效果图' />

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
<td>loadingText</td>
<td>Loading Text Show</td>
<td>string</td>
<td>Loading</td>
</tr>

<tr>
<td>loadFunc</td>
<td>loadFunc Function, when Load, you can do something</td>
<td>function(e)</td>
<td></td>
</tr>

</tbody>
</table>

## <i>Tips: You can also use default Props</i>

# Default Properties

**allow**            - _Specifies a feature policy for the iframe_.

**allowfullscreen**  - _allow iframe fullscreen_.

**src**              - _string_ if set, overrides _url_.

**scrolling**        - _string_ not set if if not provided (deprecated in HTML5).

**frameBorder**      - _number_ default to "0" (deprecated in HTML5).

**longdesc**         - _A URL of a long description of the frame's content. Due to widespread misuse, this is not helpful for non-visual browsers_. )

**height**           - _string_ (1px > any number above 0, or 1% to 100%)

**width**            - _string_ (1px > any number above 0, or 1% to 100%)

**sandbox**          - add optional sandbox values ("allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-top-navigation")

**other props**      - _iframe can support's props_

# License

MIT
