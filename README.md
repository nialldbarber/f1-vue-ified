# F1 Vue-i-fied 🏎️ 🏎️️️️ 🏎️️️

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

---

I've made this app with [GraphQL with a MongoDB database](https://github.com/nialldbarber/f1) and then just a purely front end [React/Redux](https://github.com/nialldbarber/f1-reduxified) one.

Now I want to do a series on how to make each one with the main players in front end frameworks - `React`, `Vue` and `Svelte` (and maybe `Angular`!). I'll create a blog on [my website](https://blog.nialldbarber.com/) for each iteration noting the differences and perhaps advantages of each one and where each one fails in a particular category.

This is also a learning experience for me, as I am most comfortable using `React`, so this gives me a chance to learn the new `Vue 3` release and `Svelte`.

The application is a simple table that will display F1 drivers who have won a championship. You can then click through to said driver and view more stats about them. I will be fetching the data from one source I modified from a CSV.

---

![Site](public/screenshots/graph.png?raw=true 'Graph')

---

![Site](public/screenshots/drivers.png?raw=true 'Drivers')

---

![Site](public/screenshots/driver.png?raw=true 'Driver')

---

## Todos

- [ ] Fetch api - get drivers and display them in Grid component

### Components

- [x] Grid
- [ ] Table headers
- [ ] Table rows
- [ ] Driver details box
- [x] Header
- [x] Navigation
- [x] Search bar
