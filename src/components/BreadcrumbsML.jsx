import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import { useEffect } from 'react';
import { useState } from 'react';

export default function BreadcrumbsML({ results, details }) {
  let [storage] = useState(localStorage.getItem("mainCategory"));
  let [mainCategory, setMainCategory] = useState("");
  useEffect(()=>{
    setMainCategory(results !== undefined ? results : storage)
  }, [results, details, storage])


  return (
    <Stack spacing={3}>
      <Breadcrumbs separator="›" maxItems={4} aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href='/'>
            Inicio
        </Link>
        {
          mainCategory !== "" ? (
            <Link underline="hover" component="a" color="inherit" href={`/items?search=${encodeURIComponent(mainCategory)}`}>
              {mainCategory}
            </Link>
          ) : null
        }
        {
          details ? (
            <Link underline="hover" color="inherit" href={`/items?search=${encodeURIComponent(details)}`}>
              {details}
            </Link>
          ) : null
        }
      </Breadcrumbs>
    </Stack>
  );
}
