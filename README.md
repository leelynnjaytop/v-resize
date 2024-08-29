# lljtop-v-resize

> vue-resize-package

## Install

```
npm install lljtop-v-resize --save
```

## Usage

### hook写法

template

```html
<div id="myElement"></div>
```

script

```typescript
import useResize from "lljtop-v-resize";
import { onMounted } from "vue";

onMounted(() => {
  useResize(document.querySelector("#myElement") as HTMLElement, (e) => {
    // 操作e
    console.log(e);
  });
});
```


### 自定义指令写法

main.ts

```typescript
import useResize from "lljtop-v-resize";

createApp(App).use(useResize).mount("#app");
```

template

```html
<div v-resize="handleResize" id="myElement"></div>
```

script

```typescript
const handleResize = (e: Event) => {
  // 操作e
  console.log(e);
};
```
