import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Skeleton,
  // Container,
  // Skeleton,
  Typography
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import GitHubIcon from '@mui/icons-material/GitHub';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';
// import { useImage } from 'react-image';
import { Img } from 'react-image';
import ProjectCardSkeleton from './ProjectCardSkeleton';

/**
 * Convert an array of items into an English list of items.
 * @param {array} items An array of contributors to join with commas
 * @returns A natural language string of items/people (e.g., "Robert Jones, Barack Obama, and Harriet Tubman")
 */
function arrayToEnglishList(items) {
  if (!items) {
    return '';
  }
  let englishList = '';
  switch (items.length) {
    case 1:
      // If only one item, return it
      englishList = items[0];
      break;
    case 2:
      // If only two items, return them with the word 'and' in between
      englishList = items[0] + ' and ' + items[1];
      break;
    default:
      // If 3+ items, return something like: "John Doe, Shriya Patel, and Sam Patterson"
      for (let itemIdx = 0; itemIdx < items.length - 1; itemIdx++) {
        const personName = items[itemIdx];
        englishList = englishList + personName + ', ';
      }
      englishList = englishList + 'and ' + items[items.length - 1];
      break;
  }
  return englishList;
}

function ProjectImage(props) {
  // const { src } = useImage({
  //   srcList: 'https://www.example.com/foo.jpg',
  //   fallback: <Skeleton variant='rectangular' width='100%' height={200} />,
  // });
  return <Img src={props.imageURL} width='100%' loader={<Skeleton variant='rectangular' animation='wave' width='100%' height={200} />} />;
}

ProjectImage.propTypes = {
  imageURL: PropTypes.string
};

function ProjectCard(props) {
  // const [imageName, setImageName] = useState(props.imageName);
  const [imageURL, setImageURL] = useState(undefined);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [lookedForImage, setLookedForImage] = useState(false);
  const [hasImage, setHasImage] = useState(false);

  useEffect(() => {
    // if (imageName === undefined || props.localImage) return;
    if (props.localImage) {
      return;
    }

    const storage = getStorage();
    getDownloadURL(ref(storage, `/project-images/${props.id}`))
      .then((url) => {
        // Or inserted into an <img> element
        // const img = document.getElementById('myimg');
        // img.setAttribute('src', url);
        console.log(url);
        setImageURL(url);
        setHasImage(true);
        setLookedForImage(true);
      })
      .catch(() => {
        // console.log(error);
        // setImageName(undefined);
        setHasImage(false);
        setLookedForImage(true);
      });
  }, []);

  useEffect(() => {
    // if (props.localImage) {
    // console.log(`imageName: ${props.imageName}`);
    // if (!props.imageName) {
    //   setImageURL(props.id);
    //   return;
    // }
    setImageURL(props.localImageURL);
    // setImageLoaded(false);
    setHasImage(true);
    //   return;
    // }
  }, [props.localImageURL]);

  return (
    <>
      {/* Make sure we looked for image, and only display final card if image is loaded or if project has no image */}
      {/* {props.localImage || (lookedForImage && (imageLoaded || !hasImage)) ? ( */}
      {/* // (props.imageName && imageURL) || !props.imageName ? ( */}
      <Card
        sx={{
          display: props.localImage || (lookedForImage && (imageLoaded || !hasImage)) ? 'block' : 'none',
          height: '100%'
        }}
      >
        {/* {imageLoaded && ( */}
        <CardMedia component='img' src={imageURL} onLoad={() => setImageLoaded(true)} sx={{ display: imageLoaded ? 'block' : 'none' }}>
          {/* <img src={imageURL} width='100%' /> */}
          {/* <ProjectImage imageURL={imageURL} /> */}
        </CardMedia>
        {/* )} */}
        <CardContent>
          <Typography variant='h4' fontWeight='bold' mb={1}>
            {props.title}
          </Typography>
          <Typography variant='h6' lineHeight={1} mb={1}>
            {arrayToEnglishList(props.contributors)}
          </Typography>
          <Typography fontStyle='italic' mb={1}>
            Led by {props.manager}
          </Typography>
          <Typography mb={1}>{props.description}</Typography>
          <Typography fontStyle='italic'>
            {/* If publishedDate is present, display it. Otherwise, display project as "ongoing". */}
            {props.publishedDate ? (
              <>
                Published on{' '}
                {new Date(props.publishedDate).toLocaleString(navigator.language, {
                  dateStyle: 'short'
                })}{' '}
              </>
            ) : (
              'Ongoing'
            )}
          </Typography>
        </CardContent>
        <CardActions>
          {props.projectLink && (
            <Button sx={{ width: '100%' }} endIcon={<OpenInNewIcon />} href={props.projectLink} target='_blank' variant='outlined'>
              View Project
            </Button>
          )}
          {props.sourceCodeLink && (
            <Button sx={{ width: '100%' }} endIcon={<GitHubIcon />} href={props.sourceCodeLink} target='_blank' variant='outlined'>
              Source Code
            </Button>
          )}
        </CardActions>
      </Card>
      {/* ) : ( */}
      {/* <> */}
      <ProjectCardSkeleton
        imageURL={imageURL}
        display={props.localImage || (lookedForImage && (imageLoaded || !hasImage)) ? 'none' : 'block'}
      />
      {/* {imageURL && (
        <img
          src={imageURL}
          onLoad={() => {
            setImageLoaded(true);
          }}
          style={{ display: 'none' }}
        />
      )} */}
      {/* </> */}
      {/* )} */}
    </>
  );
}

ProjectCard.propTypes = {
  imageName: PropTypes.string,
  id: PropTypes.string,
  localImage: PropTypes.bool,
  localImageURL: PropTypes.string,
  title: PropTypes.string,
  contributors: PropTypes.arrayOf(PropTypes.string),
  description: PropTypes.string,
  manager: PropTypes.string,
  projectLink: PropTypes.string,
  publishedDate: PropTypes.string,
  sourceCodeLink: PropTypes.string
};

export default ProjectCard;
