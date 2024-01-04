vue2.7-ace-editor
====================


[![npm](https://img.shields.io/npm/v/vue3-ace-editor.svg)](https://www.npmjs.com/package/vue3-ace-editor)


A packaging of [ace](https://ace.c9.io/). fork from [vue3-ace-editor](https://github.com/CarterLi/vue3-ace-editor)
- support vue 2.7
- support vite

## Install

```shell
pnpm add vue2.7-ace-editor ace-builds
```

## Use alias
```json
"dependencies": {
    "vue-ace-editor": "npm:vue2.7-ace-editor@2.2.5",
    "ace-builds": "latest"
}
```

## Import

```vue
<template>
  <editor v-bind="$attrs" v-on="$listeners" :value="value" />
</template>

<script lang="ts">
/**
 * 封装ace-editor
 */
import { PropType, computed, defineComponent, reactive, ref, toRef, toRefs, watch } from 'vue'

import { VAceEditor } from 'vue-ace-editor'
import 'ace-builds/src-noconflict/mode-json'
import 'ace-builds/src-noconflict/mode-html'
import 'ace-builds/src-noconflict/mode-xml'
import 'ace-builds/src-noconflict/mode-javascript'
import 'ace-builds/src-noconflict/mode-python'
import 'ace-builds/src-noconflict/mode-less'
import 'ace-builds/src-noconflict/mode-groovy'
import 'ace-builds/src-noconflict/theme-chrome'

export default defineComponent({
  name: 'ace-editor',
  components: { editor: VAceEditor },
  props: {
    value: { default: '', type: String },
  }
})
</script>
```

## LICENSE

MIT
