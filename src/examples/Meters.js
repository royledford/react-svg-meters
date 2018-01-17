import React, { Component } from 'react'
import CircleMeter from '../components/CircleMeter/CircleMeter'
import HalfCircleMeter from '../components/HalfCircleMeter/HalfCircleMeter'
import DiskMeter from '../components/DiskMeter/DiskMeter'
import BlockMeter from '../components/BlockMeter/BlockMeter'
import LineMeter from '../components/LineMeter/LineMeter'
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
    const id = setInterval(this.randomize, 1000)
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
              foregroundColor={styles.color.foreground}
              backgroundColor={styles.color.background}
            />
          </div>
          <div className="meters-meterwrap">
            <CircleMeter
              thickness={50}
              value={rand2}
              progressStart={180}
              meterLength={240}
              rounded={false}
              foregroundColor={styles.color.foreground}
              backgroundColor={styles.color.background}
            />
          </div>
          <div className="meters-meterwrap">
            <CircleMeter
              thickness={20}
              value={rand3}
              rounded={true}
              backgroundColor="#2E112D"
              foregroundColor="#F0433A"
              progressStart={230}
              meterLength={260}
            />
          </div>
          <div className="meters-meterwrap">
            <CircleMeter
              thickness={30}
              value={rand4}
              textStyle={styles.textStyle}
              progressStart={180}
              foregroundColor={styles.color.foreground}
              backgroundColor={styles.color.background}
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
              foregroundColor={styles.color.foreground}
              backgroundColor={styles.color.background}
            />
          </div>
          <div className="meters-meterwrap">
            <HalfCircleMeter
              thickness={70}
              value={rand2}
              foregroundColor={styles.color.foreground}
              backgroundColor={styles.color.background}
            />
          </div>
          <div className="meters-meterwrap">
            <HalfCircleMeter
              thickness={20}
              value={rand3}
              rounded={true}
              backgroundColor="#2E112D"
              foregroundColor="#F0433A"
            />
          </div>
          <div className="meters-meterwrap">
            <HalfCircleMeter
              thickness={30}
              value={rand4}
              textStyle={styles.textStyle}
              foregroundColor={styles.color.foreground}
              backgroundColor={styles.color.background}
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
              backgroundColor={styles.color.background}
            />
          </div>
          <div className="meters-meterwrap">
            <DiskMeter
              value={rand2}
              showBorder={false}
              textColor={styles.color.foreground}
              backgroundColor={styles.color.background}
            />
          </div>
          <div className="meters-meterwrap">
            <DiskMeter
              thickness={10}
              value={rand3}
              borderColor={styles.color.background}
              backgroundColor="#F0433A"
              textColor="#2E112D"
            />
          </div>
          <div className="meters-meterwrap">
            <DiskMeter
              thickness={20}
              value={rand4}
              textStyle={styles.textStyle}
              textColor={styles.color.foreground}
              borderColor={styles.color.background}
              backgroundColor={styles.color.background}
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
              foregroundColor={styles.color.foreground}
              backgroundColor={styles.color.background}
            />
          </div>
          <div className="meters-meterwrap">
            <LineMeter
              value={rand2}
              thickness={50}
              rounded={true}
              position="top"
              foregroundColor={styles.color.foreground}
              backgroundColor={styles.color.background}
            />
          </div>
          <div className="meters-meterwrap">
            <LineMeter
              thickness={10}
              value={rand3}
              rounded={true}
              backgroundColor="#2E112D"
              foregroundColor="#F0433A"
              textStyle={styles.textStyleBright}
            />
          </div>
          <div className="meters-meterwrap">
            <LineMeter
              thickness={20}
              value={rand4}
              rounded={false}
              textStyle={styles.textStyle}
              foregroundColor={styles.color.foreground}
              backgroundColor={styles.color.background}
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
              foregroundColor={styles.color.foreground}
              backgroundColor={styles.color.background}
            />
          </div>
          <div className="meters-meterwrap">
            <BlockMeter
              value={rand2}
              textColor={styles.color.bright}
              foregroundColor={styles.color.foreground}
              backgroundColor={styles.color.background}
            />
          </div>
          <div className="meters-meterwrap">
            <BlockMeter
              value={rand3}
              backgroundColor="#2E112D"
              foregroundColor="#F0433A"
              textColor={styles.color.background}
              direction="vertical"
            />
          </div>
          <div className="meters-meterwrap">
            <BlockMeter
              value={rand4}
              foregroundColor={styles.color.foreground}
              backgroundColor={styles.color.background}
              textStyle={styles.textStyle}
              direction="vertical"
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

        {/*            All in a row         */}

        {/* -------------------------------- */}

        <div className="meters-row">
          <div className="meters-meterwrap meters-small">
            <CircleMeter
              value={rand1}
              size={120}
              foregroundColor={styles.color.foreground}
              backgroundColor={styles.color.background}
            />
          </div>
          <div className="meters-meterwrap meters-small">
            <DiskMeter
              value={rand2}
              size={120}
              backgroundColor={styles.color.background}
              borderColor={styles.color.background}
              textColor={styles.color.foreground}
            />
          </div>
          <div className="meters-meterwrap meters-small">
            <HalfCircleMeter
              value={rand3}
              size={120}
              foregroundColor={styles.color.foreground}
              backgroundColor={styles.color.background}
            />
          </div>
          <div className="meters-meterwrap meters-small">
            <LineMeter
              value={rand4}
              size={120}
              foregroundColor={styles.color.foreground}
              backgroundColor={styles.color.background}
            />
          </div>
          <div className="meters-meterwrap meters-small">
            <BlockMeter
              value={rand4}
              size={120}
              textColor={styles.color.bright}
              foregroundColor={styles.color.foreground}
              backgroundColor={styles.color.background}
            />
          </div>
        </div>

        {/* -------------------------------- */}
      </div>
    )
  }
}
