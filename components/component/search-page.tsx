"use client"

import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';

export function SearchPageComponent() {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const handleInputChange = (event: any) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = (event: any) => {
    event.preventDefault();
    if (searchQuery.trim() !== '') {
      router.push(`/${searchQuery}`);
    }
  };

  const params = useParams();
  const searchkey = params?.searchkey;

  return (
    <div className=" relative flex flex-col md:flex-row w-full min-h-screen bg-black py-28">
      <div className="flex-1 p-6">
        <div className="flex items-center gap-2 mb-6">
          <Link href="/" className="inline-flex items-center gap-2 text-lg font-semibold" prefetch={false}>
            <ArrowLeftIcon className="w-5 h-5" />
          </Link>
          <form onSubmit={handleSearch} className="flex-1 relative">
            <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search trips..."
              className="pl-8 w-full"
              value={searchQuery}
              onChange={handleInputChange}
            />
          </form>
        </div>
        <div className="pt-8 pb-4 text-xl">
          <h1> Results for : {' '}  <span className="font-mono">{searchkey}</span></h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <Card>
            <Image
              src="/placeholder.svg"
              alt="Trip Image"
              width={300}
              height={200}
              className="rounded-t-lg object-cover w-full aspect-[3/2]"
            />
            <CardContent className="p-4">
              <h3 className="text-lg font-medium">Tropical Beach Getaway</h3>
              <p className="text-sm text-muted-foreground">Relax on the white sand beaches of Bali</p>
            </CardContent>
          </Card>
          <Card>
            <Image
              src="/placeholder.svg"
              alt="Trip Image"
              width={300}
              height={200}
              className="rounded-t-lg object-cover w-full aspect-[3/2]"
            />
            <CardContent className="p-4">
              <h3 className="text-lg font-medium">Majestic Mountain Retreat</h3>
              <p className="text-sm text-muted-foreground">Hike through the stunning Swiss Alps</p>
            </CardContent>
          </Card>
          <Card>
            <Image
              src="/placeholder.svg"
              alt="Trip Image"
              width={300}
              height={200}
              className="rounded-t-lg object-cover w-full aspect-[3/2]"
            />
            <CardContent className="p-4">
              <h3 className="text-lg font-medium">Culinary Adventure in Italy</h3>
              <p className="text-sm text-muted-foreground">Indulge in the flavors of Rome and Tuscany</p>
            </CardContent>
          </Card>
          <Card>
            <Image
              src="/placeholder.svg"
              alt="Trip Image"
              width={300}
              height={200}
              className="rounded-t-lg object-cover w-full aspect-[3/2]"
            />
            <CardContent className="p-4">
              <h3 className="text-lg font-medium">Enchanting European Escape</h3>
              <p className="text-sm text-muted-foreground">Explore the historic cities of Paris and London</p>
            </CardContent>
          </Card>
          <Card>
            <Image
              src="/placeholder.svg"
              alt="Trip Image"
              width={300}
              height={200}
              className="rounded-t-lg object-cover w-full aspect-[3/2]"
            />
            <CardContent className="p-4">
              <h3 className="text-lg font-medium">Serene Scandinavian Sojourn</h3>
              <p className="text-sm text-muted-foreground">Immerse yourself in the natural beauty of Norway</p>
            </CardContent>
          </Card>
          <Card>
            <Image
              src="/placeholder.svg"
              alt="Trip Image"
              width={300}
              height={200}
              className="rounded-t-lg object-cover w-full aspect-[3/2]"
            />
            <CardContent className="p-4">
              <h3 className="text-lg font-medium">Vibrant Vistas of Vietnam</h3>
              <p className="text-sm text-muted-foreground">
                Discover the rich culture and stunning landscapes of Vietnam
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
      <aside className="sticky top-0 bg-background border-l p-6 hidden md:block w-64 shrink-0">
        <div className="space-y-6">
          <div>
            <h3 className="text-sm font-medium mb-2">Explore More Trips</h3>
            <div className="grid gap-4">
              <Link href="#" className="flex items-center gap-4" prefetch={false}>
                <Image src="/placeholder.svg" alt="Trip Image" width={64} height={64} className="rounded-lg" />
                <div>
                  <h4 className="text-sm font-medium">Tropical Beach Getaway</h4>
                  <p className="text-xs text-muted-foreground">Relax on the white sand beaches of Bali</p>
                </div>
              </Link>
              <Link href="#" className="flex items-center gap-4" prefetch={false}>
                <Image src="/placeholder.svg" alt="Trip Image" width={64} height={64} className="rounded-lg" />
                <div>
                  <h4 className="text-sm font-medium">Majestic Mountain Retreat</h4>
                  <p className="text-xs text-muted-foreground">Hike through the stunning Swiss Alps</p>
                </div>
              </Link>
              <Link href="#" className="flex items-center gap-4" prefetch={false}>
                <Image src="/placeholder.svg" alt="Trip Image" width={64} height={64} className="rounded-lg" />
                <div>
                  <h4 className="text-sm font-medium">Culinary Adventure in Italy</h4>
                  <p className="text-xs text-muted-foreground">Indulge in the flavors of Rome and Tuscany</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </aside>
    </div>
  )
}

function ArrowLeftIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  )
}


function SearchIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}


function XIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}
