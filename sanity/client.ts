'use client'
import  imageUrlBuilder  from '@sanity/image-url';
// import "server-only";

import { createClient, type QueryParams } from "next-sanity";

export const client = createClient({
  projectId: "yp7c97qd",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});

export async function sanityFetch<QueryResponse>({
  query,
  params = {},
  tags,
}: {
  query: string;
  params?: QueryParams;
  tags?: string[];
}) {
  return client.fetch<QueryResponse>(query, params, {
    next: {
      revalidate: process.env.NODE_ENV === 'development' ? 30 : 3600,
      tags,
    },
  });
}



const builder=imageUrlBuilder(client);

export function urlFor(source:any){
  return builder.image(source);
}