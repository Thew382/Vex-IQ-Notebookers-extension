import { ChevronLeft, GripVertical } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function FolderView({ piece, onBack }) {
  return (
    <section className="w-[93%] mx-auto mt-4 space-y-3 pb-0 font-geist" aria-labelledby="piece-folder-title">
      <Button style={{ marginBottom: '4px' }} type="button" variant="link" onClick={onBack} className="group h-8 cursor-pointer justify-start gap-1 rounded-md border-0 bg-transparent p-0 text-[15px] font-medium text-zinc-400 hover:bg-transparent hover:text-zinc-100 hover:no-underline focus-visible:ring-2 focus-visible:ring-zinc-500 focus-visible:ring-offset-4 focus-visible:ring-offset-[#0E0F12]">
        <ChevronLeft aria-hidden="true" className=" relative -top-px size-4.5 transition-transform group-hover:-translate-x-0.5 motion-reduce:transition-none" />
        All pieces
      </Button>

      <div className="space-y-1.5">
        <h2 id="piece-folder-title" className="break-words text-[22px] font-semibold leading-tight tracking-tight text-zinc-100">{piece.label}</h2>
        <p className="text-xs leading-relaxed text-zinc-400">Drag an image onto your Canva slide.</p>
      </div>

      <div className="grid grid-cols-2 gap-x-3 gap-y-5">
        {piece.images.map((image, index) => (
          <figure key={image.path} className="group min-w-0">
            <div className="relative flex h-36 items-center justify-center rounded-xl border border-white/[0.06] bg-[#191A20] p-4 transition-colors group-hover:border-white/15 group-hover:bg-[#22232B] motion-reduce:transition-none">
              <GripVertical aria-hidden="true" className="pointer-events-none absolute right-2 top-2 size-3.5 text-zinc-500 opacity-0 transition-opacity group-hover:opacity-100 motion-reduce:transition-none" />
              <img src={'./parts/' + image.path} alt={`${piece.label}, image ${index + 1}`} draggable={true} className="h-auto w-auto max-h-full max-w-full cursor-grab object-contain active:cursor-grabbing" />
            </div>
            <figcaption className="mt-2 px-1 text-[11px] font-medium leading-4 text-zinc-500">Image {String(index + 1).padStart(2, '0')}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
