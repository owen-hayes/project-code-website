import React from 'react';
import { Card, CardContent, CardMedia, Skeleton } from '@mui/material';
import PropTypes from 'prop-types';

function ProjectCardSkeleton(props) {
  return (
    <Card sx={{ display: props.display }}>
      <CardMedia component='div'>
        <Skeleton variant='rectangular' animation={props.animation} height={200} />
      </CardMedia>
      <CardContent>
        <Skeleton variant='h4' animation={props.animation} sx={{ mb: 2 }} />
        <Skeleton variant='h6' animation={props.animation} sx={{ mb: 2 }} />
        <Skeleton variant='subtitle' animation={props.animation} sx={{ mb: 2 }} />
        <Skeleton variant='body1' animation={props.animation} sx={{ mb: 2 }} />
      </CardContent>
    </Card>
  );
}

ProjectCardSkeleton.propTypes = {
  display: PropTypes.string,
  animation: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  imageURL: PropTypes.string
  // setImageLoaded: PropTypes.func,
};

ProjectCardSkeleton.defaultProps = {
  display: 'block',
  animation: 'wave'
};

export default ProjectCardSkeleton;
