import {
  Box,
  Button,
  Collapsible,
  DataTable,
  Form,
  FormField,
  Grommet,
  Header,
  Layer,
  Menu,
  Nav,
  ResponsiveContext,
  Sidebar,
  Text,
  TextInput,
  grommet
} from "grommet";
import {
  Add,
  Cloud,
  Configure,
  Cube,
  Cubes,
  Document,
  DocumentStore,
  Edit,
  Folder,
  FormClose,
  Help,
  Layer as IconLayer,
  Note,
  Paint,
  Projects
} from "grommet-icons";
import { hpe } from "grommet-theme-hpe";

import React, { Component } from "react";

import Cytoscape from "cytoscape";
import COSEBilkent from "cytoscape-cose-bilkent";

import CytoscapeComponent from "react-cytoscapejs";

Cytoscape.use(COSEBilkent);

class NodeEdgeDiagram extends React.Component {
  buildStylesheet() {
    for (const status of this.props.diag_status) {
      this.cy
        .style()
        .selector('node[status = "' + status.state + '"]')
        .style({
          "background-color": status.bg,
          "border-color": status.text,
          color: status.text
        })
        .update();
    }

    for (const shape of this.props.diag_shapes) {
      this.cy
        .style()
        .selector('node[type = "' + shape.type + '"]')
        .style({
          shape: shape.cy_shape
        })
        .update();
    }
  }

  componentDidMount() {}

  render() {
    return (
      <CytoscapeComponent
        elements={this.props.elements}
        style={{ width: "100%", height: "100%" }}
        layout={this.props.layout}
        stylesheet={[
          {
            selector: "node",
            style: {
              "background-color": "white",
              label: "data(label)",
              shape: "rectangle",
              width: "80px",
              height: "40px",
              "font-size": "10px",
              "text-valign": "top",
              "text-margin-y": "12px",
              "border-width": 1,
              "border-style": "solid",
              "border-color": "black"
            }
          }
        ]}
        maxZoom={2}
        minZoom={0.5}
        cy={(cy) => {
          this.cy = cy;
          this.buildStylesheet();
        }}
      />
    );
  }
}

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
            property: "state",
            header: <Text>Status</Text>,
            primary: true,
            size: "xsmall",
            render: (status) => (
              <Box>
                <TextInput
                  value={status.state}
                  style={{
                    color: [status.text],
                    background: [status.bg],
                    borderColor: [status.text]
                  }}
                />
              </Box>
            )
          },
          {
            property: "bg",
            header: "Background",
            size: "small",
            render: (status) => (
              <Box>
                <TextInput
                  value={status.bg}
                  n
                  style={{ background: [status.bg], borderColor: [status.bg] }}
                />
              </Box>
            )
          },
          {
            property: "text",
            header: "Text",
            size: "small",
            render: (status) => (
              <Box>
                <TextInput
                  value={status.text}
                  style={{ color: [status.text], borderColor: [status.text] }}
                />
              </Box>
            )
          }
        ]}
        data={this.props.diag_status}
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

const TipContent = ({ message }) => (
  <Box direction="row" align="center">
    <svg viewBox="0 0 22 22" version="1.1" width="22px" height="22px">
      <polygon
        fill="lightgrey"
        points="6 2 18 12 6 22"
        transform="matrix(-1 0 0 1 30 0)"
      />
    </svg>
    <Box background="lightgrey" direction="row" pad="xsmall" round="xsmall">
      <Text color="black">{message}</Text>
    </Box>
  </Box>
);

const diag_status_defaults = [
  { state: "unchanged", bg: "PaleGreen", text: "Green" },
  { state: "config", bg: "LightYellow", text: "Orange" },
  { state: "modified", bg: "Khaki", text: "DarkOrange" },
  { state: "new", bg: "LightSalmon", text: "DarkRed" },
  { state: "decomm", bg: "LightBlue", text: "Blue" }
];

const diag_shape_defaults = [
  { type: "component", icon: <IconLayer />, cy_shape: "round-rectangle" },
  { type: "node", icon: <Cube />, cy_shape: "bottom-round-rectangle" },
  {
    type: "database",
    icon: <DocumentStore />,
    cy_shape: "barrel"
  },
  { type: "frame", icon: <Note />, cy_shape: "concave-hexagon" },
  { type: "file", icon: <Document />, cy_shape: "round-tag" },
  { type: "cloud", icon: <Cloud />, cy_shape: "round-octagon" },
  { type: "folder", icon: <Folder />, cy_shape: "round-pentagon" }
];

class App extends Component {
  state = {
    showSidebar: false,
    showConfig: false,
    showColorConfig: false,
    showTypeConfig: false,
    diag_status: diag_status_defaults,
    diag_shapes: diag_shape_defaults,
    elements: [
      {
        data: {
          id: "one",
          label: "Node 1",
          type: "folder",
          status: "decomm"
        }
      },
      {
        data: {
          id: "two",
          label: "Node 2",
          type: "database",
          status: "modified"
        }
      },
      {
        data: {
          id: "three",
          label: "Node 3",
          type: "component",
          status: "config"
        }
      },
      {
        data: {
          id: "four",
          label: "Node 4",
          type: "frame",
          parent: "three",
          status: "unchanged"
        }
      },
      {
        data: {
          id: "five",
          label: "Node 5",
          type: "node",
          status: "new"
        }
      },
      {
        data: {
          source: "one",
          target: "two",
          label: "Edge from Node1 to Node2"
        }
      },
      {
        data: {
          source: "four",
          target: "one",
          label: "Edge from Node1 to Node2"
        }
      },
      {
        data: {
          source: "two",
          target: "five",
          label: "Edge from Node1 to Node2"
        }
      },
      {
        data: {
          source: "five",
          target: "three",
          label: "Edge from Node1 to Node2"
        }
      }
    ]
  };

  render() {
    const layout = { name: "cose-bilkent" };
    return (
      <Grommet theme={grommet} full>
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
                    active={this.state.showConfig}
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
                    active={this.state.showSidebar}
                  />
                </Nav>
              </AppBar>
              <Box direction="row" flex overflow={{ horizontal: "hidden" }}>
                <Collapsible
                  direction="horizontal"
                  open={this.state.showConfig}
                >
                  <Sidebar
                    background="neutral-1"
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
                        active={this.state.showColorConfig}
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
                        active={this.state.showTypeConfig}
                      />
                    </Nav>
                  </Sidebar>
                </Collapsible>
                <Collapsible
                  direction="horizontal"
                  open={this.state.showColorConfig && this.state.showConfig}
                >
                  <Sidebar background="light-5" pad="none">
                    <Nav gap="small">
                      {this.state.diag_status.map((status) => (
                        <Button
                          hoverIndicator
                          icon={<Edit color={status.text} />}
                          tip={{
                            dropProps: { align: { left: "right" } },
                            content: (
                              <TipContent message={"edit " + [status.state]} />
                            ),
                            plain: true
                          }}
                          style={{
                            color: [status.text],
                            background: [status.bg],
                            borderColor: [status.text]
                          }}
                        />
                      ))}
                      <Button
                        hoverIndicator
                        icon={<Add />}
                        tip={{
                          dropProps: { align: { left: "right" } },
                          content: <TipContent message="add new state" />,
                          plain: true
                        }}
                      />
                    </Nav>
                  </Sidebar>
                </Collapsible>
                <Collapsible
                  direction="horizontal"
                  open={this.state.showTypeConfig && this.state.showConfig}
                >
                  <Sidebar background="neutral-4" pad="none">
                    <Nav gap="small">
                      {this.state.diag_shapes.map((shape) => (
                        <Button
                          hoverIndicator
                          icon={shape.icon}
                          tip={{
                            dropProps: { align: { left: "right" } },
                            content: (
                              <TipContent message={"edit " + [shape.type]} />
                            ),
                            plain: true
                          }}
                        />
                      ))}
                      <Button
                        hoverIndicator
                        icon={<Add />}
                        tip={{
                          dropProps: { align: { left: "right" } },
                          content: <TipContent message="add new type" />,
                          plain: true
                        }}
                      />
                    </Nav>
                  </Sidebar>
                </Collapsible>
                <Box flex align="center" justify="center">
                  <NodeEdgeDiagram
                    elements={this.state.elements}
                    layout={layout}
                    diag_status={this.state.diag_status}
                    diag_shapes={this.state.diag_shapes}
                  />
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
                      <DiagColorTable diag_status={this.state.diag_status} />
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
                      <DiagColors diag_colors={this.state.diag_status} />
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
