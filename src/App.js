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
} from 'grommet';
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
  Projects,
} from 'grommet-icons';
import React, { Component } from 'react';

import Cytoscape from 'cytoscape';
import COSEBilkent from 'cytoscape-cose-bilkent';

import CytoscapeComponent from 'react-cytoscapejs';

Cytoscape.use(COSEBilkent);

const theme = {
  global: {
    font: {
      family: 'Roboto',
      size: '14px',
      height: '16px',
    },
  },
};

const NodeEdgeDiagram = (props) => (
  <CytoscapeComponent
    elements={props.elements}
    style={{ width: '100%', height: '100%' }}
    layout={props.layout}
  />
);

const AppBar = (props) => (
  <Header
    background="brand"
    elevation="large"
    style={{ zIndex: '1' }}
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
            property: 'status',
            header: <Text>Status</Text>,
            primary: true,
            size: 'xsmall',
            render: (status) => (
              <Box>
                <TextInput
                  value={status.status}
                  style={{
                    color: [status.text],
                    background: [status.bg],
                    borderColor: [status.text],
                  }}
                />
              </Box>
            ),
          },
          {
            property: 'bg',
            header: 'Background',
            size: 'small',
            render: (status) => (
              <Box>
                <TextInput
                  value={status.bg}
                  n
                  style={{ background: [status.bg], borderColor: [status.bg] }}
                />
              </Box>
            ),
          },
          {
            property: 'text',
            header: 'Text',
            size: 'small',
            render: (status) => (
              <Box>
                <TextInput
                  value={status.text}
                  style={{ color: [status.text], borderColor: [status.text] }}
                />
              </Box>
            ),
          },
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
              name={'bg_' + color.type}
              htmlFor={'bg_input' + color.type}
              label={'background: ' + color.type}
            >
              <TextInput id={'bg_input' + color.type} value={color.bg} />
            </FormField>
            <FormField
              name={'text_' + color.type}
              htmlFor={'text_input' + color.type}
              label={'text: ' + color.type}
            >
              <TextInput id={'text_input' + color.type} value={color.text} />
            </FormField>
          </Box>
        ))}
      </Form>
    );
  }
}

const diag_status_defaults = [
  { status: 'unchanged', bg: 'PaleGreen', text: 'Green' },
  { status: 'config', bg: 'LightYellow', text: 'Orange' },
  { status: 'modified', bg: 'Khaki', text: 'DarkOrange' },
  { status: 'new', bg: 'LightSalmon', text: 'DarkRed' },
  { status: 'decomm', bg: 'LightBlue', text: 'Blue' },
];

const diag_shape_defaults = [
  { shape: 'component', icon: <IconLayer /> },
  { shape: 'node', icon: <Cube /> },
  { shape: 'database', icon: <DocumentStore /> },
  { shape: 'frame', icon: <Note /> },
  { shape: 'file', icon: <Document /> },
  { shape: 'cloud', icon: <Cloud /> },
  { shape: 'folder', icon: <Folder /> },
];

class App extends Component {
  state = {
    showSidebar: false,
    showConfig: false,
    showColorConfig: false,
    showTypeConfig: false,
    diag_colors: diag_status_defaults,
    diag_types: diag_shape_defaults,
    elements: [
      { data: { id: 'one', label: 'Node 1' }, position: { x: 0, y: 0 } },
      { data: { id: 'two', label: 'Node 2' }, position: { x: 100, y: 0 } },
      {
        data: {
          source: 'one',
          target: 'two',
          label: 'Edge from Node1 to Node2',
        },
      },
    ],
  };

  render() {
    const layout = { name: 'cose-bilkent' };
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
                    active={this.state.showConfig}
                  />
                  <Menu label="File" items={[{ label: 'new' }]} />
                  <Box direction="row">
                    <Menu
                      label="Diagram"
                      items={[
                        { label: 'add component' },
                        { label: 'add connection' },
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
              <Box direction="row" flex overflow={{ horizontal: 'hidden' }}>
                <Collapsible
                  direction="horizontal"
                  open={this.state.showConfig}
                >
                  <Sidebar
                    background="neutral-2"
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
                            showTypeConfig: false,
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
                            showColorConfig: false,
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
                  <Sidebar background="light-6" pad="none">
                    <Nav gap="small">
                      {this.state.diag_colors.map((status) => (
                        <Button
                          hoverIndicator
                          icon={<Edit color={status.text} />}
                          tip={{
                            dropProps: { align: { left: 'right' } },
                            content: 'edit ' + [status.status],
                          }}
                          style={{
                            color: [status.text],
                            background: [status.bg],
                            borderColor: [status.text],
                          }}
                        />
                      ))}
                      <Button
                        hoverIndicator
                        icon={<Add />}
                        tip={{
                          dropProps: { align: { left: 'right' } },
                          content: 'add new status',
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
                      {this.state.diag_types.map((shape) => (
                        <Button
                          hoverIndicator
                          icon={shape.icon}
                          tip={{
                            dropProps: { align: { left: 'right' } },
                            content: 'edit ' + [shape.shape],
                          }}
                        />
                      ))}
                      <Button
                        hoverIndicator
                        icon={<Add />}
                        tip={{
                          dropProps: { align: { left: 'right' } },
                          content: 'add new shape',
                        }}
                      />
                    </Nav>
                  </Sidebar>
                </Collapsible>
                <Box flex align="center" justify="center">
                  <NodeEdgeDiagram
                    elements={this.state.elements}
                    layout={layout}
                  />
                </Box>
                {!this.state.showSidebar || size !== 'small' ? (
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
