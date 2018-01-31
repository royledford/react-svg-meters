import React from 'react'
import { HalfCircleMeter } from 'react-svg-meters'

/**
 * You can change the individual colors of the meter, hide the border and change
 * the text styles in the disk meter. Rounded ends can be applied using by setting
 * the rounded property to true.
 *
 * By default the text color will match the foregroundColor. This changed with
 * the text color porperty.
 *
 * The text can changed using the textStyle property. It accepts a style object.
 * It is svg text and fill is used to change the text color.
 *
 *
 */
export default function HalfcircleMeters() {
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
      fontSize: 24,
    },
  }

  return (
    <div>
      <HalfCircleMeter value={35} size={150} style={styles.meter} />
      <HalfCircleMeter
        value={75}
        size={150}
        rounded={true}
        foregroundColor={styles.color.foreground}
        backgroundColor={styles.color.background}
        style={styles.meter}
      />
      <HalfCircleMeter
        value={55}
        size={150}
        thickness={36}
        foregroundColor={styles.color.foreground}
        backgroundColor={styles.color.background}
        textColor={styles.color.bright}
        style={styles.meter}
      />
      {/* The text in the meter is svg text so use the fill style to adjust the color */}
      <HalfCircleMeter
        value={65}
        size={150}
        thickness={14}
        foregroundColor={styles.color.foreground}
        backgroundColor={styles.color.background}
        textStyle={styles.textStyle}
        style={styles.meter}
      />
    </div>
  )
}
