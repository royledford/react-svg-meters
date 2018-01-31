import React from 'react'
import { LineMeter } from 'react-svg-meters'

/**
 * You can change the individual colors of the meter, the text position, and change
 * the text styles in the meter. Rounded ends can be applied by setting
 * the rounded property to true.
 *
 * By default the text color will match the foregroundColor. This can be changed with
 * the text color property.
 *
 * The text can changed using the textStyle property and providing a style object.
 * It is svg text and fill is used to change the text color.
 *
 * The second example shows the text placed on the bottom by setting the
 * position property to 'bottom'
 */
export default function LineMeters() {
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
      fill: '#1FC939',
      fontSize: 70,
    },
  }

  return (
    <div>
      <LineMeter value={35} size={150} style={styles.meter} />
      <LineMeter
        value={75}
        size={150}
        position="top"
        thickness={56}
        foregroundColor={styles.color.foreground}
        backgroundColor={styles.color.background}
        style={styles.meter}
      />
      <LineMeter
        value={55}
        size={150}
        thickness={16}
        rounded={true}
        foregroundColor={styles.color.foreground}
        backgroundColor={styles.color.background}
        style={styles.meter}
      />
      <LineMeter
        value={65}
        size={150}
        rounded={true}
        textStyle={styles.textStyle}
        foregroundColor={styles.color.foreground}
        backgroundColor={styles.color.background}
        style={styles.meter}
      />
    </div>
  )
}
