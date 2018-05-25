# icon 的各种做法
### 一、img 法
### 二、background 法
### 三、background 合一法(精灵图)
### 四、font 法（CSS引入）
### [五、SVG 法（JS引入，今后的主流）](http://www.iconfont.cn/help/detail?spm=a313x.7781069.1998910419.d8cf4382a&helptype=code)
#### symbol引用
- 这是一种全新的使用方式，应该说这才是未来的主流，也是平台目前推荐的用法。相关介绍可以参考这篇文章 这种用法其实是做了一个svg的集合，与上面两种相比具有如下特点：
    1. 支持多色图标了，不再受单色限制。
    2. 通过一些技巧，支持像字体那样，通过font-size,color来调整样式。
    3. 兼容性较差，支持 ie9+,及现代浏览器。
    4. 浏览器渲染svg的性能一般，还不如png。

- 使用步骤如下：
    - 第一步：拷贝项目下面生成的symbol代码：
    `//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js`
    - 第二步：加入通用css代码（引入一次就行）：
    ```
    <style type="text/css">
        .icon {
        width: 1em; height: 1em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
        }
    </style>
    ```
    - 第三步：挑选相应图标并获取类名，应用于页面：
    ```
    <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-xxx"></use>
    </svg>
    ```
### [六、新手慎用：「CSS 就是干」法（自虐苦修CSS法）](http://cssicon.space/#/icon/rain)