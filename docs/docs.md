# Docs

|  name | description | people | created |
|-|-|-|-|
| [editor](editor/editor.md) | A simple markwon editor with it's own Markdown parser, load and save functionality and much more | **@jakubklapka** | 5/11/21 |
| [construction](construction/construction.md) | An on/off page that you can easily hide your website behind when making changes or updating it | **@jakubklapka** | 06/21 |
| [cookies](cookies/cookies.md) | A simple cookie popup component that connects user's consent to Google Analytics | **@davidbrzy** | 27/10/21 |

## Ideas

Simply click on any of the items to create the folder path and [Markdown](../markdown.md) file.

|  name | description |
|-|-|
| [feedback](feedback/feedback.md) | A lot of the times, there are [Happy or Not](https://www.happy-or-not.com/en/use-cases/retail/) buttons in physical stores - let's put simple [feedback buttons](https://twitter.com/drmzio/status/1445200552212664327?s=20) in online stores too, to better understand what customers like and what they do not |
| [calendars](calendars/calendars.md) | Anyone can use [Google Calendar](https://www.google.com/calendar) - it's simple and powerful. Let's use this tool to make an event calendar for websites, where they can edit and change events inside Google Calendar and automatically update it on websites |
| [reservations](reservations/reservations.md) | A simple reservation system for restaurants, jump parks and other businesses |

## Code locker

### youtube.js

```js
function YouTubeGetID(url){
    url = url.split(/(vi\/|v%3D|v=|\/v\/|youtu\.be\/|\/embed\/)/);
    return undefined !== url[2]?url[2].split(/[^0-9a-z_\-]/i)[0]:url[0];
};
```
