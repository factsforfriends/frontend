# Facts for Friends
Die Progressive Webapp Facts for Friends stellt kurze und leicht verständliche Gegenargumente (Fact Snacks) zu gängigen Fake News - insbesondere zu COVID-19 - bereit und macht Dich zur:zum Fakten-Influencer:in.

Engagierte Bürger:innen finden dort teilbare Fact Snacks, mit denen sie Fake News in ihrem privaten Umfeld begegnen können - auch dann, wenn es ihnen an Wissen und/oder Zeit fehlt, um selbst zu recherchieren oder lange aufklärende Texte zu schreiben. Als Multiplikator:innen und Fakten-Influencer erreichen sie so mit geringem Aufwand Personen in ihrem direkten privaten Umfeld, die in gutem Glauben falsche Informationen und Nachrichten teilen. 

## Tech-Stack
* NextJS
* React
* TailwindCSS
* now

## Features
* PWA
* Offline Support
* List/Read Facts
* Search for Facts
* Tagging
* Share Facts

## Run locally

### One-Time Setup

Must have [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) and [Node.js](https://nodejs.org/en/) installed:

1. `git clone https://github.com/pingboard/next-pwa-boilerplate`
2. `npm i`
3. Replace all images in `./static/graphics/` with your desired app icons, splash screens, and thumbnail for social sharing. If you have Sketch, you can use the artboards included in `./graphics.sketch`. Ensure that all replacement graphics include the same filenames, file type, and dimensions.

### Run

`npm run dev` and go to http://localhost:3000

## Deploying

### One-Time Setup

1. Make an account on [ZEIT](https://zeit.co).
2. Install Zeit’s Now CLI: `npm install -g now`
3. Change the name and alias on `now.json` to your unique string. If you don’t have a full domain with ZEIT, `yourUniqueString.now.sh` will the domain.
4. Replace the `next-pwa-boilerplate` inside `https://next-pwa-boilerplate.now.sh` in `./pages/_document.js` with the same string as the previous step.

### Deploy

`npm run deploy`


## Technologies Used

- [React.js](https://reactjs.org/) - A JavaScript library for building user interfaces
- [Styled Components](https://www.styled-components.com/) - Use the best bits of ES6 and CSS to style your apps without stress
- [Next.js](https://nextjs.org/) - A minimalistic framework for server-rendered React applications
- [ZEIT Now 2](https://zeit.co/now) for hosting the app on the web with auto-scaling, auto-renewing of SSL certs, and the ability to add any lambda functions in any other language
