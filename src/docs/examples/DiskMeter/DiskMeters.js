import React from 'react'
import { DiskMeter } from 'react-svg-meters'

/**
 * You can change the individual colors of the meter, hide the border and change
 * the text styles in the disk meter.
 */
export default function DiskMeters() {
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
      <DiskMeter value={35} size={150} style={styles.meter} />
      <DiskMeter
        value={75}
        size={150}
        backgroundColor={styles.color.foreground}
        textColor={styles.color.background}
        borderColor={styles.color.foreground}
        style={styles.meter}
      />
      <DiskMeter
        value={55}
        size={150}
        showBorder={false}
        backgroundColor={styles.color.foreground}
        textColor={styles.color.background}
        style={styles.meter}
      />
      {/* The text in the meter is svg text so use the fill style to adjust the color */}
      <DiskMeter value={95} size={150} thickness={14} textStyle={{ fill: 'black' }} style={styles.meter} />
    </div>
  )
}
