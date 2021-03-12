# Easy Form Persist (`ezFormPersist`)
## About
I built this as a quick, simple tool for myself and my Full Time team.
As Webflow designers, we often need a quick way to implement Cookies on a form without extensive knowledge of cookies, or JavaScript.
## How to Use

### 1. Install the Script
Add the following code to the bottom of the "Footer Code" in [Webflow Project] / Settings / Project Settings.
*Another option is to use this on any website.*
```
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/pbbbl/ezFormPersist/dist/ezFormPersist.js"></script>
<script type="text/javascript">
ezFormPersist();
</script>

```
### 1. Using in the Webflow Designer
#### A. Add the `data-save-field` data-attribute to a suported element
In the right-hand panel, after selecting a supported element (see below), add the following attribute to the element that you want saved, even after the page is reloaded.
##### Attribute
```
data-save-field
```
##### Value
The `value` represents the number of days the Cookie will last and data will be auto-filled on a form.
```
true 
```
OR
```
[# of days to expire]
```
###### NOTE
- Any number above `1` is valid.
- Default expiration is `31` days (if value is set to true).
##### In Code
````
<input type="text" data-save-field="true" />
<!-- Any user-input-value will be saved for 31 days -->
````
## Unsupported fields
- Does not support `radio` or `checkbox` inputs
- Does not support `textarea`.