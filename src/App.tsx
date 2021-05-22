import * as React from 'react';

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: 'flex',
    minHeight: '100vh',
  },
  sidebar: {
    background: 'lightgray',
    width: '150px',
  },
  body: {
    background: '#ddd',
    flex: 1,
  },
};

export class App extends React.Component {
  public render(): React.ReactNode {
    return (
      <div style={styles.container}>
        <div style={styles.sidebar}>Sidebar</div>
        <div style={styles.body}>Body</div>
      </div>
    );
  }
}
