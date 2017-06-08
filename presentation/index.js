// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  Code,
  Deck,
  Heading,
  Image,
  ListItem,
  List,
  Quote,
  S,
  Slide,
  Text
} from "spectacle";
import CodeSlide from "spectacle-code-slide";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");
require("./index.css");

const images = {
  bored: require("../assets/bored.jpg"),
  init: require("../assets/init.png"),
  installGlobal: require("../assets/installGlobal.png"),
  bash: require("../assets/bash.png"),
  unsplash: require("../assets/unsplash.jpg")
};

preloader(images);

const theme = createTheme(
  {
    primary: "#263238",
    secondary: "#2196F3",
    tertiary: "#fff"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["fade"]} transitionDuration={500} theme={theme}>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={2} fill lineHeight={1} textColor="secondary">
            Building a Node CLI with Commander
          </Heading>
          <Text margin="1em 0 0" textColor="tertiary" textSize="48px">
            by Bernardo Pacheco
          </Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={4} textColor="secondary" caps>
            What is a CLI?
          </Heading>
          <BlockQuote>
            <Quote textColor="primary" textSize="48px">
              A <u>C</u>ommand-<u>L</u>ine <u>I</u>nterface is a means of
              interacting with a
              computer program where
              the user issues commands to the program in the form of successive
              lines of text
            </Quote>
            <Cite textColor="primary">Wikipedia</Cite>
          </BlockQuote>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={4} textColor="secondary" caps>
            CLI Examples
          </Heading>
          <List>
            <ListItem>Ember CLI</ListItem>
            <Appear><ListItem>Git</ListItem></Appear>
            <Appear><ListItem>Homebrew</ListItem></Appear>
            <Appear><ListItem>npm</ListItem></Appear>
            <Appear><ListItem>Yarn</ListItem></Appear>
            <Appear><ListItem>Yeoman</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary">
          <Image src={images.bored} margin="0 auto 40px" />
          <Heading size={4} caps fill textColor="tertiary">
            Enough theory already... how do I build one?
          </Heading>
        </Slide>

        <Slide
          transition={["fade"]}
          bgDarken={0.75}
          textAlign="left"
          bgImage={images.unsplash}
        >
          <Heading size={4} caps fill textColor="secondary">
            What are we building?
          </Heading>
          <Appear>
            <Heading size={6} caps textColor="tertiary" margin="2rem 0 3rem">
              Unspray
            </Heading>
          </Appear>
          <Appear>
            <Text textColor="tertiary" margin="0 0 1rem" textAlign="left">
              Search Unsplash.com for photos
            </Text>
          </Appear>
          <Appear>
            <Code
              bgColor="#666"
              textColor="tertiary"
              textSize="2rem"
              className="code--left"
            >
              ➜ unspray search -q beach -p 1 -r 20
            </Code>
          </Appear>
          <Appear>
            <Text textColor="tertiary" margin="2rem 0 1rem" textAlign="left">
              Save a photo to your computer
            </Text>
          </Appear>
          <Appear>
            <Code bgColor="#666" textColor="tertiary" textSize="2rem">
              ➜ unspray save -i 2UbJtgQp8VQ -Q thumb
            </Code>
          </Appear>
          <Appear>
            <Text textColor="tertiary" margin="2rem 0 1rem" textAlign="left">
              Set a photo as your wallpaper
            </Text>
          </Appear>
          <Appear>
            <Code bgColor="#666" textColor="tertiary" textSize="2rem">
              ➜ unspray set-wallpaper -i 2UbJtgQp8VQ -s fill
            </Code>
          </Appear>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={4} caps textColor="secondary">
            Getting Started
          </Heading>
          <Image src={images.init} margin="10px auto 0" width="840px" />
        </Slide>

        <CodeSlide
          transition={["fade"]}
          lang="javascript"
          bgColor="#263238"
          code={require("raw-loader!../assets/package.json.example")}
          ranges={[
            { loc: [0, 13], title: "package.json" },
            { loc: [7, 10], title: "Install executable" }
          ]}
        />

        <CodeSlide
          transition={["fade"]}
          lang="javascript"
          bgColor="#263238"
          code={require("raw-loader!../assets/index-01.example")}
          ranges={[
            { loc: [0, 8], title: "index.js" },
            { loc: [0, 1], title: "shebang" },
            { loc: [4, 7], title: "Log a message" }
          ]}
        />

        <Slide transition={["fade"]} bgColor="tertiary">
          <Code>npm install -g</Code>
          <Appear>
            <Image src={images.installGlobal} margin="0 auto" width="840px" />
          </Appear>
          <Appear>
            <Code margin="-0.5rem 0 0 0">
              npm link
            </Code>
          </Appear>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={4} caps textColor="secondary">
            Parsing command line arguments
          </Heading>
          <Appear>
            <Image src={images.bash} margin="2rem auto 0" width="840px" />
          </Appear>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={4} textColor="tertiary">
            npm install commander -S
          </Heading>
        </Slide>

        <CodeSlide
          transition={["fade"]}
          lang="javascript"
          bgColor="#263238"
          code={require("raw-loader!../assets/index-02.example")}
          ranges={[
            { loc: [0, 29], title: "index.js" },
            { loc: [2, 3], title: "Require commander" },
            { loc: [8, 10], title: "Version" },
            { loc: [10, 14], title: "Search Command" },
            { loc: [14, 18], title: "Save Command" },
            { loc: [18, 22], title: "Set Wallpaper Command" },
            { loc: [22, 23], title: "Parse" },
            { loc: [24, 27], title: "Help" }
          ]}
        />

        <CodeSlide
          transition={["fade"]}
          lang="javascript"
          bgColor="#263238"
          code={require("raw-loader!../assets/unspray-search.example")}
          ranges={[
            { loc: [0, 48], title: "unspray-search.js" },
            { loc: [0, 2], title: "Shebang & require" },
            { loc: [7, 12], title: "options/flags" },
            { loc: [12, 16], title: "options/flags" },
            { loc: [16, 22], title: "options/flags" },
            { loc: [22, 23], title: "Parse" },
            { loc: [27, 31], title: "Use values" }
          ]}
        />

        <CodeSlide
          transition={["fade"]}
          lang="javascript"
          bgColor="#263238"
          code={require("raw-loader!../assets/unspray-save.example")}
          ranges={[
            { loc: [0, 66], title: "unspray-save.js" },
            { loc: [20, 24], title: "photo id" },
            { loc: [24, 30], title: "directory" },
            { loc: [11, 14], title: "coercion function" },
            { loc: [30, 36], title: "Regex" }
          ]}
        />

        <CodeSlide
          transition={["fade"]}
          lang="javascript"
          bgColor="#263238"
          code={require("raw-loader!../assets/unspray-set-wallpaper.example")}
          ranges={[
            { loc: [0, 76], title: "unspray-set-wallpaper.js" },
            { loc: [37, 43], title: "wallpaper scale" }
          ]}
        />

        <Slide transition={["fade"]} bgColor="primary">
          <Heading caps size={2} textColor="tertiary">Demo Time</Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={4} caps textColor="secondary" margin="0 0 1em">
            Learn more
          </Heading>
          <Text
            textSize="32px"
            margin="0.5em 0"
            textColor="tertiary"
            textAlign="left"
          >
            <S type="bold">chalk</S> - https://github.com/chalk/chalk
          </Text>
          <Text
            textSize="32px"
            margin="0.5em 0"
            textColor="tertiary"
            textAlign="left"
          >
            <S type="bold">commander.js</S> - https://github.com/tj/commander.js
          </Text>
          <Text
            textSize="32px"
            margin="0.5em 0"
            textColor="tertiary"
            textAlign="left"
          >
            <S type="bold">figlet.js</S> - https://github.com/patorjk/figlet.js
          </Text>
          <Text
            textSize="32px"
            margin="0.5em 0"
            textColor="tertiary"
            textAlign="left"
          >
            <S type="bold">imgcat</S> - https://github.com/egoist/imgcat
          </Text>
          <Text
            textSize="32px"
            margin="0.5em 0"
            textColor="tertiary"
            textAlign="left"
          >
            <S type="bold">ora</S> - https://github.com/sindresorhus/ora
          </Text>
          <Text
            textSize="32px"
            margin="0.5em 0"
            textColor="tertiary"
            textAlign="left"
          >
            <S type="bold">request</S> - https://github.com/request/request
          </Text>
          <Text
            textSize="32px"
            margin="0.5em 0"
            textColor="tertiary"
            textAlign="left"
          >
            <S type="bold">wallpaper</S> -
            https://github.com/sindresorhus/wallpaper
          </Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary">
          <Heading caps size={2} textColor="tertiary">Thank You</Heading>
        </Slide>
      </Deck>
    );
  }
}
