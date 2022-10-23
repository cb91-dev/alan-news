import React from 'react';
import { Grid, Grow, Typography ,Container , Card,CardMedia,CardContent,CardActionArea, Box} from '@material-ui/core';
import alan from '../../assets/alan.svg'
import NewsCard from './NewsCard/NewsCard';
import useStyles from './styles.js';



const infoCards = [
  { title: 'Latest News', text: 'Give me the latest news',info: 'This will get lastest headlines' },
  { title: 'News by categories', info: 'Business, Entertainment, General, Health, Science, Sports, Technology', text: 'Give me the latest Technology news' },
  { title: 'News by Terms', info: 'Bitcoin, PlayStation 5, Smartphones, Donald Trump...', text: 'What\'s up with PlayStation 5' },
  { title: 'News by Sources', info: 'CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...', text: 'Give me the news from CNN' },
];


const NewsCards = ({ articles, activeArticle }) => {
  const classes = useStyles();

  if (!articles.length) {
    return (
      <Box className={classes.backGround}>
        <Container>
        <Grow in className={classes.container}>
          <Card>
            <CardActionArea>
              <Box style={{display:'flex',justifyContent:'center',paddingTop:10}}>
            <CardMedia
              style={{width:'400px',maxWidth:'1400px'}}
              component="img"
              height="140"
              image={alan}
              alt="alan"
              />
              </Box>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              Alan-News 
              </Typography>
              <Box pb={2}>
              <Typography variant='body2'>Ai driven news application, simply hit the microphone button:</Typography>
              </Box>
              {infoCards.map((infoCard,i) => ( 
              <Box key={i} pt={1}>
                <Typography><b>{infoCard.title}</b></Typography>
                <Typography variant="subtitle2"><b>SAY: </b>{infoCard.text}</Typography>
                <Typography variant='body2'>{infoCard.info}</Typography>
              </Box> 
              ))}
              </CardContent>
            </CardActionArea>
          </Card>
        </Grow>
        </Container>
      </Box>
    );
  }

  return (
    <Container>
    <Box>
    <img alt='alan' src={alan} height={100} width={100}/>
    </Box>
    <Grow in>
      <Grid className={classes.container_news} container alignItems="stretch" spacing={3}>
        {articles.map((article, i) => (
          <Grid item xs={12} sm={6} md={4} lg={3} style={{ display: 'flex' }}>
            <NewsCard activeArticle={activeArticle} i={i} article={article} />
          </Grid>
        ))}
      </Grid>
    </Grow>
    </Container>

  );
};

export default NewsCards;