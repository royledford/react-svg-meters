import React from 'react'
import BlockMeter from 'react-svg-meters/BlockMeter'

/**
 * Examples of the BlockMeter showing the defaults, modified colors, and a different orientation.
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
  }

  return (
    <div>
      <BlockMeter value={35} size={150} style={styles.meter} />
      <BlockMeter
        value={35}
        size={150}
        foregroundColor={styles.color.foreground}
        backgroundColor={styles.color.background}
        textColor={styles.color.bright}
        style={styles.meter}
      />
      <BlockMeter value={65} size={150} direction="vertical" style={styles.meter} />
    </div>
  )
}
