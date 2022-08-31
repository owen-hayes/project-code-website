import { yupResolver } from '@hookform/resolvers/yup';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import ClearIcon from '@mui/icons-material/Clear';
import UploadIcon from '@mui/icons-material/Upload';
import {
  Alert,
  Button,
  Container,
  Grid,
  IconButton,
  Snackbar,
  // Input,
  Stack,
  TextField,
  Typography
} from '@mui/material';
import { Box } from '@mui/system';
import { getDatabase, ref, set } from 'firebase/database';
import { getStorage, ref as sRef, uploadBytes } from 'firebase/storage';
import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';
import * as yup from 'yup';
import BasicDatePicker from './BasicDatePicker';
import FormField from './FormField';
import ProjectCard from './ProjectCard';
import ProjectCardSkeleton from './ProjectCardSkeleton';

const schema = yup
  .object({
    title: yup.string().required(),
    description: yup.string().required(),
    sourceCodeLink: yup.string(),
    projectLink: yup.string()
    // age: yup.number().positive().integer().required(),
  })
  .required();

function UploadProject() {
  const [localImageURL, setLocalImageURL] = useState();
  const [submitMessageAlert, setSubmitMessageAlert] = useState(undefined);
  const [uploadInProgress, setUploadInProgress] = useState(false);

  // const { control, handleSubmit } = useForm({
  //   defaultValues: {
  //     firstName: '',
  //     select: {},
  //   },
  // });
  // const onSubmit = (data) => console.log(data);

  const { register, control, watch, handleSubmit, reset, setValue, resetField } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      imageName: '',
      title: '',
      manager: '',
      description: '',
      sourceCodeLink: '',
      projectLink: '',
      publishedDate: ''
    }
  });

  const watchAllFields = watch();

  const successfullyUploaded = () => {
    reset();
    resetField('files');
    setValue('publishedDate', '');
    setSubmitMessageAlert({
      severity: 'success',
      message: 'Uploaded project to gallery.'
    });
    setUploadInProgress(false);
  };

  const onSubmit = (data) => {
    setUploadInProgress(true);
    // setLocalImageURL();
    console.log(data);
    // console.log(data.files[0]);
    const db = getDatabase();
    const id = uuidv4();
    console.log(id);

    const storage = getStorage();
    const storageRef = sRef(storage, `project-images/${id}`);

    let thingsToSubmit = { ...data };
    delete thingsToSubmit.files;

    set(ref(db, 'projects/' + id), {
      ...thingsToSubmit,
      imageName: id,
      publishedDate: data.publishedDate ? data.publishedDate.toISOString() : ''
    })
      .then(() => {
        console.log('success');

        // If no images, reset
        if (data.files === undefined || data.files.length === 0) {
          successfullyUploaded();
          return;
        }

        // If image is present, upload it to database
        uploadBytes(storageRef, data.files[0])
          .then(() => {
            successfullyUploaded();
          })
          .catch((error) => {
            setSubmitMessageAlert({
              severity: 'error',
              message: `Error uploading project: ${error.code}`
            });
          });
      })
      .catch((error) => {
        setSubmitMessageAlert({
          severity: 'error',
          message: `Error uploading project: ${error.code}`
        });
      });
  };

  // setLocalImageURL(URL.createObjectURL(watch('files')[0]));
  // useEffect(() => {
  //   console.log('image uploadthingy');
  //   // console.log(watch('files'));
  //   if (!watch('files')) {
  //     setLocalImageURL(URL.revokeObjectURL(localImageURL));
  //     return;
  //   }
  //   if (watch('files')[0]) {
  //     setLocalImageURL(URL.createObjectURL(watch('files')[0]));
  //   }
  // }, [watch('files')]);
  // setLocalImageURL();

  // if (watch('files') && watch('files')[0]) {
  //   console.log('nothing here');
  //   // console.log(watch('files')[0]);
  //   setLocalImageURL(URL.createObjectURL(watch('files')[0]));
  // }

  useEffect(() => {
    const subscription = watch((data) => {
      const files = data.files;
      if (!files) {
        setLocalImageURL(URL.revokeObjectURL(localImageURL));
        return;
      }
      if (files[0]) {
        setLocalImageURL(URL.createObjectURL(files[0]));
      }
    });
    return () => {
      subscription.unsubscribe();
    };
  }, [watch]);

  return (
    <Container sx={{ pt: 2 }}>
      <Typography variant='h3' fontWeight='bold' textAlign='center' mb={2}>
        Upload Project
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8} sm={6}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={2} alignItems='center'>
              <Box spacing={2}>
                {/* Add image button */}
                <Button variant='outlined' component='label' endIcon={<AddPhotoAlternateIcon />}>
                  Add Image
                  <input type='file' accept='image/*' {...register('files')} style={{ display: 'none' }} />
                </Button>

                {/* Reset button */}
                {localImageURL && (
                  <IconButton
                    onClick={() => {
                      resetField('files');
                    }}
                    size='small'
                    sx={{ ml: 1 }}
                  >
                    <ClearIcon />
                  </IconButton>
                )}
              </Box>

              <Controller
                name='title'
                control={control}
                render={({ field, fieldState }) => <FormField label='Title' field={field} fieldState={fieldState} required />}
              />

              <Controller
                name='manager'
                control={control}
                render={({ field, fieldState }) => <FormField label='Project Manager' field={field} fieldState={fieldState} required />}
              />

              <Controller
                name='description'
                control={control}
                render={({ field, fieldState }) => (
                  <TextField
                    variant='outlined'
                    label='Description'
                    fullWidth
                    {...field}
                    {...fieldState}
                    color='info'
                    multiline
                    placeholder='Describe your project here.'
                    margin='dense'
                    rows={4}
                    error={fieldState.error ? true : false}
                    required
                  />
                )}
              />

              <Controller
                name='publishedDate'
                control={control}
                render={({ field: { onChange, onBlur, value, name }, fieldState }) => (
                  <BasicDatePicker
                    variant='outlined'
                    label='Date Published (leave blank for ongoing)'
                    fullWidth
                    // forwardedRef={field.ref}
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                    name={name}
                    {...fieldState}
                    color='info'
                    rows={4}
                    error={fieldState.error ? true : false}
                  />
                )}
              />

              <Controller
                name='sourceCodeLink'
                control={control}
                render={({ field, fieldState }) => (
                  <FormField
                    label='Link to Source Code'
                    field={field}
                    fieldState={fieldState}
                    placeholder='https://github.com/owen-hayes/project-code-website'
                  />
                )}
              />

              <Controller
                name='projectLink'
                control={control}
                render={({ field, fieldState }) => (
                  <FormField label='Link to Project' field={field} fieldState={fieldState} placeholder='https://owenhay.es' />
                )}
              />

              <Button type='submit' variant='contained' size='large' endIcon={<UploadIcon />} disabled={uploadInProgress ? true : false}>
                Upload to Gallery
              </Button>
            </Stack>
          </form>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Typography variant='h5' align='center' sx={{ mb: 1.5 }}>
            Gallery Preview
          </Typography>

          {/* Display a ProjectCard if at least 1 field is not empty; otherwise, display a skeleton */}
          {Object.keys(watchAllFields).some((field) => {
            {
              /* Make sure at least one field is filled. JS treats an empty FileList as true, so override
              it so that the files list doesn't count as filled unless a file has been uploaded. */
            }
            if (field !== 'files') {
              return watchAllFields[field];
            }
            if (watchAllFields[field] && watchAllFields[field].length > 0) {
              return true;
            }
          }) ? (
            <ProjectCard
              // {...watchAllFields}
              title={watchAllFields.title}
              manager={watchAllFields.manager}
              description={watchAllFields.description}
              sourceCodeLink={watchAllFields.sourceCodeLink}
              projectLink={watchAllFields.projectLink}
              publishedDate={new Date(watchAllFields.publishedDate).getTime() ? new Date(watchAllFields.publishedDate).toISOString() : ''}
              localImageURL={localImageURL}
              localImage
            />
          ) : (
            <ProjectCardSkeleton animation={false} />
          )}
        </Grid>
      </Grid>
      <Snackbar
        open={submitMessageAlert === undefined ? false : true}
        autoHideDuration={5000}
        onClose={() => setSubmitMessageAlert(undefined)}
      >
        <Alert onClose={() => setSubmitMessageAlert(undefined)} severity={submitMessageAlert?.severity} sx={{ width: '100%' }}>
          {/* {userContext.user ? (*/}
          <>
            <Typography>{submitMessageAlert?.message}</Typography>
          </>
          {/* ) : (
            <Typography>Successfully signed out.</Typography>
          )} */}
        </Alert>
      </Snackbar>
    </Container>
  );
}

export default UploadProject;
