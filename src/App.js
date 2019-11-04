import React, { useState } from "react";

import { TextArea, Form, Segment, Header, Divider } from "semantic-ui-react";

import styles from "./App.module.css";

function App() {
  const [decodeValue, setDecodeValue] = useState("");
  console.log(decodeValue.split("\\n"));
  return (
    <div className={styles.App}>
      <Header as="h1" className={styles.title}>
        Welcome to \n decoder
      </Header>
      <Form>
        <strong>Input value to decode:</strong>{" "}
        <TextArea
          placeholder="Input value to decode"
          value={decodeValue.join}
          onChange={(e, { value }) => setDecodeValue(value)}
        />
      </Form>
      {decodeValue && (
        <Segment className={styles.result}>
          <Header as="h3" textAlign="center">
            Result:
          </Header>
          <Divider />
          {decodeValue.split("\\n").map((v, idx) => {
            const tabLength = 4;
            const tabs = v.split("\\t").length - 1;

            return (
              <div key={idx} style={{ paddingLeft: `${tabLength * tabs}em` }}>
                {v.replace(/\\t/g, "")}
                <br />
              </div>
            );
          })}
        </Segment>
      )}
      <div className={styles.footer}>by Michael Harley</div>
    </div>
  );
}

export default App;
