import useMobile from '../hooks/useMobile';
import useStyles from '../styles/Pomodoro';
import LogoTitle from './LogoTitle';
import TimerBox from './TimerBox';

function Pomodoro() {
  const classes = useStyles();
  const isTablet = useMobile('sm');
  const isMobile = useMobile('xs');

  return (
    <div className={classes.root}>
      <div className={`${classes.timerWrap} box`}>
        {isMobile && <LogoTitle />}
        <TimerBox />
      </div>
      {!isTablet && <div className={`${classes.musicWrap} box`}>Music</div>}
      {!isTablet && <div className={`${classes.taskWrap} box`}>Task</div>}
      <div className={`${classes.quoteWrap} box`}>Quote</div>
    </div>
  );
}

export default Pomodoro;