import BodyWrapper from '../../components/UI/BodyWrapper'
import Button from '../../components/UI/Button'
import yellowSpot from '../../assets/startPageYellowSpot.svg'
import blueSpot from '../../assets/startPageBlueSpot.svg'
import classes from './StartPage.module.css'

export default function Start(props) {
    return (
        
        <BodyWrapper>
            <img src={yellowSpot} className={classes['yellow-spot']} />
            <img src={blueSpot} className={classes['blue-spot']} />
            <h1 className={classes.title}>Quizzical</h1>
            <p className={classes.description}>Let's test your general knowledge</p>
            <Button className={classes.button} onClick={props.startQuiz}> 
                Start quiz 
            </Button>
        </BodyWrapper>
        
    )
}