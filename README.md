# stagevars-plugin
Funcmatic middleware that sets API Gateway Stage Variables in ctx.env


### Install

```
$> npm install --save @funcmaticjs/stagevars-plugin
```

### Usage

```js
const StageVarsPlugin = require('@funcmaticjs/stagevars-plugin')
func.use(new StageVarsPlugin())
```

Any API Gateway Stage Variables will now be available in `ctx.env`. 

### Configuration

API Gateway lets you set up a set of variables for each different deployment stage. If you are using API Gateway's Lambda Proxy Integration the value of these variables will show up in the `stageVariables` field of the AWS `event` object.

```js
{
  "httpMethod": "GET",
  ...
  "stageVariables": {
    "VAR1": "hello",
    "VAR2": "world  
  }
}
```

If there are no stage variables in the event, then this plugin will noop.

