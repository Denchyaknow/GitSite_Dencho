# Dencho's Portfolio Website

## Main Branch: Develop

### Notes for Dencho by Dencho:

### How to Update the Website with New Posts/Projects

1. Navigate to the following path: `content/projects/`

2. Copy or create a new `POSTNAME.md` file in either of the following folders:
   - `content/projects/experiments/` (for experimental work)
   - `content/projects/contracts/` (for contract work)


3. Create a folder with the same name as your post/project to store media. The structure should look like this:

assets/media/projects/POSTNAME/

4. If done correctly, each media relative path would resemble the following:

assets/media/projects/POSTNAME/XRLog_2020_198.webm assets/media/projects/POSTNAME/XRLog_2020_213.webm

5. In the new `POSTNAME.md` file you created, reference the media by following examples from other posts.

6. You can use the frontmatter to give a hero a background image/video, or add a video/image HTML element after the frontmatter. This will still show up in a project listing.

### How to issue a LongLoading screen for page

So I put in a custom loading screen. To use it, add the following to the frontmatter.text in any block section of the page you want to have a longer loading screen:

```
<div id="longLoadingScreen"></div
```
### Some Splines

```
Cyborg-Looking
<spline-viewer url="https://prod.spline.design/3ajmJqcYvVWbt9Cj/scene.splinecode"></spline-viewer>

Wireframe
<spline-viewer class="spline_cover" url="https://prod.spline.design/JPYWFPf5webjzoW4/scene.splinecode"></spline-viewer>

Living Pattern
<spline-viewer class="spline_cover" url="https://prod.spline.design/K6mwmsaTAQ0-VZyT/scene.splinecode"></spline-viewer>

```

### Callout Notes

```
{{% callout note %}}
Create your slides in Markdown - click the *Slides* button to check out the example.
{{% /callout %}}
{{% callout warning %}}
Here's some important information
{{% /callout %}}
```

### Images

- This only works after fontmatter i think
```
![screen reader text](image.jpg "caption")
```


### Buttons

#### Call to Action Button

```
{{< cta cta_text="Do something" cta_link="/" cta_new_tab="false" >}}
{{< cta cta_text="Button Style 1" cta_new_tab="false" cta_link="/" cta_new_tab="false" >}}
{{< cta cta_text="Button Style 2" cta_link="/" cta_new_tab="false" cta_alt_text="With Alt Action" cta_alt_link="/" cta_alt_new_tab="false" >}}

or 

<button id="anButton" class="btn btn-primary animate__animated">
<img src="/path/to/your/icon.svg" alt="Icon" width="16" height="16" />
Button Style 3
</button>
```

#### Link to a file
- place the file in your static/uploads/ folder and then link to it using the following form:
```html
   {{% staticref "uploads/cv.pdf" "newtab" %}}Download my CV{{% /staticref %}} 
```

#### Audio Clip Player
- To add an audio clip player, use the following shortcode:
```html
{{< audio src="/uploads/audio.mp3" >}}
{{< audio src="markvard.mp3" >}}
```
#### Cite a source
- To cite a page or publication, you can use the cite shortcode, referencing a folder and page name that you created:
```html
{{< cite page="/publication/preprint" view="citation" >}}
```

### Syling

#### Adding Code Snippets
```
```python
# Example of code highlighting
input_string_var = input("Enter some data: ")
print("You entered: {}".format(input_string_var))
```
```

### Adding js frameworks or stylesheets
- Be sure to make javascript inside <script> tags is loaded after footer dom elements, like so:

```html
  <script>
    //Logic goes here
   ScrollReveal({ reset: true });//Safe to use only in footer after loading scroll reveal
    document.addEventListener('DOMContentLoaded', function() {        
      ScrollReveal().reveal('.headline', { delay: 200 });//Safe to use anywhere since its invoking logic after dom is loaded
    });
  </script>
```
### Social Media

#### Github Gists

```html
{{< gist USERNAME GIST-ID  >}}
```

### Scroll Reveal Usages

- All Scroll reveal logic is in the custom.html footer file (cause the header one wont load for some reason)

#### Add support for elements when javascript is disabled with Scrollreveal support
- Find a way to add the html class  .load-hidden to the dom element, when javascript is disable custom styling in custom.scss will take over to make it white and visible, this is to work with scroll reveal for any prehidden elements.