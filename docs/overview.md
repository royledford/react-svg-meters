**Create a meter**

<span style="color: #666; font-size: 14px; font-family: sans-serif;">Install</span>

```bash
npm install react-svg-meters
```

<span style="color: #666; font-size: 14px; font-family: sans-serif;">or</span>

```bash
yarn add react-svg-meters
```

<span style="color: #666; font-size: 14px; font-family: sans-serif;">Add it to a react component</span>

```bash
import React from 'react';
import CircleMeter from 'react-svg-meters'

const ReactSampleMeter = () => {
  <div style={{padding: '20px'}>
    <CircleMeter size={100} value={75}>
  </div>
}
```

```js noeditor
<div style={{ padding: '20px' }}>
  <CircleMeter value={75} size={100} style={{ margin: '0 20px' }} />
</div>
```

<span style="color: #666; font-size: 14px; font-family: sans-serif;">Change the way it looks</span>

```bash
import React from 'react';
import CircleMeter from 'react-svg-meters'

const ReactSampleMeter = () => {
  <div style={{padding: '20px'}>
    <CircleMeter size={100} value={75} thickness={30} foregroundColor="#C9283E" backgroundColor="#820333">
  </div>
}
```

```js noeditor
<div style={{ padding: '20px' }}>
  <CircleMeter value={75} size={150} thickness={30} foregroundColor="#C9283E" backgroundColor="#820333" />
</div>
```
