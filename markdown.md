# Markdown guide

## Syntax

### Emphasis

```
**bold**
*italic*
~~strikethrough~~
```
 
### Headers

```
# Header 1
## Header 2
### Header 3
#### Header 4
```
 
### Lists

```
* Generic list item
* Generic list item
* Generic list item
 
1. Numbered list item 1
2. Numbered list item 2
3. Numbered list item 3
```

### Links

```
[Text to display](http://www.example.com)
```
 
### Quotes

```
> This is a quote, this entire guide is in a quote.
> It can span multiple lines!
```
 
### Images

```
![](http://www.example.com/image.jpg)
```
 
### Tables

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
 
### Code

```
`var example = "hello!";`

Or spanning multiple lines...
 
```ㅤ
var example = "hello!";
alert(example);
```ㅤ
```

## Example pages

### Component page

```
[readme](../../readme.md) / [components](components.md) / [myComponent](myComponentLink.md)
 
# myComponent example site
 
Short description included in the table on this site

Much longer description, because it needs larger description, because it needs larger description, because it needs larger description, because it needs larger description, because..

|  files | size | type |
|-|-|-|
| [file1.html](src/index.html) | 0.0 kB | .html |
| [image2.svg](src/logo.svg) | 4.2 kB | .svg |
| [icon.ico](src/favicon.ico) | 6.9 kB | .ico |
```