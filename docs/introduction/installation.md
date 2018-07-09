# Installation

To install VuePress you should have installed either npm or yarn.

::: warning

You should use yarn if you have webpack 3.x as a dependency. <br>
To install VuePress using npm you must have Node.js >= 8.

:::

[[toc]]

## Global Installation

To install VuePress globally run the following command

```
yarn global add vuepress
```
 OR
 ```
npm install -g vuepress
```
Next we will create a markdown file as we know that when we write documentation, we usually write it in a <strong>README.md </strong> file.

```
echo '# Hello World' > README.md
```
::: tip

Here # is equivalent to h1 tag in HTML, It is related to markdown file syntax

:::
Now to run project and preview it in the browser we can write
```
vuepress dev
```
to build the  project we need to run
```
vuepress build
```
::: tip

Your project will be displayed in localhost/8080 port and after building your project, docs will be available in <strong>.vuepress/dist </strong> folder

 :::



## Local Installation

In an existing project to keep your project documentation inside, the following rules must be followed. We personally suggest to follow these steps as these would be easy to understand and handled by any beginners during the development of any project.

Create a project directory
```
mkdir vuepress_project
```
Then go into that directory
```
cd vuepress_project
```
Install VuePrss wih <strong>yarn</strong>
```
yarn add vuepress
```
Or You can install it with <strong> npm </strong>
```
npm install vuepress --save
```
Now create a folder in your root named docs and run the following
```
echo '# Hello VuePress' > README.md
```
This will create a README.md file in the docs folder <strong>docs/README.md</strong>

Now we need to add scripts to <strong>package.json</strong> file. If you have <strong>package-lock.json</strong> then you can create <strong> package.json </strong> file
```
{
     "scripts": {
       "docs:dev": "vuepress dev docs",
       "docs:build": "vuepress build docs"
     }
   }
```
now you can run the following command to run and build
```
npm run docs:dev
#generate files using
npm run docs:build
```
There you go,You can now work with VuePress. :tada: :tada: :tada:
<br>

<modal></modal>
