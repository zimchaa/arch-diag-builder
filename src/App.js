import {
  Box,
  Button,
  Collapsible,
  Form,
  FormField,
  TextInput,
  Grommet,
  Header,
  Layer,
  Menu,
  Nav,
  ResponsiveContext,
  Sidebar,
  DataTable,
  Meter,
  Text
} from "grommet";
import {
  Cloud,
  Configure,
  Document,
  DocumentStore,
  Cubes,
  FormClose,
  Help,
  Projects,
  Edit,
  Add,
  Paint
} from "grommet-icons";
import React, { Component } from "react";

const theme = {
  global: {
    colors: {
      brand: "#228BE6"
    },
    font: {
      family: "Roboto",
      size: "14px",
      height: "20px"
    }
  }
};

const html_colors = [
  {
    name: "INDIANRED",
    hex: "#CD5C5C",
    rgb: "RGB(205, 92, 92)",
    families: ["red", "brown"]
  },
  {
    name: "LIGHTCORAL",
    hex: "#F08080",
    rgb: "RGB(240, 128, 128)",
    families: ["red", "pink", "coral", "light"]
  },
  {
    name: "SALMON",
    hex: "#FA8072",
    rgb: "RGB(250, 128, 114)",
    families: ["red", "pink", "orange", "salmon"]
  },
  {
    name: "DARKSALMON",
    hex: "#E9967A",
    rgb: "RGB(233, 150, 122)",
    families: ["red", "pink", "orange", "salmon", "dark"]
  },
  {
    name: "LIGHTSALMON",
    hex: "#FFA07A",
    rgb: "RGB(255, 160, 122)",
    families: ["red", "pink", "orange", "salmon", "light"]
  },
  {
    name: "CRIMSON",
    hex: "#DC143C",
    rgb: "RGB(220, 20, 60)",
    families: ["red"]
  },
  {
    name: "RED",
    hex: "#FF0000",
    rgb: "RGB(255, 0, 0)",
    families: ["red"]
  },
  {
    name: "DARKRED",
    hex: "#8B0000",
    rgb: "RGB(139, 0, 0)",
    families: ["red", "dark"]
  },
  {
    name: "PINK",
    hex: "#FFC0CB",
    rgb: "RGB(255, 192, 203)",
    families: ["pink"]
  },
  {
    name: "LIGHTPINK",
    hex: "#FFB6C1",
    rgb: "RGB(255, 182, 193)",
    families: ["pink", "light"]
  },
  {
    name: "HOTPINK",
    hex: "#FF69B4",
    rgb: "RGB(255, 105, 180)",
    families: ["pink", "hot"]
  },
  {
    name: "DEEPPINK",
    hex: "#FF1493",
    rgb: "RGB(255, 20, 147)",
    families: ["pink", "deep"]
  },
  {
    name: "MEDIUMVIOLETRED",
    hex: "#C71585",
    rgb: "RGB(199, 21, 133)",
    families: ["pink", "purple", "violet", "medium"]
  },
  {
    name: "PALEVIOLETRED",
    hex: "#DB7093",
    rgb: "RGB(219, 112, 147)",
    families: ["pink", "pale", "violet"]
  },
  {
    name: "CORAL",
    hex: "#FF7F50",
    rgb: "RGB(255, 127, 80)",
    families: ["orange", "coral"]
  },
  {
    name: "TOMATO",
    hex: "#FF6347",
    rgb: "RGB(255, 99, 71",
    families: ["orange", "red"]
  },
  {
    name: "ORANGERED",
    hex: "#FF4500",
    rgb: "RGB(255, 69, 0)",
    families: ["orange", "red"]
  },
  {
    name: "DARKORANGE",
    hex: "#FF8C00",
    rgb: "RGB(255, 140, 0)",
    families: ["orange", "dark"]
  },
  {
    name: "ORANGE",
    hex: "#FFA500",
    rgb: "RGB(255, 165, 0)",
    families: ["orange"]
  },
  {
    name: "GOLD",
    hex: "#FFD700",
    rgb: "RGB(255, 215, 0)",
    families: ["yellow"]
  },
  {
    name: "YELLOW",
    hex: "#FFFF00",
    rgb: "RGB(255, 255, 0)",
    families: ["yellow"]
  },
  {
    name: "LIGHTYELLOW",
    hex: "#FFFFE0",
    rgb: "RGB(255, 255, 224)",
    families: ["yellow", "light"]
  },
  {
    name: "LEMONCHIFFON",
    hex: "#FFFACD",
    rgb: "RGB(255, 250, 205)",
    families: ["yellow", "lemon"]
  },
  {
    name: "LIGHTGOLDENRODYELLOW",
    hex: "#FAFAD2",
    rgb: "RGB(250, 250, 210)",
    families: ["yellow", "light", "goldenrod", "tan"]
  },
  {
    name: "PAPAYAWHIP",
    hex: "#FFEFD5",
    rgb: "RGB(255, 239, 213)",
    families: ["pink", "tan"]
  },
  {
    name: "MOCCASIN",
    hex: "#FFE4B5",
    rgb: "RGB(255, 228, 181)",
    families: ["pink", "tan"]
  },
  {
    name: "PEACHPUFF",
    hex: "#FFDAB9",
    rgb: "RGB(255, 218, 185)",
    families: ["pink", "orange", "peach"]
  },
  {
    name: "PALEGOLDENROD",
    hex: "#EEE8AA",
    rgb: "RGB(238, 232, 170)",
    families: ["yellow", "tan", "pale", "goldenrod"]
  },
  {
    name: "KHAKI",
    hex: "#F0E68C",
    rgb: "RGB(240, 230, 140)",
    families: ["yellow", "tan", "khaki"]
  },
  {
    name: "DARKKHAKI",
    hex: "#BDB76B",
    rgb: "RGB(189, 183, 107)",
    families: ["yellow", "tan", "khaki", "dark"]
  },
  {
    name: "LAVENDER",
    hex: "#E6E6FA",
    rgb: "RGB(230, 230, 250)",
    families: ["purple"]
  },
  {
    name: "THISTLE",
    hex: "#D8BFD8",
    rgb: "RGB(216, 191, 216)",
    families: ["purple"]
  },
  {
    name: "PLUM",
    hex: "#DDA0DD",
    rgb: "RGB(221, 160, 221)",
    families: ["purple"]
  },
  {
    name: "VIOLET",
    hex: "#EE82EE",
    rgb: "RGB(238, 130, 238)",
    families: ["purple", "violet", "pink"]
  },
  {
    name: "ORCHID",
    hex: "#DA70D6",
    rgb: "RGB(218, 112, 214)",
    families: ["purple", "orchid"]
  },
  {
    name: "FUCHSIA",
    hex: "#FF00FF",
    rgb: "RGB(255, 0, 255)",
    families: ["purple", "pink"]
  },
  {
    name: "MAGENTA",
    hex: "#FF00FF",
    rgb: "RGB(255, 0, 255)",
    families: ["purple", "pink", "magenta"]
  },
  {
    name: "MEDIUMORCHID",
    hex: "#BA55D3",
    rgb: "RGB(186, 85, 211)",
    families: ["purple", "orchid", "medium"]
  },
  {
    name: "MEDIUMPURPLE",
    hex: "#9370DB",
    rgb: "RGB(147, 112, 219)",
    families: ["purple", "medium"]
  },
  {
    name: "REBECCAPURPLE",
    hex: "#663399",
    rgb: "RGB(102, 51, 153)",
    families: ["purple", "blue"]
  },
  {
    name: "BLUEVIOLET",
    hex: "#8A2BE2",
    rgb: "RGB(138, 43, 226)",
    families: ["purple", "blue", "violet"]
  },
  {
    name: "DARKVIOLET",
    hex: "#9400D3",
    rgb: "RGB(148, 0, 211)",
    families: ["purple", "dark", "violet"]
  },
  {
    name: "DARKORCHID",
    hex: "#9932CC",
    rgb: "RGB(153, 50, 204)",
    families: ["purple", "dark", "orchid"]
  },
  {
    name: "DARKMAGENTA",
    hex: "#8B008B",
    rgb: "RGB(139, 0, 139)",
    families: ["purple", "dark", "magenta"]
  },
  {
    name: "PURPLE",
    hex: "#800080",
    rgb: "RGB(128, 0, 128)",
    families: ["purple"]
  },
  {
    name: "INDIGO",
    hex: "#4B0082",
    rgb: "RGB(75, 0, 130)",
    families: ["purple", "blue"]
  },
  {
    name: "SLATEBLUE",
    hex: "#6A5ACD",
    rgb: "RGB(106, 90, 205)",
    families: ["purple", "blue", "slate"]
  },
  {
    name: "DARKSLATEBLUE",
    hex: "#483D8B",
    rgb: "RGB(72, 61, 139)",
    families: ["purple", "blue", "slate", "dark"]
  },
  {
    name: "MEDIUMSLATEBLUE",
    hex: "#7B68EE",
    rgb: "RGB(123, 104, 238)",
    families: ["purple", "blue", "slate", "medium"]
  },
  {
    name: "GREENYELLOW",
    hex: "#ADFF2F",
    rgb: "RGB(173, 255, 47)",
    families: ["green", "yellow"]
  },
  {
    name: "CHARTREUSE",
    hex: "#7FFF00",
    rgb: "RGB(127, 255, 0)",
    families: ["green"]
  },
  {
    name: "LAWNGREEN",
    hex: "#7CFC00",
    rgb: "RGB(124, 252, 0)",
    families: ["green"]
  },
  {
    name: "LIME",
    hex: "#00FF00",
    rgb: "RGB(0, 255, 0)",
    families: ["green"]
  },
  {
    name: "LIMEGREEN",
    hex: "#32CD32",
    rgb: "RGB(50, 205, 50)",
    families: ["green"]
  },
  {
    name: "PALEGREEN",
    hex: "#98FB98",
    rgb: "RGB(152, 251, 152)",
    families: ["green", "pale"]
  },
  {
    name: "LIGHTGREEN",
    hex: "#90EE90",
    rgb: "RGB(144, 238, 144)",
    families: ["green", "light"]
  },
  {
    name: "MEDIUMSPRINGGREEN",
    hex: "#00FA9A",
    rgb: "RGB(0, 250, 154)",
    families: ["green", "medium", "spring"]
  },
  {
    name: "SPRINGGREEN",
    hex: "#00FF7F",
    rgb: "RGB(0, 255, 127)",
    families: ["green", "spring"]
  },
  {
    name: "MEDIUMSEAGREEN",
    hex: "#3CB371",
    rgb: "RGB(60, 179, 113)",
    families: ["green", "sea", "medium"]
  },
  {
    name: "SEAGREEN",
    hex: "#2E8B57",
    rgb: "RGB(46, 139, 87)",
    families: ["green", "sea"]
  },
  {
    name: "FORESTGREEN",
    hex: "#228B22",
    rgb: "RGB(34, 139, 34)",
    families: ["green", "forest"]
  },
  {
    name: "GREEN",
    hex: "#008000",
    rgb: "RGB(0, 128, 0)",
    families: ["green"]
  },
  {
    name: "DARKGREEN",
    hex: "#006400",
    rgb: "RGB(0, 100, 0)",
    families: ["green", "dark"]
  },
  {
    name: "YELLOWGREEN",
    hex: "#9ACD32",
    rgb: "RGB(154, 205, 50)",
    families: ["green", "yellow"]
  },
  {
    name: "OLIVEDRAB",
    hex: "#6B8E23",
    rgb: "RGB(107, 142, 35)",
    families: ["green", "olive"]
  },
  {
    name: "OLIVE",
    hex: "#6B8E23",
    rgb: "RGB(128, 128, 0)",
    families: ["green", "olive"]
  },
  {
    name: "DARKOLIVEGREEN",
    hex: "#556B2F",
    rgb: "RGB(85, 107, 47)",
    families: ["green", "olive", "dark"]
  },
  {
    name: "MEDIUMAQUAMARINE",
    hex: "#66CDAA",
    rgb: "RGB(102, 205, 170)",
    families: ["green", "blue", "aquamarine", "medium"]
  },
  {
    name: "DARKSEAGREEN",
    hex: "#8FBC8B",
    rgb: "RGB(143, 188, 139)",
    families: ["green", "sea", "dark"]
  },
  {
    name: "LIGHTSEAGREEN",
    hex: "#20B2AA",
    rgb: "RGB(32, 178, 170)",
    families: ["green", "blue", "sea", "light"]
  },
  {
    name: "DARKCYAN",
    hex: "#008B8B",
    rgb: "RGB(0, 139, 139)",
    families: ["green", "blue", "cyan", "dark"]
  },
  {
    name: "TEAL",
    hex: "#008080",
    rgb: "RGB(0, 128, 128)",
    families: ["green", "blue"]
  },
  {
    name: "AQUA",
    hex: "#00FFFF",
    rgb: "RGB(0, 255, 255)",
    families: ["blue", "aqua"]
  },
  {
    name: "CYAN",
    hex: "#00FFFF",
    rgb: "RGB(0, 255, 255)",
    families: ["blue", "cyan"]
  },
  {
    name: "LIGHTCYAN",
    hex: "#E0FFFF",
    rgb: "RGB(224, 255, 255)",
    families: ["blue", "cyan", "light"]
  },
  {
    name: "PALETURQUOISE",
    hex: "#AFEEEE",
    rgb: "RGB(175, 238, 238)",
    families: ["blue", "turquoise", "pale"]
  },
  {
    name: "AQUAMARINE",
    hex: "#7FFFD4",
    rgb: "RGB(127, 255, 212)",
    families: ["blue", "aquamarine"]
  },
  {
    name: "TURQUOISE",
    hex: "#40E0D0",
    rgb: "RGB(64, 224, 208)",
    families: ["blue", "turquoise"]
  },
  {
    name: "MEDIUMTURQUOISE",
    hex: "#48D1CC",
    rgb: "RGB(72, 209, 204)",
    families: ["blue", "turquoise", "medium"]
  },
  {
    name: "DARKTURQUOISE",
    hex: "#00CED1",
    rgb: "RGB(0, 206, 209)",
    families: ["blue", "turquoise", "dark"]
  },
  {
    name: "CADETBLUE",
    hex: "#5F9EA0",
    rgb: "RGB(95, 158, 160)",
    families: ["blue", "gray"]
  },
  {
    name: "STEELBLUE",
    hex: "#4682B4",
    rgb: "RGB(70, 130, 180)",
    families: ["blue", "steel"]
  },
  {
    name: "LIGHTSTEELBLUE",
    hex: "#B0C4DE",
    rgb: "RGB(176, 196, 222)",
    families: ["blue", "steel", "light"]
  },
  {
    name: "POWDERBLUE",
    hex: "#B0E0E6",
    rgb: "RGB(176, 224, 230)",
    families: ["blue"]
  },
  {
    name: "LIGHTBLUE",
    hex: "#ADD8E6",
    rgb: "RGB(173, 216, 230)",
    families: ["blue", "light"]
  },
  {
    name: "SKYBLUE",
    hex: "#87CEEB",
    rgb: "RGB(135, 206, 235)",
    families: ["blue", "sky"]
  },
  {
    name: "LIGHTSKYBLUE",
    hex: "#87CEFA",
    rgb: "RGB(135, 206, 250)",
    families: ["blue", "sky", "light"]
  },
  {
    name: "DEEPSKYBLUE",
    hex: "#00BFFF",
    rgb: "RGB(0, 191, 255)",
    families: ["blue", "sky", "deep"]
  },
  {
    name: "DODGERBLUE",
    hex: "#1E90FF",
    rgb: "RGB(30, 144, 255)",
    families: ["blue"]
  },
  {
    name: "CORNFLOWERBLUE",
    hex: "#6495ED",
    rgb: "RGB(100, 149, 237)",
    families: ["blue"]
  },
  {
    name: "ROYALBLUE",
    hex: "#4169E1",
    rgb: "RGB(65, 105, 225)",
    families: ["blue"]
  },
  {
    name: "BLUE",
    hex: "#0000FF",
    rgb: "RGB(0, 0, 255)",
    families: ["blue"]
  },
  {
    name: "MEDIUMBLUE",
    hex: "#0000CD",
    rgb: "RGB(0, 0, 205)",
    families: ["blue", "medium"]
  },
  {
    name: "DARKBLUE",
    hex: "#00008B",
    rgb: "RGB(0, 0, 139)",
    families: ["blue", "dark"]
  },
  {
    name: "NAVY",
    hex: "#00008B",
    rgb: "RGB(0, 0, 128)",
    families: ["blue", "dark"]
  },
  {
    name: "MIDNIGHTBLUE",
    hex: "#191970",
    rgb: "RGB(25, 25, 112))",
    families: ["blue", "dark"]
  },
  {
    name: "CORNSILK",
    hex: "#FFF8DC",
    rgb: "RGB(255, 248, 220)",
    families: ["brown", "tan"]
  },
  {
    name: "BLANCHEDALMOND",
    hex: "#FFEBCD",
    rgb: "RGB(255, 235, 205)",
    families: ["brown", "tan"]
  },
  {
    name: "BISQUE",
    hex: "#FFE4C4",
    rgb: "RGB(255, 228, 196)",
    families: ["brown", "tan"]
  },
  {
    name: "NAVAJOWHITE",
    hex: "#FFDEAD",
    rgb: "RGB(255, 222, 173)",
    families: ["brown", "tan"]
  },
  {
    name: "WHEAT",
    hex: "#F5DEB3",
    rgb: "RGB(245, 222, 179)",
    families: ["brown", "tan"]
  },
  {
    name: "BURLYWOOD",
    hex: "#DEB887",
    rgb: "RGB(222, 184, 135)",
    families: ["brown", "tan"]
  },
  {
    name: "TAN",
    hex: "#D2B48C",
    rgb: "RGB(210, 180, 140)",
    families: ["brown", "tan"]
  },
  {
    name: "ROSYBROWN",
    hex: "#BC8F8F",
    rgb: "RGB(188, 143, 143)",
    families: ["brown", "tan"]
  },
  {
    name: "SANDYBROWN",
    hex: "#F4A460",
    rgb: "RGB(244, 164, 96)",
    families: ["brown", "orange"]
  },
  {
    name: "GOLDENROD",
    hex: "#DAA520",
    rgb: "RGB(218, 165, 32)",
    families: ["brown", "goldenrod", "orange"]
  },
  {
    name: "DARKGOLDENROD",
    hex: "#B8860B",
    rgb: "RGB(184, 134, 11)",
    families: ["brown", "orange", "goldenrod", "dark"]
  },
  {
    name: "PERU",
    hex: "#CD853F",
    rgb: "RGB(205, 133, 63)",
    families: ["brown", "orange"]
  },
  {
    name: "CHOCOLATE",
    hex: "#D2691E",
    rgb: "RGB(210, 105, 30)",
    families: ["brown", "orange"]
  },
  {
    name: "SADDLEBROWN",
    hex: "#8B4513",
    rgb: "RGB(139, 69, 19)",
    families: ["brown"]
  },
  {
    name: "SIENNA",
    hex: "#A0522D",
    rgb: "RGB(160, 82, 45)",
    families: ["brown"]
  },
  {
    name: "BROWN",
    hex: "#A52A2A",
    rgb: "RGB(165, 42, 42)",
    families: ["brown", "red"]
  },
  {
    name: "MAROON",
    hex: "#800000",
    rgb: "RGB(128, 0, 0)",
    families: ["brown", "red"]
  },
  {
    name: "WHITE",
    hex: "#FFFFFF",
    rgb: "RGB(255, 255, 255)",
    families: ["white"]
  },
  {
    name: "SNOW",
    hex: "#FFFAFA",
    rgb: "RGB(255, 250, 250)",
    families: ["white"]
  },
  {
    name: "HONEYDEW",
    hex: "#F0FFF0",
    rgb: "RGB(240, 255, 240)",
    families: ["white"]
  },
  {
    name: "MINTCREAM",
    hex: "#F5FFFA",
    rgb: "RGB(245, 255, 250)",
    families: ["white"]
  },
  {
    name: "AZURE",
    hex: "#F0FFFF",
    rgb: "RGB(240, 255, 255)",
    families: ["white"]
  },
  {
    name: "ALICEBLUE",
    hex: "#F0F8FF",
    rgb: "RGB(240, 248, 255)",
    families: ["white"]
  },
  {
    name: "GHOSTWHITE",
    hex: "#F8F8FF",
    rgb: "RGB(248, 248, 255)",
    families: ["white"]
  },
  {
    name: "WHITESMOKE",
    hex: "#F5F5F5",
    rgb: "RGB(245, 245, 245)",
    families: ["white"]
  },
  {
    name: "SEASHELL",
    hex: "#FFF5EE",
    rgb: "RGB(255, 245, 238)",
    families: ["white", "pink"]
  },
  {
    name: "BEIGE",
    hex: "#F5F5DC",
    rgb: "RGB(245, 245, 220)",
    families: ["white", "tan"]
  },
  {
    name: "OLDLACE",
    hex: "#FDF5E6",
    rgb: "RGB(253, 245, 230)",
    families: ["white", "tan"]
  },
  {
    name: "FLORALWHITE",
    hex: "#FDF5E6",
    rgb: "RGB(253, 245, 230)",
    families: ["white", "tan"]
  },
  {
    name: "IVORY",
    hex: "#FFFFF0",
    rgb: "RGB(255, 255, 240)",
    families: ["white", "tan"]
  },
  {
    name: "ANTIQUEWHITE",
    hex: "#FAEBD7",
    rgb: "RGB(250, 235, 215)",
    families: ["white", "tan"]
  },
  {
    name: "LINEN",
    hex: "#FAF0E6",
    rgb: "RGB(250, 240, 230)",
    families: ["white", "tan"]
  },
  {
    name: "LAVENDERBLUSH",
    hex: "#FFF0F5",
    rgb: "RGB(255, 240, 245)",
    families: ["white", "lavender", "pink"]
  },
  {
    name: "MISTYROSE",
    hex: "#FFE4E1",
    rgb: "RGB(255, 228, 225)",
    families: ["white", "pink"]
  },
  {
    name: "GAINSBORO",
    hex: "#DCDCDC",
    rgb: "RGB(220, 220, 220)",
    families: ["gray"]
  },
  {
    name: "LIGHTGRAY",
    hex: "#D3D3D3",
    rgb: "RGB(211, 211, 211)",
    families: ["gray", "light"]
  },
  {
    name: "SILVER",
    hex: "#C0C0C0",
    rgb: "RGB(192, 192, 192)",
    families: ["gray"]
  },
  {
    name: "DARKGRAY",
    hex: "#A9A9A9",
    rgb: "RGB(169, 169, 169)",
    families: ["gray", "dark"]
  },
  {
    name: "GRAY",
    hex: "#808080",
    rgb: "RGB(128, 128, 128)",
    families: ["gray"]
  },
  {
    name: "DIMGRAY",
    hex: "#696969",
    rgb: "RGB(105, 105, 105)",
    families: ["gray"]
  },
  {
    name: "LIGHTSLATEGRAY",
    hex: "#778899",
    rgb: "RGB(119, 136, 153)",
    families: ["gray", "light", "slate"]
  },
  {
    name: "SLATEGRAY",
    hex: "#708090",
    rgb: "RGB(112, 128, 144)",
    families: ["gray", "slate"]
  },
  {
    name: "DARKSLATEGRAY",
    hex: "#2F4F4F",
    rgb: "RGB(47, 79, 79)",
    families: ["gray", "slate", "dark"]
  },
  {
    name: "BLACK",
    hex: "#000000",
    rgb: "RGB(0, 0, 0)",
    families: ["black"]
  }
];

const html_color_suggestions = html_colors.map((color) =>
  color.name.toLowerCase()
);

const AppBar = (props) => (
  <Header
    background="brand"
    elevation="large"
    style={{ zIndex: "1" }}
    {...props}
  />
);

class DiagColorTable extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSelect.bind(this);
  }

  handleChange(e) {
    console.log(e);
  }

  handleSelect(e) {
    console.log(e);
  }

  render() {
    return (
      <DataTable
        columns={[
          {
            property: "type",
            header: <Text>Status</Text>,
            primary: true,
            size: "xsmall",
            render: (color) => (
              <Box>
                <TextInput
                  value={color.type}
                  style={{
                    color: [color.text],
                    background: [color.bg],
                    borderColor: [color.text]
                  }}
                />
              </Box>
            )
          },
          {
            property: "bg",
            header: "Background",
            size: "small",
            render: (color) => (
              <Box>
                <TextInput
                  value={color.bg}
                  style={{ background: [color.bg], borderColor: [color.bg] }}
                  suggestions={html_color_suggestions}
                  onSuggestionSelect={this.handleSelect()}
                />
              </Box>
            )
          },
          {
            property: "text",
            header: "Text",
            size: "small",
            render: (color) => (
              <Box>
                <TextInput
                  value={color.text}
                  style={{ color: [color.text], borderColor: [color.text] }}
                />
              </Box>
            )
          }
        ]}
        data={this.props.diag_colors}
      />
    );
  }
}

class DiagColors extends React.Component {
  render() {
    return (
      <Form>
        {this.props.diag_colors.map((color) => (
          <Box direction="row">
            <FormField
              name={"bg_" + color.type}
              htmlFor={"bg_input" + color.type}
              label={"background: " + color.type}
            >
              <TextInput id={"bg_input" + color.type} value={color.bg} />
            </FormField>
            <FormField
              name={"text_" + color.type}
              htmlFor={"text_input" + color.type}
              label={"text: " + color.type}
            >
              <TextInput id={"text_input" + color.type} value={color.text} />
            </FormField>
          </Box>
        ))}
      </Form>
    );
  }
}

const diag_color_defaults = [
  { type: "unchanged", bg: "PaleGreen", text: "Green" },
  { type: "config", bg: "LightYellow", text: "Orange" },
  { type: "modified", bg: "Khaki", text: "DarkOrange" },
  { type: "new", bg: "LightSalmon", text: "DarkRed" },
  { type: "decomm", bg: "LightBlue", text: "Blue" }
];

const diag_type_defaults = [
  { type: "component" },
  { type: "node" },
  { type: "database", icon: <DocumentStore /> },
  { type: "frame" },
  { type: "file", icon: <Document /> },
  { type: "cloud", icon: <Cloud /> },
  { type: "folder" },
  { type: "" }
];

class App extends Component {
  state = {
    showSidebar: false,
    showConfig: false,
    showColorConfig: false,
    showTypeConfig: false,
    diag_colors: diag_color_defaults,
    diag_types: diag_type_defaults
  };
  render() {
    return (
      <Grommet theme={theme} full>
        <ResponsiveContext.Consumer>
          {(size) => (
            <Box fill>
              <AppBar>
                <Nav gap="small" direction="row">
                  <Button
                    icon={<Configure />}
                    hoverIndicator
                    onClick={() =>
                      this.setState({ showConfig: !this.state.showConfig })
                    }
                  />
                  <Menu label="File" items={[{ label: "new" }]} />
                  <Box direction="row">
                    <Menu
                      label="Diagram"
                      items={[
                        { label: "add component" },
                        { label: "add connection" }
                      ]}
                    />
                  </Box>
                  <Button
                    icon={<Cubes />}
                    hoverIndicator
                    onClick={() =>
                      this.setState({ showSidebar: !this.state.showSidebar })
                    }
                  />
                </Nav>
              </AppBar>
              <Box direction="row" flex overflow={{ horizontal: "hidden" }}>
                <Collapsible
                  direction="horizontal"
                  open={this.state.showConfig}
                >
                  <Sidebar
                    background="brand"
                    footer={<Button icon={<Help />} hoverIndicator />}
                    pad="none"
                    elevation="medium"
                  >
                    <Nav gap="small">
                      <Button
                        icon={<Paint />}
                        hoverIndicator
                        onClick={() =>
                          this.setState({
                            showColorConfig: !this.state.showColorConfig,
                            showTypeConfig: false
                          })
                        }
                      />
                      <Button
                        icon={<Projects />}
                        hoverIndicator
                        onClick={() =>
                          this.setState({
                            showTypeConfig: !this.state.showTypeConfig,
                            showColorConfig: false
                          })
                        }
                      />
                    </Nav>
                  </Sidebar>
                </Collapsible>
                <Collapsible
                  direction="horizontal"
                  open={this.state.showColorConfig && this.state.showConfig}
                >
                  <Sidebar background="light-1" pad="none">
                    <Nav gap="small">
                      {this.state.diag_colors.map((color) => (
                        <Button
                          hoverIndicator
                          icon={<Edit color={color.text} />}
                          tip={{
                            dropProps: { align: { left: "right" } },
                            content: "edit " + [color.type]
                          }}
                          style={{
                            color: [color.text],
                            background: [color.bg],
                            borderColor: [color.text]
                          }}
                        />
                      ))}
                      <Button
                        hoverIndicator
                        icon={<Add />}
                        tip="add new status"
                      />
                    </Nav>
                  </Sidebar>
                </Collapsible>
                <Collapsible
                  direction="horizontal"
                  open={this.state.showTypeConfig && this.state.showConfig}
                >
                  <Sidebar background="light-1" pad="none">
                    <Nav gap="small">
                      {this.state.diag_types.map((type) => (
                        <Button hoverIndicator icon={type.icon} />
                      ))}
                      <Button
                        hoverIndicator
                        icon={<Add />}
                        tip="add new type"
                      />
                    </Nav>
                  </Sidebar>
                </Collapsible>
                <Box flex align="center" justify="center">
                  nodes and edges
                </Box>
                {!this.state.showSidebar || size !== "small" ? (
                  <Collapsible
                    direction="horizontal"
                    open={this.state.showSidebar}
                  >
                    <Box
                      flex
                      width="medium"
                      background="light-2"
                      elevation="small"
                      align="center"
                      justify="center"
                    >
                      <DiagColorTable diag_colors={this.state.diag_colors} />
                    </Box>
                  </Collapsible>
                ) : (
                  <Layer>
                    <Box
                      background="light-2"
                      tag="header"
                      justify="end"
                      align="center"
                      direction="row"
                    >
                      Close
                      <Button
                        icon={<FormClose />}
                        onClick={() => this.setState({ showSidebar: false })}
                      />
                    </Box>
                    <Box
                      fill
                      background="light-2"
                      align="center"
                      justify="center"
                    >
                      <DiagColors diag_colors={this.state.diag_colors} />
                    </Box>
                  </Layer>
                )}
              </Box>
            </Box>
          )}
        </ResponsiveContext.Consumer>
      </Grommet>
    );
  }
}

export default App;
