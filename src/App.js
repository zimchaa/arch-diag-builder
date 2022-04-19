import React, { Component } from 'react';
import {
  Box,
  Button,
  Collapsible,
  Header,
  Menu,
  Grommet,
  ResponsiveContext,
  Sidebar,
  Nav,
} from 'grommet';
import { Cubes, Configure, Help, Projects, Clock } from 'grommet-icons';

const theme = {
  global: {
    colors: {
      brand: '#228BE6',
    },
    font: {
      family: 'Roboto',
      size: '14px',
      height: '20px',
    },
  },
};

const AppBar = (props) => <Header background="brand" {...props} />;

class App extends Component {
  state = {
    showSidebar: false,
    showConfig: false,
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
                  />
                </Nav>
              </AppBar>
              <Box direction="row" flex overflow={{ horizontal: 'hidden' }}>
                <Collapsible
                  direction="horizontal"
                  open={this.state.showConfig}
                >
                  <Sidebar
                    background="brand"
                    footer={<Button icon={<Help />} hoverIndicator />}
                    pad="none"
                  >
                    <Nav gap="small">
                      <Button icon={<Projects />} hoverIndicator />
                      <Button icon={<Clock />} hoverIndicator />
                    </Nav>
                  </Sidebar>
                </Collapsible>
                <Box flex align="center" justify="center">
                  {this.state.showConfig}
                </Box>
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
                    sidebar
                  </Box>
                </Collapsible>
              </Box>
            </Box>
          )}
        </ResponsiveContext.Consumer>
      </Grommet>
    );
  }
}

export default App;
