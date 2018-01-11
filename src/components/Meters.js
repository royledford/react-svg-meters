import React, { Component } from 'react'
import MeterCircle from './Meter/MeterCircle'
import MeterCircleSemi from './Meter/MeterCircleSemi'
import MeterCircleDisk from './Meter/MeterCircleDisk'
import MeterBlock from './Meter/MeterBlock'
import MeterLine from './Meter/MeterLine'
import { randomInteger } from '../helpers/helpers'
import './Meters.css'

export default class Meters extends Component {
  constructor(props) {
    super(props)
    this.state = {
      intervalId: undefined,
      rand1: 22,
      rand2: 55,
      rand3: 33,
      rand4: 88,
    }
  }

  componentDidMount() {
    const id = setInterval(this.randomize, 2000)
    this.setState({ intervalId: id })
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId)
  }

  randomize = () => {
    this.setState({
      rand1: randomInteger(10, 90),
      rand2: randomInteger(10, 90),
      rand3: randomInteger(10, 90),
      rand4: randomInteger(10, 90),
    })
  }

  render() {
    const { rand1, rand2, rand3, rand4 } = this.state

    const styles = {
      textStyle: {
        fontFamily: 'sans-serif',
        fill: '#1FC939',
        fontSize: 24,
      },
      textStyleBright: {
        fill: '#C9283E',
      },
      color: {
        foreground: '#C9283E',
        background: '#820333',
      },
    }

    return (
      <div className="meters-wrap">
        <div className="meters-header">
          <h1 className="meters-title">React SVG Meters</h1>
        </div>

        {/* -------------------------------- */}

        {/*            CIRCLES               */}

        {/* -------------------------------- */}

        <div className="meters-row">
          <div className="meters-meterwrap">
            <MeterCircle
              value={rand1}
              lineForeground={styles.color.foreground}
              lineBackground={styles.color.background}
            />
          </div>
          <div className="meters-meterwrap">
            <MeterCircle
              lineWidth={50}
              value={rand2}
              rounded={true}
              progressStart={180}
              meterLength={240}
              rounded={false}
              lineForeground={styles.color.foreground}
              lineBackground={styles.color.background}
            />
          </div>
          <div className="meters-meterwrap">
            <MeterCircle
              lineWidth={20}
              value={rand3}
              rounded={true}
              lineBackground="#2E112D"
              lineForeground="#F0433A"
              progressStart={230}
              meterLength={260}
            />
          </div>
          <div className="meters-meterwrap">
            <MeterCircle
              lineWidth={30}
              value={rand4}
              textStyle={styles.textStyle}
              progressStart={180}
              lineForeground={styles.color.foreground}
              lineBackground={styles.color.background}
            />
          </div>
        </div>

        {/* -------------------------------- */}

        {/*         HALF CIRCLES             */}

        {/* -------------------------------- */}
        <div className="meters-row">
          <div className="meters-meterwrap">
            <MeterCircleSemi value={rand1} />
          </div>
          <div className="meters-meterwrap">
            <MeterCircleSemi lineWidth={70} value={rand2} />
          </div>
          <div className="meters-meterwrap">
            <MeterCircleSemi
              lineWidth={20}
              value={rand3}
              rounded={true}
              lineBackground="#2E112D"
              lineForeground="#F0433A"
            />
          </div>
          <div className="meters-meterwrap">
            <MeterCircleSemi lineWidth={30} value={rand4} textStyle={styles.textStyle} />
          </div>
        </div>

        {/* -------------------------------- */}

        {/*             DISKS                */}

        {/* -------------------------------- */}
        <div className="meters-row">
          <div className="meters-meterwrap">
            <MeterCircleDisk value={rand1} />
          </div>
          <div className="meters-meterwrap">
            <MeterCircleDisk value={rand2} showBorder={false} />
          </div>
          <div className="meters-meterwrap">
            <MeterCircleDisk lineWidth={10} value={rand3} lineBackground="#2E112D" lineForeground="#F0433A" />
          </div>
          <div className="meters-meterwrap">
            <MeterCircleDisk lineWidth={20} value={rand4} textStyle={styles.textStyle} />
          </div>
        </div>

        {/* -------------------------------- */}

        {/*             LINES                */}

        {/* -------------------------------- */}
        <div className="meters-row">
          <div className="meters-meterwrap">
            <MeterLine value={rand1} />
          </div>
          <div className="meters-meterwrap">
            <MeterLine value={rand2} lineWidth={50} rounded={true} position="top" />
          </div>
          <div className="meters-meterwrap">
            <MeterLine
              lineWidth={10}
              value={rand3}
              rounded={true}
              lineBackground="#2E112D"
              lineForeground="#F0433A"
              textStyle={styles.textStyleBright}
            />
          </div>
          <div className="meters-meterwrap">
            <MeterLine lineWidth={20} value={rand4} rounded={false} textStyle={styles.textStyle} />
          </div>
        </div>

        {/* -------------------------------- */}

        {/*             BLOCKS               */}

        {/* -------------------------------- */}
        <div className="meters-row">
          <div className="meters-meterwrap">
            <MeterBlock value={rand1} />
          </div>
          <div className="meters-meterwrap">
            <MeterBlock value={rand2} />
          </div>
          <div className="meters-meterwrap">
            <MeterBlock
              value={rand3}
              lineBackground="#2E112D"
              lineForeground="#F0433A"
              textStyle={styles.textStyleBright}
              horizontal={false}
            />
          </div>
          <div className="meters-meterwrap">
            <MeterBlock value={rand4} textStyle={styles.textStyle} horizontal={false} />
          </div>
        </div>

        {/* -------------------------------- */}

        {/*            DEFAULT COLOR         */}

        {/* -------------------------------- */}

        <div className="meters-row">
          <div className="meters-meterwrap meters-nobg">
            <MeterCircle value={rand1} />
          </div>
          <div className="meters-meterwrap meters-nobg">
            <MeterCircle
              lineWidth={50}
              value={rand2}
              rounded={true}
              progressStart={180}
              meterLength={240}
              rounded={false}
            />
          </div>
          <div className="meters-meterwrap meters-nobg">
            <MeterCircle
              lineWidth={20}
              value={rand3}
              rounded={true}
              lineBackground="#2E112D"
              lineForeground="#F0433A"
              progressStart={230}
              meterLength={260}
            />
          </div>
          <div className="meters-meterwrap meters-nobg">
            <MeterCircle lineWidth={30} value={rand4} textStyle={styles.textStyle} progressStart={180} />
          </div>
        </div>

        {/* -------------------------------- */}
      </div>
    )
  }
}
