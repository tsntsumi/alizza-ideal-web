import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`

:root {
  --doc-height: 100%;
  --header-height:64px;
  --bannerTitle: 34px;
  --notFoundTitle: calc(var(--bannerTitle) * 8);
  --borderSpacing: 30px;
  --menuWidth: 100vw;
  --blockquote: 20px;
  --background: rgb(224, 235, 235);
  --primary: rgb(0, 204, 204);
  --key-color: rgba(0, 128, 128, 0.8);
  --key-dark-color: rgba(0, 102, 102, 0.8);
  --key-light-color: rgba(0, 153, 153, 0.8);
  --key-base-color: rgb(224, 235, 235);
  --key-white-color: rgb(244, 255, 255);
  --highlight-color: orange;
  --inActive: #555;
  --letterSpacing: -0.075rem;
  --boxShadow: 0px 15px 22px 3px rgba(0, 0, 0, 0.55);
  --textShadow: 0px 0px 5px rgba(0, 0, 0, 1);
  --p: 11pt;
  --h2: 1.5em;
  --h3: 1.4em;
  --h4: 1.3em;
  --h5: 1.2em;
  --h6: 1.1em;
  --gap: 40px;
  --footnote: 9px;
  --sectionMargin: 60px;

  @media(min-width:375px) {
    --bannerTitle: 36px;
    --h2: 22px;
    --h3: 21px;
    --h4: 20px;
    --h5: 19px;
    --h6: 18px;
    --sectionMargin: 80px;
  }

  @media(min-width:414px) {
    --bannerTitle: 40px;
    --h2: 27px;
    --h3: 25px;
    --h4: 23px;
    --h5: 21px;
    --h6: 20px;
  }

  @media(min-width:768px) {
    --bannerTitle: 46px;    
    --blockquote: 26px;
    --p: 15px;
    --h2: 30px;
    --h3: 28px;
    --h4: 26px;
    --h5: 24px;
    --h6: 22px;
    --sectionMargin: 100px;
  }

  @media(min-width:1024px) {
    --borderSpacing: 75px;
    --p: 16px;
    --h2: 36px;
    --h3: 32px;
    --h4: 29px;
    --h5: 27px;
    --h6: 25px;
    --sectionMargin: 180px;
  }

  @media(min-width:1200px) {
    --p: 17px;
  }
}

* {
    box-sizing: border-box;
    scroll-behavior: smooth;
}  

body {
    font-family: 'Heebo', sans-serif;
    margin: 0 auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: key-base-color;
    color: #fff;
    overflow-x: hidden;
    font-size: var(--p);
    min-height: 100vh;
    overflow-y: scroll;
}

h1,
h2 {
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    line-height: 1.25em;
    font-weight: 700;
    letter-spacing: var(--letterSpacing);
    @media(min-width: 1200px) {
        margin-bottom: 1.5rem;
    }
}

h3,
h4,
h5,
h6 {
  margin-top: 0.5rem;
  margin-bottom: 1rem;
}

h1 {
    font-size: var(--bannerTitle);
}

h2 {
    font-size: var(--h2);
}

h3 {
  font-size: var(--h3);
}

h4 {
  font-size: var(--h4);
}

h5 {
  font-size: var(--h5);
}

h6 {
  font-size: var(--h6);
}

h1 ~ *,
h2 ~ *,
h3 ~ *,
h4 ~ *,
h5 ~ *,
h6 ~ * {
    padding-left: var(--borderSpacing);
    padding-right:  var(--borderSpacing);
}

p {
    margin-top: 0.5em;
    margin-bottom: 1em;
    text-align: justify;
    text-indent: 1em;
}

b,
strong {
  font-weight: 700;
}

i {
  font-style: italic;
}

u {
  text-decoration: underline;
}

hr,
ol,
ul,
blockquote {
  margin-top: 1em;
  margin-bottom: 1em;
}

li {
  margin-left: 2.5em;
  text-align: justify;
  text-indent: 0;
}

hr {
  border: none; 
  height: 2px;
  background-color: #333;
}

a {
  color: white;
  transition: color 0.3s ease;
  cursor: pointer;

  &:hover,
  &:focus {
    text-decoration: none;
  }
}

.header a,
.footer a {
   color: orange;
}

.footer {
  color: white;
}

blockquote {
  font-size: var(--blockquote);
  font-family: 'Times New Roman', Times, serif;
  font-style: italic;
  margin-left: 0;
  border-left: 2px solid var(--primary);
  padding-left: var(--gap);
}

.container {
  margin: 0;

  &__tight {
    max-width: 1400px;
  }

  &__scroll {
    overflow-x: scroll;
    display: flex;
    scroll-snap-type: x mandatory;

    &:-webkit-scrollbar {
      width: 14px;
      height: 4px;
    }
    &:-webkit-scrollbar-thumb {
      background: var(--primary);
      border-radius: 0px;
    }
    &:-webkit-scrollbar-thumb:hover {
      background: var(--primary);
    }
    &:-webkit-scrollbar-track {
      background: #000;
      border-radius: 0px;
    }

    @media (min-width: 1200px) {
      overflow-x: visible;
    }
  }
}

.section {
    padding: 0;

    &.section__padding {
        padding-top: var(--sectionMargin);
        padding-bottom: var(--sectionMargin);
    }
}

.intro__area {
  margin-bottom: calc(var(--gap) * 2);
  max-width: 700px;

  h2 {
    display: inline-block;
    border-bottom: 2px solid rgba(255,255,255,0.15);
  }
}

.learn__more {
  margin-top: calc(var(--gap) * 2);
}

.feed {
  display: flex;
  flex-wrap: wrap;
  gap: var(--gap);
  margin-left: 0;
  margin-right: 0;
  max-width: 1400px;

  >* {
    flex: 0 0 100%;

    @media(min-width:414px) {
      flex-basis: calc(50% - (calc(var(--gap) / 2)));
    }

    @media(min-width:1024px) {
      flex-basis: calc(33.333% - 27px);
    }
  }
}
`
