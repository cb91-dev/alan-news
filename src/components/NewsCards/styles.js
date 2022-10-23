import { makeStyles } from '@material-ui/core/styles';
import background from '../../assets/background.jpg'

export default makeStyles({
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: '25vh',
    padding: '10%',
    borderRadius: 10,
    color: 'white',
  },
  infoCard: {
    display: 'flex', flexDirection: 'column', textAlign: 'center',
  },
  container: {
    padding: '0 5%', width: '100%', margin: 0,alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  container_news: {
    padding: '0 5%', width: '100%', margin: 0
  },
  backGround:{
    backgroundImage:`url(${background})` ,
    height: '100vh',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    alignItems: 'center'
    },
});