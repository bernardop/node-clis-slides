// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Image,
  ListItem,
  List,
  Quote,
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
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png"),
  bored: require("../assets/bored.jpg"),
  init: require("../assets/init.png"),
  installGlobal: require("../assets/installGlobal.png")
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
      <Deck
        transition={["zoom", "slide"]}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={2} fill lineHeight={1} textColor="secondary">
            Building a Node CLI with Commander
          </Heading>
          <Text margin="1em 0 0" textColor="tertiary" textSize="48px">
            by Bernardo Pacheco
          </Text>
        </Slide>

        <Slide transition={["slide"]} bgColor="tertiary">
          <Heading size={4} textColor="secondary" caps>
            What is a CLI?
          </Heading>
          <BlockQuote>
            <Quote textColor="primary" textSize="48px">
              A command-line interface is a means of interacting with a computer program where
              the user issues commands to the program in the form of successive lines of text
            </Quote>
            <Cite textColor="primary">Wikipedia</Cite>
          </BlockQuote>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary" textColor="tertiary">
          <Heading size={4} textColor="secondary" caps>
            CLI Examples
          </Heading>
          <List>
            <ListItem>Ember CLI</ListItem>
            <ListItem>Git</ListItem>
            <ListItem>Homebrew</ListItem>
            <ListItem>npm</ListItem>
            <ListItem>Yarn</ListItem>
            <ListItem>Yeoman</ListItem>
          </List>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Image src={images.bored} margin="0 auto 40px" />
          <Heading size={4} caps fill textColor="tertiary">
            Enough theory already... how do I build one?
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="tertiary">
          <Heading size={4} caps textColor="secondary">
            Getting Started
          </Heading>
          <Image src={images.init} margin="10px auto 0" width="840px" />
        </Slide>

        <CodeSlide
          transition={["slide"]}
          lang="javascript"
          bgColor="#263238"
          code={require("raw-loader!../assets/package.json.example")}
          ranges={[
            { loc: [0, 13], title: "package.json" },
            { loc: [8, 11], title: "Install executable" }
          ]}
        />

        <CodeSlide
          transition={["slide"]}
          lang="javascript"
          bgColor="#263238"
          code={require("raw-loader!../assets/index-01.example")}
          ranges={[
            { loc: [0, 2], title: "index.js" },
            { loc: [0, 1], title: "Add shebang" },
            { loc: [1, 2], title: "Log a message" }
          ]}
        />

        <Slide transition={["slide"]} bgColor="tertiary">
          <Heading size={4} caps textColor="secondary">
            Install, run & link
          </Heading>
          <Image
            src={images.installGlobal}
            margin="10px auto 0"
            width="840px"
          />
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={4} caps textColor="secondary">
            Parsing command line options
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={6} textColor="secondary" caps>
            Typography
          </Heading>
          <Heading size={1} textColor="tertiary">Heading 1</Heading>
          <Heading size={2} textColor="tertiary">Heading 2</Heading>
          <Heading size={3} textColor="tertiary">Heading 3</Heading>
          <Heading size={4} textColor="tertiary">Heading 4</Heading>
          <Heading size={5} textColor="tertiary">Heading 5</Heading>
          <Text size={6} textColor="tertiary">Standard text</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Standard List
          </Heading>
          <List>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem>Item 3</ListItem>
            <ListItem>Item 4</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite>Author</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}
