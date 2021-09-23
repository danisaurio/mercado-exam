import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';

export default function BreadcrumbsML() {
  return (
    <Stack spacing={2}>
      <Breadcrumbs separator="›" aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="#">
            Home
        </Link>
        <Link underline="hover" color="inherit" href="#">
            Catalog
        </Link>
        <Link underline="hover" color="inherit" href="#">
            Accessories
        </Link>
        <Link underline="hover" color="inherit" href="#">
            New Collection
        </Link>
      </Breadcrumbs>
    </Stack>
  );
}
