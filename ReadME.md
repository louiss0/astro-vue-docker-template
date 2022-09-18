# Astro Docker Template 
git 

This template is a template that contains two main folders the app folder and the dockerfile. 

Astro is used as my static site generator. Vue is the Ui framework of choice. Tailwind css is the framework of choice.
I use two remark plugins in my code `remark-html-directives` and `remark-directive`. Please don't touch what is in the config folder. 
The configuration is important. **Warning!** don't use `npm` over `pnpm`. You wont be able to to use volumes at all 
Symlinks can't be transferred from one file to another and pnpm will slow things down a lot you don't want that. 

I discovered that every time you download something new you need to then kill the image and start all over again to me this is not productive.
I created this template because I don't like to download the node installer at all. But Other that that there are quite a few topics to cover.


## Sections 

[Project Folder Structure](#project-folder-structure)

[Config Files](#config-files)

[Rules Regarding Projects](#rules-regarding-projects)


## [Project Folder Structure](#sections) 

```
    app---src---|___layouts
                |___components
                |___composables
                |___components
                |___stores
                |___types

    dockerfiles---|
                  |___npm.dockerfile
                  |___preview.dockerfile
                  |___astro.dockerfile
                  |___server.dockerfile

```


## [Config Files](#sections)

There are three config files that are very important to keep the way they are.

- `tailwind.config.cjs`
- `astro.config.ts`
- `tsconfig.json`

### Tailwind Config

```js
{
darkMode: "class",
content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
}
```

- The `darkMode:"class"` is used to enable the use of dark mode for most classes

- The `content:` allows tailwind to search for all files with classes in them in order to write them to the style sheet 


### Astro Config

```ts 

export default defineConfig({

  integrations: [tailwind(), vue()],
  server: {
    host: true,
  },
  vite: {
    resolve: {
      alias: {
        "@": "/src",
      },
    },
    ssr: {
      external: ["svgo"],
    },
    server: {
      watch: {
        usePolling: true,
      },
    },
  },
});


```



### Ts Config

```
"baseUrl": ".",
"paths": {
    "@/*": ["./src/*"],
}
```

These two setting are very important the `"."` refers to the folder that the tsconfig is in.
The paths stops typescript from throwing an error when I use `"@"` to refer to the src file.   


## [Rules Regarding Projects](#sections)


Astro is a framework that does not allow me to create real apps from now on I will need to follow a set of restrictions regarding This framework.  
Because of the limitations oof astro and the fact that I need to make sure that I remain consistent. I'm going to have to follow these rules.

1. The `BaseLayout` component is the root layout it will only be used to create other layouts

2. Global Styles must only be declared in the `BaseLayout` layout. 
    
    - This means `<style is:global>` cannot be used on other layouts   

3. The `index.astro` file must always be used to create all my first pages unless told otherwise 

4. The articles that are written must be written by using `"remark-html-directives"`

5. New layouts will not change anything about The styles that were created in the `BaseLayout`

6. Every article front-matter will use the below format

```yaml

author: 

aliases: []

tags: []

created:  
 
 day: 
 
 time: 


```
7. The `HMFLayout will not change under any circumstances`

8. The `HMFLayout only be used if Two slots are to be used`

