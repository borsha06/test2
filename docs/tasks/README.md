
# Things We Can Do with VuePress
In this secton we will discuss some idea of what we can do using VuePress. So Let's get started

[[toc]]
## Configuration
using config file

For configuring the file with specific title and description we can edit our config.js file. For that we have to create a folder named <strong>.vuepress</strong> inside the <strong> docs </strong> directory.
then we can configure it as follows
```
module.exports = {
  title: 'A Book of VuePress by VuePress',
}
```
As we have developed the site with VuePress so we are showing the exact codes we have used.

## Handling images
You can place images by the following rules in markdown file.
```
![An image](./img.png)
```
By this the image will be placed in the page where you need it.

## Links
Each Sub-Directory should have <strong> README.md </strong> file. To Create a link we need to define a path by adding <strong>/</strong>
in front and back, Otherwise it will show error.

::: warning

/link/ should be like this not /link

:::

## Front Matter
Front Matter is also supported. We can write it as below
```
---
home: true
heroText: Hey Folks, It's about VuePress
actionText: Let's Go →
actionLink: /introduction/
---
```
<div>
<ul>
<li>We have set the home to 'true' indicating that it is the home page. </li>
<li>heroText indicates a huge text showing what the site is about.</li>
<li>actionText shows a text is like a button indicating to go to the page we will define.</li>
<li>actionLink guides us to the definite page. </li>
</ul>
</div>

you can alo add <strong> heroImage </strong> which shows a image at the center of the homepage of a site.
```
---
heroImage: image.png
---
```
## Table of contents
As in the pages you have been through you have seen a table of content so that you can jump to a section of your choice. You can write it in your markdown file as follows
```
[[toc]]
```
## Custom Containers
No you can add tips, warning, danger on the go as following code

```
::: tip
Follow This Tip
:::
```
```
::: warning
It's a warning
:::
```

::: tip
Follow this tip
:::

::: warning
It's a warning
:::
## NavBar
As In this site you can see that there is a navigating bar in the top right, so that you can access page on the go. It is done by writing the following code in config.js. <br>


```
    themeConfig:{
          nav: [
                    {text: 'Installation', link: '/introduction/'},
                    {text:'Things You Can Do', link: '/tasks/'},

              ],
}
```

You can disable navbar globally in config.js using



```
module.exports = {
  themeConfig: {
    navbar: false
  }
  }

# Or Only in a single page
---
navbar: false
---
```

## SideBar

As you can see the Sidebar in this page, This is the way we can add it

```
     sidebar: [
            {
                title: 'Installation',
                collapsable: false,
                children: [
                    '/introduction/'
                ]
            },
            {
                title: 'Things You Can Do',
                collapsable: false,
                children: [
                    '/tasks/'
                ]
            }
        ]
```

That's it for today.






