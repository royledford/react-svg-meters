import React from 'react'
import { CircleMeter } from 'react-svg-meters'

/**
 * Examples of the CircleMeter showing the defaults, modified colors, and modified graphics..
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
      <CircleMeter value={35} size={150} style={styles.meter} />
      <CircleMeter
        value={75}
        size={150}
        rounded={true}
        foregroundColor={styles.color.foreground}
        backgroundColor={styles.color.background}
        style={styles.meter}
      />
      <CircleMeter
        value={55}
        size={150}
        thickness={36}
        foregroundColor={styles.color.foreground}
        backgroundColor={styles.color.background}
        style={styles.meter}
      />
      <CircleMeter
        value={85}
        size={150}
        thickness={26}
        backgroundColor="#2E112D"
        foregroundColor="#F0433A"
        textColor={styles.color.bright}
        style={styles.meter}
      />
    </div>
  )
}
