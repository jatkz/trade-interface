import React from "react";
import { Pane, Card, Text } from "evergreen-ui";
import Image from "next/image";
import styles from "@/styles/Trade.module.css";
import TitleCard from "@/components/trade/titlecard";

export default function Simple() {
  return (
    <Pane height="100vh" width="100vw" padding={4}>
      <TitleCard></TitleCard>
    </Pane>
  );
}
