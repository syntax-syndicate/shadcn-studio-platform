// Next Imports
import type { Metadata } from 'next'
import { PlusCircle } from 'lucide-react'

// Component Imports
import { Button } from '@/components/ui/button'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { AlbumArtwork } from './components/AlbumArtwork'
import { Menu } from './components/Menu'
import { PodcastEmptyPlaceholder } from './components/PodcastEmptyPlaceholder'
import { Sidebar } from './components/Sidebar'
import { listenNowAlbums, madeForYouAlbums } from './data/Albums'
import { playlists } from './data/Playlists'

export const metadata: Metadata = {
  title: 'Music App',
  description: 'Example music app using the components.'
}

export default function MusicPage() {
  return (
    <>
      <div className='md:hidden'>Please use a desktop browser to view this example.</div>
      <div className='hidden overflow-hidden rounded-lg border shadow md:block'>
        <Menu />
        <div className='border-t'>
          <div className='bg-background'>
            <div className='grid lg:grid-cols-5'>
              <Sidebar playlists={playlists} className='hidden lg:block' />
              <div className='col-span-3 lg:col-span-4 lg:border-l'>
                <div className='h-full px-4 py-6 lg:px-8'>
                  <Tabs defaultValue='music' className='h-full space-y-6'>
                    <div className='space-between flex items-center'>
                      <TabsList>
                        <TabsTrigger value='music' className='relative'>
                          Music
                        </TabsTrigger>
                        <TabsTrigger value='podcasts'>Podcasts</TabsTrigger>
                        <TabsTrigger value='live' disabled>
                          Live
                        </TabsTrigger>
                      </TabsList>
                      <div className='mr-4 ml-auto'>
                        <Button>
                          <PlusCircle />
                          Add music
                        </Button>
                      </div>
                    </div>
                    <TabsContent value='music' className='border-none p-0 outline-none'>
                      <div className='flex items-center justify-between'>
                        <div className='space-y-1'>
                          <h2 className='text-2xl font-semibold tracking-tight'>Listen Now</h2>
                          <p className='text-muted-foreground text-sm'>Top picks for you. Updated daily.</p>
                        </div>
                      </div>
                      <Separator className='my-4' />
                      <div className='relative'>
                        <ScrollArea>
                          <div className='flex space-x-4 pb-4'>
                            {listenNowAlbums.map(album => (
                              <AlbumArtwork
                                key={album.name}
                                album={album}
                                className='w-[250px]'
                                aspectRatio='portrait'
                                width={250}
                                height={330}
                              />
                            ))}
                          </div>
                          <ScrollBar orientation='horizontal' />
                        </ScrollArea>
                      </div>
                      <div className='mt-6 space-y-1'>
                        <h2 className='text-2xl font-semibold tracking-tight'>Made for You</h2>
                        <p className='text-muted-foreground text-sm'>Your personal playlists. Updated daily.</p>
                      </div>
                      <Separator className='my-4' />
                      <div className='relative'>
                        <ScrollArea>
                          <div className='flex space-x-4 pb-4'>
                            {madeForYouAlbums.map(album => (
                              <AlbumArtwork
                                key={album.name}
                                album={album}
                                className='w-[150px]'
                                aspectRatio='square'
                                width={150}
                                height={150}
                              />
                            ))}
                          </div>
                          <ScrollBar orientation='horizontal' />
                        </ScrollArea>
                      </div>
                    </TabsContent>
                    <TabsContent value='podcasts' className='h-full flex-col border-none p-0 data-[state=active]:flex'>
                      <div className='flex items-center justify-between'>
                        <div className='space-y-1'>
                          <h2 className='text-2xl font-semibold tracking-tight'>New Episodes</h2>
                          <p className='text-muted-foreground text-sm'>Your favorite podcasts. Updated daily.</p>
                        </div>
                      </div>
                      <Separator className='my-4' />
                      <PodcastEmptyPlaceholder />
                    </TabsContent>
                  </Tabs>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
