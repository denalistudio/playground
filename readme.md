# Comma
*Comma* is by definition **content management system** designed to make **creating** and **managing** websites easier, but it is much more than that in reality.

> **comma** (noun) [kom-*uh*]
> 1. the sign "**,**", a mark of division used for indicating a division in a sentence
> 2. a **co**ntent-**m**-**ma**nagement system that will change the intentet as we know it

| Table of contents |  |
| - | - |
| [Components](#components) |  |
| [Markdown](#markdown) |  |

## [Components](components/components.md)

All components being developed can be found in [components](components/components.md) and must be explained documented within their Markdown document.

## Markdown

*Markdown* is a lightweight markup language created by [John Gruber](https://daringfireball.net/) made as an easy-to-write and easy-to-read language for writers. The language can output HTML and any HTML syntax is valid in Markdown. Read more in this [Daring Fireball article](https://daringfireball.net/projects/markdown/) by the creator. The language became popular among programmers for its convenience and was popularized as the [README](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes) language for [GitHub](https://github.com/).

### Syntax

#### Emphasis

```
**bold**
*italic*
~~strikethrough~~
```
 
#### Headers

```
# Header 1
## Header 2
### Header 3
#### Header 4
```
 
#### Lists

```
* Generic list item
* Generic list item
* Generic list item
 
1. Numbered list item 1
2. Numbered list item 2
3. Numbered list item 3
```

#### Links

```
[Text to display](http://www.example.com)
```
 
#### Quotes

```
> This is a quote, this entire guide is in a quote.
> It can span multiple lines!
```
 
#### Images

```
![](http://www.example.com/image.jpg)
```
 
#### Tables

```
| Column 1 | Column 2 | Column 3 |
| -------- | -------- | -------- |
| John     | Doe      | Male     |
| Mary     | Smith    | Female   |

Or without aligning the columns...

| Column 1 | Column 2 | Column 3 |
| -------- | -------- | -------- |
| John | Doe | Male |
| Mary | Smith | Female |
```
 
#### Code

```
`var example = "hello!";`

Or spanning multiple lines...
 
```ㅤ
var example = "hello!";
alert(example);
```ㅤ
```

### Example pages

#### Component page

```
[readme](../../readme.md) / [components](components.md) / [myComponent](myComponentLink.md)
 
# myComponent example site
 
The short description included in the table on this site

Much longer description, because it needs larger description, because it needs larger description, because it needs larger description, because it needs larger description, because...

|  files | size | type |
|-|-|-|
| [file1.html](src/index.html) | 0.0 kB | .html |
| [image2.svg](src/logo.svg) | 4.2 kB | .svg |
| [icon.ico](src/favicon.ico) | 6.9 kB | .ico |
```

---
Copyright &copy; 2021 Jakub Klapka & David Brzý. All rights reserved.