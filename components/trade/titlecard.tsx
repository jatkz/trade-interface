import React from "react";
import { Pane, Card, Text } from "evergreen-ui";
import Image from "next/image";
import styles from "./titlecard.module.css";

export default function TitleCard() {
  return (
    <Card
      display="flex"
      flex="auto"
      flexDirection="column"
      padding={8}
      border={true}
    >
      <Pane display="flex" justifyContent="space-between" paddingY={4}>
        <Pane display="flex" alignItems="center">
          <Text marginRight={8}>TSLA</Text>
          <Image
            priority
            src="/images/tsla.png"
            height={50}
            width={50}
            alt="Tesla"
            className={styles.borderCircle}
          />
        </Pane>
        <Pane display="flex" flexDirection="column">
          <Text>$105 estimated</Text>
          <Text>$56 Realtime</Text>
        </Pane>
      </Pane>

      <Pane
        display="flex"
        flex="auto"
        justifyContent="space-between"
        paddingY={4}
      >
        <Pane display="flex">
          <Text># 3sigmamargins, bullish</Text>
        </Pane>
        <Pane display="flex">
          <Text>Score: 565</Text>
        </Pane>
      </Pane>
    </Card>
  );
}
