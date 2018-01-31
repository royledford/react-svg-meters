import React from 'react'
import { BlockMeter } from 'react-svg-meters'

/**
 * Examples of the BlockMeter showing the default values and modified colors
 *
 * You can change the orientation of the meter by setting the direction property to
 * 'horizontal' or 'vertical'.
 *
 * The text can changed using the textStyle property and providing a style object.
 * It is svg text and fill is used to change the text color.
 *
 */
export default function ExampleBlockMeter() {
  const styles = {
    meter: {
      margin: 8,
    },
    color: {
      foreground: '#C9283E',
      background: '#820333',
      bright: '#F0433A',
    },
    textStyle: {
      fontFamily: 'sans-serif',
      fill: '#ffffff',
      fontSize: 20,
    },
  }

  return (
    <div>
      <BlockMeter value={35} size={150} style={styles.meter} />
      <BlockMeter
        value={75}
        size={150}
        foregroundColor={styles.color.foreground}
        backgroundColor={styles.color.background}
        textColor={styles.color.bright}
        style={styles.meter}
      />
      <BlockMeter value={55} size={150} direction="vertical" style={styles.meter} />
      <BlockMeter value={65} size={150} textStyle={styles.textStyle} style={styles.meter} />
    </div>
  )
}
