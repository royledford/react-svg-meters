import React from 'react'
import { CircleMeter } from 'react-svg-meters'

/**
 * Circle meters can also be shown with a partial circle.
 *
 * Setting the meter length (in degrees) determines the portion of the circle that is displayed.
 *
 * The progress start (in degrees) can be used to determine the start position of the arc.
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
      <CircleMeter value={35} size={150} progressStart={230} meterLength={260} rounded={true} style={styles.meter} />
      <CircleMeter
        value={75}
        size={150}
        progressStart={180}
        meterLength={240}
        textStyle={{ fill: 'black', fontSize: '40px' }}
        foregroundColor={styles.color.foreground}
        backgroundColor={styles.color.background}
        textColor={styles.color.bright}
        style={styles.meter}
      />
      <CircleMeter value={55} size={150} meterLength={180} style={styles.meter} />
    </div>
  )
}
