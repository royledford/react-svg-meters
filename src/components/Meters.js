import React, { Component } from 'react'
import CircleMeter from './Meter/CircleMeter'
import HalfCircleMeter from './Meter/HalfCircleMeter'
import DiskMeter from './Meter/DiskMeter'
import BlockMeter from './Meter/BlockMeter'
import LineMeter from './Meter/LineMeter'
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
      color: {
        foreground: '#C9283E',
        background: '#820333',
        bright: '#F0433A',
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
            <CircleMeter
              value={rand1}
              lineForeground={styles.color.foreground}
              lineBackground={styles.color.background}
            />
          </div>
          <div className="meters-meterwrap">
            <CircleMeter
              lineWidth={50}
              value={rand2}
              progressStart={180}
              meterLength={240}
              rounded={false}
              lineForeground={styles.color.foreground}
              lineBackground={styles.color.background}
            />
          </div>
          <div className="meters-meterwrap">
            <CircleMeter
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
            <CircleMeter
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
            <HalfCircleMeter
              value={rand1}
              lineForeground={styles.color.foreground}
              lineBackground={styles.color.background}
            />
          </div>
          <div className="meters-meterwrap">
            <HalfCircleMeter
              lineWidth={70}
              value={rand2}
              lineForeground={styles.color.foreground}
              lineBackground={styles.color.background}
            />
          </div>
          <div className="meters-meterwrap">
            <HalfCircleMeter
              lineWidth={20}
              value={rand3}
              rounded={true}
              lineBackground="#2E112D"
              lineForeground="#F0433A"
            />
          </div>
          <div className="meters-meterwrap">
            <HalfCircleMeter
              lineWidth={30}
              value={rand4}
              textStyle={styles.textStyle}
              lineForeground={styles.color.foreground}
              lineBackground={styles.color.background}
            />
          </div>
        </div>

        {/* -------------------------------- */}

        {/*             DISKS                */}

        {/* -------------------------------- */}
        <div className="meters-row">
          <div className="meters-meterwrap">
            <DiskMeter
              value={rand1}
              textColor={styles.color.foreground}
              borderColor={styles.color.background}
              lineBackground={styles.color.background}
            />
          </div>
          <div className="meters-meterwrap">
            <DiskMeter
              value={rand2}
              showBorder={false}
              textColor={styles.color.foreground}
              lineBackground={styles.color.background}
            />
          </div>
          <div className="meters-meterwrap">
            <DiskMeter
              lineWidth={10}
              value={rand3}
              borderColor={styles.color.background}
              lineBackground="#F0433A"
              textColor="#2E112D"
            />
          </div>
          <div className="meters-meterwrap">
            <DiskMeter
              lineWidth={20}
              value={rand4}
              textStyle={styles.textStyle}
              textColor={styles.color.foreground}
              borderColor={styles.color.background}
              lineBackground={styles.color.background}
            />
          </div>
        </div>

        {/* -------------------------------- */}

        {/*             LINES                */}

        {/* -------------------------------- */}
        <div className="meters-row">
          <div className="meters-meterwrap">
            <LineMeter
              value={rand1}
              lineForeground={styles.color.foreground}
              lineBackground={styles.color.background}
            />
          </div>
          <div className="meters-meterwrap">
            <LineMeter
              value={rand2}
              lineWidth={50}
              rounded={true}
              position="top"
              lineForeground={styles.color.foreground}
              lineBackground={styles.color.background}
            />
          </div>
          <div className="meters-meterwrap">
            <LineMeter
              lineWidth={10}
              value={rand3}
              rounded={true}
              lineBackground="#2E112D"
              lineForeground="#F0433A"
              textStyle={styles.textStyleBright}
            />
          </div>
          <div className="meters-meterwrap">
            <LineMeter
              lineWidth={20}
              value={rand4}
              rounded={false}
              textStyle={styles.textStyle}
              lineForeground={styles.color.foreground}
              lineBackground={styles.color.background}
            />
          </div>
        </div>

        {/* -------------------------------- */}

        {/*             BLOCKS               */}

        {/* -------------------------------- */}
        <div className="meters-row">
          <div className="meters-meterwrap">
            <BlockMeter
              value={rand1}
              textColor={styles.color.bright}
              lineForeground={styles.color.foreground}
              lineBackground={styles.color.background}
            />
          </div>
          <div className="meters-meterwrap">
            <BlockMeter
              value={rand2}
              textColor={styles.color.bright}
              lineForeground={styles.color.foreground}
              lineBackground={styles.color.background}
            />
          </div>
          <div className="meters-meterwrap">
            <BlockMeter
              value={rand3}
              lineBackground="#2E112D"
              lineForeground="#F0433A"
              textColor={styles.color.background}
              horizontal={false}
            />
          </div>
          <div className="meters-meterwrap">
            <BlockMeter
              value={rand4}
              lineForeground={styles.color.foreground}
              lineBackground={styles.color.background}
              textStyle={styles.textStyle}
              horizontal={false}
            />
          </div>
        </div>

        {/* -------------------------------- */}

        {/*            DEFAULT COLOR         */}

        {/* -------------------------------- */}

        <div className="meters-row">
          <div className="meters-meterwrap meters-nobg meters-small">
            <CircleMeter value={rand1} size={120} />
          </div>
          <div className="meters-meterwrap meters-nobg meters-small">
            <DiskMeter value={rand2} size={120} />
          </div>
          <div className="meters-meterwrap meters-nobg meters-small">
            <HalfCircleMeter value={rand3} size={120} />
          </div>
          <div className="meters-meterwrap meters-nobg meters-small">
            <LineMeter value={rand4} size={120} />
          </div>
          <div className="meters-meterwrap meters-nobg meters-small">
            <BlockMeter value={rand4} size={120} />
          </div>
        </div>

        {/* -------------------------------- */}
      </div>
    )
  }
}
