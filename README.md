# Take-me-away

[中文文档 / Chinese](#Take-me-away-zh)

This is a Tampermonkey script that can help you quickly leave a page.

Open [this link](https://raw.githubusercontent.com/Hsiao-Feng/Take-me-away/main/take-me-away.js) or copy [take-me-away.js](take-me-away.js) into Tampermonkey to work.
By default, **pressing the ESC key three times within two seconds** will leave the page and jump to a page of the University of Science and Technology of China.

You can also customize some parameters. Edit constants in [take-me-away.js](take-me-away.js) to customize.

```javascript
tma_JUMP_URL   //Link to jump to after leaving
tma_KEY_TIMES  //Number of presses
tma_PRESS_TIME //Maximum time spent for pressing the key (ms)
```

Default parameters: press **3** times in **2** seconds, jump to **https://yz.ustc.edu.cn/** .

```javascript
const tma_JUMP_URL = "https://yz.ustc.edu.cn/";
const tma_KEY_TIMES = 3;
const tma_PRESS_TIME = 2 * 1000;
```

# Take-me-away-zh
这是一个可以让你快速离开当前页面的 Tampermonkey 脚本。

打开[这个链接](https://raw.githubusercontent.com/Hsiao-Feng/Take-me-away/main/take-me-away.js)或是复制 [take-me-away.js](take-me-away.js) 到 Tampermonkey 即可使用。

默认情况下，在**两秒内按下三次 ESC 键**就可以离开当前页面并跳转到中国科学技术大学的网站。

你也可以自定义参数。编辑 [take-me-away.js](take-me-away.js) 中的常量即可。

```javascript
tma_JUMP_URL   //离开页面后跳转到的链接
tma_KEY_TIMES  //按下按键的次数
tma_PRESS_TIME //按下按键所用的最大时间（毫秒）
```

默认参数： **2** 秒内按下 **3** 次 ESC 键跳转到 **https://yz.ustc.edu.cn/** .

```javascript
const tma_JUMP_URL = "https://yz.ustc.edu.cn/";
const tma_KEY_TIMES = 3;
const tma_PRESS_TIME = 2 * 1000;
```
