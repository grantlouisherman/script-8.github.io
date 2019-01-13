import React, { Component } from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'
import actions from '../actions/actions.js'
import logo from '../images/logo.png'
import { timestamp } from '../utils/timestamp.json'
import loshermanosbrosgif from '../images/loshermanosbros-lite.gif'
import breakoutgif from '../images/breakout-lite.gif'
import brospipegif from '../images/brospipe-lite.gif'
import livecoding480 from '../images/livecoding480.gif'
import slider480 from '../images/slider480.gif'
import pauserewind from '../images/pauserewind.gif'
import toggle from '../images/toggle.gif'
import spritedemo from '../images/spritedemo.gif'
import mapdemo from '../images/mapdemo.gif'
import musicdemo from '../images/musicdemo.gif'
import { version } from '../iframe/package.json'

const mapStateToProps = ({ tutorial }) => ({
  tutorial
})

const mapDispatchToProps = dispatch => ({
  startTutorial: () =>
    dispatch(
      actions.setTutorialSlide({
        master: 0,
        slide: 0
      })
    )
})

class Home extends Component {
  constructor (props) {
    super(props)
    this.handleStartTutorial = this.handleStartTutorial.bind(this)
  }

  handleStartTutorial () {
    this.props.startTutorial()
  }

  render () {
    return (
      <div className='Home'>
        <div className='main'>
          <img className='logo' src={logo} alt='SCRIPT-8 logo' />
          <p className='last-updated'>
            <span>updated {timestamp}</span>
            <span>v{version}</span>
          </p>
          <p>
            SCRIPT-8 is a fantasy computer for making, sharing, and playing tiny
            retro-looking games (called cassettes). It's free and{' '}
            <a
              className='text'
              href='https://github.com/script-8/script-8.github.io'
            >
              open-source
            </a>
            .
          </p>
          <p className='gifs'>
            <a href='https://script-8.github.io/?id=cd8d6811adb3afb472aaf7505729cf01'>
              <img
                className='gif'
                src={loshermanosbrosgif}
                alt='Los hermanos bros'
              />
            </a>
            <a href='https://script-8.github.io/?id=1c4ae6ff3727cb4a0e344e3435aa16b2'>
              <img className='gif' src={breakoutgif} alt='break-8 game' />
            </a>
            <a href='https://script-8.github.io/?id=7f370bc716aff805f593a3f80008711f'>
              <img className='gif' src={brospipegif} alt='the plumber' />
            </a>
          </p>
          <p className='start'>
            <button
              className={classNames('button', {
                invisible: this.props.tutorial
              })}
              onClick={this.handleStartTutorial}
            >
              > Start here
            </button>
          </p>
          <p>
            SCRIPT-8 is designed to encourage play — the kind of wonder-filled
            play children experience as they explore and learn about the world.
            In order to support this goal, everything in SCRIPT-8 has immediate
            feedback. It is what some call a "livecoding" environment.
          </p>
          <p>It features:</p>
          <ul>
            <li>
              a code editor where the game changes as you type.
              <img className='gif wide' src={livecoding480} alt='livecoding' />
            </li>
            <li>
              a slider to help you tweak numbers without typing.
              <img className='gif wide' src={slider480} alt='slider' />
            </li>
            <li>
              <span>a time-traveling tool so you can pause and rewind.</span>
              <img
                className='gif wide single'
                src={pauserewind}
                alt='pause and rewind'
              />
            </li>
            <li>
              <span>
                buttons that show a character's past and future paths.
              </span>
              <img className='gif wide single' src={toggle} alt='toggle' />
            </li>
            <li>
              the ability to combine all the above so you can manipulate time.
              <iframe
                title="Demonstration of SCRIPT-8's time-traveling tool"
                width='560'
                height='315'
                src='https://www.youtube.com/embed/0rg5GGFaIY0'
                frameBorder='0'
                allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
              />{' '}
            </li>
            <li>
              <span>
                a sprite editor where the game instantly displays your edits.
              </span>
              <img
                className='gif wide single'
                src={spritedemo}
                alt='sprite demo'
              />
            </li>
            <li>
              <span>
                a map editor where changes alter the game's behavior, in
                real-time.
              </span>
              <img className='gif wide single' src={mapdemo} alt='map demo' />
            </li>
            <li>
              <span>
                a music editor where you create phrases, group them into chains,
                and turn those into songs.
              </span>
              <img
                className='gif wide single'
                src={musicdemo}
                alt='music demo'
              />
            </li>
          </ul>

          <p>Each cassette is recorded to a URL you can share with anyone.</p>
          <p>Play cassettes with a keyboard or gamepad.</p>
          <p>
            You can inspect any cassette's contents (even if it's not yours),
            change the code, art, or music, and record it to a different
            cassette — a new version.
          </p>
          <p>
            SCRIPT-8 is heavily influenced by Bret Victor's ideas, specifically{' '}
            <a className='text' href='http://vimeo.com/36579366'>
              Inventing on principle
            </a>{' '}
            and{' '}
            <a
              className='text'
              href='http://worrydream.com/LearnableProgramming/'
            >
              Learnable programming
            </a>
            .
          </p>
        </div>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
